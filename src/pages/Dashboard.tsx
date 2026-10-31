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
  const shown = todays.filter((i) => areas.includes(i.area) && activeThemes.includes(i.theme) && (types.includes(i.origin) || (!!i.collaborators && types.includes('collab'))));
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <div className="h-full overflow-y-auto px-4 pb-6 lg:flex lg:flex-col lg:overflow-hidden lg:px-6">
      <header className="shrink-0 pb-4">
        <h2 className="text-[28px] leading-9 text-ink">Today’s auto-insights ({todays.length})</h2>
        <p className="mt-1 text-base text-ink">Arqui has generated {todays.length} new insights for you to review today.</p>
      </header>
      <div className="grid min-h-0 flex-1 gap-6 lg:grid-cols-[minmax(220px,250px)_minmax(0,1fr)]">
        <aside aria-label="Filters" className="lg:overflow-y-auto lg:pr-2">
          <h3 className="mb-3 text-sm uppercase tracking-wide text-muted">Filters</h3>
          <fieldset>
            <legend className="mb-1 text-base text-ink">Insights about</legend>
            {AREAS.map((a) => <Checkbox key={a} label={AREA_LABEL[a]} checked={areas.includes(a)} onChange={() => setAreas(toggle(areas, a))} className="!pl-1" />)}
          </fieldset>
          <fieldset className="mt-5">
            <legend className="mb-1 text-base text-ink">By theme</legend>
            {allThemes.map((t) => <Checkbox key={t} label={t} checked={activeThemes.includes(t)} onChange={() => setThemes(toggle(activeThemes, t))} className="!pl-1" />)}
            <Button className="mt-3" onClick={() => setNewTheme('')}><Plus size={16} aria-hidden /> Add a theme</Button>
          </fieldset>
          <fieldset className="mt-5">
            <legend className="mb-1 text-base text-ink">By type</legend>
            {TYPES.map((t) => <Checkbox key={t.key} label={t.label} checked={types.includes(t.key)} onChange={() => setTypes(toggle(types, t.key))} className="!pl-1" />)}
          </fieldset>
        </aside>
        <section aria-label="Today’s auto-insights" className="min-h-0 rounded-3xl bg-panel p-4 sm:p-6 lg:overflow-y-auto">
          <ul className="space-y-8">
            {shown.map((i) => (
              <li key={i.id}>
                <button type="button" onClick={() => navigate(`${AREA_PATH[i.area]}?id=${i.id}`)} className="group block w-full text-left">
                  <span className="block text-base leading-6 text-primary group-hover:underline">{i.title}</span>
                  <span className="mt-1 block text-[15px] leading-5 text-ink">{i.dashboard ?? i.summary}</span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    <Chip origin={i.origin}>{originLabel[i.origin]}</Chip>
                    <Chip>{AREA_LABEL[i.area]}</Chip>
                    <Chip>{i.theme}</Chip>
                    <CollabChip count={i.collaborators} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {shown.length === 0 && <p className="text-sm text-muted">No insights match these filters.</p>}
        </section>
      </div>
      {newTheme !== null && (
        <Modal title="Add a theme" onClose={() => setNewTheme(null)}>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); const n = newTheme.trim(); if (n) addTheme(n); setNewTheme(null); }}>
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
