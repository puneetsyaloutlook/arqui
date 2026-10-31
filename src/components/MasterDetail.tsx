import { useEffect, useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type Area } from '../data/seed';
import { useApp } from '../state/store';
import { InsightDetail } from './Detail';
import { BackToList, InsightList } from './Insights';

const DEFAULTS: Record<Area, string> = { 'current-work': 'cyber-remote', scenario: 'landscape', org: 'twin' };

function useDesktop() {
  const q = '(min-width: 1024px)';
  const [d, setD] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const on = () => setD(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return d;
}

/** List of insights on the left, selected insight on the right. On small screens only one shows at a time. */
export function MasterDetail({ area, extraTop, empty }: { area: Area; extraTop?: ReactNode; empty?: ReactNode }) {
  const { state } = useApp();
  const desktop = useDesktop();
  const [params, setParams] = useSearchParams();
  const id = params.get('id');
  const insights = state.insights.filter((i) => i.area === area);
  const chosen = insights.find((i) => i.id === id) ?? null;
  // On a wide screen the Figma shows a default insight; on a narrow one the list comes first.
  const selected = chosen ?? (desktop ? insights.find((i) => i.id === DEFAULTS[area]) ?? null : null);
  const select = (next: string | null) => setParams(next ? { id: next } : {}, { replace: false });

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-6 py-4 lg:grid-cols-[360px_minmax(0,1fr)]">
      <div className={`${selected && !desktop ? 'hidden' : 'flex'} flex-col lg:sticky lg:top-16 lg:-my-4 lg:h-[calc(100dvh-4rem)] lg:self-start lg:py-4`}>
        <InsightList area={area} insights={insights} selectedId={selected?.id ?? null} onSelect={select} extraTop={extraTop} className="lg:h-full" />
      </div>
      <div className={`${selected ? 'flex' : 'hidden lg:flex'} min-w-0 flex-col lg:border-s lg:border-line lg:ps-6`}>
        {selected ? (
          <>
            <BackToList onClick={() => select(null)} />
            <InsightDetail key={selected.id} insight={selected} className="flex-1" />
          </>
        ) : (
          (empty ?? <p className="m-auto max-w-sm text-center text-fg-2">Select an insight to read the analysis, ask questions and plan next steps.</p>)
        )}
      </div>
    </div>
  );
}
