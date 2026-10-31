import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Trash2, Upload } from 'lucide-react';
import { Button, Checkbox, Modal, Select, TextField } from '../../components/ui';
import { AGENTS, CORE_PERSPECTIVES, DOC_SOURCES, EXT_PERSPECTIVES, MODEL_CATEGORIES, ORG_TYPES, REACH, SCOPES, SIZES, STEPS, type Agent } from '../../data/admin';
import { useApp } from '../../state/store';
import { PageHero, PublishModal } from './AdminShell';

const step = (path: string) => STEPS.find((s) => s.path === path)!;
const panel = 'rounded-card border border-line bg-card p-6';
const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

function useHero(path: string, extra?: React.ReactNode) {
  const [publishing, setPublishing] = useState(false);
  const s = step(path);
  const hero = (
    <PageHero step={`Step ${s.n}`} title={s.title} icon={s.icon} group={s.group} actions={<Button onClick={() => setPublishing(true)}>Publish updates</Button>}>
      {s.blurb}
    </PageHero>
  );
  void extra;
  return { s, hero, modal: publishing ? <PublishModal onClose={() => setPublishing(false)} /> : null };
}

/* ---------- Step 1 ---------- */
export function AboutStep() {
  const { state, setAdmin, toast } = useApp();
  const { s, hero, modal } = useHero('about');
  const o = state.admin.org;
  const [errs, setErrs] = useState<Record<number, string>>({});
  const set = (patch: Partial<typeof o>) => setAdmin({ org: { ...o, ...patch } });
  const save = () => {
    const e: Record<number, string> = {};
    o.reviewers.forEach((r, i) => { if (r && !isEmail(r)) e[i] = 'The email address is not valid. Enter it as name@example.com.'; });
    setErrs(e);
    if (!Object.keys(e).length) toast(`${s.title} saved`);
  };
  return (
    <div className="space-y-6">
      {hero}
      <div className={`grid gap-6 lg:grid-cols-3 ${panel}`}>
        <section>
          <h3 className="t-h3">About the organisation</h3>
          <p className="t-small mb-4 mt-2 text-fg-3">This information guides our model to gather relevant data and basic facts from the internet, to set the content for your organisation’s digital twin.</p>
          <div className="space-y-4">
            <TextField label="Organisation name" value={o.name} onChange={(e) => set({ name: e.target.value })} />
            <Select label="Organisation type" options={ORG_TYPES} value={o.type} onChange={(e) => set({ type: e.target.value })} />
            <Select label="Geographic reach" options={REACH} value={o.reach} onChange={(e) => set({ reach: e.target.value })} />
            <Select label="Number of employees or staff" options={SIZES} value={o.size} onChange={(e) => set({ size: e.target.value })} />
          </div>
        </section>
        <section>
          <h3 className="t-h3">Add reviewers</h3>
          <p className="t-small mb-4 mt-2 text-fg-3">Reviewers are experts or stakeholders in your organisation that you can invite to check how Arqui has been set up and suggest changes.</p>
          <div className="space-y-4">
            {o.reviewers.map((r, i) => (
              <TextField key={i} label={`Reviewer ${i + 1} email`} type="email" value={r} error={errs[i]} onChange={(e) => set({ reviewers: o.reviewers.map((x, j) => (j === i ? e.target.value : x)) })} />
            ))}
          </div>
        </section>
        <fieldset>
          <legend className="t-h3">Scope of the digital twin</legend>
          <p className="t-small mb-4 mt-2 text-fg-3">Choose the right level of detail for the digital twin, to optimise the digital twin to mirror an entire ecosystem to specific teams.</p>
          <div className="space-y-2">
            {SCOPES.map((sc) => (
              <label key={sc.id} className={`flex cursor-pointer gap-3 rounded-card border p-3 ${o.scope === sc.id ? 'border-action bg-action-soft' : 'border-line hover:border-line-strong'}`}>
                <input type="radio" name="scope" checked={o.scope === sc.id} onChange={() => set({ scope: sc.id })} className="mt-1 size-[18px] shrink-0 accent-[var(--action)]" />
                <span><span className="block text-base font-semibold">{sc.title}</span><span className="t-small block text-fg-3">{sc.text}</span></span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="lg:col-span-3"><Button variant="primary" onClick={save}>Save about you</Button></div>
      </div>
      {modal}
    </div>
  );
}

/* ---------- Step 2 ---------- */
export function DocumentsStep() {
  const { state, setAdmin, toast } = useApp();
  const { hero, modal } = useHero('documents');
  const [src, setSrc] = useState('manual');
  const [over, setOver] = useState(false);
  const [premium, setPremium] = useState(false);
  const [recording, setRecording] = useState(state.admin.users.slice(0, 1));
  const input = useRef<HTMLInputElement>(null);
  const docs = state.admin.documents;
  const add = (names: string[]) => {
    if (!names.length) return;
    setAdmin((a) => ({ documents: [...names.filter((n) => !a.documents.includes(n)), ...a.documents] }));
    toast(`${names.length} document${names.length > 1 ? 's' : ''} added`);
  };
  const active = DOC_SOURCES.find((d) => d.id === src)!;
  return (
    <div className="space-y-6">
      {hero}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1.2fr)]">
        <section className={panel}>
          <h3 className="t-h2 mb-3">Upload documents</h3>
          <ul className="divide-y divide-line rounded-card border border-line">
            {DOC_SOURCES.map((d) => (
              <li key={d.id}>
                <button type="button" aria-pressed={src === d.id} onClick={() => (d.premium ? setPremium(true) : setSrc(d.id))} className={`block w-full p-4 text-left ${src === d.id ? 'bg-action-soft' : 'hover:bg-quiet'}`}>
                  <span className="t-h3 block">{d.title}</span>
                  <span className="t-small mt-1 block text-fg-3">{d.text}</span>
                  {d.premium && <span className="t-eyebrow mt-2 flex items-center gap-1"><Lock size={16} aria-hidden /> Premium feature</span>}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className={panel}>
          {src === 'meetings' ? (
            <>
              <h3 className="t-h2 mb-3">Recording permission</h3>
              <p className="mb-3 text-base text-fg-3">Select the users who can record meetings in Arqui.</p>
              {state.admin.users.map((u) => <Checkbox key={u} label={u} checked={recording.includes(u)} onChange={() => setRecording((r) => (r.includes(u) ? r.filter((x) => x !== u) : [...r, u]))} />)}
              <Button className="mt-4" variant="primary" onClick={() => toast('Recording permission saved')}>Save permission</Button>
            </>
          ) : (
            <>
              <h3 className="t-h2 mb-3">{active.id === 'manual' ? 'Upload documents manually' : active.title}</h3>
              <div
                onDragOver={(e) => { e.preventDefault(); setOver(true); }} onDragLeave={() => setOver(false)}
                onDrop={(e) => { e.preventDefault(); setOver(false); add(Array.from(e.dataTransfer.files).map((f) => f.name)); }}
                className={`grid place-items-center gap-2 rounded-card border-2 border-dashed p-8 text-center ${over ? 'border-action bg-action-soft' : 'border-control'}`}
              >
                <p className="text-base">Drag and drop files here</p>
                <p className="t-caption">or</p>
                <Button onClick={() => input.current?.click()}><Upload size={20} aria-hidden /> Browse for files</Button>
                <input ref={input} type="file" multiple hidden onChange={(e) => { add(Array.from(e.target.files ?? []).map((f) => f.name)); e.target.value = ''; }} />
              </div>
              <p className="t-small mt-4 text-fg-2">Files you add appear at the top of the list.</p>
            </>
          )}
        </section>
        <section className={panel}>
          <h3 className="t-h2">{docs.length} documents uploaded</h3>
          <p className="t-eyebrow mb-2 mt-3">Document name</p>
          <ul className="max-h-[480px] divide-y divide-line overflow-y-auto rounded-card border border-line">
            {docs.map((d) => (
              <li key={d} className="flex items-center justify-between gap-3 px-3 py-1.5 text-sm">
                <span className="break-all">{d}</span>
                <button type="button" aria-label={`Delete ${d}`} onClick={() => { setAdmin((a) => ({ documents: a.documents.filter((x) => x !== d) })); toast(`${d} deleted`); }} className="grid size-8 shrink-0 place-items-center rounded-ctl text-danger hover:bg-quiet"><Trash2 size={16} /></button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {premium && (
        <Modal title="Premium feature" onClose={() => setPremium(false)}>
          <p className="text-base">Automatic document collection is part of the premium plan. Upload documents manually in the meantime.</p>
          <div className="flex justify-end"><Button variant="primary" onClick={() => setPremium(false)}>Close</Button></div>
        </Modal>
      )}
      {modal}
    </div>
  );
}

/* ---------- Step 3 ---------- */
export function ModelStep() {
  const { state, setAdmin, toast } = useApp();
  const { hero, modal } = useHero('model');
  const sel = state.admin.model;
  const [cat, setCat] = useState(sel.category);
  const [mod, setMod] = useState(sel.model);
  const c = MODEL_CATEGORIES.find((x) => x.id === cat)!;
  const m = c.models.find((x) => x.id === mod) ?? c.models[0];
  const pick = (id: string) => { setCat(id); setMod(MODEL_CATEGORIES.find((x) => x.id === id)!.models[0].id); };
  const chosen = sel.category === c.id && sel.model === m.id;
  const Pill = ({ t }: { t: string }) => <li className="grid min-h-12 place-items-center rounded-card border border-line bg-quiet px-3 text-center text-base">{t}</li>;
  return (
    <div className="space-y-6">
      {hero}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,1.5fr)]">
        <section className={panel}>
          <h3 className="t-h2 mb-3">Model category</h3>
          <ul className="space-y-2">
            {MODEL_CATEGORIES.map((x) => (
              <li key={x.id}><button type="button" aria-pressed={cat === x.id} onClick={() => pick(x.id)} className={`block w-full rounded-card border p-4 text-left ${cat === x.id ? 'border-action bg-action-soft' : 'border-line hover:border-line-strong'}`}><span className="t-h3 block">{x.name}</span><span className="t-small mt-1 block text-fg-3">{x.text}</span></button></li>
            ))}
          </ul>
        </section>
        <section className={panel}>
          <h3 className="t-h2 mb-3">{c.name}</h3>
          <ul className="space-y-2">
            {c.models.map((x) => (
              <li key={x.id}><button type="button" aria-pressed={m.id === x.id} onClick={() => setMod(x.id)} className={`block w-full rounded-card border p-4 text-left ${m.id === x.id ? 'border-action bg-action-soft' : 'border-line hover:border-line-strong'}`}><span className="t-h3 block">{x.name}{sel.category === c.id && sel.model === x.id && <span className="t-caption ml-2">Selected</span>}</span><span className="t-small mt-1 block text-fg-3">{x.text}</span></button></li>
            ))}
          </ul>
        </section>
        <section className={panel}>
          <h3 className="t-h2">Model details</h3>
          <p className="mt-2 max-w-[62ch] text-base text-fg-3">{m.details}</p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <div><h4 className="t-h3 mb-2">Core perspectives</h4><ul className="grid gap-2">{CORE_PERSPECTIVES.map((t) => <Pill key={t} t={t} />)}</ul></div>
            <div><h4 className="t-h3 mb-2">Extended perspectives</h4><ul className="grid gap-2 sm:grid-cols-2">{EXT_PERSPECTIVES.map((t) => <Pill key={t} t={t} />)}</ul></div>
          </div>
          <Button className="mt-6" variant="primary" disabled={chosen} onClick={() => { setAdmin({ model: { category: c.id, model: m.id } }); toast(`${m.name} selected`); }}>{chosen ? 'Selected' : `Select ${m.name}`}</Button>
        </section>
      </div>
      {modal}
    </div>
  );
}

/* ---------- Step 4 ---------- */
function AgentCard({ a, on, toggle, details }: { a: Pick<Agent, 'id' | 'name' | 'text'> & { sources?: string }; on: boolean; toggle: () => void; details: () => void }) {
  return (
    <li className="flex">
      <article className="flex w-full flex-col rounded-card border border-line bg-card p-5">
        <h3 className="t-h3">{a.name}</h3>
        <p className="t-small mt-2 text-fg-3">{a.text}</p>
        {a.sources && <><p className="t-eyebrow mt-4">Sources</p><p className="t-small mt-1 flex-1 text-fg-3">{a.sources}</p></>}
        <Button className="mt-4 self-start" onClick={details} aria-label={`Details: ${a.name}`}>Details</Button>
        <Checkbox className="mt-1" label="Add this agent to the digital twin" checked={on} onChange={toggle} />
      </article>
    </li>
  );
}

export function AgentsStep() {
  const { state, setAdmin, toast } = useApp();
  const { hero, modal } = useHero('agents');
  const [detail, setDetail] = useState<Agent | null>(null);
  const [premium, setPremium] = useState(false);
  const on = state.admin.agents;
  const toggle = (id: string) => setAdmin((a) => ({ agents: a.agents.includes(id) ? a.agents.filter((x) => x !== id) : [...a.agents, id] }));
  return (
    <div className="space-y-6">
      {hero}
      <section className={panel}>
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <h3 className="t-h2">Select agents</h3>
          <Button onClick={() => setPremium(true)}><Lock size={20} aria-hidden /> Add a custom agent</Button>
          <p className="t-small text-fg-2">{on.length} of {AGENTS.length} agents added</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {AGENTS.map((a) => <AgentCard key={a.id} a={a} on={on.includes(a.id)} toggle={() => { toggle(a.id); }} details={() => setDetail(a)} />)}
          <li className="flex"><article className="flex w-full flex-col rounded-card border border-dashed border-control p-5">
            <h3 className="t-h3">Add a custom agent</h3>
            <p className="t-eyebrow mt-3 flex items-center gap-1"><Lock size={16} aria-hidden /> Premium feature</p>
            <Button className="mt-4 self-start" onClick={() => setPremium(true)}>Add agent</Button>
          </article></li>
        </ul>
      </section>
      {detail && (
        <Modal title={detail.name} onClose={() => setDetail(null)}>
          <p className="text-base">{detail.text}</p>
          <h4 className="t-eyebrow">Sources</h4>
          <p className="text-base text-fg-3">{detail.sources}</p>
          <div className="flex justify-end gap-2"><Button onClick={() => setDetail(null)}>Close</Button><Button variant="primary" onClick={() => { toggle(detail.id); toast(on.includes(detail.id) ? `${detail.name} removed` : `${detail.name} added`); setDetail(null); }}>{on.includes(detail.id) ? 'Remove agent' : 'Add agent'}</Button></div>
        </Modal>
      )}
      {premium && (
        <Modal title="Premium feature" onClose={() => setPremium(false)}>
          <p className="text-base">Custom agents are part of the premium plan. Choose from the agents above in the meantime.</p>
          <div className="flex justify-end"><Button variant="primary" onClick={() => setPremium(false)}>Close</Button></div>
        </Modal>
      )}
      {modal}
    </div>
  );
}

/* ---------- Step 7 ---------- */
export function PublishStep() {
  const { state, setAdmin, toast } = useApp();
  const navigate = useNavigate();
  const [publishing, setPublishing] = useState(false);
  const [errs, setErrs] = useState<Record<number, string>>({});
  const s = step('publish');
  const inv = state.admin.invites;
  const publish = () => {
    const e: Record<number, string> = {};
    inv.forEach((v, i) => { if (v && !isEmail(v)) e[i] = 'The email address is not valid. Enter it as name@example.com.'; });
    setErrs(e);
    if (Object.keys(e).length) return;
    setPublishing(true);
  };
  return (
    <div className="space-y-6">
      <PageHero step={`Step ${s.n}`} title={s.title} icon={s.icon} group={s.group} back={false} actions={<>
        <Button onClick={() => navigate('/admin/test-insights')}>Back</Button>
        <Button onClick={() => { toast('Progress saved'); navigate('/admin'); }}>Save and exit</Button>
        <Button variant="primary" onClick={publish}>Publish</Button>
      </>}>{s.blurb}</PageHero>
      <section className={panel}>
        <h3 className="t-h2 mb-4">Invite to use</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inv.map((v, i) => <TextField key={i} label={`Email ${i + 1}`} type="email" value={v} error={errs[i]} onChange={(e) => setAdmin({ invites: inv.map((x, j) => (j === i ? e.target.value : x)) })} />)}
          <div className="flex items-end"><Button onClick={() => setAdmin({ invites: [...inv, '', '', ''] })}>Add more</Button></div>
        </div>
      </section>
      {publishing && <PublishModal onClose={() => { setPublishing(false); setAdmin({ publishedAt: new Date().toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }) }); toast(`Digital twin published. ${inv.filter(Boolean).length} invitations sent.`); navigate('/admin'); }} />}
    </div>
  );
}
