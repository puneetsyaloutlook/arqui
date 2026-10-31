import { useEffect, useState, type ReactNode } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CircleHelp, LogOut, Moon, Sun, UserCircle, UsersRound } from 'lucide-react';
import build from '../../assets/admin/build.png';
import docs from '../../assets/admin/docs.png';
import model from '../../assets/admin/model.png';
import news from '../../assets/admin/news.png';
import testTwin from '../../assets/admin/test-twin.png';
import testInsights from '../../assets/admin/test-insights.png';
import publish from '../../assets/admin/publish.png';
import twin from '../../assets/admin/twin.png';
import { Logo } from '../../components/Shell';
import { Button, IconButton, Modal, TextField, Toast } from '../../components/ui';
import { STEPS } from '../../data/admin';
import { useApp } from '../../state/store';
import { useTheme } from '../../state/theme';

export const ICONS = { build, docs, model, news, 'test-twin': testTwin, 'test-insights': testInsights, publish, twin } as const;
export type IconName = keyof typeof ICONS;

/** Build icons are teal, test icons are gold and the publish icon is blue, so the stages read as groups. The images are recoloured at source. */
export const ICON_COLOUR: Record<string, string> = { build: '', test: '', publish: '' };

export function SpotIcon({ src, className = '' }: { src: string; className?: string }) {
  return <img src={src} alt="" aria-hidden className={`shrink-0 object-contain object-left ${className}`} />;
}

const TITLES: Record<string, string> = { '/admin': 'Admin home' };

export function PageHero({ step, title, icon, group, children, actions, back }: { step?: string; title: string; icon: IconName; group: 'build' | 'test' | 'publish'; children?: ReactNode; actions?: ReactNode; back?: boolean }) {
  const navigate = useNavigate();
  const [help, setHelp] = useState(false);
  return (
    <header className="rounded-card border border-line bg-quiet p-6">
      <div className="flex flex-wrap items-start gap-6">
        <div className="flex w-24 shrink-0 flex-col items-start gap-3">
          {step && <p className="t-small">{step}</p>}
          <SpotIcon src={ICONS[icon]} className={`h-20 w-20 ${ICON_COLOUR[group]}`} />
        </div>
        <div className="min-w-0 flex-1 basis-96">
          <h2 className="t-h1">{title}</h2>
          {children && <p className="t-deck mt-2 max-w-[62ch]">{children}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {back !== false && <Button onClick={() => navigate('/admin')}>Back to home</Button>}
            {actions}
            <Button variant="tertiary" className="ml-auto" onClick={() => setHelp(true)}><CircleHelp size={20} aria-hidden /> Get help</Button>
          </div>
        </div>
      </div>
      {help && <HelpModal onClose={() => setHelp(false)} />}
    </header>
  );
}

export function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="Get help" onClose={onClose}>
      <div className="space-y-3 text-base">
        <p>Work through the build steps in order, then test the digital twin and the insights before you publish.</p>
        <ul className="list-disc space-y-1 pl-6 text-fg-3">
          <li>Use Publish updates after any change to rebuild the digital twin.</li>
          <li>Version history shows what each upload or change did to the insights.</li>
        </ul>
        <p className="text-fg-2">Still stuck? Email support@arqui.example.</p>
      </div>
    </Modal>
  );
}

/** The rebuild dialog from the design: four inputs add up to the digital twin. */
export function PublishModal({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 2400);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <Modal title="Publishing update" onClose={onClose} wide>
      <p className="text-base text-fg-3">{done ? 'The digital twin has been rebuilt with your update.' : 'Arqui is now rebuilding the digital twin to incorporate the update.'}</p>
      <div className="flex flex-wrap items-center gap-3 py-4" aria-hidden>
        {(['build', 'docs', 'model', 'news'] as const).map((k, i) => (
          <span key={k} className="flex items-center gap-3">
            {i > 0 && <span className="text-xl text-fg-2">+</span>}
            <SpotIcon src={ICONS[k]} className="h-16 w-16" />
          </span>
        ))}
        <span className="text-xl text-fg-2">=</span>
        <SpotIcon src={ICONS.twin} className={`h-16 w-16 ${done ? '' : 'opacity-40'}`} />
      </div>
      <div className="flex items-center gap-3">
        <Button variant="primary" disabled={!done} onClick={onClose}>Done</Button>
        {!done && <span role="status" className="t-small text-fg-2">Rebuilding</span>}
      </div>
    </Modal>
  );
}

export function useAdminTitle() {
  const { pathname } = useLocation();
  const step = STEPS.find((s) => pathname === `/admin/${s.path}`);
  return step ? step.title : TITLES[pathname] ?? 'Admin';
}

export default function AdminShell() {
  const { state, signOut, toast, toastMsg, setAdmin } = useApp();
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();
  const [users, setUsers] = useState(false);
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => { document.title = 'Admin | Arqui'; }, []);

  return (
    <div className="min-h-dvh bg-page">
      <div className="sticky top-0 z-[25] border-b border-line bg-nav text-neutral-100">
        <div className="mx-auto flex min-h-16 w-full max-w-[1600px] items-center gap-3 px-6">
          <Link to="/admin" aria-label="Arqui admin home"><Logo className="text-inverse" /></Link>
          <span className="t-caption !text-neutral-100">Admin</span>
          <div className="ml-auto flex items-center gap-1">
            <IconButton label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggle} className="text-neutral-100 hover:!bg-white/10">{dark ? <Sun size={20} /> : <Moon size={20} />}</IconButton>
            <IconButton label="Account" onClick={() => toast(`Signed in as ${state.email ?? 'admin'}`)} className="text-neutral-100 hover:!bg-white/10"><UserCircle size={24} /></IconButton>
            <IconButton label="Sign out" onClick={() => { signOut(); navigate('/signin'); }} className="text-neutral-100 hover:!bg-white/10"><LogOut size={20} /></IconButton>
          </div>
        </div>
      </div>
      <main className="mx-auto w-full max-w-[1600px] px-6 py-6">
        <Outlet context={{ openUsers: () => setUsers(true) }} />
      </main>
      {users && (
        <Modal title="Manage users" onClose={() => setUsers(false)}>
          <ul className="divide-y divide-line rounded-card border border-line">
            {state.admin.users.map((u) => (
              <li key={u} className="flex items-center justify-between gap-3 px-4 py-2 text-base">
                <span className="flex items-center gap-2 break-all"><UsersRound size={16} aria-hidden /> {u}</span>
                <Button variant="tertiary" onClick={() => { setAdmin((a) => ({ users: a.users.filter((x) => x !== u) })); toast(`${u} removed`); }}>Remove</Button>
              </li>
            ))}
          </ul>
          <form className="mt-4 flex items-start gap-2" noValidate onSubmit={(e) => {
            e.preventDefault();
            if (!/^\S+@\S+\.\S+$/.test(email)) return setErr('The email address is not valid. Enter it as name@example.com.');
            setAdmin((a) => ({ users: [...a.users, email] })); toast(`${email} added`); setEmail(''); setErr('');
          }}>
            <TextField className="flex-1" label="Add a user by email" type="email" value={email} error={err} onChange={(e) => { setEmail(e.target.value); setErr(''); }} />
            <Button variant="primary" type="submit" className="mt-6">Add user</Button>
          </form>
        </Modal>
      )}
      <Toast message={toastMsg} />
    </div>
  );
}
