import { useEffect, useMemo, useRef, useState } from 'react';
import { BadgeCheck, Bookmark, Bot, Download, Pencil, RefreshCw, Send, Share2, Trash2, Upload } from 'lucide-react';
import { SCRIPTED, actionsFor, deliverablesFor, reportFor, summaryFor, starterQuestions } from '../data/chat';
import { AREA_LABEL, type Insight } from '../data/seed';
import { useApp, type Message } from '../state/store';
import { LandscapePanel, AnalysisPanel, TwinPanel, TwinModal, QualityPanel } from './Views';
import { Button, Chip, CollabChip, IconButton, Modal, RichText, Select, TextArea, TextField, originLabel } from './ui';

export type Tab = string;

const STANDARD = ['Chat', 'Chat history', 'Chat summary', 'Suggested actions', 'Deliverables', 'Collaborators'];
const tabsFor = (i: Insight): string[] => {
  if (i.pinned === 'landscape') return ['Insight landscape', 'Insight analysis', 'Chat', 'Chat history', 'Chat summary', 'Collaborators'];
  if (i.pinned === 'twin') return ['Digital twin', ...STANDARD];
  if (i.pinned === 'quality') return ['Assessment', ...STANDARD];
  return i.area === 'org' ? STANDARD.map((t) => (t === 'Suggested actions' ? 'Actions' : t)) : STANDARD;
};

const download = (name: string, text: string) => {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  a.click();
  URL.revokeObjectURL(url);
};

function SourcesModal({ insight, onClose }: { insight: Insight; onClose: () => void }) {
  return (
    <Modal title="Sources" onClose={onClose} wide>
      <div className="space-y-5 text-sm leading-6 text-fg">
        <p className="text-fg-2">Arqui uses these sources to answer questions about "{insight.title}". The more documents you upload, the more complete the answers become.</p>
        <div>
          <h3 className="font-medium text-fg">1. Documents uploaded to Arqui</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-fg-2">
            <li>Meeting_Minutes_Exec_Stakeholders_Q1_2023.docx</li>
            <li>Internal_External_Audit_Reports_2022-2023.pdf</li>
            <li>Technology_Roadmaps_2023-2025.xlsx</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-fg">2. Elements of the digital twin</h3>
          <p className="mt-1 text-fg-2">Core, Capabilities, Enabling: Information Technology (IT) capabilities, including the security operations centre.</p>
        </div>
        <div>
          <h3 className="font-medium text-fg">3. External websites</h3>
          <p className="mt-1 text-fg-2">Public guidance from reputable industry bodies and regulators, summarised by Arqui.</p>
        </div>
      </div>
    </Modal>
  );
}

/* ---------- Chat ---------- */

function MessageView({ m, insight, onEdit, onRegenerate, onSources, onTwin }: { m: Message; insight: Insight; onEdit: () => void; onRegenerate: () => void; onSources: () => void; onTwin: () => void }) {
  const { toast } = useApp();
  if (m.role === 'user') {
    return (
      <div id={`msg-${m.id}`} className="w-full">
        <p className="w-full rounded-ctl border border-line bg-quiet px-4 py-3 text-base">{m.text}</p>
        <button type="button" onClick={onEdit} className="mt-1 inline-flex min-h-8 items-center gap-1 text-sm text-action hover:underline hover:underline-offset-[3px]">
          <Pencil size={16} aria-hidden /> Edit question
        </button>
      </div>
    );
  }
  const org = insight.area === 'org';
  const exportIt = () => { void navigator.clipboard?.writeText((m.lines ?? []).join('\n')); toast('Response copied to clipboard'); };
  return (
    <div id={`msg-${m.id}`} className="grid gap-4 lg:grid-cols-[minmax(0,48rem)_minmax(0,12rem)]">
      <div>
        <span className="t-eyebrow flex items-center gap-2"><Bot size={16} aria-hidden /> Arqui</span>
        <div className="mt-1">
          <RichText lines={m.lines ?? []} />
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {!org && (
            <button type="button" className="inline-flex min-h-8 items-center gap-1 text-action hover:underline hover:underline-offset-[3px]" onClick={exportIt}>
              <Share2 size={16} aria-hidden /> Export response
            </button>
          )}
          {!org && (
            <button type="button" className="inline-flex min-h-8 items-center gap-1 text-action hover:underline hover:underline-offset-[3px]" onClick={onSources}>
              <BadgeCheck size={16} aria-hidden /> Check sources
            </button>
          )}
          <button type="button" className="inline-flex min-h-8 items-center gap-1 text-action hover:underline hover:underline-offset-[3px]" onClick={onRegenerate}>
            <RefreshCw size={16} aria-hidden /> Regenerate
          </button>
        </div>
        <span className="sr-only">{insight.title}</span>
      </div>
      {org && (
        <aside aria-label="Sources" className="text-sm">
          <h4 className="t-label">Sources</h4>
          <ul className="mt-1 list-disc pl-5 marker:text-action">
            <li><button type="button" onClick={onTwin} className="text-sm text-action hover:underline hover:underline-offset-[3px]">Digital twin</button></li>
          </ul>
          <button type="button" onClick={exportIt} className="mt-3 inline-flex min-h-8 items-center gap-2 text-action hover:underline hover:underline-offset-[3px]">
            <Share2 size={16} aria-hidden /> Export
          </button>
        </aside>
      )}
    </div>
  );
}

