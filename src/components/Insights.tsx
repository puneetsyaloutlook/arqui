import { useMemo, useState, type ReactNode } from 'react';
import { ArrowLeft, ListFilter, Lock, Plus } from 'lucide-react';
import { THEMES, type Area, type Insight, type Origin } from '../data/seed';
import { useApp } from '../state/store';
import { Button, Checkbox, Chip, CollabChip, Modal, TextArea, originLabel } from './ui';

export type SortKey = 'date' | 'title';

export function InsightCard({ insight, selected, onSelect }: { insight: Insight; selected: boolean; onSelect: () => void }) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={selected ? 'true' : undefined}
        className={`w-full rounded-2xl p-3.5 text-left transition-colors ${selected ? 'bg-panel-hi' : 'bg-rail hover:bg-panel'}`}
      >
        <span className={`block text-base leading-6 ${selected ? 'text-teal' : 'text-primary'}`}>{insight.title}</span>
        <span className="mt-3 flex flex-wrap gap-2">
          {insight.pinned ? (
            <>
              <Chip><Lock size={14} aria-hidden /> Default view</Chip>
              {insight.theme === 'Digital twin' && <Chip>Digital twin</Chip>}
            </>
          ) : (
            <>
              <Chip origin={insight.origin}>{originLabel[insight.origin]}</Chip>
              <Chip>{insight.theme}</Chip>
            </>
          )}
          <CollabChip count={insight.collaborators} />
        </span>
      </button>
    </li>
  );
}

export function InsightList({
  area,
  insights,
  selectedId,
  onSelect,
  extraTop,
  className = '',
}: {
  area: Area;
  insights: Insight[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  extraTop?: ReactNode;
  className?: string;
}) {
  const { newInsight, state } = useApp();
  const [sort, setSort] = useState<SortKey>('date');
  const [filterOpen, setFilterOpen] = useState(false);
  const [themes, setThemes] = useState<string[]>([]);
  const [origins, setOrigins] = useState<Origin[]>([]);
  const [chat, setChat] = useState<string | null>(null);

  const allThemes = [...THEMES, ...state.customThemes];
  const shown = useMemo(() => {
    const list = insights.filter((i) => !i.pinned).filter((i) => (themes.length ? themes.includes(i.theme) : true) && (origins.length ? origins.includes(i.origin) : true));
    return [...list].sort((a, b) => (sort === 'date' ? b.created.localeCompare(a.created) : a.title.localeCompare(b.title)));
  }, [insights, themes, origins, sort]);
  const active = themes.length + origins.length;
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <section aria-label="Insights" className={`flex min-h-0 flex-col ${className}`}>
      <div className="relative flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 px-1 pb-3">
        <Button variant="text" onClick={() => setFilterOpen((o) => !o)} aria-expanded={filterOpen} className="!px-3 !text-primary">
          <ListFilter size={18} aria-hidden /> Filter insights{active ? ` (${active})` : ''}
        </Button>
        <Button variant="text" onClick={() => setSort((s) => (s === 'date' ? 'title' : 'date'))} className="!px-3 !text-primary">
          Sort by: {sort === 'date' ? 'Date' : 'Title'}
        </Button>
        <Button variant="tonal" className="ml-auto !bg-[#36343b]" onClick={() => setChat('')}>
          <Plus size={18} aria-hidden /> Start new chat
        </Button>
        {filterOpen && (
          <div className="absolute left-0 top-full z-20 mt-1 max-h-[60dvh] w-[min(100%,340px)] overflow-y-auto rounded-2xl bg-panel p-4 shadow-xl">
            <p className="mb-1 text-xs uppercase tracking-wide text-muted">By theme</p>
            {allThemes.map((t) => (
              <Checkbox key={t} label={t} checked={themes.includes(t)} onChange={() => setThemes(toggle(themes, t))} />
            ))}
            <p className="mb-1 mt-3 text-xs uppercase tracking-wide text-muted">By type</p>
            {(['auto', 'user', 'self'] as Origin[]).map((o) => (
              <Checkbox key={o} label={originLabel[o]} checked={origins.includes(o)} onChange={() => setOrigins(toggle(origins, o))} />
            ))}
            <div className="mt-3 flex justify-between">
              <Button variant="text" onClick={() => { setThemes([]); setOrigins([]); }}>Clear</Button>
              <Button variant="filled" onClick={() => setFilterOpen(false)}>Done</Button>
            </div>
          </div>
        )}
      </div>
      {extraTop}
      <ul className="min-h-0 flex-1 space-y-2.5 overflow-y-auto pb-4">
        {insights.filter((i) => i.pinned).map((i) => (
          <InsightCard key={i.id} insight={i} selected={i.id === selectedId} onSelect={() => onSelect(i.id)} />
        ))}
        {insights.some((i) => i.pinned) && <li aria-hidden className="my-3 border-t border-line" />}
        {shown.map((i) => (
          <InsightCard key={i.id} insight={i} selected={i.id === selectedId} onSelect={() => onSelect(i.id)} />
        ))}
        {shown.length === 0 && <li className="rounded-2xl bg-rail p-4 text-sm text-muted">No insights match these filters.</li>}
      </ul>
      {chat !== null && (
        <Modal title="Start a new chat" onClose={() => setChat(null)}>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!chat.trim()) return;
              const created = newInsight(area, chat);
              setChat(null);
              onSelect(created.id);
            }}
          >
            <p className="text-sm text-muted">Ask a question about your organisation. Arqui creates a new insight from it that you can come back to.</p>
            <TextArea label="Your question" value={chat} onChange={(e) => setChat(e.target.value)} autoFocus required />
            <div className="flex justify-end gap-2">
              <Button variant="text" onClick={() => setChat(null)}>Cancel</Button>
              <Button variant="filled" type="submit" disabled={!chat.trim()}>Start chat</Button>
            </div>
          </form>
        </Modal>
      )}
    </section>
  );
}

export function BackToList({ onClick, label = 'Back to insights' }: { onClick: () => void; label?: string }) {
  return (
    <Button variant="text" onClick={onClick} className="mb-2 self-start lg:hidden">
      <ArrowLeft size={18} aria-hidden /> {label}
    </Button>
  );
}
