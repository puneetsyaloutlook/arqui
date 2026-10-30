import { useNavigate } from 'react-router-dom';
import { AREA_PATH, type Horizon, type Insight } from '../data/seed';

const HORIZONS: Horizon[] = ['Short term', 'Medium term', 'Long term'];
const LIKELIHOOD_COLOUR = { 1: '#ffbb33', 2: '#ff693e', 3: '#ed00b8' } as const;
const LIKELIHOOD_LABEL = { 1: 'Unlikely', 2: 'Possible', 3: 'Likely' } as const;
const IMPACT_LABEL = { 1: 'Low impact', 2: 'Medium impact', 3: 'High impact' } as const;

/** Bubble chart: columns are time horizons, bubble size is impact, colour is likelihood. */
export function ScenarioChart({ insights }: { insights: Insight[] }) {
  const navigate = useNavigate();
  const go = (id: string) => navigate(`${AREA_PATH.scenario}?id=${id}&view=analysis`);
  return (
    <div className="space-y-4">
      <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted" aria-label="Legend">
        {([1, 2, 3] as const).map((l) => (
          <li key={l} className="flex items-center gap-2">
            <span className="size-3 rounded-full" style={{ background: LIKELIHOOD_COLOUR[l] }} aria-hidden /> {LIKELIHOOD_LABEL[l]}
          </li>
        ))}
        <li>Larger bubble = higher impact</li>
      </ul>
      <div className="grid gap-3 md:grid-cols-3">
        {HORIZONS.map((h) => {
          const items = insights.filter((i) => i.horizon === h);
          return (
            <section key={h} aria-label={h} className="rounded-2xl bg-rail p-4">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">{h}</h3>
              <ul className="flex min-h-48 flex-wrap content-start items-start gap-4">
                {items.map((i) => {
                  const size = 36 + (i.impact ?? 2) * 16;
                  return (
                    <li key={i.id} className="flex w-28 flex-col items-center gap-1.5 text-center">
                      <button
                        type="button"
                        onClick={() => go(i.id)}
                        title={`${i.title}: ${IMPACT_LABEL[i.impact ?? 2]}, ${LIKELIHOOD_LABEL[i.likelihood ?? 2].toLowerCase()}`}
                        aria-label={`${i.title}. ${IMPACT_LABEL[i.impact ?? 2]}, ${LIKELIHOOD_LABEL[i.likelihood ?? 2].toLowerCase()}`}
                        className="rounded-full transition-transform hover:scale-105"
                        style={{ width: size, height: size, background: LIKELIHOOD_COLOUR[i.likelihood ?? 2] }}
                      />
                      <span className="text-xs leading-4 text-ink">{i.title}</span>
                    </li>
                  );
                })}
                {items.length === 0 && <li className="text-sm text-muted">No insights</li>}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
