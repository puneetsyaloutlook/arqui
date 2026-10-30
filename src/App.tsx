import { Suspense, useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { screens, startSlug } from './screens/registry';

// Every Figma screen is a fixed 1728 x 956 artboard. The stage scales it to fit the window.
const W = 1728;
const H = 956;

function useViewport() {
  const read = () => ({ w: window.innerWidth, h: window.innerHeight });
  const [vp, setVp] = useState(read);
  useEffect(() => {
    const onResize = () => setVp(read());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return vp;
}

function Stage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const vp = useViewport();
  const screen = screens.find((s) => s.slug === slug);
  if (!screen) return <Navigate to="/screens" replace />;

  const scale = Math.min(vp.w / W, vp.h / H);
  const left = (vp.w - W * scale) / 2;
  const top = (vp.h - H * scale) / 2;
  const Root = screen.Root;

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <div
        style={{
          position: 'absolute',
          left,
          top,
          width: W,
          height: H,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          overflow: 'hidden',
        }}
      >
        <Suspense fallback={null}>
          <Root />
        </Suspense>
        {screen.hotspots.map((h, i) => {
          const target = screens.find((s) => s.slug === h.to);
          return (
            <button
              key={i}
              type="button"
              aria-label={target ? `Go to ${target.title}` : 'Go back'}
              className="absolute cursor-pointer border-0 bg-transparent p-0 hover:bg-white/5"
              style={{ left: h.x, top: h.y, width: h.w, height: h.h }}
              onClick={() => (h.to === 'back' ? navigate(-1) : navigate(`/s/${h.to}`))}
            />
          );
        })}
      </div>
      <Link
        to="/screens"
        className="fixed right-3 bottom-3 rounded bg-black/60 px-2 py-1 font-roboto text-xs text-white/70 hover:text-white"
      >
        All screens
      </Link>
    </div>
  );
}

function Index() {
  const groups = Array.from(new Set(screens.map((s) => s.group)));
  return (
    <div className="min-h-full bg-[#141218] p-10 font-roboto text-white">
      <h1 className="mb-2 text-3xl">Arqui prototype</h1>
      <p className="mb-8 max-w-2xl text-sm text-white/70">
        Click through the screens from the Figma file "Concept round 3". Each screen follows the prototype links set up in
        Figma.
      </p>
      {groups.map((g) => (
        <section key={g} className="mb-8">
          <h2 className="mb-3 text-lg text-[#d0bcff]">{g}</h2>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
            {screens
              .filter((s) => s.group === g)
              .map((s) => (
                <li key={s.slug}>
                  <Link className="block rounded bg-[#202020] px-3 py-2 text-sm hover:bg-[#36343b]" to={`/s/${s.slug}`}>
                    {s.title}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/s/${startSlug}`} replace />} />
      <Route path="/screens" element={<Index />} />
      <Route path="/s/:slug" element={<Stage />} />
      <Route path="*" element={<Navigate to="/screens" replace />} />
    </Routes>
  );
}
