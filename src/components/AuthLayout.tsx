import type { ReactNode } from 'react';
import bg from '../assets/ui/bg.jpg';
import { Logo } from './Shell';

/** Full-bleed illustration with the Arqui logo and a black panel, used by sign in and onboarding. */
export function AuthLayout({ title, children, translucent = false }: { title: string; children: ReactNode; translucent?: boolean }) {
  return (
    <main className="relative min-h-dvh bg-[#0b1324] bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <Logo className="absolute left-5 top-5 !text-[40px] sm:left-5" />
      <div className="mx-auto flex min-h-dvh max-w-[1200px] items-center px-4 pb-6 pt-24">
        <section className={`w-full rounded-lg p-6 sm:p-12 ${translucent ? 'bg-black/80 backdrop-blur-sm' : 'bg-black'}`}>
          <h1 className="font-body text-[34px] font-semibold leading-tight text-white sm:text-4xl">{title}</h1>
          {children}
        </section>
      </div>
    </main>
  );
}
