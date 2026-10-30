import { useEffect, useMemo, useRef, useState } from 'react';
import { BadgeCheck, Bookmark, Download, Pencil, RefreshCw, Send, Share2, Trash2, Upload } from 'lucide-react';
import { CYBER } from '../data/content';
import { actionsFor, deliverablesFor, reportFor } from '../data/chat';
import { AREA_LABEL, CYBER_ID, type Insight } from '../data/seed';
import { useApp, type Message } from '../state/store';
import { Button, Chip, CollabChip, IconButton, Modal, RichText, Select, TextArea, TextField, originLabel } from './ui';

const TABS = ['Chat', 'Chat history', 'Chat summary', 'Suggested actions', 'Deliverables', 'Collaborators'] as const;
export type Tab = (typeof TABS)[number];

const download = (name: string, text: string) => {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  a.click();
  URL.revokeObjectURL(url);
};

function SourcesModal({ insight, onClose }: { insight: Insight; onClose: () => void }) {
  return (
    <Modal title="Sources" onClose={onClose} wide>
      <div className="space-y-5 text-sm leading-6 text-ink">
        <p className="text-muted">Arqui uses these sources to answer questions about "{insight.title}". The more documents you upload, the more complete the answers become.</p>
        <div>
          <h3 className="font-medium text-white">1. Documents uploaded to Arqui</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-muted">
            <li>Meeting_Minutes_Exec_Stakeholders_Q1_2023.docx</li>
            <li>Internal_External_Audit_Reports_2022-2023.pdf</li>
            <li>Technology_Roadmaps_2023-2025.xlsx</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white">2. Elements of the digital twin</h3>
          <p className="mt-1 text-muted">Core, Capabilities, Enabling: Information Technology (IT) capabilities, including the security operations centre.</p>
        </div>
        <div>
          <h3 className="font-medium text-white">3. External websites</h3>
          <p className="mt-1 text-muted">Public guidance from reputable industry bodies and regulators, summarised by Arqui.</p>
        </div>
      </div>
    </Modal>
  );
}

/* ---------- Chat ---------- */

function MessageView({ m, insight, onEdit, onRegenerate, onSources }: { m: Message; insight: Insight; onEdit: () => void; onRegenerate: () => void; onSources: () => void }) {
  const { toast } = useApp();
  if (m.role === 'user') {
    return (
      <div id={`msg-${m.id}`} className="flex flex-col items-end gap-1 self-end">
        <span className="text-xs uppercase tracking-wide text-subtle">You</span>
        <p className="max-w-[min(100%,640px)] rounded-2xl bg-field px-4 py-3 text-[15px] leading-6 text-white">{m.text}</p>
        <button type="button" onClick={onEdit} className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
          <Pencil size={12} aria-hidden /> Edit question
        </button>
      </div>
    );
  }
  return (
    <div id={`msg-${m.id}`} className="max-w-3xl">
      <span className="text-xs uppercase tracking-wide text-teal">Arqui</span>
      <div className="mt-1">
        <RichText lines={m.lines ?? []} />
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <button type="button" className="inline-flex items-center gap-1 text-primary hover:underline" onClick={() => { void navigator.clipboard?.writeText((m.lines ?? []).join('\n')); toast('Response copied to clipboard'); }}>
          <Share2 size={14} aria-hidden /> Export response
        </button>
        <button type="button" className="inline-flex items-center gap-1 text-primary hover:underline" onClick={onSources}>
          <BadgeCheck size={14} aria-hidden /> Check sources
        </button>
        <button type="button" className="inline-flex items-center gap-1 text-primary hover:underline" onClick={onRegenerate}>
          <RefreshCw size={14} aria-hidden /> Regenerate
        </button>
      </div>
      <span className="sr-only">{insight.title}</span>
    </div>
  );
}

