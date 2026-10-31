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
    if (!p.name.trim()) err.name = 'Enter your name.';
    if (!p.department) err.department = 'Choose your department or group.';
    if (!p.jobTitle) err.jobTitle = 'Choose your job title.';
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
        <form onSubmit={saveAbout} noValidate className="mt-8 font-body">
          <p className="text-base text-white">To provide the most relevant insights, we'll need some information about you and your role at Acme:</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,350px)_minmax(0,1fr)] lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-[28px] text-white">About you</h2>
              <TextField label="Your name" autoComplete="name" autoFocus value={p.name} error={errors.name} onChange={(e) => set({ name: e.target.value })} />
              <div>
                <Select label="Your department/group" options={DEPARTMENTS} value={p.department} onChange={(e) => set({ department: e.target.value })} />
                {errors.department && <p role="alert" className="mt-1 px-4 text-xs text-[#f2b8b5]">{errors.department}</p>}
              </div>
              <div>
                <Select label="Your job title" options={JOB_TITLES} value={p.jobTitle} onChange={(e) => set({ jobTitle: e.target.value })} />
                {errors.jobTitle && <p role="alert" className="mt-1 px-4 text-xs text-[#f2b8b5]">{errors.jobTitle}</p>}
              </div>
              <Button variant="filled" type="submit">Save</Button>
            </div>
            <fieldset>
              <legend className="mb-4 text-[28px] text-white">Areas of interest</legend>
              <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {INTERESTS.map((t) => <Checkbox key={t} label={t} checked={p.interests.includes(t)} onChange={() => toggle(t)} className="!text-white" />)}
              </div>
            </fieldset>
          </div>
        </form>
      ) : (
        <form onSubmit={saveRole} className="mt-8 font-body">
          <h2 className="text-[28px] text-white">Your role</h2>
          <p className="mt-4 max-w-[58rem] text-base leading-7 text-white">
            Based on the information you entered, this is what Arqui understands about your role. Is this understanding of your role accurate? Please edit or provide further details about your specific responsibilities and areas of focus within the {p.jobTitle} role at Acme.
          </p>
          {thinking ? (
            <div role="status" className="mt-6 flex h-72 items-center justify-center rounded-lg bg-[#222] text-base text-muted">Arqui is working out what your role involves...</div>
          ) : (
            <>
              <label htmlFor="role-desc" className="sr-only">Role description</label>
              <textarea id="role-desc" value={desc} onChange={(e) => setDesc(e.target.value)} rows={12} className="mt-6 w-full resize-y rounded-lg bg-[#222] p-3 text-[15px] leading-6 text-white outline-none focus:ring-2 focus:ring-primary" />
            </>
          )}
          <div className="mt-6 flex gap-2">
            <Button variant="text" onClick={() => setStep('about')} disabled={thinking}>Back</Button>
            <Button variant="filled" type="submit" disabled={thinking || !desc.trim()}>Save</Button>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
