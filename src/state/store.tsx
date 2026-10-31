import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { answerFor, deliverablesFor, type Lines } from '../data/chat';
import { CYBER } from '../data/content';
import { AGENTS, DOCUMENTS, VERSIONS } from '../data/admin';
import { INNOVATION_QA, QUANTUM, REGULATION_QA } from '../data/content2';
import { CYBER_ID, SEED_INSIGHTS, type Area, type Insight } from '../data/seed';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  text?: string;
  lines?: Lines;
  at: number;
}
export interface Collaborator {
  email: string;
  role: string;
  message: string;
}
export interface Profile {
  name: string;
  department: string;
  jobTitle: string;
  interests: string[];
  roleNotes: string;
}
export type DeliverableStatus = 'COMPLETE' | 'IN PROGRESS' | 'AVAILABLE';

export interface AdminState {
  org: { name: string; type: string; reach: string; size: string; scope: string; reviewers: string[] };
  documents: string[];
  model: { category: string; model: string };
  agents: string[];
  customAgents: { id: string; name: string; text: string }[];
  reviewed: string[]; // perspective items
  custom: { perspective: string; name: string; text: string }[];
  ratings: Record<string, number>; // test insights
  users: string[];
  invites: string[];
  versionNow: Record<string, number>;
  publishedAt: string | null;
}

interface State {
  email: string | null;
  role: 'user' | 'admin' | null;
  admin: AdminState;
  onboarded: boolean;
  profile: Profile;
  insights: Insight[];
  chats: Record<string, Message[]>;
  useful: Record<string, 0 | 1 | 2>;
  collabs: Record<string, Collaborator[]>;
  deliverableStatus: Record<string, DeliverableStatus>; // key: insightId|title
  customDeliverables: Record<string, { title: string; text: string }[]>;
  customThemes: string[];
}

const KEY = 'arqui-state-v3';
let uid = 0;
const newId = () => `${Date.now().toString(36)}-${(uid++).toString(36)}`;

function seedChats(): Record<string, Message[]> {
  const base = Date.now() - 36e5;
  const build = (id: string, qa: readonly { q: string; a: readonly string[] }[]) => {
    const msgs: Message[] = [];
    qa.forEach((x, i) => {
      msgs.push({ id: `seed-${id}-q${i}`, role: 'user', text: x.q, at: base + i * 6e4 });
      msgs.push({ id: `seed-${id}-a${i}`, role: 'assistant', lines: x.a, at: base + i * 6e4 + 3e4 });
    });
    return msgs;
  };
  const quantum = SEED_INSIGHTS.find((i) => i.id === 'quantum');
  return {
    [CYBER_ID]: build(CYBER_ID, CYBER.qa),
    regulation: build('regulation', REGULATION_QA),
    innovation: build('innovation', INNOVATION_QA),
    quantum: quantum ? build('quantum', QUANTUM.questions.map((q) => ({ q, a: answerFor(quantum, q) }))) : [],
  };
}

const initialAdmin = (): AdminState => ({
  org: { name: 'Acme Corporation', type: '', reach: '', size: '', scope: 'organisation', reviewers: ['', '', '', ''] },
  documents: [...DOCUMENTS],
  model: { category: 'tech', model: 'bizbok' },
  agents: AGENTS.slice(0, 5).map((a) => a.id),
  customAgents: [],
  reviewed: ['Innovation management'],
  custom: [],
  ratings: { c1: 4 },
  users: ['sam.forcast@acme.arqui.com.au', 'jamie.blueprint@acme.arqui.com.au'],
  invites: ['', '', '', '', '', '', '', '', '', '', ''],
  versionNow: { about: VERSIONS.about.rows[0].v, documents: VERSIONS.documents.rows[0].v, model: VERSIONS.model.rows[0].v, agents: VERSIONS.agents.rows[0].v },
  publishedAt: null,
});

