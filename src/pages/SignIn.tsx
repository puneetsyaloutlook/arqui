import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import bg from '../assets/ui/bg.jpg';
import apple from '../assets/ui/apple.png';
import google from '../assets/ui/google.png';
import microsoft from '../assets/ui/microsoft.png';
import slack from '../assets/ui/slack.png';
import { Logo } from '../components/Shell';
import { Button, Checkbox, TextField } from '../components/ui';
import { useApp } from '../state/store';

export default function SignIn() {
  const { state, signIn } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');

  if (state.email) return <Navigate to={state.onboarded ? '/dashboard' : '/onboarding'} replace />;

  const finish = (who: string) => {
    signIn(who);
    navigate(state.onboarded ? '/dashboard' : '/onboarding', { replace: true });
  };
  const next = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'email') {
      if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Enter a valid email address.');
      setError('');
      return setStep('password');
    }
    if (password.length < 4) return setError('Enter your password (at least 4 characters in this demo).');
    finish(email);
  };

  const providers = [
    { name: 'Microsoft', img: microsoft },
    { name: 'Google', img: google },
    { name: 'Apple', img: apple },
    { name: 'Slack', img: slack },
  ];

  return (
    <main className="relative flex min-h-dvh items-center justify-center bg-canvas bg-cover bg-center p-4" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="relative w-full max-w-md rounded-3xl bg-panel/95 p-8 shadow-2xl backdrop-blur">
        <Logo className="block text-center" />
        <h1 className="mt-6 text-2xl text-white">Sign in</h1>
        <p className="mt-1 text-sm text-muted">{step === 'email' ? 'Use your work email to continue.' : `Signing in as ${email}`}</p>
        <form onSubmit={next} className="mt-6 space-y-4" noValidate>
          {step === 'email' ? (
            <TextField label="Email" type="email" autoComplete="username" autoFocus value={email} error={error} onChange={(e) => { setEmail(e.target.value); setError(''); }} />
          ) : (
            <TextField label="Password" type="password" autoComplete="current-password" autoFocus value={password} error={error} onChange={(e) => { setPassword(e.target.value); setError(''); }} />
          )}
          {step === 'password' && <Checkbox label="Remember this device" checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
          <div className="flex items-center justify-between gap-2">
            {step === 'password' ? <Button variant="text" onClick={() => { setStep('email'); setError(''); }}>Back</Button> : <span />}
            <Button variant="filled" type="submit">{step === 'email' ? 'Next' : 'Sign in'}</Button>
          </div>
        </form>
        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wide text-muted">
          <span className="h-px flex-1 bg-line" /> or continue with <span className="h-px flex-1 bg-line" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {providers.map((p) => (
            <Button key={p.name} onClick={() => finish(`${p.name.toLowerCase()}.user@example.com`)} className="!text-ink">
              <img src={p.img} alt="" className="size-5 object-contain" /> {p.name}
            </Button>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">Demo only. No server is used, and any valid-looking email works.</p>
      </div>
    </main>
  );
}
