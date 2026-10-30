import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MasterDetail } from '../components/MasterDetail';
import { InsightDetail } from '../components/Detail';
import { ScenarioChart } from '../components/ScenarioChart';
import { Button } from '../components/ui';
import { AREA_PATH, PERSPECTIVES, QUALITY_SOURCES } from '../data/seed';
import { useApp } from '../state/store';

export function CurrentWork() {
  return <MasterDetail area="current-work" />;
}

export function ScenarioPlanning() {
  const { state } = useApp();
  const [params, setParams] = useSearchParams();
  const insights = state.insights.filter((i) => i.area === 'scenario');
  const selected = insights.find((i) => i.id === params.get('id'));
  const view = params.get('view') === 'analysis' || selected ? 'analysis' : 'landscape';
  const setView = (v: 'landscape' | 'analysis') => setParams(v === 'landscape' ? {} : { view: v });

  const tabs = (
    <div role="tablist" aria-label="Scenario planning views" className="mb-3 flex gap-1 border-b border-line">
      {(['landscape', 'analysis'] as const).map((v) => (
        <button key={v} role="tab" aria-selected={view === v} onClick={() => setView(v)} className={`border-b-[3px] px-4 py-3 text-sm font-medium ${view === v ? 'border-primary text-white' : 'border-transparent text-primary hover:bg-white/5'}`}>
          {v === 'landscape' ? 'Scenario landscape' : 'Analysis'}
        </button>
      ))}
    </div>
  );

  if (view === 'landscape') {
    return (
      <div className="h-full overflow-y-auto px-4 pb-8 lg:px-6">
        {tabs}
        <p className="mb-4 max-w-2xl text-sm text-muted">Each bubble is a scenario Arqui is tracking. Select one to open its analysis.</p>
        <ScenarioChart insights={insights} />
      </div>
    );
  }
  return <MasterDetail area="scenario" extraTop={tabs} />;
}

export function OrgViews() {
  const { state } = useApp();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [lens, setLens] = useState<'twin' | 'quality'>('twin');
  const id = params.get('id');
  const selected = state.insights.find((i) => i.id === id && i.area === 'org');

  if (selected) {
    return (
      <div className="flex h-full flex-col gap-2 px-4 pb-4 lg:px-6">
        <Button variant="text" className="self-start" onClick={() => setParams({})}>Back to organisational views</Button>
        <div className="min-h-0 flex-1 rounded-3xl bg-panel p-4 lg:p-6">
          <InsightDetail key={selected.id} insight={selected} className="h-full" />
        </div>
      </div>
    );
  }

  const others = state.insights.filter((i) => i.area === 'org' && i.id !== 'data-quality');
  return (
    <div className="h-full overflow-y-auto px-4 pb-8 lg:px-6">
      <div role="tablist" aria-label="Organisational views" className="mb-4 flex gap-1 border-b border-line">
        {([['twin', 'Digital twin overview'], ['quality', 'Data quality assessment']] as const).map(([k, label]) => (
          <button key={k} role="tab" aria-selected={lens === k} onClick={() => setLens(k)} className={`border-b-[3px] px-4 py-3 text-sm font-medium ${lens === k ? 'border-primary text-white' : 'border-transparent text-primary hover:bg-white/5'}`}>
            {label}
          </button>
        ))}
      </div>

      {lens === 'twin' ? (
        <>
          <p className="mb-4 max-w-2xl text-sm text-muted">The digital twin models your organisation from the documents and systems you have connected. Core perspectives are always present. The others are added as Arqui learns more.</p>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {PERSPECTIVES.map((p) => (
              <li key={p.name} className="rounded-2xl bg-rail p-4">
                <p className="text-xs uppercase tracking-wide text-muted">{p.core ? 'Core' : 'Extended'}</p>
                <p className="mt-1 text-lg text-primary">{p.name}</p>
                <p className="text-sm text-ink">{p.count} elements</p>
              </li>
            ))}
          </ul>
          <h2 className="mb-3 mt-8 text-lg text-white">Insights from the digital twin</h2>
          <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {others.map((i) => (
              <li key={i.id}>
                <button type="button" onClick={() => navigate(`${AREA_PATH.org}?id=${i.id}`)} className="flex h-full w-full flex-col items-start justify-start rounded-2xl bg-rail p-4 text-left hover:bg-panel">
                  <span className="block text-base text-primary">{i.title}</span>
                  <span className="mt-2 line-clamp-3 block text-sm leading-5 text-muted">{i.summary}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className="mb-4 max-w-2xl text-sm text-muted">To make the insights as reliable as possible, this section assesses the data quality of the documents behind the digital twin. Scores are out of 100.</p>
          <ul className="max-w-3xl space-y-3">
            {QUALITY_SOURCES.map((s) => (
              <li key={s.name} className="rounded-2xl bg-rail p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-base text-white">{s.name}</p>
                  <p className="text-lg text-primary">{s.score}</p>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-panel-hi" role="img" aria-label={`Score ${s.score} out of 100`}>
                  <div className="h-full rounded-full" style={{ width: `${s.score}%`, background: s.score >= 80 ? '#00c2a7' : s.score >= 65 ? '#ffbb33' : '#ff693e' }} />
                </div>
                <p className="mt-2 text-sm text-muted">{s.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4"><Button onClick={() => navigate(`${AREA_PATH.org}?id=data-quality`)}>Ask Arqui about data quality</Button></div>
        </>
      )}
    </div>
  );
}