function initial(): State {
  return {
    email: null,
    role: null,
    admin: initialAdmin(),
    onboarded: false,
    profile: { name: '', department: '', jobTitle: '', interests: [], roleNotes: '' },
    insights: SEED_INSIGHTS,
    chats: seedChats(),
    useful: {},
    collabs: {
      [CYBER_ID]: CYBER.collaborators.map((c) => ({ email: c.email, role: 'Collaborator', message: c.message })),
      landscape: CYBER.collaborators.map((c) => ({ email: c.email, role: 'Collaborator', message: c.message })),
      innovation: [
        { email: 'alex.clickworthy@acme.arqui.com.au', role: 'Collaborator', message: '' },
        { email: 'jordan.phisher@acme.arqui.com.au', role: 'Collaborator', message: '' },
      ],
    },
    deliverableStatus: { [`${CYBER_ID}|${CYBER.deliverables[0].items[0].title}`]: 'COMPLETE', [`${CYBER_ID}|${CYBER.deliverables[0].items[1].title}`]: 'IN PROGRESS' },
    customDeliverables: {},
    customThemes: [],
  };
}

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...initial(), ...JSON.parse(raw) };
  } catch {
    /* fall through to a fresh state */
  }
  return initial();
}

interface Api {
  state: State;
  typing: Record<string, boolean>;
  signIn: (email: string, role?: 'user' | 'admin') => void;
  setAdmin: (patch: Partial<AdminState> | ((a: AdminState) => Partial<AdminState>)) => void;
  signOut: () => void;
  saveProfile: (p: Partial<Profile>, onboarded?: boolean) => void;
  ask: (insightId: string, question: string) => void;
  regenerate: (insightId: string, messageId: string) => void;
  editQuestion: (insightId: string, messageId: string) => string;
  setUseful: (insightId: string, v: 0 | 1 | 2) => void;
  addCollaborator: (insightId: string, c: Collaborator) => void;
  removeCollaborator: (insightId: string, email: string) => void;
  startDeliverable: (insightId: string, title: string) => void;
  addDeliverable: (insightId: string, title: string, text: string) => void;
  newInsight: (area: Area, question: string) => Insight;
  addTheme: (name: string) => void;
  statusOf: (insightId: string, title: string) => DeliverableStatus;
  toast: (msg: string) => void;
  toastMsg: string | null;
}

