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
        className={`block w-full rounded-card border bg-card p-4 text-left transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-subtle active:bg-quiet active:shadow-none ${selected ? 'border-action shadow-[0_0_0_1px_var(--action)]' : 'border-line'}`}
      >
        <span className="block text-base font-semibold leading-snug">{insight.title}</span>
        <span className="mt-3 flex flex-wrap gap-2">
          {insight.pinned ? (
            <>
              <Chip><Lock size={16} aria-hidden /> Default view</Chip>
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
    <section aria-label="Insights" className={`flex flex-col ${className}`}>
      <div className="relative flex shrink-0 flex-nowrap items-center gap-x-1 pb-3">
        <Button variant="tertiary" onClick={() => setFilterOpen((o) => !o)} aria-expanded={filterOpen} aria-label={`Filter insights${active ? `, ${active} applied` : ''}`} className="!px-2 whitespace-nowrap">
          <ListFilter size={20} aria-hidden /> Filter{active ? ` (${active})` : ''}
        </Button>
        <Button variant="tertiary" onClick={() => setSort((s) => (s === 'date' ? 'title' : 'date'))} className="!px-2 whitespace-nowrap">
          Sort by: {sort === 'date' ? 'Date' : 'Title'}
        </Button>
        <Button variant="primary" className="ml-auto !px-4 whitespace-nowrap" onClick={() => setChat('')}>
          <Plus size={20} aria-hidden /> Start new chat
        </Button>
        {filterOpen && (
          <div className="absolute left-0 top-full z-20 mt-1 max-h-[60dvh] w-[min(100%,340px)] overflow-y-auto rounded-ctl border border-line-strong bg-overlay p-4 shadow-elevated">
            <p className="t-eyebrow mb-1">By theme</p>
            {allThemes.map((t) => (
              <Checkbox key={t} label={t} checked={themes.includes(t)} onChange={() => setThemes(toggle(themes, t))} />
            ))}
            <p className="t-eyebrow mb-1 mt-3">By type</p>
            {(['auto', 'user', 'self'] as Origin[]).map((o) => (
              <Checkbox key={o} label={originLabel[o]} checked={origins.includes(o)} onChange={() => setOrigins(toggle(origins, o))} />
            ))}
            <div className="mt-3 flex justify-between">
              <Button variant="tertiary" onClick={() => { setThemes([]); setOrigins([]); }}>Clear filters</Button>
              <Button variant="primary" onClick={() => setFilterOpen(false)}>Apply filters</Button>
            </div>
          </div>
        )}
      </div>
      {extraTop}
      <ul className="space-y-3 pb-4 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-1">
        {insights.filter((i) => i.pinned).map((i) => (
          <InsightCard key={i.id} insight={i} selected={i.id === selectedId} onSelect={() => onSelect(i.id)} />
        ))}
        {insights.some((i) => i.pinned) && <li aria-hidden className="my-3 border-t border-line" />}
        {shown.map((i) => (
          <InsightCard key={i.id} insight={i} selected={i.id === selectedId} onSelect={() => onSelect(i.id)} />
        ))}
        {shown.length === 0 && <li className="t-small rounded-card border border-dashed border-control p-4 text-fg-2">No insights match these filters. Clear a filter to see more.</li>}
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
            <p className="text-base text-fg-3">Ask a question about your organisation. Arqui creates a new insight from it that you can come back to.</p>
            <TextArea label="Your question" value={chat} onChange={(e) => setChat(e.target.value)} autoFocus required />
            <div className="flex justify-end gap-2">
              <Button variant="tertiary" onClick={() => setChat(null)}>Cancel</Button>
              <Button variant="primary" type="submit" disabled={!chat.trim()}>Start chat</Button>
            </div>
          </form>
        </Modal>
      )}
    </section>
  );
}

export function BackToList({ onClick, label = 'Back to insights' }: { onClick: () => void; label?: string }) {
  return (
    <Button variant="tertiary" onClick={onClick} className="mb-2 self-start lg:hidden">
      <ArrowLeft size={20} aria-hidden /> {label}
    </Button>
  );
}