function ChatPanel({ insight, scrollTo }: { insight: Insight; scrollTo: string | null }) {
  const { state, typing, ask, regenerate, editQuestion } = useApp();
  const msgs = state.chats[insight.id] ?? [];
  void SCRIPTED;
  const [text, setText] = useState('');
  const [sources, setSources] = useState(false);
  const [twin, setTwin] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const seen = useRef(msgs.length);
  const isTyping = !!typing[insight.id];

  useEffect(() => {
    if (scrollTo) document.getElementById(`msg-${scrollTo}`)?.scrollIntoView({ block: 'start' });
    else if (seen.current !== msgs.length || isTyping) endRef.current?.scrollIntoView({ block: 'end' });
    seen.current = msgs.length;
  }, [msgs.length, isTyping, scrollTo]);

  const send = () => {
    if (!text.trim() || isTyping) return;
    ask(insight.id, text);
    setText('');
  };
  const starters = useMemo(() => starterQuestions(insight), [insight]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 py-4" role="log" aria-live="polite" aria-label="Chat">
        {msgs.length === 0 && (
          <div className="space-y-3">
            <p className="text-base text-fg-2">Ask Arqui about this insight, or choose a question to start.</p>
            <div className="flex flex-wrap gap-2">
              {starters.map((s) => (
                <Button key={s} variant="secondary" className="!h-auto !py-2 text-left" onClick={() => ask(insight.id, s)}>
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
            onTwin={() => setTwin(true)}
          />
        ))}
        {isTyping && <p className="t-small text-fg-2" role="status">Arqui is working on an answer.</p>}
        <div ref={endRef} />
      </div>
      <form
        className="sticky bottom-0 z-10 flex shrink-0 items-end gap-2 border-t border-line bg-page py-3"
        onSubmit={(e) => { e.preventDefault(); send(); }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          rows={1}
          aria-label="Ask Arqui"
          placeholder="Ask Arqui"
          className="max-h-32 min-h-11 flex-1 resize-none rounded-ctl border border-control bg-page px-3 py-2 text-base text-fg hover:border-fg-2 focus:border-action focus:shadow-[0_0_0_1px_var(--action)] focus:outline-none placeholder:text-fg-2"
        />
        <IconButton label="Send question" type="submit" disabled={!text.trim() || isTyping} className="bg-action text-on-action hover:!bg-action disabled:!bg-line">
          <Send size={20} />
        </IconButton>
      </form>
      {sources && <SourcesModal insight={insight} onClose={() => setSources(false)} />}
      {twin && <TwinModal onClose={() => setTwin(false)} />}
    </div>
  );
}

/* ---------- History, summary, actions ---------- */

function HistoryPanel({ insight, onOpen }: { insight: Insight; onOpen: (id: string) => void }) {
  const { state } = useApp();
  const qs = (state.chats[insight.id] ?? []).filter((m) => m.role === 'user');
  return (
    <div className="space-y-4 py-5">
      <h3 className="t-h3">Chat history ({qs.length} question{qs.length === 1 ? '' : 's'})</h3>
      {qs.length === 0 && <p className="text-sm text-fg-2">No questions yet. Ask one in the Chat tab.</p>}
      <ol className="space-y-1">
        {qs.map((m, i) => (
          <li key={m.id}>
            <button type="button" onClick={() => onOpen(m.id)} className="grid w-full grid-cols-[96px_1fr] gap-3 rounded-ctl px-3 py-2 text-left hover:bg-quiet active:bg-action-soft">
              <span className="t-label">Question {i + 1}</span>
              <span>{m.text}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SummaryPanel({ insight }: { insight: Insight }) {
  const { state, toast } = useApp();
  const qs = (state.chats[insight.id] ?? []).filter((m) => m.role === 'user').map((m) => m.text ?? '');
  const lines = summaryFor(insight, qs);
  const exportText = () => {
    download(`${insight.id}-summary.txt`, [insight.title, '', ...lines.map((l) => l.replace(/^• /, '- '))].join('\n'));
    toast('Summary downloaded');
  };
  return (
    <div className="space-y-4 py-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="t-h3">Chat summary</h3>
          <p className="t-small text-fg-2">Note: The chat summary is updated every time you ask a question.</p>
        </div>
        <Button onClick={exportText}><Download size={16} aria-hidden /> Export summary</Button>
      </div>
      <RichText lines={lines} />
    </div>
  );
}

function ActionsPanel({ insight, onDeliverables }: { insight: Insight; onDeliverables: () => void }) {
  const actions = actionsFor(insight);
  const groups = deliverablesFor(insight);
  return (
    <div className="space-y-5 py-5">
      <div>
        <h3 className="t-h3">Suggested actions ({actions.length})</h3>
        <p className="t-small text-fg-2">Note: The list of suggested actions is updated every time you ask a question.</p>
      </div>
      <ul className="space-y-6">
        {actions.map((a) => (
          <li key={a.title} className="space-y-2 text-base">
            <h4 className="font-semibold">{a.title}</h4>
            <p>{a.body}</p>
            {a.lines && a.lines.length > 0 && <RichText lines={a.lines} />}
            <button type="button" onClick={onDeliverables} className="text-sm text-action underline-offset-[3px] hover:underline">
              Arqui can help with {groups.find((g) => g.action.toLowerCase().includes(a.title.toLowerCase().slice(0, 12)))?.items.length ?? 2} deliverables
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
    <div className="space-y-4 py-5 text-base">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="t-h3">Detailed deliverable</h3>
        <div className="flex gap-2">
          <Button onClick={() => { download(`${title}.txt`, asText); toast('Deliverable downloaded'); }}><Download size={16} aria-hidden /> Export</Button>
          <Button onClick={() => { setMarked((b) => !b); toast(marked ? 'Bookmark removed' : 'Bookmarked'); }} aria-pressed={marked}><Bookmark size={16} aria-hidden fill={marked ? 'currentColor' : 'none'} /> Bookmark</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
      <div className="rounded-card border border-line bg-quiet p-6">
        <p className="t-eyebrow">{report.date}</p>
        <h4 className="t-h3 mb-2">{title}</h4>
        <p>{report.intro}</p>
        {report.sections.map((s) => (
          <div key={s.h} className="mt-4">
            <h5 className="font-semibold">{s.h}</h5>
            <ul className="list-disc space-y-1 pl-6">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
        <p className="t-small mt-4 text-fg-2">{report.disclaimer}</p>
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="font-semibold">Uploaded documents</h4>
          <Button variant="secondary" onClick={() => input.current?.click()}><Upload size={16} aria-hidden /> Upload documents</Button>
          <input ref={input} type="file" multiple hidden onChange={(e) => { const n = Array.from(e.target.files ?? []).map((f) => f.name); if (n.length) { setFiles((f) => [...f, ...n]); toast(`${n.length} document${n.length > 1 ? 's' : ''} added`); } }} />
        </div>
        {files.length === 0 ? <p className="text-sm text-fg-2">No documents uploaded yet.</p> : <ul className="divide-y divide-line rounded-card border border-line text-sm text-action">{files.map((f, i) => <li key={`${f}${i}`} className="px-3 py-1.5">{f}</li>)}</ul>}
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
          <p className="t-eyebrow">Deliverable</p>
          <p className="flex flex-wrap items-center gap-2">
            <span className="t-h3">{title}</span>
            {status !== 'AVAILABLE' && <Chip>{status === 'COMPLETE' ? 'Complete' : 'In progress'}</Chip>}
          </p>
          <p className="text-base text-fg-3">{text}</p>
        </div>
        {status === 'AVAILABLE' ? (
          <Button onClick={() => startDeliverable(insight.id, title)}>Create deliverable</Button>
        ) : (
          <Button onClick={() => setOpen(title)} disabled={status === 'IN PROGRESS'}>{status === 'IN PROGRESS' ? 'Creating' : 'Open deliverable'}</Button>
        )}
      </li>
    );
  };

  return (
    <div className="space-y-4 py-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="t-h3">Deliverables</h3>
          <p className="t-small text-fg-2">Note: The list of suggested deliverables is updated every time you ask a question.</p>
        </div>
        <Button onClick={() => setAdding(true)}>Add a custom deliverable</Button>
      </div>
      {groups.map((g) => (
        <section key={g.action} aria-label={g.action}>
          <h4 className="font-semibold">Action: {g.action}</h4>
          <ul className="divide-y divide-line">{g.items.map((i) => <Row key={i.title} title={i.title} text={i.text} />)}</ul>
        </section>
      ))}
      {custom.length > 0 && (
        <section aria-label="Custom deliverables">
          <h4 className="font-semibold">Custom deliverables</h4>
          <ul className="divide-y divide-line">{custom.map((c) => <Row key={c.title} title={c.title} text={c.text} />)}</ul>
        </section>
      )}
      {adding && (
        <Modal title="Add a custom deliverable" onClose={() => setAdding(false)}>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); addDeliverable(insight.id, draft.title.trim(), draft.text.trim() || 'A custom deliverable.'); setDraft({ title: '', text: '' }); setAdding(false); }}>
            <TextField label="Title" required value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            <TextArea label="What should it cover?" value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} />
            <div className="flex justify-end gap-2">
              <Button variant="tertiary" onClick={() => setAdding(false)}>Cancel</Button>
              <Button variant="primary" type="submit">Create deliverable</Button>
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
        <h3 className="t-h3">Add collaborators</h3>
        <p className="text-base text-fg-3">Collaborators will be able to contribute to the chat, and access all the other tabs within this insight.</p>
      </div>
      {list.length > 0 && (
        <ul className="grid gap-4 xl:grid-cols-2">
          {list.map((c) => (
            <li key={c.email} className="flex flex-col gap-2 rounded-card border border-line bg-card p-6">
              <p className="t-h3 break-all">{c.email}</p>
              <p className="t-small text-fg-2">{c.role}</p>
              <p className="t-small flex-1 text-fg-3">{c.message}</p>
              <div><Button onClick={() => { removeCollaborator(insight.id, c.email); toast(`${c.email} removed`); }}><Trash2 size={16} aria-hidden /> Remove</Button></div>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={submit} noValidate className="grid max-w-2xl gap-4 rounded-card border border-line bg-quiet p-6">
        <TextField label="Email" type="email" value={f.email} error={err} onChange={(e) => { setF({ ...f, email: e.target.value }); setErr(''); }} />
        <Select label="Invite as" options={['Collaborator', 'Viewer']} value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })} />
        <TextArea label="Message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        <div><Button variant="primary" type="submit">Send invite</Button></div>
      </form>
    </div>
  );
}

/* ---------- Usefulness ---------- */

function Usefulness({ insight }: { insight: Insight }) {
  const { state, setUseful } = useApp();
  const v = state.useful[insight.id] ?? null;
  const labels = ['No', 'Somewhat', 'Yes'];
  return (
    <fieldset className="min-w-[220px]">
      <legend className="t-label mb-1">Is this insight useful?</legend>
      <div className="flex overflow-hidden rounded-ctl border border-control" role="group">
        {labels.map((l, i) => (
          <button
            key={l}
            type="button"
            aria-pressed={v === i}
            onClick={() => setUseful(insight.id, i as 0 | 1 | 2)}
            className={`min-h-11 flex-1 px-3 text-sm focus-visible:!outline-offset-[-3px] ${i > 0 ? 'border-s border-control' : ''} ${v === i ? 'bg-action font-semibold text-on-action' : 'bg-page text-fg hover:bg-quiet active:bg-action-soft'}`}
          >
            {l}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/* ---------- The detail view ---------- */

export function InsightDetail({ insight, className = '' }: { insight: Insight; className?: string }) {
  const { state } = useApp();
  const TABS = tabsFor(insight);
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [scrollTo, setScrollTo] = useState<string | null>(null);
  const [sources, setSources] = useState(false);
  const collabCount = (state.collabs[insight.id] ?? []).length;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isChat = tab === 'Chat';

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const next = e.key === 'ArrowRight' ? (i + 1) % TABS.length : e.key === 'ArrowLeft' ? (i + TABS.length - 1) % TABS.length : null;
    if (next === null) return;
    e.preventDefault();
    setTab(TABS[next]);
    tabRefs.current[next]?.focus();
  };
  const chipOrigin = insight.pinned ? null : <Chip origin={insight.origin}>{originLabel[insight.origin]}</Chip>;

  return (
    <article aria-label={insight.title} className={`flex flex-col ${className}`}>
      <div className="grid shrink-0 grid-cols-[minmax(0,1fr)] gap-4 pb-3 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0 space-y-2">
          <h2 className="t-h2">{insight.title}</h2>
          <p className="text-base text-fg-3">{insight.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {insight.pinned === 'landscape' ? <Chip origin="self">{originLabel.self}</Chip> : chipOrigin}
            {!insight.pinned || insight.pinned === 'landscape' ? <Chip>{insight.theme}</Chip> : null}
            {!insight.pinned && <Chip>{AREA_LABEL[insight.area]}</Chip>}
            <CollabChip count={collabCount} />
          </div>
        </div>
        {(!insight.pinned || insight.pinned === 'landscape') && (
          <div className="flex flex-col gap-3 md:items-start md:pl-6">
            <Usefulness insight={insight} />
            <button type="button" onClick={() => setSources(true)} className="inline-flex min-h-8 items-center gap-2 text-sm text-action hover:underline hover:underline-offset-[3px]">
              <BadgeCheck size={20} aria-hidden /> Check sources
            </button>
          </div>
        )}
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
            className={`min-h-11 shrink-0 border-b-[3px] px-3 text-base transition-colors ${tab === t ? 'border-brand font-semibold text-fg' : 'border-transparent font-medium text-fg-2 hover:border-line-strong hover:text-fg'}`}
          >
            {t}
            {t === 'Collaborators' && collabCount > 0 ? ` (${collabCount})` : ''}
          </button>
        ))}
      </div>
      <div id="tabpanel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="flex-1">
        {tab === 'Insight landscape' && <LandscapePanel onOpen={() => setTab('Insight analysis')} />}
        {tab === 'Insight analysis' && <AnalysisPanel />}
        {tab === 'Digital twin' && <TwinPanel />}
        {tab === 'Assessment' && <QualityPanel />}
        {isChat && <ChatPanel insight={insight} scrollTo={scrollTo} />}
        {tab === 'Chat history' && <HistoryPanel insight={insight} onOpen={(id) => { setScrollTo(id); setTab('Chat'); }} />}
        {tab === 'Chat summary' && <SummaryPanel insight={insight} />}
        {(tab === 'Suggested actions' || tab === 'Actions') && <ActionsPanel insight={insight} onDeliverables={() => setTab('Deliverables')} />}
        {tab === 'Deliverables' && <DeliverablesPanel insight={insight} />}
        {tab === 'Collaborators' && <CollaboratorsPanel insight={insight} />}
      </div>
      {sources && <SourcesModal insight={insight} onClose={() => setSources(false)} />}
    </article>
  );
}
