import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Shell';
import { Button, Checkbox, Select, TextArea, TextField } from '../components/ui';
import { THEMES } from '../data/seed';
import { useApp } from '../state/store';

const DEPARTMENTS = ['Finance', 'Operations', 'Technology', 'People and culture', 'Strategy', 'Customer service', 'Risk and compliance'];

export default function Onboarding() {
  const { state, saveProfile } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [p, setP] = useState(state.profile);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0) {
      const err: Record<string, string> = {};
      if (!p.name.trim()) err.name = 'Enter your name.';
      if (!p.department) err.department = 'Choose a department.';
      setErrors(err);
      if (Object.keys(err).length) return;
      saveProfile(p);
      return setStep(1);
    }
    if (!p.jobTitle.trim()) return setErrors({ jobTitle: 'Enter your job title.' });
    saveProfile(p, true);
    navigate('/dashboard', { replace: true });
  };
  const toggle = (t: string) => setP({ ...p, interests: p.interests.includes(t) ? p.interests.filter((x) => x !== t) : [...p.interests, t] });

  return (
    <main className="flex min-h-dvh items-center justify-center bg-canvas p-4">
      <div className="w-full max-w-xl rounded-3xl bg-panel p-8 shadow-2xl">
        <Logo />
        <p className="mt-6 text-xs uppercase tracking-wide text-muted">Step {step + 1} of 2</p>
        <h1 className="text-2xl text-white">{step === 0 ? 'About you' : 'Your role'}</h1>
        <form onSubmit={next} className="mt-6 space-y-4" noValidate>
          {step === 0 ? (
            <>
              <TextField label="Full name" autoComplete="name" autoFocus value={p.name} error={errors.name} onChange={(e) => setP({ ...p, name: e.target.value })} />
              <div>
                <Select label="Department" options={DEPARTMENTS} value={p.department} onChange={(e) => setP({ ...p, department: e.target.value })} />
                {errors.department && <p role="alert" className="mt-1 px-4 text-xs text-[#f2b8b5]">{errors.department}</p>}
              </div>
            </>
          ) : (
            <>
              <TextField label="Job title" autoFocus value={p.jobTitle} error={errors.jobTitle} onChange={(e) => setP({ ...p, jobTitle: e.target.value })} />
              <fieldset>
                <legend className="mb-1 text-sm text-muted">Which themes matter most to you?</legend>
                <div className="grid gap-x-4 sm:grid-cols-2">
                  {[...THEMES, ...state.customThemes].map((t) => <Checkbox key={t} label={t} checked={p.interests.includes(t)} onChange={() => toggle(t)} />)}
                </div>
              </fieldset>
              <TextArea label="Anything else Arqui should know about your role? (optional)" value={p.roleNotes} onChange={(e) => setP({ ...p, roleNotes: e.target.value })} />
            </>
          )}
          <div className="flex items-center justify-between pt-2">
            {step === 1 ? <Button variant="text" onClick={() => setStep(0)}>Back</Button> : <span />}
            <Button variant="filled" type="submit">{step === 0 ? 'Next' : 'Finish'}</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
