import type { ReactNode } from 'react';
import spot from '../assets/ui/spot.jpg';
import { Logo } from './Shell';

/** Spot illustration behind a single card, used by sign in and onboarding. */
export function AuthLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="relative min-h-dvh bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(20, 20, 31, 0.35), rgba(20, 20, 31, 0.35)), url(${spot})` }}>
      <div className="mx-auto flex min-h-dvh w-full max-w-[1180px] items-center px-6 py-10">
        <section className="w-full rounded-card border border-line bg-overlay p-6 shadow-modal sm:p-10">
          <Logo className="text-action" />
          <h1 className="t-h1 mt-6">{title}</h1>
          {children}
        </section>
      </div>
    </main>
  );
}
