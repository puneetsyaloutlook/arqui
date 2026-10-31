import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { Button, Modal, Select, TextArea, TextField } from '../../components/ui';
import { BOTTLENECK_DETAIL, GROUP_SUMMARY, INNOVATION_DETAIL, PERSONAS, STEPS, TEST_INSIGHTS, VERSIONS, type DetailData, type TestInsight } from '../../data/admin';
import { PERSPECTIVES } from '../../data/twin';
import { useApp } from '../../state/store';
import { PageHero, PublishModal } from './AdminShell';

const panel = 'rounded-card border border-line bg-card p-6';
const step = (p: string) => STEPS.find((s) => s.path === p)!;

function Stats({ items, onInvite }: { items: { value: string; label: string }[]; onInvite: () => void }) {
  return (
    <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
      {items.map((i) => <div key={i.label}><p className="t-stat">{i.value}</p><p className="t-caption">{i.label}</p></div>)}
      <Button onClick={onInvite}>Invite reviewers</Button>
    </div>
  );
}

function InviteModal({ onClose }: { onClose: () => void }) {
  const { state, setAdmin, toast } = useApp();
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  return (
    <Modal title="Invite reviewers" onClose={onClose}>
      <p className="text-base text-fg-3">Reviewers rate what Arqui has built and suggest changes.</p>
      <ul className="divide-y divide-line rounded-card border border-line">
        {state.admin.users.map((u) => <li key={u} className="px-4 py-2 text-base break-all">{u}</li>)}
      </ul>
      <form className="flex items-start gap-2" noValidate onSubmit={(e) => {
        e.preventDefault();
        if (!/^\S+@\S+\.\S+$/.test(email)) return setErr('The email address is not valid. Enter it as name@example.com.');
        setAdmin((a) => ({ users: [...a.users, email] })); toast(`Invitation sent to ${email}`); setEmail(''); setErr('');
      }}>
        <TextField className="flex-1" label="Reviewer email" type="email" value={email} error={err} onChange={(e) => { setEmail(e.target.value); setErr(''); }} />
        <Button variant="primary" type="submit" className="mt-6">Send invite</Button>
      </form>
    </Modal>
  );
}

