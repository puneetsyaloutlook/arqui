import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CircleHelp, LogOut, Menu, Moon, PanelLeftClose, PanelLeftOpen, Search, Sun, UserCircle, Video, X } from 'lucide-react';
import calendar from '../assets/ui/dashboard.png';
import toolbox from '../assets/ui/current-work.png';
import binoculars from '../assets/ui/scenario.png';
import cube from '../assets/ui/org-views.png';
import { AREA_PATH, type Insight } from '../data/seed';
import { useApp } from '../state/store';
import { useTheme } from '../state/theme';
import { Button, IconButton, Modal, TextArea, TextField, Toast } from './ui';

const NAV = [
  { to: '/dashboard', title: 'Daily dashboard', text: '', img: calendar },
  { to: '/current-work', title: 'Current work', text: 'Navigate operational complexity, current priorities, and ongoing challenges.', img: toolbox },
  { to: '/scenario-planning', title: 'Scenario planning', text: 'Test strategic ideas, assess risks and opportunities, and visualise the implications of different choices.', img: binoculars },
  { to: '/organisational-views', title: 'Organisational views', text: "Review the organisation's digital twin to see insights and opportunities for improving how the organisation works.", img: cube },
];

const TITLES: Record<string, string> = {
  '/dashboard': 'Daily dashboard',
  '/current-work': 'Current work',
  '/scenario-planning': 'Scenario planning',
  '/organisational-views': 'Organisational views',
};

export function Logo({ className = '' }: { className?: string }) {
  return <span className={`t-logo ${className}`}>ARQUI</span>;
}

/** A spot icon drawn in the colour of the text beside it. */
function SpotIcon({ src, className = '' }: { src: string; className?: string }) {
  return <span aria-hidden className={`inline-block shrink-0 bg-current ${className}`} style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'left center', maskPosition: 'left center' }} />;
}

