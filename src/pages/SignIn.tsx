import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import apple from '../assets/ui/apple.png';
import google from '../assets/ui/google.png';
import microsoft from '../assets/ui/microsoft.png';
import slack from '../assets/ui/slack.png';
import { AuthLayout } from '../components/AuthLayout';
import { Button, Checkbox, TextField } from '../components/ui';
import { useApp } from '../state/store';

const PROVIDERS = [
  { name: 'Microsoft', img: microsoft },
  { name: 'Google', img: google },
  { name: 'Apple', img: apple },
  { name: 'Slack', img: slack },
];

export default function SignIn() {
  const { state, signIn } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  if (state.email) return <Navigate to={state.onboarded ? '/dashboard' : '/onboarding'} replace />;

  const finish = (who: string) => {
    signIn(who);
    navigate(state.onboarded ? '/dashboard' : '/onboarding', { replace: true });
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Enter a valid email address.');
    finish(email);
  };

  return (
    <AuthLayout title="Sign in" translucent>
      <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:gap-16 lg:px-6">
        <div>
          <form onSubmit={submit} noValidate className="space-y-4">
            <TextField label="Email" type="email" autoComplete="username" autoFocus value={email} error={error} onChange={(e) => { setEmail(e.target.value); setError(''); }} />
            <Checkbox label="Remember on this device" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="!text-primary" />
            <Button variant="filled" type="submit">Continue</Button>
          </form>
          <hr className="my-6 border-line" />
          <p className="mb-4 text-base text-white">Or sign in with</p>
          <ul className="flex gap-6">
            {PROVIDERS.map((p) => (
              <li key={p.name}>
                <button type="button" onClick={() => finish(`${p.name.toLowerCase()}.user@acme.com`)} className="flex w-16 flex-col items-center gap-1 rounded-lg py-1 text-xs text-white hover:bg-white/10">
                  <img src={p.img} alt="" className="size-8 object-contain" />
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 font-body text-base leading-8 text-white">
          <p>
            While Arqui is a powerful tool for analysing your organisation, it's crucial to remember its limitations. Just like any AI, we learn and grow based on the information you provide. This means that the quality and completeness of your data directly impact the reliability of our insights. Think of it as garbage in, garbage out. Additionally, our AI models, like all models, have inherent biases and limitations. This can lead to unexpected or skewed results, highlighting the importance of critically challenging our output and exploring alternative interpretations.
          </p>
          <p>
            The future is inherently uncertain, and even the most sophisticated simulations can't offer guarantees. Remember, Arqui is here to empower your decision-making, not replace your expertise. We provide you with data-driven scenarios, but it's your knowledge and intuition that ultimately steer your organisation towards success. By refining your data, questioning our results, and leveraging your own experience, you can transform Arqui into a powerful partner in building organisational brilliance, one insightful step at a time.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
