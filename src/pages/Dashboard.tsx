import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Chip, Modal, TextField } from '../components/ui';
import { InsightCard } from '../components/Insights';
import { AREA_LABEL, AREA_PATH, THEMES, WIP_DELIVERABLES, type Area, type Origin } from '../data/seed';
import { useApp } from '../state/store';
import { originLabel } from '../components/ui';

const TABS = ["Today's auto-insights", 'Work-in-progress insights', 'Work-in-progress deliverables'] as const;

export default function Dashboard() {
  const { state, addTheme, statusOf } = useApp();
  const navigate = useNavigate();
  const [tab, setTab] = useState<(typeof TABS)[number]>(TABS[0]);
  const [area, setArea] = useState<Area | ''>('');
  const [theme, setTheme] = useState('');
  const [origin, setOrigin] = useState<Origin | ''>('');
  const [newTheme, setNewTheme] = useState<string | null>(null);
  const today = new Date().toISOString().slice(0, 10);

  const open = (id: string) => {
    const i = state.insights.find((x) => x.id === id);
    if (i) navigate(`${AREA_PATH[i.area]}?id=${i.id}`);
  };
  const base = useMemo(() => {
    const auto = state.insights.filter((i) => i.origin === 'auto' && i.created === today).slice(0, 6);
    const wip = state.insights.filter((i) => i.origin !== 'auto' || (state.chats[i.id]?.length ?? 0) > 0).filter((i) => !auto.includes(i)).slice(0, 12);
    return tab === TABS[0] ? auto : wip;
  }, [state.insights, state.chats, tab, today]);
  const shown = base.filter((i) => (!area || i.area === area) && (!theme || i.theme === theme) && (!origin || i.origin === origin));
  const themes = [...THEMES, ...state.customThemes];
  const sel = 'h-10 rounded-lg border border-outline bg-panel px-3 text-sm text-ink';

  return (
    <div className="h-full overflow-y-auto px-4 pb-8 lg:px-6">
      <p className="mb-4 max-w-2xl text-sm text-muted">Here is what Arqui found in your organisation today. Open an insight to ask questions, plan actions and create deliverables.</p>
      <div role="tablist" aria-label="Dashboard sections" className="flex gap-1 overflow-x-auto border-b border-line">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`shrink-0 border-b-[3px] px-4 py-3.5 text-sm font-medium ${tab === t ? 'border-primary text-white' : 'border-transparent text-primary hover:bg-white/5'}`}>
            {t}
          </button>
        ))}
      </div>

      {tab !== TABS[2] && (
        <div className="flex flex-wrap items-center gap-3 py-4">
          <label className="sr-only" htmlFor="f-area">Area</label>
          <select id="f-area" className={sel} value={area} onChange={(e) => setArea(e.target.value as Area | '')}>
            <option value="">All areas</option>
            {(Object.keys(AREA_LABEL) as Area[]).map((a) => <option key={a} value={a}>{AREA_LABEL[a]}</option>)}
          </select>
          <label className="sr-only" htmlFor="f-theme">Theme</label>
          <select id="f-theme" className={sel} value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="">All themes</option>
            {themes.map((t) => <option key={t}>{t}</option>)}
          </select>
          <label className="sr-only" htmlFor="f-type">Type</label>
          <select id="f-type" className={sel} value={origin} onChange={(e) => setOrigin(e.target.value as Origin | '')}>
            <option value="">All types</option>
            {(Object.keys(originLabel) as Origin[]).map((o) => <option key={o} value={o}>{originLabel[o]}</option>)}
          </select>
          <Button variant="text" onClick={() => setNewTheme('')}>Add a theme</Button>
        </div>
      )}

      {tab !== TABS[2] ? (
        <>
          <ul className="grid gap-3 py-2 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((i) => (
              <li key={i.id} className="flex flex-col">
                <InsightCard insight={i} selected={false} onSelect={() => open(i.id)} />
                <p className="mt-1 px-2 text-xs text-muted">{AREA_LABEL[i.area]}</p>
              </li>
            ))}
          </ul>
          {shown.length === 0 && <p className="py-6 text-sm text-muted">No insights match these filters.</p>}
        </>
      ) : (
        <ul className="grid gap-3 py-4 md:grid-cols-2 xl:grid-cols-3">
          {WIP_DELIVERABLES.map((d) => {
            const status = statusOf(d.insightId, d.title);
            return (
              <li key={d.title} className="flex flex-col gap-2 rounded-2xl bg-rail p-4">
                <p className="text-xs uppercase tracking-wide text-muted">{d.date}</p>
                <p className="text-base text-primary">{d.title}</p>
                <p className="flex-1 text-sm leading-5 text-ink">{d.text}</p>
                <div className="flex items-center justify-between">
                  <Chip>{status === 'AVAILABLE' ? 'IN PROGRESS' : status}</Chip>
                  <Button onClick={() => open(d.insightId)}>Open insight</Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {newTheme !== null && (
        <Modal title="Add a theme" onClose={() => setNewTheme(null)}>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); if (newTheme.trim()) { addTheme(newTheme.trim()); setTheme(newTheme.trim()); } setNewTheme(null); }}>
            <TextField label="Theme name" autoFocus value={newTheme} onChange={(e) => setNewTheme(e.target.value)} />
            <div className="flex justify-end gap-2">
              <Button variant="text" onClick={() => setNewTheme(null)}>Cancel</Button>
              <Button variant="filled" type="submit" disabled={!newTheme.trim()}>Add theme</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
