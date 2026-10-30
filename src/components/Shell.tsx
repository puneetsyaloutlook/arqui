import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CircleHelp, LogOut, Menu, PanelLeftClose, PanelLeftOpen, Search, UserCircle, Video, X } from 'lucide-react';
import calendar from '../assets/ui/dashboard.png';
import toolbox from '../assets/ui/current-work.png';
import binoculars from '../assets/ui/scenario.png';
import cube from '../assets/ui/org-views.png';
import { AREA_PATH, type Insight } from '../data/seed';
import { useApp } from '../state/store';
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
  return <span className={`font-logo text-[40px] leading-none tracking-wide text-[#b4b4b4] ${className}`}>ARQUI</span>;
}

function Sidebar({ collapsed, onToggle, onNavigate }: { collapsed: boolean; onToggle: () => void; onNavigate: () => void }) {
  return (
    <nav aria-label="Main" className="flex h-full flex-col bg-rail">
      <div className="flex h-[88px] shrink-0 items-center justify-between gap-2 px-5">
        {!collapsed && <Logo />}
        <IconButton label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} onClick={onToggle} className="hidden border border-chip lg:inline-flex">
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </IconButton>
        <IconButton label="Close menu" onClick={onNavigate} className="lg:hidden">
          <X size={20} />
        </IconButton>
      </div>
      <ul className="flex-1 space-y-2 overflow-y-auto px-3 pb-6">
        {NAV.map((n) => (
          <li key={n.to}>
            <NavLink
              to={n.to}
              onClick={onNavigate}
              title={collapsed ? n.title : undefined}
              className={({ isActive }) => `flex flex-col gap-2 rounded-3xl p-4 transition-colors hover:bg-white/5 ${isActive ? 'bg-panel-hi text-teal' : 'text-white'} ${collapsed ? 'items-center' : ''}`}
            >
              <img src={n.img} alt="" className={collapsed ? 'h-10 w-10 object-contain' : 'h-[52px] w-[52px] object-contain object-left'} />
              {!collapsed && <span className="text-lg font-medium">{n.title}</span>}
              {!collapsed && n.text && <span className="text-xs leading-[15px] text-muted">{n.text}</span>}
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
      <form role="search" onSubmit={(e) => { e.preventDefault(); if (results[0]) go(results[0]); }} className="flex h-14 items-center gap-3 rounded-full bg-panel-hi px-5">
        <Search size={20} className="shrink-0 text-ink" aria-hidden />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          aria-label="Search insights"
          placeholder="What's on your mind?"
          className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink/80"
        />
      </form>
      {open && q.trim().length >= 2 && (
        <ul className="absolute inset-x-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-2xl bg-panel p-2 shadow-xl">
          {results.length === 0 && <li className="px-4 py-3 text-sm text-muted">No insights match "{q}".</li>}
          {results.map((i) => (
            <li key={i.id}>
              <button type="button" onClick={() => go(i)} className="w-full rounded-xl px-4 py-2.5 text-left hover:bg-white/10">
                <span className="block text-sm text-primary">{i.title}</span>
                <span className="block text-xs text-muted">{TITLES[AREA_PATH[i.area]]}</span>
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

  return (
    <div className="flex h-dvh bg-canvas">
      <aside className={`hidden shrink-0 transition-[width] lg:block ${collapsed ? 'w-[96px]' : 'w-[260px]'}`}>
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} onNavigate={() => undefined} />
      </aside>
      {drawer && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setDrawer(false)} />
          <aside className="absolute inset-y-0 left-0 w-[290px] max-w-[85vw]">
            <Sidebar collapsed={false} onToggle={() => undefined} onNavigate={() => setDrawer(false)} />
          </aside>
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
        <header className="flex shrink-0 flex-wrap items-center gap-3 px-4 py-3 lg:px-6">
          <IconButton label="Open menu" onClick={() => setDrawer(true)} className="lg:hidden">
            <Menu size={22} />
          </IconButton>
          <h1 className="mr-2 text-2xl leading-9 text-pink lg:min-w-[220px] lg:text-[28px]">{title}</h1>
          <div className="order-last flex w-full lg:order-none lg:w-auto lg:flex-1">
            <SearchBox />
          </div>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button onClick={() => setDialog('invite')} className="!hidden sm:!inline-flex !h-11 !text-ink">
              <Video size={18} aria-hidden /> Invite to meeting
            </Button>
            <Button onClick={() => setDialog('help')} className="!hidden sm:!inline-flex !h-11 !text-ink">
              <CircleHelp size={18} aria-hidden /> Get help
            </Button>
            <IconButton label="Account" onClick={() => setDialog('account')} className="text-primary">
              <UserCircle size={30} />
            </IconButton>
            <IconButton label="Sign out" onClick={() => { signOut(); navigate('/signin'); }} className="text-primary">
              <LogOut size={26} />
            </IconButton>
          </div>
        </header>
        <main className="min-h-0 flex-1 overflow-y-auto lg:overflow-hidden">
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
            <p className="text-sm text-muted">Arqui joins the meeting, takes notes and suggests actions afterwards.</p>
            <TextField label="Attendee email" type="email" required value={inv.email} onChange={(e) => setInv({ ...inv, email: e.target.value })} />
            <TextField label="Topic" required value={inv.topic} onChange={(e) => setInv({ ...inv, topic: e.target.value })} />
            <TextField label="Date and time" type="datetime-local" value={inv.when} onChange={(e) => setInv({ ...inv, when: e.target.value })} />
            <div className="flex justify-end gap-2">
              <Button variant="text" onClick={() => setDialog(null)}>Cancel</Button>
              <Button variant="filled" type="submit">Send invitation</Button>
            </div>
          </form>
        </Modal>
      )}
      {dialog === 'help' && (
        <Modal title="Get help" onClose={() => setDialog(null)}>
          <div className="space-y-3 text-sm leading-6 text-ink">
            <p>Ask Arqui a question in the search bar, or open an insight and use the Chat tab.</p>
            <ul className="list-disc space-y-1 pl-5 text-muted">
              <li>Open an insight to see its chat, summary, suggested actions and deliverables.</li>
              <li>Tell Arqui whether an insight is useful so that future insights improve.</li>
              <li>Invite colleagues from the Collaborators tab.</li>
            </ul>
            <p className="text-muted">Still stuck? Email support@arqui.example.</p>
          </div>
        </Modal>
      )}
      {dialog === 'account' && (
        <Modal title="Your account" onClose={() => setDialog(null)}>
          <dl className="space-y-2 text-sm">
            <div><dt className="text-muted">Name</dt><dd className="text-white">{state.profile.name || 'Not set'}</dd></div>
            <div><dt className="text-muted">Email</dt><dd className="text-white">{state.email}</dd></div>
            <div><dt className="text-muted">Job title</dt><dd className="text-white">{state.profile.jobTitle || 'Not set'}</dd></div>
          </dl>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="text" onClick={() => setDialog(null)}>Close</Button>
            <Button variant="filled" onClick={() => { setDialog(null); navigate('/onboarding'); }}>Edit profile</Button>
          </div>
        </Modal>
      )}
      <Toast message={toastMsg} />
    </div>
  );
}

