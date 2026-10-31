import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { Button, Checkbox, Select, TextField } from '../components/ui';
import { DEPARTMENTS, INTERESTS, JOB_TITLES, describeRole } from '../data/roles';
import { useApp } from '../state/store';

export default function Onboarding() {
  const { state, saveProfile } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState<'about' | 'role'>('about');
  const [p, setP] = useState(state.profile);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [thinking, setThinking] = useState(false);
  const [desc, setDesc] = useState(state.profile.roleNotes);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const set = (patch: Partial<typeof p>) => { setP({ ...p, ...patch }); setErrors({}); };
  const toggle = (t: string) => setP({ ...p, interests: p.interests.includes(t) ? p.interests.filter((x) => x !== t) : [...p.interests, t] });

  const saveAbout = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!p.name.trim()) err.name = 'Your name is missing. Enter your full name.';
    if (!p.department) err.department = 'Your department is missing. Choose one from the list.';
    if (!p.jobTitle) err.jobTitle = 'Your job title is missing. Choose one from the list.';
    setErrors(err);
    if (Object.keys(err).length) return;
    saveProfile(p);
    setThinking(true);
    setStep('role');
    timer.current = window.setTimeout(() => {
      setDesc(describeRole(p.jobTitle, p.department));
      setThinking(false);
    }, 1400);
  };
  const saveRole = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfile({ ...p, roleNotes: desc }, true);
    navigate('/dashboard', { replace: true });
  };

  return (
    <AuthLayout title="Before we start">
      {step === 'about' ? (
        <form onSubmit={saveAbout} noValidate className="mt-6">
          <p className="max-w-[62ch] text-base text-fg-3">To provide the most relevant insights, we'll need some information about you and your role at Acme:</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,350px)_minmax(0,1fr)] lg:gap-16">
            <div className="space-y-4">
              <h2 className="t-h2">About you</h2>
              <TextField label="Your name" autoComplete="name" autoFocus value={p.name} error={errors.name} onChange={(e) => set({ name: e.target.value })} />
              <Select label="Your department or group" options={DEPARTMENTS} value={p.department} error={errors.department} onChange={(e) => set({ department: e.target.value })} />
              <Select label="Your job title" options={JOB_TITLES} value={p.jobTitle} error={errors.jobTitle} onChange={(e) => set({ jobTitle: e.target.value })} />
              <Button variant="primary" type="submit">Save about you</Button>
            </div>
            <fieldset>
              <legend className="t-h2 mb-4">Areas of interest</legend>
              <div className="grid gap-x-6 sm:grid-cols-2">
                {INTERESTS.map((t) => <Checkbox key={t} label={t} checked={p.interests.includes(t)} onChange={() => toggle(t)} />)}
              </div>
            </fieldset>
          </div>
        </form>
      ) : (
        <form onSubmit={saveRole} className="mt-6">
          <h2 className="t-h2">Your role</h2>
          <p className="mt-3 max-w-[62ch] text-base text-fg-3">
            Based on the information you entered, this is what Arqui understands about your role. Is this understanding of your role accurate? Please edit or provide further details about your specific responsibilities and areas of focus within the {p.jobTitle} role at Acme.
          </p>
          {thinking ? (
            <div role="status" className="mt-6 flex h-72 items-center justify-center rounded-card border border-dashed border-control bg-quiet text-base text-fg-2">Arqui is working out what your role involves.</div>
          ) : (
            <>
              <label htmlFor="role-desc" className="t-label mb-1 mt-6 block">Role description</label>
              <textarea id="role-desc" value={desc} onChange={(e) => setDesc(e.target.value)} rows={12} className="w-full resize-y rounded-ctl border border-control bg-page p-3 text-base text-fg hover:border-fg-2 focus:border-action focus:shadow-[0_0_0_1px_var(--action)] focus:outline-none" />
            </>
          )}
          <div className="mt-6 flex gap-2">
            <Button variant="tertiary" onClick={() => setStep('about')} disabled={thinking}>Back</Button>
            <Button variant="primary" type="submit" disabled={thinking || !desc.trim()}>Save role</Button>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