function ChatPanel({ insight, scrollTo }: { insight: Insight; scrollTo: string | null }) {
  const { state, typing, ask, regenerate, editQuestion } = useApp();
  const msgs = state.chats[insight.id] ?? [];
  const [text, setText] = useState('');
  const [sources, setSources] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const isTyping = !!typing[insight.id];

  useEffect(() => {
    if (scrollTo) document.getElementById(`msg-${scrollTo}`)?.scrollIntoView({ block: 'start' });
    else endRef.current?.scrollIntoView({ block: 'end' });
  }, [msgs.length, isTyping, scrollTo]);

  const send = () => {
    if (!text.trim() || isTyping) return;
    ask(insight.id, text);
    setText('');
  };
  const starters = useMemo(() => (insight.id === CYBER_ID ? [CYBER.qa[0].q, CYBER.qa[3].q, CYBER.qa[4].q] : [`What is driving "${insight.title.toLowerCase()}"?`, 'Which teams or processes are most affected?', 'What should we do first, and who should own it?']), [insight]);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto py-4 pr-1" role="log" aria-live="polite" aria-label="Chat">
        {msgs.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-muted">Ask Arqui about this insight, or try one of these.</p>
            <div className="flex flex-wrap gap-2">
              {starters.map((s) => (
                <Button key={s} variant="outlined" className="!h-auto !rounded-2xl !py-2 text-left" onClick={() => ask(insight.id, s)}>
                  {s}
                </Button>
              ))}
            </div>
          </div>
        )}
        {msgs.map((m) => (
          <MessageView
            key={m.id}
            m={m}
            insight={insight}
            onEdit={() => setText(editQuestion(insight.id, m.id))}
            onRegenerate={() => regenerate(insight.id, m.id)}
            onSources={() => setSources(true)}
          />
        ))}
        {isTyping && <p className="text-sm text-muted" role="status">Arqui is thinking...</p>}
        <div ref={endRef} />
      </div>
      <form
        className="flex shrink-0 items-end gap-2 border-t border-line pt-3"
        onSubmit={(e) => { e.preventDefault(); send(); }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          rows={1}
          aria-label="Ask Arqui"
          placeholder="Ask Arqui"
          className="max-h-32 min-h-12 flex-1 resize-none rounded-t bg-field px-4 py-3 text-base text-white outline-none border-b border-outline focus:border-primary"
        />
        <IconButton label="Send" type="submit" disabled={!text.trim() || isTyping} className="text-primary disabled:opacity-40">
          <Send size={22} />
        </IconButton>
      </form>
      {sources && <SourcesModal insight={insight} onClose={() => setSources(false)} />}
    </div>
  );
}

/* ---------- History, summary, actions ---------- */

