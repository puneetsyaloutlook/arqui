import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button, Checkbox, Chip, CollabChip, Modal, TextField, originLabel } from '../components/ui';
import { AREA_LABEL, AREA_PATH, DASHBOARD_IDS, THEMES, type Area, type Origin } from '../data/seed';
import { useApp } from '../state/store';

const AREAS = Object.keys(AREA_LABEL) as Area[];
const TYPES: { key: Origin | 'collab'; label: string }[] = [
  { key: 'auto', label: 'Auto-generated' },
  { key: 'user', label: 'User-generated' },
  { key: 'collab', label: 'Collaborative' },
];

export default function Dashboard() {
  const { state, addTheme } = useApp();
  const navigate = useNavigate();
  const [areas, setAreas] = useState<Area[]>(AREAS);
  const [themes, setThemes] = useState<string[] | null>(null); // null means all themes, including ones added later
  const [types, setTypes] = useState<(Origin | 'collab')[]>(['auto', 'user', 'collab']);
  const [newTheme, setNewTheme] = useState<string | null>(null);

  const allThemes = [...THEMES, ...state.customThemes];
  const activeThemes = themes ?? allThemes;
  const todays = useMemo(() => DASHBOARD_IDS.map((id) => state.insights.find((i) => i.id === id)).filter((i) => !!i), [state.insights]);
  const shown = todays.filter((i) => areas.includes(i.area) && (themes === null || themes.includes(i.theme)) && (types.includes(i.origin) || (!!i.collaborators && types.includes('collab'))));
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <div className="py-6">
      <header className="pb-6">
        <h2 className="t-h2">Today’s auto-insights ({todays.length})</h2>
        <p className="t-deck mt-1 max-w-[62ch]">Arqui has generated {todays.length} new insights for you to review today.</p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside aria-label="Filters">
          <h3 className="t-eyebrow mb-3">Filters</h3>
          <fieldset>
            <legend className="t-label mb-1">Insights about</legend>
            {AREAS.map((a) => <Checkbox key={a} label={AREA_LABEL[a]} checked={areas.includes(a)} onChange={() => setAreas(toggle(areas, a))} />)}
          </fieldset>
          <fieldset className="mt-5">
            <legend className="t-label mb-1">By theme</legend>
            {allThemes.map((t) => <Checkbox key={t} label={t} checked={activeThemes.includes(t)} onChange={() => setThemes(toggle(activeThemes, t))} />)}
            <Button className="mt-3" onClick={() => setNewTheme('')}><Plus size={20} aria-hidden /> Add a theme</Button>
          </fieldset>
          <fieldset className="mt-5">
            <legend className="t-label mb-1">By type</legend>
            {TYPES.map((t) => <Checkbox key={t.key} label={t.label} checked={types.includes(t.key)} onChange={() => setTypes(toggle(types, t.key))} />)}
          </fieldset>
        </aside>
        <section aria-label="Today’s auto-insights">
          <ul className="space-y-4">
            {shown.map((i) => (
              <li key={i.id}>
                <button type="button" onClick={() => navigate(`${AREA_PATH[i.area]}?id=${i.id}`)} className="block w-full rounded-card border border-line bg-card p-6 text-left transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-subtle active:bg-quiet active:shadow-none">
                  <span className="t-h3 block">{i.title}</span>
                  <span className="mt-1 block text-base text-fg-3">{i.dashboard ?? i.summary}</span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    <Chip origin={i.origin}>{originLabel[i.origin]}</Chip>
                    <Chip>{AREA_LABEL[i.area]}</Chip>
                    <Chip>{i.theme}</Chip>
                    <CollabChip count={i.collaborators} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {shown.length === 0 && <p className="rounded-card border border-dashed border-control p-6 text-base text-fg-2">No insights match these filters. Tick a filter to see more.</p>}
        </section>
      </div>
      {newTheme !== null && (
        <Modal title="Add a theme" onClose={() => setNewTheme(null)}>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); const n = newTheme.trim(); if (n) addTheme(n); setNewTheme(null); }}>
            <TextField label="Theme name" autoFocus value={newTheme} onChange={(e) => setNewTheme(e.target.value)} />
            <div className="flex justify-end gap-2">
              <Button variant="tertiary" onClick={() => setNewTheme(null)}>Cancel</Button>
              <Button variant="primary" type="submit" disabled={!newTheme.trim()}>Add theme</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