const Ctx = createContext<Api | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(load);
  const [typing, setTyping] = useState<Record<string, boolean>>({});
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage may be unavailable; the app still works for this session */
    }
  }, [state]);
  useEffect(() => {
    // Anything left "IN PROGRESS" from a previous visit finishes shortly after load.
    const pending = Object.keys(state.deliverableStatus).filter((k) => state.deliverableStatus[k] === 'IN PROGRESS');
    if (!pending.length) return;
    const t = window.setTimeout(() => setState((s) => ({ ...s, deliverableStatus: Object.fromEntries(Object.entries(s.deliverableStatus).map(([k, v]) => [k, v === 'IN PROGRESS' ? 'COMPLETE' : v])) as State['deliverableStatus'] })), 3500);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    later(() => setToastMsg((m) => (m === msg ? null : m)), 2600);
  }, []);

  const reply = useCallback((insightId: string, question: string, replaceId?: string) => {
    setTyping((t) => ({ ...t, [insightId]: true }));
    later(() => {
      setState((s) => {
        const insight = s.insights.find((i) => i.id === insightId);
        if (!insight) return s;
        const lines = answerFor(insight, question);
        const list = s.chats[insightId] ?? [];
        const next: Message = { id: replaceId ?? newId(), role: 'assistant', lines, at: Date.now() };
        const updated = replaceId ? list.map((m) => (m.id === replaceId ? next : m)) : [...list, next];
        return { ...s, chats: { ...s.chats, [insightId]: updated } };
      });
      setTyping((t) => ({ ...t, [insightId]: false }));
    }, 900 + Math.random() * 500);
  }, []);

  const api = useMemo<Api>(
    () => ({
      state,
      typing,
      toastMsg,
      toast,
      signIn: (email, role = 'user') => setState((s) => ({ ...s, email, role })),
      setAdmin: (patch) => setState((s) => ({ ...s, admin: { ...s.admin, ...(typeof patch === 'function' ? patch(s.admin) : patch) } })),
      signOut: () => setState((s) => ({ ...s, email: null, role: null })),
      saveProfile: (p, onboarded) => setState((s) => ({ ...s, profile: { ...s.profile, ...p }, onboarded: onboarded ?? s.onboarded })),
      ask: (insightId, question) => {
        const q = question.trim();
        if (!q) return;
        setState((s) => ({ ...s, chats: { ...s.chats, [insightId]: [...(s.chats[insightId] ?? []), { id: newId(), role: 'user', text: q, at: Date.now() }] } }));
        reply(insightId, q);
      },
      regenerate: (insightId, messageId) => {
        const list = state.chats[insightId] ?? [];
        const idx = list.findIndex((m) => m.id === messageId);
        const q = list[idx - 1];
        if (q?.text) reply(insightId, q.text, messageId);
      },
      editQuestion: (insightId, messageId) => {
        const list = state.chats[insightId] ?? [];
        const idx = list.findIndex((m) => m.id === messageId);
        const text = list[idx]?.text ?? '';
        const removeCount = list[idx + 1]?.role === 'assistant' ? 2 : 1;
        setState((s) => ({ ...s, chats: { ...s.chats, [insightId]: list.filter((_, i) => i < idx || i >= idx + removeCount) } }));
        return text;
      },
      setUseful: (insightId, v) => setState((s) => ({ ...s, useful: { ...s.useful, [insightId]: v } })),
      addCollaborator: (insightId, c) => setState((s) => ({ ...s, collabs: { ...s.collabs, [insightId]: [...(s.collabs[insightId] ?? []), c] } })),
      removeCollaborator: (insightId, email) => setState((s) => ({ ...s, collabs: { ...s.collabs, [insightId]: (s.collabs[insightId] ?? []).filter((c) => c.email !== email) } })),
      statusOf: (insightId, title) => {
        const stored = state.deliverableStatus[`${insightId}|${title}`];
        if (stored) return stored;
        const insight = state.insights.find((i) => i.id === insightId);
        const found = insight ? deliverablesFor(insight).flatMap((g) => g.items).find((i) => i.title === title) : undefined;
        return found?.status ?? 'AVAILABLE';
      },
      startDeliverable: (insightId, title) => {
        const key = `${insightId}|${title}`;
        setState((s) => ({ ...s, deliverableStatus: { ...s.deliverableStatus, [key]: 'IN PROGRESS' } }));
        later(() => {
          setState((s) => ({ ...s, deliverableStatus: { ...s.deliverableStatus, [key]: 'COMPLETE' } }));
          toast(`"${title}" is ready`);
        }, 3200);
      },
      addDeliverable: (insightId, title, text) => {
        setState((s) => ({ ...s, customDeliverables: { ...s.customDeliverables, [insightId]: [...(s.customDeliverables[insightId] ?? []), { title, text }] } }));
        const key = `${insightId}|${title}`;
        setState((s) => ({ ...s, deliverableStatus: { ...s.deliverableStatus, [key]: 'IN PROGRESS' } }));
        later(() => setState((s) => ({ ...s, deliverableStatus: { ...s.deliverableStatus, [key]: 'COMPLETE' } })), 3200);
      },
      newInsight: (area, question) => {
        const q = question.trim();
        const insight: Insight = {
          id: `user-${newId()}`,
          title: q.length > 70 ? `${q.slice(0, 67)}...` : q.replace(/\?+$/, ''),
          summary: `Started from a question: "${q}"`,
          area,
          origin: 'user',
          theme: 'Strategic alignment',
          created: new Date().toISOString().slice(0, 10),
          ...(area === 'scenario' ? { horizon: 'Medium term' as const, impact: 2 as const, likelihood: 2 as const } : {}),
        };
        setState((s) => ({ ...s, insights: [insight, ...s.insights] }));
        setState((s) => ({ ...s, chats: { ...s.chats, [insight.id]: [{ id: newId(), role: 'user', text: q, at: Date.now() }] } }));
        reply(insight.id, q);
        return insight;
      },
      addTheme: (name) => setState((s) => (s.customThemes.includes(name) ? s : { ...s, customThemes: [...s.customThemes, name] })),
    }),
    [state, typing, toastMsg, toast, reply],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useApp(): Api {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp must be used inside StoreProvider');
  return v;
}