function Sidebar({ collapsed, onToggle, onNavigate }: { collapsed: boolean; onToggle: () => void; onNavigate: () => void }) {
  return (
    <nav aria-label="Main" className="flex h-full flex-col bg-nav text-neutral-100">
      <div className={`flex min-h-16 shrink-0 items-center gap-2 px-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && <Logo className="text-inverse" />}
        <IconButton label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} onClick={onToggle} className="hidden text-neutral-100 hover:!bg-white/10 lg:inline-flex">
          {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </IconButton>
        <IconButton label="Close menu" onClick={onNavigate} className="text-neutral-100 hover:!bg-white/10 lg:hidden">
          <X size={20} />
        </IconButton>
      </div>
      <ul className="flex-1 overflow-y-auto pb-6">
        {NAV.map((n, i) => (
          <li key={n.to} className={i === 1 ? 'mt-2 border-t border-white/15 pt-2' : ''}>
            <NavLink
              to={n.to}
              onClick={onNavigate}
              title={collapsed ? n.title : undefined}
              className={({ isActive }) => `flex flex-col gap-2 border-s-[3px] px-4 py-3 text-neutral-100 transition-colors hover:bg-white/5 active:bg-white/15 focus-visible:!outline-neutral-100 ${isActive ? 'border-brand bg-white/10 font-semibold' : 'border-transparent'} ${collapsed ? 'items-center' : ''}`}
            >
              <SpotIcon src={n.img} className="size-9" />
              {!collapsed && <span className="text-base leading-tight">{n.title}</span>}
              {!collapsed && n.text && <span className="t-caption !text-neutral-100">{n.text}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SearchBox() {
  const { state } = useApp();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const results = useMemo<Insight[]>(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return state.insights.filter((i) => i.title.toLowerCase().includes(t) || i.summary.toLowerCase().includes(t)).slice(0, 6);
  }, [q, state.insights]);
  useEffect(() => {
    const onDown = (e: MouseEvent) => !box.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);
  const go = (i: Insight) => {
    setOpen(false);
    setQ('');
    navigate(`${AREA_PATH[i.area]}?id=${i.id}`);
  };
  return (
    <div ref={box} className="relative min-w-0 flex-1">
      <form role="search" onSubmit={(e) => { e.preventDefault(); if (results[0]) go(results[0]); }} className="flex min-h-11 items-center gap-3 rounded-ctl border border-control bg-page px-3 focus-within:border-action focus-within:shadow-[0_0_0_1px_var(--action)]">
        <Search size={20} className="shrink-0 text-fg-2" aria-hidden />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          aria-label="Search insights"
          placeholder="Search insights"
          className="min-w-0 flex-1 bg-transparent py-2 text-base text-fg outline-none placeholder:text-fg-2"
        />
      </form>
      {open && q.trim().length >= 2 && (
        <ul className="absolute inset-x-0 top-full z-20 mt-1 max-h-80 overflow-y-auto rounded-ctl border border-line-strong bg-overlay p-1 shadow-elevated">
          {results.length === 0 && <li className="t-small px-3 py-3 text-fg-2">No insights match "{q}". Try fewer or different words.</li>}
          {results.map((i) => (
            <li key={i.id}>
              <button type="button" onClick={() => go(i)} className="w-full rounded px-3 py-2 text-left hover:bg-quiet active:bg-action-soft">
                <span className="t-small block text-fg">{i.title}</span>
                <span className="t-caption block">{TITLES[AREA_PATH[i.area]]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Shell() {
  const { state, signOut, toast, toastMsg } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [dialog, setDialog] = useState<null | 'invite' | 'help' | 'account'>(null);
  const [inv, setInv] = useState({ email: '', topic: '', when: '' });
  const title = TITLES[location.pathname] ?? 'Arqui';

  useEffect(() => {
    document.title = `${title} | Arqui`;
  }, [title]);

  const { dark, toggle } = useTheme();
  return (
    <div className="flex min-h-dvh bg-page">
      <aside className={`sticky top-0 hidden h-dvh shrink-0 self-start transition-[width] lg:block ${collapsed ? 'w-16' : 'w-60'}`}>
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} onNavigate={() => undefined} />
      </aside>
      {drawer && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div className="absolute inset-0 bg-scrim" onClick={() => setDrawer(false)} />
          <aside className="absolute inset-y-0 left-0 z-40 w-60 max-w-[85vw]">
            <Sidebar collapsed={false} onToggle={() => undefined} onNavigate={() => setDrawer(false)} />
          </aside>
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-[25] border-b border-line bg-page">
          <div className="flex min-h-16 w-full flex-wrap items-center gap-x-4 gap-y-2 px-6 py-2">
            <IconButton label="Open menu" onClick={() => setDrawer(true)} className="lg:hidden">
              <Menu size={24} />
            </IconButton>
            <h1 className="t-h1 mr-2 whitespace-nowrap">{title}</h1>
            <div className="order-last flex w-full lg:order-none lg:w-auto lg:min-w-[220px] lg:max-w-[560px] lg:flex-1">
              <SearchBox />
            </div>
            <div className="ml-auto flex items-center gap-1 lg:ml-0">
              <Button onClick={() => setDialog('invite')} className="!hidden xl:!inline-flex">
                <Video size={20} aria-hidden /> Invite to meeting
              </Button>
              <Button onClick={() => setDialog('help')} className="!hidden xl:!inline-flex">
                <CircleHelp size={20} aria-hidden /> Get help
              </Button>
              <IconButton label="Invite to meeting" onClick={() => setDialog('invite')} className="xl:hidden"><Video size={20} /></IconButton>
              <IconButton label="Get help" onClick={() => setDialog('help')} className="xl:hidden"><CircleHelp size={20} /></IconButton>
              <IconButton label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggle}>{dark ? <Sun size={20} /> : <Moon size={20} />}</IconButton>
              <IconButton label="Account" onClick={() => setDialog('account')}><UserCircle size={24} /></IconButton>
              <IconButton label="Sign out" onClick={() => { signOut(); navigate('/signin'); }}><LogOut size={20} /></IconButton>
            </div>
          </div>
        </header>
        <main className="w-full max-w-[1180px] flex-1 px-6">
          <Outlet />
        </main>
      </div>

      {dialog === 'invite' && (
        <Modal title="Invite to meeting" onClose={() => setDialog(null)}>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setDialog(null);
              toast(`Invitation sent to ${inv.email}`);
              setInv({ email: '', topic: '', when: '' });
            }}
          >
            <p className="t-small text-fg-2">Arqui joins the meeting, takes notes and suggests actions afterwards.</p>
            <TextField label="Attendee email" type="email" required value={inv.email} onChange={(e) => setInv({ ...inv, email: e.target.value })} />
            <TextField label="Topic" required value={inv.topic} onChange={(e) => setInv({ ...inv, topic: e.target.value })} />
            <TextField label="Date and time" type="datetime-local" value={inv.when} onChange={(e) => setInv({ ...inv, when: e.target.value })} />
            <div className="flex justify-end gap-2">
              <Button variant="tertiary" onClick={() => setDialog(null)}>Cancel</Button>
              <Button variant="primary" type="submit">Send invitation</Button>
            </div>
          </form>
        </Modal>
      )}
      {dialog === 'help' && (
        <Modal title="Get help" onClose={() => setDialog(null)}>
          <div className="space-y-3 text-base">
            <p>Ask Arqui a question in the search bar, or open an insight and use the Chat tab.</p>
            <ul className="list-disc space-y-1 pl-6 text-fg-3">
              <li>Open an insight to see its chat, summary, suggested actions and deliverables.</li>
              <li>Tell Arqui whether an insight is useful so that future insights improve.</li>
              <li>Invite colleagues from the Collaborators tab.</li>
            </ul>
            <p className="text-fg-2">Still stuck? Email support@arqui.example.</p>
          </div>
        </Modal>
      )}
      {dialog === 'account' && (
        <Modal title="Your account" onClose={() => setDialog(null)}>
          <dl className="space-y-3 text-base">
            <div><dt className="t-label">Name</dt><dd>{state.profile.name || 'Not set'}</dd></div>
            <div><dt className="t-label">Email</dt><dd>{state.email}</dd></div>
            <div><dt className="t-label">Job title</dt><dd>{state.profile.jobTitle || 'Not set'}</dd></div>
          </dl>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="tertiary" onClick={() => setDialog(null)}>Close</Button>
            <Button variant="primary" onClick={() => { setDialog(null); navigate('/onboarding'); }}>Edit profile</Button>
          </div>
        </Modal>
      )}
      <Toast message={toastMsg} />
    </div>
  );
}

