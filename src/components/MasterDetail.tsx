import { type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type Area } from '../data/seed';
import { useApp } from '../state/store';
import { InsightDetail } from './Detail';
import { BackToList, InsightList } from './Insights';

/** List of insights on the left, selected insight on the right. On small screens only one shows at a time. */
export function MasterDetail({ area, extraTop, empty }: { area: Area; extraTop?: ReactNode; empty?: ReactNode }) {
  const { state } = useApp();
  const [params, setParams] = useSearchParams();
  const id = params.get('id');
  const insights = state.insights.filter((i) => i.area === area);
  const selected = insights.find((i) => i.id === id) ?? null;
  const select = (next: string | null) => setParams(next ? { id: next } : {}, { replace: false });

  return (
    <div className="grid h-full grid-cols-[minmax(0,1fr)] gap-4 px-4 pb-4 lg:grid-cols-[minmax(320px,400px)_minmax(0,1fr)] lg:px-6">
      <div className={`${selected ? 'hidden lg:flex' : 'flex'} min-h-0 flex-col`}>
        <InsightList area={area} insights={insights} selectedId={selected?.id ?? null} onSelect={select} extraTop={extraTop} className="h-full" />
      </div>
      <div className={`${selected ? 'flex' : 'hidden lg:flex'} min-h-0 min-w-0 flex-col rounded-3xl bg-panel p-4 lg:p-6`}>
        {selected ? (
          <>
            <BackToList onClick={() => select(null)} />
            <InsightDetail key={selected.id} insight={selected} className="min-h-0 flex-1" />
          </>
        ) : (
          (empty ?? <p className="m-auto max-w-sm text-center text-muted">Select an insight to read the analysis, ask questions and plan next steps.</p>)
        )}
      </div>
    </div>
  );
}