function HistoryPanel({ insight, onOpen }: { insight: Insight; onOpen: (id: string) => void }) {
  const { state } = useApp();
  const qs = (state.chats[insight.id] ?? []).filter((m) => m.role === 'user');
  return (
    <div className="space-y-4 py-5">
      <h3 className="text-lg font-medium text-white">Chat history ({qs.length} question{qs.length === 1 ? '' : 's'})</h3>
      {qs.length === 0 && <p className="text-sm text-muted">No questions yet. Ask one in the Chat tab.</p>}
      <ol className="space-y-1">
        {qs.map((m, i) => (
          <li key={m.id}>
            <button type="button" onClick={() => onOpen(m.id)} className="grid w-full grid-cols-[84px_1fr] gap-3 rounded-lg px-3 py-2 text-left hover:bg-white/5">
              <span className="text-primary">Question {i + 1}</span>
              <span className="text-ink">{m.text}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SummaryPanel({ insight }: { insight: Insight }) {
  const { state, toast } = useApp();
  const qs = (state.chats[insight.id] ?? []).filter((m) => m.role === 'user');
  const s =
    insight.id === CYBER_ID
      ? CYBER.summary
      : {
          observations: insight.summary.split(/(?<=[.!?])\s+/).slice(0, 3),
          responses: qs.length ? qs.map((q) => `You asked: ${q.text}`) : ['No questions have been asked yet.'],
          urgency: insight.impact === 3 || insight.likelihood === 3 ? 'High. This insight has a high impact or is very likely to happen, so it should be reviewed soon.' : 'Medium. Review this insight at your next planning session.',
          notes: ['This summary does not constitute an exhaustive analysis and further investigation might be necessary.', 'Regularly review and adapt your approach as new information becomes available.'],
        };
  const exportText = () => {
    download(`${insight.id}-summary.txt`, [insight.title, '', 'Observations:', ...s.observations, '', 'Summary of responses:', ...s.responses, '', `Urgency: ${s.urgency}`, '', 'Additional notes:', ...s.notes].join('\n'));
    toast('Summary downloaded');
  };
  const List = ({ items }: { items: readonly string[] }) => (
    <ul className="list-disc space-y-1 pl-6">{items.map((t) => <li key={t}>{t}</li>)}</ul>
  );
  return (
    <div className="space-y-4 py-5 text-[15px] leading-6 text-ink">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium text-white">Chat summary</h3>
          <p className="text-sm text-muted">Note: The chat summary is updated every time you ask a question.</p>
        </div>
        <Button onClick={exportText}><Download size={16} aria-hidden /> Export summary</Button>
      </div>
      <h4 className="font-medium text-white">Observations:</h4>
      <List items={s.observations} />
      <h4 className="font-medium text-white">Summary of responses:</h4>
      <List items={s.responses} />
      <h4 className="font-medium text-white">Urgency:</h4>
      <p>{s.urgency}</p>
      <h4 className="font-medium text-white">Additional notes:</h4>
      <List items={s.notes} />
    </div>
  );
}

function ActionsPanel({ insight, onDeliverables }: { insight: Insight; onDeliverables: () => void }) {
  const actions = actionsFor(insight);
  return (
    <div className="space-y-5 py-5">
      <div>
        <h3 className="text-lg font-medium text-white">Suggested actions ({actions.length})</h3>
        <p className="text-sm text-muted">Note: The list of suggested actions is updated every time you ask a question.</p>
      </div>
      <ul className="space-y-6">
        {actions.map((a) => (
          <li key={a.title} className="space-y-2 text-[15px] leading-6">
            <h4 className="font-medium text-white">{a.title}</h4>
            <p className="text-ink">{a.body}</p>
            <button type="button" onClick={onDeliverables} className="text-primary underline-offset-2 hover:underline">
              Arqui can help with 2 deliverables
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Deliverables ---------- */

function DeliverableDetail({ insight, title, onClose }: { insight: Insight; title: string; onClose: () => void }) {
  const { toast } = useApp();
  const report = reportFor(insight, title);
  const [files, setFiles] = useState<string[]>([...report.files]);
  const [marked, setMarked] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const asText = [title, report.date, '', report.intro, ...report.sections.flatMap((s) => ['', s.h, ...s.items.map((i) => `- ${i}`)]), '', report.disclaimer].join('\n');
  return (
    <div className="space-y-4 py-5 text-[15px] leading-6 text-ink">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-medium text-white">Detailed deliverable</h3>
        <div className="flex gap-2">
          <Button onClick={() => { download(`${title}.txt`, asText); toast('Deliverable downloaded'); }}><Download size={16} aria-hidden /> Export</Button>
          <Button onClick={() => { setMarked((b) => !b); toast(marked ? 'Bookmark removed' : 'Bookmarked'); }} aria-pressed={marked}><Bookmark size={16} aria-hidden fill={marked ? 'currentColor' : 'none'} /> Bookmark</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
      <div className="rounded-xl bg-rail p-5">
        <p className="text-xs uppercase tracking-wide text-muted">{report.date}</p>
        <h4 className="mb-2 text-base font-medium text-primary">{title}</h4>
        <p>{report.intro}</p>
        {report.sections.map((s) => (
          <div key={s.h} className="mt-4">
            <h5 className="font-medium text-white">{s.h}</h5>
            <ul className="list-disc space-y-1 pl-6">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
        <p className="mt-4 text-sm text-muted">{report.disclaimer}</p>
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="font-medium text-white">Uploaded documents</h4>
          <Button variant="tonal" onClick={() => input.current?.click()}><Upload size={16} aria-hidden /> Upload documents</Button>
          <input ref={input} type="file" multiple hidden onChange={(e) => { const n = Array.from(e.target.files ?? []).map((f) => f.name); if (n.length) { setFiles((f) => [...f, ...n]); toast(`${n.length} document${n.length > 1 ? 's' : ''} added`); } }} />
        </div>
        {files.length === 0 ? <p className="text-sm text-muted">No documents uploaded yet.</p> : <ul className="divide-y divide-line rounded-lg border border-line text-sm text-primary">{files.map((f, i) => <li key={`${f}${i}`} className="px-3 py-1.5">{f}</li>)}</ul>}
      </div>
    </div>
  );
}

function DeliverablesPanel({ insight }: { insight: Insight }) {
  const { state, statusOf, startDeliverable, addDeliverable } = useApp();
  const [open, setOpen] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({ title: '', text: '' });
  const groups = deliverablesFor(insight);
  const custom = state.customDeliverables[insight.id] ?? [];
  if (open) return <DeliverableDetail insight={insight} title={open} onClose={() => setOpen(null)} />;

  const Row = ({ title, text }: { title: string; text: string }) => {
    const status = statusOf(insight.id, title);
    return (
      <li className="grid gap-3 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-muted">Deliverable</p>
          <p className="flex flex-wrap items-center gap-2">
            <span className="text-primary">{title}</span>
            {status !== 'AVAILABLE' && <Chip className="!h-6 !text-[11px] !text-ink">{status}</Chip>}
          </p>
          <p className="text-[15px] leading-6 text-ink">{text}</p>
        </div>
        {status === 'AVAILABLE' ? (
          <Button onClick={() => startDeliverable(insight.id, title)}>Create</Button>
        ) : (
          <Button onClick={() => setOpen(title)} disabled={status === 'IN PROGRESS'}>{status === 'IN PROGRESS' ? 'Creating...' : 'Open'}</Button>
        )}
      </li>
    );
  };

  return (
    <div className="space-y-4 py-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium text-white">Deliverables</h3>
          <p className="text-sm text-muted">Note: The list of suggested deliverables is updated every time you ask a question.</p>
        </div>
        <Button onClick={() => setAdding(true)}>Add a custom deliverable</Button>
      </div>
      {groups.map((g) => (
        <section key={g.action} aria-label={g.action}>
          <h4 className="font-medium text-white">Action: {g.action}</h4>
          <ul className="divide-y divide-line">{g.items.map((i) => <Row key={i.title} title={i.title} text={i.text} />)}</ul>
        </section>
      ))}
      {custom.length > 0 && (
        <section aria-label="Custom deliverables">
          <h4 className="font-medium text-white">Custom deliverables</h4>
          <ul className="divide-y divide-line">{custom.map((c) => <Row key={c.title} title={c.title} text={c.text} />)}</ul>
        </section>
      )}
      {adding && (
        <Modal title="Add a custom deliverable" onClose={() => setAdding(false)}>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); addDeliverable(insight.id, draft.title.trim(), draft.text.trim() || 'A custom deliverable.'); setDraft({ title: '', text: '' }); setAdding(false); }}>
            <TextField label="Title" required value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            <TextArea label="What should it cover?" value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} />
            <div className="flex justify-end gap-2">
              <Button variant="text" onClick={() => setAdding(false)}>Cancel</Button>
              <Button variant="filled" type="submit">Create deliverable</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

/* ---------- Collaborators ---------- */

function CollaboratorsPanel({ insight }: { insight: Insight }) {
  const { state, addCollaborator, removeCollaborator, toast } = useApp();
  const list = state.collabs[insight.id] ?? [];
  const [f, setF] = useState({ email: '', role: 'Collaborator', message: '' });
  const [err, setErr] = useState('');
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr('Enter a valid email address.');
    if (list.some((c) => c.email.toLowerCase() === f.email.toLowerCase())) return setErr('This person is already a collaborator.');
    addCollaborator(insight.id, { ...f });
    toast(`Invitation sent to ${f.email}`);
    setF({ email: '', role: 'Collaborator', message: '' });
    setErr('');
  };
  return (
    <div className="space-y-5 py-5">
      <div>
        <h3 className="text-lg font-medium text-white">Add collaborators</h3>
        <p className="text-sm text-ink">Collaborators will be able to contribute to the chat, and access all the other tabs within this insight.</p>
      </div>
      {list.length > 0 && (
        <ul className="grid gap-4 xl:grid-cols-2">
          {list.map((c) => (
            <li key={c.email} className="flex flex-col gap-2 rounded-xl bg-rail p-5">
              <p className="break-all text-base text-white">{c.email}</p>
              <p className="text-sm text-muted">{c.role}</p>
              <p className="flex-1 text-sm leading-5 text-ink">{c.message}</p>
              <div><Button onClick={() => { removeCollaborator(insight.id, c.email); toast(`${c.email} removed`); }}><Trash2 size={15} aria-hidden /> Remove</Button></div>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={submit} noValidate className="grid max-w-2xl gap-3 rounded-xl bg-rail p-5">
        <TextField label="Email" type="email" value={f.email} error={err} onChange={(e) => { setF({ ...f, email: e.target.value }); setErr(''); }} />
        <Select label="Invite as" options={['Collaborator', 'Viewer']} value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })} />
        <TextArea label="Message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        <div><Button variant="filled" type="submit">Send invite</Button></div>
      </form>
    </div>
  );
}

/* ---------- Usefulness ---------- */

function Usefulness({ insight }: { insight: Insight }) {
  const { state, setUseful } = useApp();
  const v = state.useful[insight.id] ?? 1;
  const labels = ['No', 'Somewhat', 'Yes'];
  return (
    <fieldset className="w-full min-w-[180px] max-w-[200px]">
      <legend className="mb-2 text-xs text-white">Is this insight useful?</legend>
      <div className="relative mx-2 h-6">
        <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 rounded-full bg-panel-hi" />
        {[0, 1, 2].map((i) => (
          <label key={i} className="absolute top-0 flex h-6 w-6 -translate-x-1/2 cursor-pointer items-center justify-center" style={{ left: `${i * 50}%` }}>
            <input type="radio" name={`useful-${insight.id}`} value={i} checked={v === i} onChange={() => setUseful(insight.id, i as 0 | 1 | 2)} className="peer sr-only" />
            <span className="size-1 rounded-full bg-primary peer-checked:hidden" />
            <span className="hidden h-6 w-1.5 rounded-sm bg-white peer-checked:block peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-primary" />
            <span className="sr-only">{labels[i]}</span>
          </label>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-xs text-ink" aria-hidden>
        {labels.map((l, i) => <span key={l} className={v === i ? 'text-white' : ''}>{l.toUpperCase()}</span>)}
      </div>
    </fieldset>
  );
}

/* ---------- The detail view ---------- */

export function InsightDetail({ insight, className = '' }: { insight: Insight; className?: string }) {
  const { state } = useApp();
  const [tab, setTab] = useState<Tab>('Chat');
  const [scrollTo, setScrollTo] = useState<string | null>(null);
  const [sources, setSources] = useState(false);
  const collabCount = (state.collabs[insight.id] ?? []).length;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const next = e.key === 'ArrowRight' ? (i + 1) % TABS.length : e.key === 'ArrowLeft' ? (i + TABS.length - 1) % TABS.length : null;
    if (next === null) return;
    e.preventDefault();
    setTab(TABS[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <article aria-label={insight.title} className={`flex min-h-0 flex-col ${className}`}>
      <div className="grid shrink-0 grid-cols-[minmax(0,1fr)] gap-4 pb-3 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0 space-y-2">
          <h2 className="text-lg leading-6 text-teal">{insight.title}</h2>
          <p className="text-sm leading-5 text-muted">{insight.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Chip origin={insight.origin}>{originLabel[insight.origin]}</Chip>
            <Chip>{insight.theme}</Chip>
            <Chip>{AREA_LABEL[insight.area]}</Chip>
            <CollabChip count={collabCount} />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-start md:border-l md:border-line md:pl-6">
          <Usefulness insight={insight} />
          <button type="button" onClick={() => setSources(true)} className="inline-flex items-center gap-2 text-xs text-primary hover:underline">
            <BadgeCheck size={18} aria-hidden /> Check sources
          </button>
        </div>
      </div>
      <div role="tablist" aria-label="Insight sections" className="flex shrink-0 gap-1 overflow-x-auto border-b border-line">
        {TABS.map((t, i) => (
          <button
            key={t}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`tab-${t}`}
            aria-selected={tab === t}
            aria-controls="tabpanel"
            tabIndex={tab === t ? 0 : -1}
            onClick={() => { setTab(t); setScrollTo(null); }}
            onKeyDown={(e) => onKey(e, i)}
            className={`shrink-0 border-b-[3px] px-3 py-3.5 text-sm font-medium tracking-[0.1px] ${tab === t ? 'border-primary text-white' : 'border-transparent text-primary hover:bg-white/5'}`}
          >
            {t}
            {t === 'Collaborators' && collabCount > 0 ? ` (${collabCount})` : ''}
          </button>
        ))}
      </div>
      <div id="tabpanel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="min-h-0 flex-1 overflow-y-auto lg:pr-2" style={tab === 'Chat' ? { overflow: 'hidden' } : undefined}>
        {tab === 'Chat' && <ChatPanel insight={insight} scrollTo={scrollTo} />}
        {tab === 'Chat history' && <HistoryPanel insight={insight} onOpen={(id) => { setScrollTo(id); setTab('Chat'); }} />}
        {tab === 'Chat summary' && <SummaryPanel insight={insight} />}
        {tab === 'Suggested actions' && <ActionsPanel insight={insight} onDeliverables={() => setTab('Deliverables')} />}
        {tab === 'Deliverables' && <DeliverablesPanel insight={insight} />}
        {tab === 'Collaborators' && <CollaboratorsPanel insight={insight} />}
      </div>
      {sources && <SourcesModal insight={insight} onClose={() => setSources(false)} />}
    </article>
  );
}
