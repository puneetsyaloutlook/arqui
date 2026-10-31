import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { AREA_PATH, type Horizon, type Insight } from '../data/seed';
import { CAPABILITY_DATA, MEASURES, PERSPECTIVES, PROJECT_BANDS, QUALITY, TWIN_SUMMARY, type CapabilityData, type Measure } from '../data/twin';
import { useApp } from '../state/store';
import { Button, IconButton } from './ui';

/* ---------- Insight landscape ---------- */

const HORIZONS: Horizon[] = ['Long term', 'Medium term', 'Short term'];
// Fill is likelihood (a light to dark teal ramp) and size is impact.
const LIKE = {
  1: { label: 'Low likelihood', fill: 'var(--teal-200)' },
  2: { label: 'Medium likelihood', fill: 'var(--primary)' },
  3: { label: 'High likelihood', fill: 'var(--teal-900)' },
} as const;
const SIZE = { 1: 24, 2: 40, 3: 56 } as const;
const IMPACT = { 1: 'Low impact', 2: 'Medium impact', 3: 'High impact' } as const;
const dot = (k: 1 | 2 | 3, size: number) => ({ width: size, height: size, background: LIKE[k].fill, border: '1.5px solid var(--chart-ink)' });

export function LandscapePanel({ onOpen }: { onOpen?: () => void }) {
  void onOpen;
  const { state } = useApp();
  const navigate = useNavigate();
  const items = state.insights.filter((i) => i.area === 'scenario' && i.horizon);
  const open = (i: Insight) => navigate(`${AREA_PATH.scenario}?id=${i.id}`);
  return (
    <div className="py-5">
      <h3 className="t-h2 mb-4">Insights landscape</h3>
      <div className="border-t border-line">
        {HORIZONS.map((h) => {
          const row = items.filter((i) => i.horizon === h).sort((a, b) => a.theme.localeCompare(b.theme));
          return (
            <div key={h} className="grid min-h-[112px] grid-cols-[96px_minmax(0,1fr)] items-center gap-3 border-b border-line py-3 sm:grid-cols-[136px_minmax(0,1fr)]">
              <p className="t-eyebrow">{h}</p>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {row.map((i) => (
                  <li key={i.id}>
                    <button
                      type="button"
                      onClick={() => open(i)}
                      title={`${i.title}: ${IMPACT[i.impact ?? 2]}, ${LIKE[i.likelihood ?? 2].label.toLowerCase()}`}
                      aria-label={`${i.title}. ${IMPACT[i.impact ?? 2]}, ${LIKE[i.likelihood ?? 2].label.toLowerCase()}`}
                      className="block rounded-full transition-transform hover:scale-110 focus-visible:scale-110"
                      style={dot(i.likelihood ?? 2, SIZE[i.impact ?? 2])}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <ul className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4 text-sm" aria-label="Key">
        {([1, 2, 3] as const).map((k) => (
          <li key={`i${k}`} className="flex flex-col items-center gap-2">
            <span className="rounded-full border border-fg-2" style={{ width: SIZE[k], height: SIZE[k] }} aria-hidden />
            {IMPACT[k]}
          </li>
        ))}
        {([1, 2, 3] as const).map((k) => (
          <li key={`l${k}`} className="flex flex-col items-center gap-2">
            <span className="rounded-full" style={dot(k, 32)} aria-hidden />
            {LIKE[k].label}
          </li>
        ))}
      </ul>
      <p className="t-caption mt-4">Select a circle to open that insight.</p>
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
  const th = 'whitespace-nowrap border-b-2 border-line px-4 py-3 text-start font-semibold text-fg-2';
  const td = 'border-b border-line px-4 py-3 align-top';
  return (
    <div className="py-5">
      <h3 className="t-h3">Insight analysis</h3>
      <p className="t-small mb-4 text-fg-2">Scenarios ranked by impact multiplied by likelihood.</p>
      <div className="overflow-x-auto">
        <table className="t-small w-full min-w-[560px]">
          <thead><tr><th scope="col" className={th}>Scenario</th><th scope="col" className={th}>Time horizon</th><th scope="col" className={th}>Impact</th><th scope="col" className={th}>Likelihood</th></tr></thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id} className="hover:bg-quiet">
                <th scope="row" className={`${td} text-start font-normal`}><button type="button" className="text-start text-action hover:underline hover:underline-offset-[3px]" onClick={() => navigate(`${AREA_PATH.scenario}?id=${i.id}`)}>{i.title}</button></th>
                <td className={td}>{i.horizon}</td>
                <td className={td}>{IMPACT[i.impact ?? 2].replace(' impact', '')}</td>
                <td className={td}>{LIKE[i.likelihood ?? 2].label.replace(' likelihood', '')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Digital twin ---------- */

// Core perspectives are teal, extended perspectives are blue and warm.
const CORE_COLOURS = ['var(--teal-900)', 'var(--teal-700)', 'var(--teal-500)', 'var(--teal-300)'];
const EXT_COLOURS = ['var(--blue-900)', 'var(--blue-700)', 'var(--blue-500)', 'var(--warm-700)', 'var(--secondary)', 'var(--warm-500)'];

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
        stroke={selected ? 'var(--text-primary)' : 'var(--surface-page)'}
        strokeWidth={selected ? 3 : 2}
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
    <svg viewBox="0 0 240 240" className="size-56 shrink-0 sm:size-64" role="group" aria-label="Perspectives of the digital twin">
      {ext.map((p, i) => seg(p, i, ext.length, 66, 118, -60, EXT_COLOURS[i]))}
      {core.map((p, i) => seg(p, i, core.length, 0, 62, -135, CORE_COLOURS[i]))}
    </svg>
  );
}

/** The meter from the design system: a label, a value and a bar. */
function Confidence({ value }: { value: number }) {
  return (
    <div className="w-40 shrink-0">
      <p className="t-caption flex justify-between"><span>Confidence level</span><span className="tnum text-fg">{value}%</span></p>
      <div className="mt-1 h-1.5 overflow-hidden rounded-[3px] border border-line bg-quiet" role="img" aria-label={`Confidence ${value} out of 100`}>
        <div className="h-full bg-mark" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

const fmtMoney = (n: number) => `$${n.toLocaleString('en-AU')}`;
const fmtMeasure = (m: Measure, v: number) => (m === 'Investment' ? fmtMoney(v) : m === 'Projects' ? `${v}` : `${v}%`);

/** The filter droplist from the design: a button that opens a list of measures. */
function Droplist({ label, value, onChange }: { label: string; value: Measure; onChange: (m: Measure) => void }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => !box.current?.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div ref={box} className="relative">
      <p className="t-label mb-1">{label}</p>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} aria-label={`${label}: ${value}`} onClick={() => setOpen((o) => !o)} className="flex min-h-11 w-full items-center justify-between rounded-ctl border border-control bg-page px-3 text-left text-base hover:border-fg-2">
        {value}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-fg-2"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <ul role="listbox" aria-label={label} className="absolute left-0 top-full z-20 mt-1 w-full rounded-ctl border border-line-strong bg-overlay p-1 shadow-elevated">
          {MEASURES.map((m) => (
            <li key={m} role="option" aria-selected={m === value}>
              <button type="button" onClick={() => { onChange(m); setOpen(false); }} className={`flex min-h-11 w-full items-center rounded px-3 text-left text-base hover:bg-quiet active:bg-action-soft ${m === value ? 'bg-action-soft font-semibold' : ''}`}>{m}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** The capability overlay from the design. */
function CapabilityOverlayCard({ c, onClose, className = '' }: { c: CapabilityData; onClose: () => void; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);
  return (
    <div ref={ref} tabIndex={-1} role="dialog" aria-label={`${c.name} details`} className={`relative rounded-card border border-line-strong bg-overlay p-6 shadow-modal outline-none ${className}`}>
      <IconButton label="Close" onClick={onClose} className="absolute right-3 top-3"><X size={20} /></IconButton>
      <p className="t-eyebrow">Capabilities &gt; {c.type}</p>
      <h4 className="t-h2 mt-1 pr-10">{c.name}</h4>
      <p className="mt-3 text-base text-fg-3">{c.text}</p>
      <dl className="mt-6 grid grid-cols-3 gap-x-4 gap-y-5">
        {MEASURES.map((m) => (
          <div key={m}>
            <dt className="t-eyebrow">{m}</dt>
            <dd className="t-numeral mt-1">{fmtMeasure(m, c[m])}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CapabilityOverlay({ c, onClose }: { c: CapabilityData; onClose: () => void }) {
  return <div className="absolute inset-x-0 top-4 z-20 mx-auto w-[min(100%,34rem)]"><CapabilityOverlayCard c={c} onClose={onClose} /></div>;
}

interface Rect { x: number; y: number; w: number; h: number }

/** Squarified treemap layout in a W by H space. Items must be sorted by value, largest first. */
function squarify(values: number[], W: number, H: number): Rect[] {
  const total = values.reduce((a, b) => a + b, 0);
  const areas = values.map((v) => (v / total) * W * H);
  const out: Rect[] = [];
  let x = 0, y = 0, w = W, h = H, i = 0;
  const worst = (row: number[], side: number) => {
    const s = row.reduce((a, b) => a + b, 0);
    return Math.max(...row.map((r) => Math.max((side * side * r) / (s * s), (s * s) / (side * side * r))));
  };
  while (i < areas.length) {
    const side = Math.min(w, h);
    let row = [areas[i]];
    let j = i + 1;
    while (j < areas.length && worst([...row, areas[j]], side) <= worst(row, side)) row = [...row, areas[j++]];
    const s = row.reduce((a, b) => a + b, 0);
    const thick = s / side;
    let off = 0;
    row.forEach((r) => {
      const len = r / thick;
      out.push(w >= h ? { x, y: y + off, w: thick, h: len } : { x: x + off, y, w: len, h: thick });
      off += len;
    });
    if (w >= h) { x += thick; w -= thick; } else { y += thick; h -= thick; }
    i = j;
  }
  return out;
}

// A single-hue ramp from light to dark. The last step needs white text.
const SCALE = ['var(--teal-200)', 'var(--teal-500)', 'var(--teal-700)', 'var(--teal-900)'];

/** Treemap of capabilities. The two droplists choose what size and colour represent. Selecting a block opens its overlay. */
function CapabilityChart() {
  const [size, setSize] = useState<Measure>('Investment');
  const [colour, setColour] = useState<Measure>('Projects');
  const [open, setOpen] = useState<string | null>(null);
  const items = [...CAPABILITY_DATA].sort((a, b) => b[size] - a[size]);
  const W = 100, H = 62;
  const rects = squarify(items.map((c) => c[size]), W, H);
  // Projects use the design's fixed bands. Other measures are split into four equal groups by rank.
  const ranked = [...CAPABILITY_DATA].sort((a, b) => a[colour] - b[colour]);
  const rankBand = (c: CapabilityData) => Math.min(3, Math.floor((ranked.indexOf(c) / ranked.length) * 4));
  const bandOf = (c: CapabilityData) => (colour === 'Projects' ? Math.max(0, PROJECT_BANDS.findIndex((b) => c.Projects <= b.max)) : rankBand(c));
  const legend = colour === 'Projects'
    ? PROJECT_BANDS.map((b) => b.label)
    : [0, 1, 2, 3].map((k) => {
        const vs = ranked.filter((c) => rankBand(c) === k).map((c) => c[colour]);
        return `${fmtMeasure(colour, Math.min(...vs))} to ${fmtMeasure(colour, Math.max(...vs))}`;
      });
  const current = CAPABILITY_DATA.find((c) => c.name === open) ?? null;
  return (
    <section aria-label="Capability analysis" className="mt-10 border-t border-line pt-8">
      <h3 className="t-h2 mb-4">Capability analysis</h3>
      <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
        <Droplist label="Size represents" value={size} onChange={setSize} />
        <Droplist label="Color represents" value={colour} onChange={setColour} />
      </div>
      <div className="relative mt-6 max-w-4xl">
        <div className="relative aspect-[100/62] w-full overflow-hidden rounded-card border border-line" role="group" aria-label={`Capabilities sized by ${size.toLowerCase()} and coloured by ${colour.toLowerCase()}`}>
          {items.map((c, i) => {
            const r = rects[i];
            const b = bandOf(c);
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setOpen(open === c.name ? null : c.name)}
                aria-expanded={open === c.name}
                aria-label={`${c.name}: ${size} ${fmtMeasure(size, c[size])}. Show details`}
                className={`absolute overflow-hidden border border-page p-2 text-left transition-[filter] hover:brightness-110 focus-visible:z-10 focus-visible:-outline-offset-2 ${b === 3 ? 'text-inverse' : 'text-[#1a1a2e]'}`}
                style={{ left: `${(r.x / W) * 100}%`, top: `${(r.y / H) * 100}%`, width: `${(r.w / W) * 100}%`, height: `${(r.h / H) * 100}%`, background: SCALE[b] }}
              >
                <span className="block text-xs font-medium leading-snug">{c.name}</span>
                <span className="tnum block text-sm font-semibold">{fmtMeasure(size, c[size])}</span>
              </button>
            );
          })}
        </div>
        {current && <CapabilityOverlay c={current} onClose={() => setOpen(null)} />}
      </div>
      <ul className="t-small mt-4 flex flex-wrap gap-x-6 gap-y-2" aria-label="Colour key">
        {legend.map((l, k) => (
          <li key={l} className="flex items-center gap-2"><span className="size-3 rounded-sm border border-line-strong" style={{ background: SCALE[k] }} aria-hidden />{l}</li>
        ))}
      </ul>
    </section>
  );
}

export function TwinPanel() {
  const [name, setName] = useState('Capabilities');
  const p = PERSPECTIVES.find((x) => x.name === name) ?? PERSPECTIVES[0];
  const List = ({ core }: { core: boolean }) => (
    <>
      <h4 className={`t-h3 mb-2 ${core ? '' : 'mt-5'}`}>{core ? 'Core perspectives' : 'Extended perspectives'}</h4>
      <ul className="space-y-1">
        {PERSPECTIVES.filter((x) => x.core === core).map((x) => (
          <li key={x.name}>
            <button type="button" onClick={() => setName(x.name)} aria-pressed={x.name === name} className={`min-h-11 w-full rounded-ctl px-4 text-left text-base ${x.name === name ? 'bg-action-soft font-semibold' : 'text-fg-3 hover:bg-quiet active:bg-action-soft'}`}>
              {x.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <div className="py-5">
      <h3 className="t-h2 mb-4">Summary of digital twin</h3>
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        <PerspectiveRing name={name} onSelect={setName} />
        <p className="max-w-[62ch] text-base text-fg-3">{TWIN_SUMMARY}</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-0">
        <nav aria-label="Perspectives" className="lg:-mr-8"><List core /><List core={false} /></nav>
        <div className="relative z-[1] rounded-card border border-line bg-card p-6">
          {p.groups.map((g) => (
            <section key={g.label} className="mb-6 last:mb-0">
              <p className="t-eyebrow">{g.label}</p>
              <ul className="mt-3 space-y-5">
                {g.items.map((i) => (
                  <li key={i.name} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div className="min-w-0 flex-1 basis-64">
                      <p className="t-h3">{i.name}</p>
                      <p className="t-small text-fg-3">{i.text.replace(' (authored)', '')}</p>
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
  const H = ({ children }: { children: string }) => <h3 className="t-h2 mb-4">{children}</h3>;
  const card = 'rounded-card border border-line bg-card p-6';
  return (
    <div className="space-y-8 py-5 text-base">
      <p className="max-w-[62ch] text-fg-3">{q.intro}</p>
      <section className="border-t border-line pt-6">
        <H>Data accuracy</H>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className={card}>
            <h4 className="t-h3 mb-3">Metrics</h4>
            <p className="text-fg-3">{q.accuracy.metricsIntro}</p>
            {q.accuracy.metrics.map((m) => (
              <div key={m.value} className="mt-4"><p className="t-stat">{m.value}</p><p className="text-fg-3">{m.text}</p></div>
            ))}
          </div>
          <div className={card}>
            <h4 className="t-h3 mb-3">Indicators</h4>
            {q.accuracy.indicators.map((m) => (
              <div key={m.value} className="mb-5 last:mb-0"><p className="t-stat">{m.value}</p><p className="text-fg-3">{m.text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line pt-6">
        <H>Data consistency</H>
        <h4 className="t-h3 mb-2">Assessment</h4>
        <p className="max-w-[62ch] text-fg-3">{q.consistency.assessment}</p>
        <h4 className="t-h3 mb-2 mt-6">Inconsistent data</h4>
        <ul className="max-w-[62ch] list-disc space-y-1 pl-6 text-fg-3">{q.consistency.inconsistent.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>
      <section className="border-t border-line pt-6">
        <H>Data source transparency</H>
        <h4 className="t-h3 mb-2">Source information</h4>
        <p className="text-fg-3">{q.transparency.intro}</p>
        <ul className="mt-4 divide-y divide-line rounded-card border border-line">
          {q.transparency.sources.map((s) => (
            <li key={s.name} className="flex items-start justify-between gap-6 px-4 py-3">
              <p><strong className="font-semibold">{s.name}:</strong> <span className="text-fg-3">{s.text}</span></p>
              <p className="t-numeral">{s.pct}%</p>
            </li>
          ))}
        </ul>
        <h4 className="t-h3 mb-2 mt-6">Source credibility</h4>
        <p className="max-w-[62ch] text-fg-3">{q.transparency.credibility}</p>
      </section>
    </div>
  );
}

/* ---------- Digital twin panel (opened from Sources in a chat answer) ---------- */

const ADMIN = 'Alex Bizarcher';

function Reviewers({ n }: { n: number }) {
  return (
    <div>
      <p className="t-caption">{n} of 4 reviewers</p>
      <div className="mt-1 flex gap-1" aria-hidden>
        {[0, 1, 2, 3].map((i) => <span key={i} className={`h-1.5 w-6 rounded-[3px] ${i < n ? 'bg-mark' : 'border border-line bg-quiet'}`} />)}
      </div>
    </div>
  );
}

export function TwinModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('Capabilities');
  const [detail, setDetail] = useState<{ name: string; label: string; text: string; confidence: number; reviewers: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') (detail && !CAPABILITY_DATA.some((c) => c.name === detail.name) ? setDetail(null) : !detail && onClose()); };
    document.addEventListener('keydown', esc);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = overflow; prev?.focus?.(); };
  }, [onClose, detail]);

  const count = (p: (typeof PERSPECTIVES)[number]) => p.groups.reduce((n, g) => n + g.items.length, 0);
  const all = PERSPECTIVES.flatMap((p) => p.groups.flatMap((g) => g.items));
  const overall = Math.round(all.reduce((n, i) => n + i.confidence, 0) / all.length);
  const p = PERSPECTIVES.find((x) => x.name === name) ?? PERSPECTIVES[0];
  const cap = detail ? CAPABILITY_DATA.find((c) => c.name === detail.name) : undefined;

  const Nav = ({ core }: { core: boolean }) => (
    <>
      <h3 className={`t-h3 ${core ? '' : 'mt-5'}`}>{core ? 'Core' : 'Extended'}</h3>
      <ul className="mt-2 space-y-1">
        {PERSPECTIVES.filter((x) => x.core === core).map((x) => (
          <li key={x.name}>
            <button type="button" onClick={() => setName(x.name)} aria-pressed={x.name === name} className={`min-h-11 w-full rounded-ctl px-3 text-left text-base ${x.name === name ? 'bg-action-soft font-semibold' : 'text-fg-3 hover:bg-quiet active:bg-action-soft'}`}>
              {x.name} ({count(x)})
            </button>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="fixed inset-0 z-30 flex items-start justify-center overflow-y-auto bg-scrim p-3 sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Digital twin" className="z-40 w-full max-w-[1110px] rounded-card border border-line bg-overlay pb-6 shadow-modal outline-none">
        <header className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
          <h2 className="t-h2">Digital twin</h2>
          <Button onClick={onClose}><X size={20} aria-hidden /> Close</Button>
        </header>
        <div className="grid gap-6 px-6 py-5 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-[62ch] space-y-2 text-base text-fg-3">
            <p>The admin for the digital twin is <span className="font-semibold text-fg">{ADMIN}</span>.</p>
            <p>{TWIN_SUMMARY.replace('organization', 'organisation')}</p>
          </div>
          <dl className="flex gap-8 border-line md:flex-col md:gap-4 md:border-s md:ps-6">
            <div><dd className="t-stat">{all.length}</dd><dt className="t-caption">Perspectives</dt></div>
            <div><dd className="t-stat">{overall}%</dd><dt className="t-caption">Overall confidence</dt></div>
          </dl>
        </div>
        <div className="grid gap-6 px-6 md:grid-cols-[210px_minmax(0,1fr)]">
          <nav aria-label="Perspectives"><Nav core /><Nav core={false} /></nav>
          <section aria-label={p.name} className="rounded-card border border-line bg-quiet p-6">
            <h3 className="t-h3 mb-5">{p.core ? 'Core' : 'Extended'} &gt; {p.name} <span className="t-eyebrow ml-2">{count(p)} perspectives</span></h3>
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {p.groups.flatMap((g) => g.items.map((i) => ({ g, i }))).map(({ g, i }) => (
                <li key={i.name} className="flex flex-col rounded-card border border-line bg-card p-4">
                  <p className="t-eyebrow">{g.label}</p>
                  <h4 className="t-h3 mt-2">{i.name}</h4>
                  <p className="t-small mt-1 flex-1 text-fg-3">{i.text}</p>
                  <div className="mt-4"><Confidence value={i.confidence} /></div>
                  <div className="mt-3"><Reviewers n={i.reviewers ?? 4} /></div>
                  <Button className="mt-4 self-start" onClick={() => setDetail({ name: i.name, label: g.label, text: i.text, confidence: i.confidence, reviewers: i.reviewers ?? 4 })} aria-label={`Details: ${i.name}`}>View details</Button>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {detail && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-scrim p-4" onMouseDown={(e) => e.target === e.currentTarget && setDetail(null)}>
            {cap ? (
              <div className="relative w-full max-w-lg"><CapabilityOverlayCard c={cap} onClose={() => setDetail(null)} /></div>
            ) : (
              <div role="dialog" aria-label={`${detail.name} details`} className="relative w-full max-w-lg rounded-card border border-line-strong bg-overlay p-6 shadow-modal">
                <IconButton label="Close" onClick={() => setDetail(null)} className="absolute right-3 top-3"><X size={20} /></IconButton>
                <p className="t-eyebrow">{detail.label}</p>
                <h4 className="t-h2 mt-1 pr-10">{detail.name}</h4>
                <p className="mt-3 text-base text-fg-3">{detail.text}</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2"><Confidence value={detail.confidence} /><Reviewers n={detail.reviewers} /></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