/* ---------- Step 5: test the digital twin ---------- */
export function TestTwinStep() {
  const { state, setAdmin, toast } = useApp();
  const navigate = useNavigate();
  const s = step('test-twin');
  const [name, setName] = useState('Capabilities');
  const [invite, setInvite] = useState(false);
  const [add, setAdd] = useState<{ name: string; text: string } | null>(null);
  const a = state.admin;
  const all = PERSPECTIVES.flatMap((p) => p.groups.flatMap((g) => g.items));
  const p = PERSPECTIVES.find((x) => x.name === name) ?? PERSPECTIVES[0];
  const count = (x: (typeof PERSPECTIVES)[number]) => x.groups.reduce((n, g) => n + g.items.length, 0) + a.custom.filter((c) => c.perspective === x.name).length;
  const total = PERSPECTIVES.reduce((n, x) => n + count(x), 0);
  const overall = Math.round(all.reduce((n, i) => n + i.confidence, 0) / all.length);
  const reviewed = all.filter((i) => a.reviewed.includes(i.name)).length;
  const Nav = ({ core }: { core: boolean }) => (
    <>
      <h4 className={`t-h3 ${core ? '' : 'mt-5'}`}>{core ? 'Core' : 'Extended'}</h4>
      <ul className="mt-2 space-y-1">
        {PERSPECTIVES.filter((x) => x.core === core).map((x) => (
          <li key={x.name}><button type="button" aria-pressed={x.name === name} onClick={() => setName(x.name)} className={`min-h-11 w-full rounded-ctl px-3 text-left text-base ${x.name === name ? 'bg-action-soft font-semibold' : 'text-fg-3 hover:bg-quiet'}`}>{x.name} ({count(x)})</button></li>
        ))}
      </ul>
    </>
  );
  const cards = [...p.groups.flatMap((g) => g.items.map((i) => ({ label: g.label, ...i }))), ...a.custom.filter((c) => c.perspective === p.name).map((c) => ({ label: `${p.name} > Added`, name: c.name, text: c.text, confidence: 50, reviewers: 0 }))];
  return (
    <div className="space-y-6">
      <PageHero step={`Step ${s.n}`} title={s.title} icon={s.icon} group={s.group}>{s.blurb}</PageHero>
      <section className={panel}>
        <h3 className="t-h2">Digital twin</h3>
        <div className="mt-3 flex flex-wrap items-start justify-between gap-6">
          <p className="max-w-[70ch] text-base text-fg-3">Your organization, Acme Corporation, is a leading renewable energy company focused on innovation and sustainability. You excel in product development, manufacturing, and sales, with "SunPro" solar panels at your core. A flat hierarchy and data-driven approach fuel your success. You're expanding globally, exploring battery storage, and committed to reducing your carbon footprint through partnerships and circular economy practices. This Digital Twin captures your essence, ready to adapt and grow as you do.</p>
          <Stats onInvite={() => setInvite(true)} items={[{ value: String(total), label: 'Perspectives' }, { value: String(reviewed).padStart(2, '0'), label: 'Perspectives reviewed' }, { value: `${overall}%`, label: 'Overall confidence' }]} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav aria-label="Perspectives"><Nav core /><Nav core={false} /><Button className="mt-6" onClick={() => navigate('/admin/model')}>Edit structure</Button></nav>
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h3 className="t-h3">{p.core ? 'Core' : 'Extended'} &gt; {p.name}</h3>
              <span className="t-eyebrow">{count(p)} perspectives</span>
              <Button onClick={() => setAdd({ name: '', text: '' })}>Add a perspective</Button>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {cards.map((i) => {
                const done = a.reviewed.includes(i.name);
                return (
                  <li key={i.name} className="flex flex-col rounded-card border border-line bg-quiet p-4">
                    <p className="t-eyebrow">{i.label}</p>
                    <h4 className="t-h3 mt-2">{i.name}</h4>
                    <p className="t-small mt-1 flex-1 text-fg-3">{i.text}</p>
                    <div className="mt-4">
                      <p className="t-caption flex justify-between"><span>Confidence level</span><span className="tnum text-fg">{i.confidence}%</span></p>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-[3px] border border-line bg-card" role="img" aria-label={`Confidence ${i.confidence} out of 100`}><div className="h-full bg-mark" style={{ width: `${i.confidence}%` }} /></div>
                    </div>
                    <Button className="mt-4 self-start" variant={done ? 'secondary' : 'primary'} onClick={() => navigate(`/admin/detail/perspective/${encodeURIComponent(i.name)}`)} aria-label={`${done ? 'Reviewed' : 'Review and edit'}: ${i.name}`}>{done ? <><Check size={20} aria-hidden /> Reviewed</> : 'Review & edit'}</Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      {invite && <InviteModal onClose={() => setInvite(false)} />}
      {add && (
        <Modal title="Add a perspective" onClose={() => setAdd(null)}>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); if (!add.name.trim()) return; setAdmin((x) => ({ custom: [...x.custom, { perspective: p.name, name: add.name.trim(), text: add.text.trim() || 'Added by the admin.' }] })); toast(`${add.name.trim()} added to ${p.name}`); setAdd(null); }}>
            <TextField label="Name" required autoFocus value={add.name} onChange={(e) => setAdd({ ...add, name: e.target.value })} />
            <TextArea label="Description" value={add.text} onChange={(e) => setAdd({ ...add, text: e.target.value })} />
            <div className="flex justify-end gap-2"><Button variant="tertiary" onClick={() => setAdd(null)}>Cancel</Button><Button variant="primary" type="submit" disabled={!add.name.trim()}>Add perspective</Button></div>
          </form>
        </Modal>
      )}
    </div>
  );
}

/* ---------- Step 6: test-drive insights ---------- */
export function TestInsightsStep() {
  const { state } = useApp();
  const navigate = useNavigate();
  const s = step('test-insights');
  const [persona, setPersona] = useState(PERSONAS[0]);
  const [group, setGroup] = useState<TestInsight['group']>('Current state');
  const [invite, setInvite] = useState(false);
  const orgInsights: TestInsight[] = useMemo(() => state.insights.filter((i) => i.area === 'org' && !i.pinned).map((i) => ({ id: `o-${i.id}`, group: 'Organisational' as const, title: i.title, text: i.summary })), [state.insights]);
  const all = [...TEST_INSIGHTS, ...orgInsights];
  const groups: TestInsight['group'][] = ['Current state', 'Future scenarios', 'Organisational'];
  const rows = all.filter((i) => i.group === group);
  const rated = Object.keys(state.admin.ratings).length;
  return (
    <div className="space-y-6">
      <PageHero step={`Step ${s.n}`} title={s.title} icon={s.icon} group={s.group}>{s.blurb}</PageHero>
      <section className={panel}>
        <h3 className="t-h2">Insights by user persona</h3>
        <div className="mt-3 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-[62ch]">
            <p className="mb-4 text-base text-fg-3">Using the digital twin and the feeds of relevant information, Arqui will generate insights for users in your organisation. Three kinds of insights will be generated - about the current state issues, about future scenarios, and about the structure of the organisation. Preview the insights that different roles will see by selecting a persona.</p>
            <Select label="Persona" options={PERSONAS} value={persona} onChange={(e) => setPersona(e.target.value)} className="max-w-xs" />
          </div>
          <Stats onInvite={() => setInvite(true)} items={[{ value: String(PERSPECTIVES.reduce((n, x) => n + x.groups.reduce((m, g) => m + g.items.length, 0), 0)), label: 'Perspectives' }, { value: String(rated).padStart(2, '0'), label: 'Insights rated' }, { value: `${Math.round(PERSPECTIVES.flatMap((x) => x.groups.flatMap((g) => g.items)).reduce((n, i, _, a) => n + i.confidence / a.length, 0))}%`, label: 'Overall confidence' }]} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav aria-label="Insight groups">
            <h4 className="t-h3">Insights</h4>
            <ul className="mt-2 space-y-1">{groups.map((g) => <li key={g}><button type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={`min-h-11 w-full rounded-ctl px-3 text-left text-base ${group === g ? 'bg-action-soft font-semibold' : 'text-fg-3 hover:bg-quiet'}`}>{g} ({all.filter((i) => i.group === g).length})</button></li>)}</ul>
          </nav>
          <div>
            <h3 className="t-h3">Insights &gt; {group} <span className="t-eyebrow ml-2">{rows.length} insights</span></h3>
            <p className="mt-2 max-w-[80ch] text-base text-fg-3"><strong className="font-semibold text-fg">Summary:</strong> {GROUP_SUMMARY[group]}</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {rows.map((i) => {
                const r = state.admin.ratings[i.id];
                return (
                  <li key={i.id} className="flex flex-col rounded-card border border-line bg-quiet p-4">
                    <p className="t-eyebrow">{i.group}</p>
                    <h4 className="t-h3 mt-2">{i.title}</h4>
                    <p className="t-small mt-1 flex-1 text-fg-3">{i.text}</p>
                    <p className="t-caption mt-4">{r ? 3 : 0} of 3 reviewers</p>
                    <Button className="mt-3 self-start" variant={r ? 'secondary' : 'primary'} onClick={() => navigate(`/admin/detail/insight/${i.id}`)} aria-label={`${r ? 'Rated' : 'View and rate'}: ${i.title}`}>{r ? <><Check size={20} aria-hidden /> Rated</> : 'View & rate'}</Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      {invite && <InviteModal onClose={() => setInvite(false)} />}
    </div>
  );
}

/* ---------- Detail pages ---------- */
function Stars({ n, label }: { n: number; label: string }) {
  return <span role="img" aria-label={`${label}: ${n} out of 5`} className="flex gap-0.5">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} aria-hidden className={i <= n ? 'fill-[var(--warm-700)] text-warm-700' : 'text-fg-2'} />)}</span>;
}

function build(kind: string, id: string, state: ReturnType<typeof useApp>['state']): { d: DetailData; key: string } | null {
  if (kind === 'perspective') {
    const name = decodeURIComponent(id);
    if (name === 'Innovation management') return { d: INNOVATION_DETAIL, key: name };
    const hit = PERSPECTIVES.flatMap((p) => p.groups.flatMap((g) => g.items.map((i) => ({ ...i, label: g.label })))).find((i) => i.name === name);
    const cust = state.admin.custom.find((c) => c.name === name);
    const src = hit ?? (cust ? { name: cust.name, text: cust.text, confidence: 50, reviewers: 0, label: `${cust.perspective} > Added` } : null);
    if (!src) return null;
    return { key: name, d: { kind: src.label, title: src.name, summary: src.text, reviewers: ['Alex Blueprintable', 'Jamie Orgchart', 'Sam Synergise'].slice(0, Math.max(1, Math.min(3, src.reviewers ?? 3))),
      sections: [{ h: 'Current Performance', items: [src.text] }, { h: 'Confidence', side: true, items: [`Arqui is ${src.confidence}% confident in this perspective, based on the documents and agents now in the digital twin.`] }] } };
  }
  const i = [...TEST_INSIGHTS, ...state.insights.filter((x) => x.area === 'org' && !x.pinned).map((x) => ({ id: `o-${x.id}`, group: 'Organisational' as const, title: x.title, text: x.summary }))].find((x) => x.id === id);
  if (!i) return null;
  if (i.id === 'c1') return { d: BOTTLENECK_DETAIL, key: i.id };
  return { key: i.id, d: { kind: i.group, title: i.title, summary: i.text, reviewers: ['Alex Blueprintable', 'Jamie Orgchart', 'Sam Synergise'], sections: [{ h: 'Recommendations', items: [i.text] }] } };
}

export function DetailPage() {
  const { kind = '', id = '' } = useParams();
  const { state, setAdmin, toast } = useApp();
  const navigate = useNavigate();
  const found = build(kind, id, state);
  const back = kind === 'perspective' ? '/admin/test-twin' : '/admin/test-insights';
  const [note, setNote] = useState('');
  if (!found) return <p className="text-base">This item could not be found. <Button variant="tertiary" onClick={() => navigate(back)}>Go back</Button></p>;
  const { d, key } = found;
  const isInsight = kind === 'insight';
  const rating = state.admin.ratings[key] ?? 0;
  const done = state.admin.reviewed.includes(key);
  const Section = ({ s }: { s: DetailData['sections'][number] }) => (
    <section>
      <h3 className="t-h3 mb-3">{s.h.replace(/:$/, '')}</h3>
      <ul className="space-y-2">
        {s.items.map((t) => {
          const [first, ...rest] = t.split('\n');
          const m = first.match(/^([^:]{3,60}):\s(.+)$/s);
          return <li key={t} className="rounded-card border border-line bg-quiet px-4 py-3 text-sm">{m && !rest.length ? <><strong className="font-semibold">{m[1]}:</strong> {m[2]}</> : <>{first}{rest.map((r) => <span key={r} className="block text-fg-3">{r}</span>)}</>}</li>;
        })}
      </ul>
    </section>
  );
  return (
    <div className="space-y-6">
      <header className="rounded-card border border-line bg-quiet p-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 flex-1 basis-96">
            <p className="t-eyebrow">{d.kind}</p>
            <h2 className="t-h1 mt-1">{d.title}</h2>
            <p className="t-deck mt-2 max-w-[62ch]">{d.summary}</p>
          </div>
          <div>
            <h3 className="t-eyebrow mb-2">Reviewers</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">{d.reviewers.map((r) => <li key={r}><p className="text-sm">{r}</p><Stars n={4} label={r} /></li>)}</ul>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button onClick={() => navigate(back)}>Close</Button>
          {isInsight ? (
            <fieldset className="flex flex-wrap items-center gap-2">
              <legend className="sr-only">Your rating</legend>
              <span className="t-label">Your rating</span>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" aria-label={`${n} star${n > 1 ? 's' : ''}`} aria-pressed={rating === n} onClick={() => { setAdmin((a) => ({ ratings: { ...a.ratings, [key]: n } })); toast(`Rated ${n} out of 5`); }} className="grid size-11 place-items-center rounded-ctl hover:bg-card"><Star size={24} aria-hidden className={n <= rating ? 'fill-[var(--warm-700)] text-warm-700' : 'text-fg-2'} /></button>
              ))}
            </fieldset>
          ) : (
            <Button variant="primary" disabled={done} onClick={() => { setAdmin((a) => ({ reviewed: [...a.reviewed, key] })); toast(`${d.title} marked as reviewed`); navigate(back); }}>{done ? 'Reviewed' : 'Mark as reviewed'}</Button>
          )}
        </div>
      </header>
      <div className={panel}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">{d.sections.filter((s) => !s.side).map((s) => <Section key={s.h} s={s} />)}</div>
          <div className="space-y-6">{d.sections.filter((s) => s.side).map((s) => <Section key={s.h} s={s} />)}</div>
        </div>
        <form className="mt-8 max-w-2xl space-y-3 border-t border-line pt-6" onSubmit={(e) => { e.preventDefault(); if (!note.trim()) return; toast('Comment added'); setNote(''); }}>
          <TextArea label="Add a comment" value={note} onChange={(e) => setNote(e.target.value)} />
          <Button type="submit" disabled={!note.trim()}>Add comment</Button>
        </form>
      </div>
    </div>
  );
}

