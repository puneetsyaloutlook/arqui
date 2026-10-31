import { Link, useOutletContext } from 'react-router-dom';
import { CircleHelp, Users } from 'lucide-react';
import { Button } from '../../components/ui';
import { STEPS, VERSIONS } from '../../data/admin';
import { useApp } from '../../state/store';
import { HelpModal, ICONS, ICON_COLOUR, SpotIcon } from './AdminShell';
import { useState } from 'react';

export default function AdminHome() {
  const { openUsers } = useOutletContext<{ openUsers: () => void }>();
  const { state } = useApp();
  const [help, setHelp] = useState(false);
  const cur = (k: keyof typeof VERSIONS) => {
    const n = state.admin.versionNow[k];
    const row = VERSIONS[k].rows.find((r) => r.v === n);
    return row ? { label: `VERSION ${row.v} - ${row.date}` } : null;
  };
  const Card = ({ n }: { n: number }) => {
    const s = STEPS[n - 1];
    const ver = s.versions ? cur(s.versions) : null;
    return (
      <li className="flex">
        <article className="flex w-full flex-col rounded-card border border-line bg-card p-5">
          <p className="t-eyebrow">{String(s.n).padStart(2, '0')}</p>
          <h3 className="t-h3 mt-1">{s.title}</h3>
          <p className="t-small mt-1 text-fg-3">{s.card}</p>
          <div className="my-5 flex flex-1 items-center justify-center">
            <SpotIcon src={ICONS[s.icon]} className={`h-28 w-28 ${ICON_COLOUR[s.group]}`} />
          </div>
          {ver && (
            <div className="mb-3">
              <p className="t-caption">Current version</p>
              <p className="t-small font-semibold">{ver.label}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            <Link to={`/admin/${s.path}`} className="inline-flex min-h-11 items-center justify-center rounded-ctl border border-transparent bg-action px-6 text-sm font-semibold text-on-action hover:[background-image:linear-gradient(var(--press-hover),var(--press-hover))]">
              {s.group === 'build' ? 'Open step' : 'Start test'}<span className="sr-only"> {s.n}: {s.title}</span>
            </Link>
            {s.versions && <Link to={`/admin/versions/${s.versions}`} className="inline-flex min-h-11 items-center justify-center rounded-ctl border border-action px-6 text-sm font-semibold text-action hover:bg-action-soft">{s.versions === 'agents' ? 'Update history' : 'Version history'}</Link>}
          </div>
        </article>
      </li>
    );
  };
  return (
    <div className="space-y-6">
      <section className="rounded-card border border-line bg-quiet p-6">
        <h2 className="t-h1">Welcome to Arqui</h2>
        <p className="t-deck mt-2 max-w-[62ch]">Arqui is now set up for your organisation. As you get feedback from users, you can come back here and update any aspect of the digital twin to make it better and more useful.</p>
        {state.admin.publishedAt && <p className="t-small mt-2 text-fg-2">Last published {state.admin.publishedAt}.</p>}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={openUsers}><Users size={20} aria-hidden /> Manage users</Button>
          <Button onClick={() => setHelp(true)}><CircleHelp size={20} aria-hidden /> Get help</Button>
        </div>
      </section>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <section aria-label="Build" className="rounded-card border border-line p-5 xl:col-span-2">
          <h2 className="t-h2 mb-4">Build</h2>
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[1, 2, 3, 4].map((n) => <Card key={n} n={n} />)}</ul>
        </section>
        <section aria-label="Test" className="rounded-card border border-line p-5 xl:col-span-2">
          <h2 className="t-h2 mb-4">Test</h2>
          <ul className="grid gap-4 sm:grid-cols-2">{[5, 6].map((n) => <Card key={n} n={n} />)}</ul>
        </section>
      </div>
      <section aria-label="Publish" className="flex flex-wrap items-center justify-between gap-4 rounded-card border border-line p-5">
        <div><h2 className="t-h2">Publish</h2><p className="t-small text-fg-3">Invite people to use the digital twin when you are ready.</p></div>
        <Link to="/admin/publish" className="inline-flex min-h-11 items-center rounded-ctl bg-action px-6 text-sm font-semibold text-on-action hover:[background-image:linear-gradient(var(--press-hover),var(--press-hover))]">Open step 7: Publish digital twin</Link>
      </section>
      {help && <HelpModal onClose={() => setHelp(false)} />}
    </div>
  );
}
