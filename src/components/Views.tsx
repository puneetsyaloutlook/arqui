import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AREA_PATH, type Horizon, type Insight } from '../data/seed';
import { CAPABILITY_BUBBLES, PERSPECTIVES, PROJECT_BANDS, QUALITY, TWIN_SUMMARY } from '../data/twin';
import { useApp } from '../state/store';

/* ---------- Insight landscape ---------- */

const HORIZONS: Horizon[] = ['Long term', 'Medium term', 'Short term'];
// Colour is likelihood. Size is impact.
const LIKE = { 1: { label: 'Low likelihood', colour: '#00c2a7' }, 2: { label: 'Medium likelihood', colour: '#ffbb33' }, 3: { label: 'High likelihood', colour: '#ff693e' } } as const;
const SIZE = { 1: 26, 2: 44, 3: 62 } as const;
const IMPACT = { 1: 'Low impact', 2: 'Medium impact', 3: 'High impact' } as const;

export function LandscapePanel({ onOpen }: { onOpen?: () => void }) {
  void onOpen;
  const { state } = useApp();
  const navigate = useNavigate();
  const items = state.insights.filter((i) => i.area === 'scenario' && i.horizon);
  const open = (i: Insight) => navigate(`${AREA_PATH.scenario}?id=${i.id}`);
  return (
    <div className="py-5">
      <h3 className="mb-4 text-[22px] text-white">Insights landscape</h3>
      <div className="border-t border-pink">
        {HORIZONS.map((h) => {
          const row = items.filter((i) => i.horizon === h).sort((a, b) => a.theme.localeCompare(b.theme));
          return (
            <div key={h} className="grid min-h-[120px] grid-cols-[88px_minmax(0,1fr)] items-center gap-2 border-b border-pink py-3 sm:grid-cols-[150px_minmax(0,1fr)]">
              <p className="text-sm uppercase tracking-wide text-white">{h.replace(' ', '\n')}</p>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {row.map((i) => {
                  const c = LIKE[i.likelihood ?? 2].colour;
                  const s = SIZE[i.impact ?? 2];
                  return (
                    <li key={i.id}>
                      <button
                        type="button"
                        onClick={() => open(i)}
                        title={`${i.title}: ${IMPACT[i.impact ?? 2]}, ${LIKE[i.likelihood ?? 2].label.toLowerCase()}`}
                        aria-label={`${i.title}. ${IMPACT[i.impact ?? 2]}, ${LIKE[i.likelihood ?? 2].label.toLowerCase()}`}
                        className="block rounded-full border-2 transition-transform hover:scale-110 focus-visible:scale-110"
                        style={{ width: s, height: s, borderColor: c, background: `${c}33` }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4 text-sm text-white">
        {([1, 2, 3] as const).map((k) => (
          <div key={k} className="flex flex-col items-center gap-2">
            <span className="rounded-full border border-ink" style={{ width: SIZE[k], height: SIZE[k] }} aria-hidden />
            {IMPACT[k]}
          </div>
        ))}
        {([1, 2, 3] as const).map((k) => (
          <div key={k} className="flex flex-col items-center gap-2">
            <span className="size-11 rounded-full border-2" style={{ borderColor: LIKE[k].colour, background: `${LIKE[k].colour}33` }} aria-hidden />
            {LIKE[k].label}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">Select a circle to open that insight.</p>
    </div>
  );
}

/** A ranked table of the same scenarios, for people who prefer rows to circles. */
export function AnalysisPanel() {
  const { state } = useApp();
  const navigate = useNavigate();
  const items = state.insights
    .filter((i) => i.area === 'scenario' && i.horizon)
    .sort((a, b) => (b.impact ?? 0) * (b.likelihood ?? 0) - (a.impact ?? 0) * (a.likelihood ?? 0));
  return (
    <div className="py-5">
      <h3 className="text-lg font-medium text-white">Insight analysis</h3>
      <p className="mb-4 text-sm text-muted">Scenarios ranked by impact multiplied by likelihood.</p>
      <div className="overflow-x-auto rounded-xl bg-rail">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-muted">
            <tr><th className="p-3">Scenario</th><th className="p-3">Time horizon</th><th className="p-3">Impact</th><th className="p-3">Likelihood</th></tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id} className="border-t border-line">
                <td className="p-3"><button type="button" className="text-left text-primary hover:underline" onClick={() => navigate(`${AREA_PATH.scenario}?id=${i.id}`)}>{i.title}</button></td>
                <td className="p-3 text-ink">{i.horizon}</td>
                <td className="p-3 text-ink">{IMPACT[i.impact ?? 2].replace(' impact', '')}</td>
                <td className="p-3 text-ink">{LIKE[i.likelihood ?? 2].label.replace(' likelihood', '')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Digital twin ---------- */

const CORE_COLOURS = ['#6a0a52', '#42283a', '#3a2030', '#55164a'];
const EXT_COLOURS = ['#bfa874', '#bb9238', '#b87a08', '#a06e5e', '#944a38', '#8b3a22'];

function arc(cx: number, cy: number, r0: number, r1: number, a0: number, a1: number) {
  const pt = (r: number, a: number) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  const [x0, y0] = pt(r1, a0), [x1, y1] = pt(r1, a1), [x2, y2] = pt(r0, a1), [x3, y3] = pt(r0, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${x0} ${y0} A${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L${x2} ${y2} A${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`;
}

/** Ring chart of the perspectives: core perspectives inside, extended perspectives outside. */
function PerspectiveRing({ name, onSelect }: { name: string; onSelect: (n: string) => void }) {
  const core = PERSPECTIVES.filter((p) => p.core);
  const ext = PERSPECTIVES.filter((p) => !p.core);
  const seg = (p: (typeof PERSPECTIVES)[number], i: number, n: number, r0: number, r1: number, start: number, colour: string) => {
    const step = 360 / n;
    const selected = p.name === name;
    return (
      <path
        key={p.name}
        d={arc(120, 120, r0, r1, start + i * step, start + (i + 1) * step)}
        fill={colour}
        stroke={selected ? '#d0bcff' : '#202125'}
        strokeWidth={selected ? 4 : 3}
        className="cursor-pointer transition-opacity hover:opacity-80"
        role="button"
        tabIndex={0}
        aria-label={`${p.name}${selected ? ' (selected)' : ''}`}
        aria-pressed={selected}
        onClick={() => onSelect(p.name)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(p.name)}
      >
        <title>{p.name}</title>
      </path>
    );
  };
  return (
    <svg viewBox="0 0 240 240" className="size-64 shrink-0 sm:size-72" role="group" aria-label="Perspectives of the digital twin">
      {ext.map((p, i) => seg(p, i, ext.length, 66, 118, -60, EXT_COLOURS[i]))}
      {core.map((p, i) => seg(p, i, core.length, 0, 62, -135, CORE_COLOURS[i]))}
    </svg>
  );
}


function Confidence({ value }: { value: number }) {
  return (
    <div className="w-40 shrink-0">
      <p className="text-[10px] uppercase tracking-wide text-muted">Confidence level</p>
      <div className="mt-1 h-1 rounded bg-panel-hi" role="img" aria-label={`Confidence ${value} out of 100`}>
        <div className="h-full rounded bg-teal" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

/** Treemap of capabilities. Area is investment and colour is the number of projects. Groups sit side by side, capabilities stack inside each group. */
function CapabilityChart() {
  const groups = ['Strategic', 'Enabling', 'Core'] as const;
  const fmt = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const total = CAPABILITY_BUBBLES.reduce((t, b) => t + b.investment, 0);
  return (
    <section aria-label="Capability analysis" className="mt-10">
      <h3 className="mb-4 text-[22px] text-white">Capability analysis</h3>
      <div className="flex h-[440px] w-full gap-1 overflow-hidden rounded-xl" role="group" aria-label="Capabilities by investment">
        {groups.map((g) => {
          const items = CAPABILITY_BUBBLES.filter((b) => b.group === g);
          const sum = items.reduce((t, b) => t + b.investment, 0);
          return (
            <div key={g} className="flex min-w-0 flex-col gap-1" style={{ flexBasis: `${(sum / total) * 100}%`, flexGrow: 0 }}>
              <p className="shrink-0 truncate px-1 text-xs uppercase tracking-wide text-muted">{g}</p>
              {items.sort((x, y) => y.investment - x.investment).map((b) => (
                <div
                  key={b.name}
                  className="flex min-h-0 flex-col justify-between overflow-hidden rounded-md p-2 text-black/85"
                  style={{ flexBasis: `${(b.investment / sum) * 100}%`, flexGrow: 0, background: PROJECT_BANDS[b.band].colour }}
                  role="img"
                  aria-label={`${b.name} in ${g}: ${fmt(b.investment)}, ${PROJECT_BANDS[b.band].label}`}
                  title={`${b.name}: ${fmt(b.investment)}, ${PROJECT_BANDS[b.band].label}`}
                >
                  <span className="text-sm font-medium leading-4">{b.name}</span>
                  <span className="text-sm">{fmt(b.investment)}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 text-sm text-ink">
        <p><span className="text-muted">Size represents</span> Investment</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-muted">Colour represents Projects</span>
          {PROJECT_BANDS.map((b) => (
            <span key={b.label} className="flex items-center gap-2"><span className="size-3 rounded-sm" style={{ background: b.colour }} aria-hidden />{b.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TwinPanel() {
  const [name, setName] = useState('Capabilities');
  const p = PERSPECTIVES.find((x) => x.name === name) ?? PERSPECTIVES[0];
  const List = ({ core }: { core: boolean }) => (
    <>
      <h4 className="mb-2 mt-4 text-base text-white">{core ? 'Core perspectives' : 'Extended perspectives'}</h4>
      <ul className="space-y-1">
        {PERSPECTIVES.filter((x) => x.core === core).map((x) => (
          <li key={x.name}>
            <button type="button" onClick={() => setName(x.name)} aria-pressed={x.name === name} className={`w-full rounded-full px-6 py-3 text-left text-base ${x.name === name ? 'bg-panel-hi text-primary' : 'text-primary hover:bg-white/5'}`}>
              {x.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <div className="py-5">
      <h3 className="mb-4 text-[22px] text-white">Summary of digital twin</h3>
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        <PerspectiveRing name={name} onSelect={setName} />
        <p className="max-w-xl font-body text-base leading-8 text-white">{TWIN_SUMMARY}</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <nav aria-label="Perspectives"><List core /><List core={false} /></nav>
        <div className="rounded-2xl bg-rail p-6">
          {p.groups.map((g) => (
            <section key={g.label} className="mb-6 last:mb-0">
              <p className="text-xs uppercase tracking-wide text-pink">{g.label}</p>
              <ul className="mt-3 space-y-5">
                {g.items.map((i) => (
                  <li key={i.name} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div className="min-w-0 flex-1 basis-64">
                      <p className="text-lg text-white">{i.name}</p>
                      <p className="text-sm leading-5 text-ink">{i.text.replace(' (authored)', '')}</p>
                    </div>
                    <Confidence value={i.confidence} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <CapabilityChart />
    </div>
  );
}

/* ---------- Data quality ---------- */

export function QualityPanel() {
  const q = QUALITY;
  const H = ({ children }: { children: string }) => <h3 className="mb-6 text-[28px] text-white">{children}</h3>;
  return (
    <div className="space-y-10 py-5 font-body text-[15px] leading-6 text-white">
      <p>{q.intro}</p>
      <hr className="border-line" />
      <section>
        <H>Data accuracy</H>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-rail p-6">
            <h4 className="mb-4 font-medium">Metrics</h4>
            <p>{q.accuracy.metricsIntro}</p>
            {q.accuracy.metrics.map((m) => (
              <div key={m.value} className="mt-4"><p className="text-[28px] leading-8">{m.value}</p><p>{m.text}</p></div>
            ))}
          </div>
          <div className="rounded-xl bg-rail p-6">
            <h4 className="mb-4 font-medium">Indicators</h4>
            {q.accuracy.indicators.map((m) => (
              <div key={m.value} className="mb-6"><p className="text-[28px] leading-8">{m.value}</p><p>{m.text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-line" />
      <section>
        <H>Data consistency</H>
        <h4 className="mb-2 font-medium">Assessment</h4>
        <p>{q.consistency.assessment}</p>
        <h4 className="mb-2 mt-6 font-medium">Inconsistent Data</h4>
        <ul className="list-disc space-y-2 pl-6">{q.consistency.inconsistent.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>
      <hr className="border-line" />
      <section>
        <H>Data source transparency</H>
        <h4 className="mb-2 font-medium">Source Information</h4>
        <p>{q.transparency.intro}</p>
        <ul className="mt-4 space-y-3">
          {q.transparency.sources.map((s) => (
            <li key={s.name} className="flex items-start justify-between gap-6">
              <p><strong className="font-medium">{s.name}:</strong> {s.text}</p>
              <p className="text-[22px]">{s.pct}%</p>
            </li>
          ))}
        </ul>
        <h4 className="mb-2 mt-8 font-medium">Source Credibility</h4>
        <p>{q.transparency.credibility}</p>
      </section>
    </div>
  );
}