/* ---------- Version history ---------- */
export function VersionsPage() {
  const { kind = 'documents' } = useParams();
  const { state, setAdmin, toast } = useApp();
  const navigate = useNavigate();
  const [publishing, setPublishing] = useState(false);
  const key = (['about', 'documents', 'model', 'agents'].includes(kind) ? kind : 'documents') as keyof typeof VERSIONS;
  const v = VERSIONS[key];
  const s = STEPS.find((x) => x.versions === key)!;
  const now = state.admin.versionNow[key];
  const cur = v.rows.find((r) => r.v === now) ?? v.rows[0];
  return (
    <div className="space-y-6">
      <PageHero title={v.title} icon={s.icon} group={s.group} back={false} actions={<Button onClick={() => navigate('/admin')}>Close</Button>}>
        {`Current version: VERSION ${cur.v} - ${cur.date}`}
      </PageHero>
      <section className={panel}>
        <h3 className="t-h2 mb-3">Version history</h3>
        <div className="overflow-x-auto">
          <table className="t-small w-full min-w-[760px]">
            <thead><tr className="text-fg-2">{['Version', 'Documents', 'What changed', 'Effect on insights', ''].map((h) => <th key={h} scope="col" className="border-b-2 border-line px-3 py-3 text-start font-semibold">{h || <span className="sr-only">Actions</span>}</th>)}</tr></thead>
            <tbody>
              {v.rows.map((r) => (
                <tr key={r.v} className="align-top hover:bg-quiet">
                  <th scope="row" className="border-b border-line px-3 py-3 text-start font-normal">Version {r.v} - {r.date}</th>
                  <td className="border-b border-line px-3 py-3">{r.docs || 'Not applicable'}</td>
                  <td className="max-w-[48ch] border-b border-line px-3 py-3 text-fg-3">{r.summary}</td>
                  <td className="max-w-[48ch] border-b border-line px-3 py-3 text-fg-3"><ul className={r.effects.length > 1 ? 'list-disc space-y-1 pl-4' : ''}>{r.effects.map((e) => <li key={e} className={r.effects.length > 1 ? '' : 'list-none'}>{e}</li>)}</ul></td>
                  <td className="border-b border-line px-3 py-3">{r.v === cur.v ? <span className="t-caption">Current</span> : <Button onClick={() => { setAdmin((a) => ({ versionNow: { ...a.versionNow, [key]: r.v } })); toast(`Restored version ${r.v}`); setPublishing(true); }}>Restore<span className="sr-only"> version {r.v}</span></Button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {publishing && <PublishModal onClose={() => setPublishing(false)} />}
    </div>
  );
}
