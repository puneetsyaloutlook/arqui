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
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('The email address is not valid. Enter it as name@example.com.');
    finish(email);
  };

  return (
    <AuthLayout title="Sign in">
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <form onSubmit={submit} noValidate className="space-y-4">
            <TextField label="Email" type="email" autoComplete="username" autoFocus value={email} error={error} onChange={(e) => { setEmail(e.target.value); setError(''); }} />
            <Checkbox label="Remember on this device" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <Button variant="primary" type="submit">Continue</Button>
          </form>
          <hr className="my-6 border-line" />
          <h2 className="t-h3 mb-3">Or sign in with</h2>
          <ul className="grid grid-cols-2 gap-2">
            {PROVIDERS.map((p) => (
              <li key={p.name}>
                <Button className="w-full" onClick={() => finish(`${p.name.toLowerCase()}.user@acme.com`)}>
                  <img src={p.img} alt="" className="size-5 object-contain" /> {p.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[62ch] space-y-4 text-base text-fg-3">
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
