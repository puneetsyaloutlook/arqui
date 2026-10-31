import { useEffect, useId, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { Bot, CircleAlert, User, UsersRound, X } from 'lucide-react';
import type { Origin } from '../data/seed';

export const cx = (...parts: (string | false | undefined | null)[]) => parts.filter(Boolean).join(' ');

/* Buttons follow the design system: primary, secondary and tertiary. The older names map to them. */
type Variant = 'primary' | 'secondary' | 'tertiary' | 'filled' | 'outlined' | 'tonal' | 'text';
const BTN: Record<'primary' | 'secondary' | 'tertiary', string> = {
  primary: 'border-transparent bg-action text-on-action hover:[background-image:linear-gradient(var(--press-hover),var(--press-hover))] active:[background-image:linear-gradient(var(--press-active),var(--press-active))] disabled:bg-line disabled:text-fg-off disabled:[background-image:none]',
  secondary: 'border-action text-action hover:bg-action-soft disabled:border-line disabled:text-fg-off disabled:hover:bg-transparent',
  tertiary: 'border-transparent px-3 text-action hover:underline hover:underline-offset-[3px] active:bg-action-soft disabled:text-fg-off disabled:no-underline',
};
const ALIAS = { filled: 'primary', outlined: 'secondary', tonal: 'secondary', text: 'tertiary' } as const;

export function Button({ variant = 'secondary', className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const v = (ALIAS as Record<string, 'primary' | 'secondary' | 'tertiary'>)[variant] ?? (variant as 'primary' | 'secondary' | 'tertiary');
  return (
    <button
      type="button"
      {...rest}
      className={cx('inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-ctl border px-6 text-sm font-semibold leading-none tracking-[0.005em] transition-colors disabled:cursor-not-allowed', BTN[v], className)}
    />
  );
}

export function IconButton({ label, className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button type="button" aria-label={label} title={label} {...rest} className={cx('inline-flex size-11 items-center justify-center rounded-ctl text-fg transition-colors hover:bg-quiet active:bg-action-soft disabled:text-fg-off', className)}>
      {children}
    </button>
  );
}

/** A tag: the one place the design system uses a pill. */
export function Chip({ origin, children, className }: { origin?: Origin; children: ReactNode; className?: string }) {
  return (
    <span className={cx('t-caption inline-flex min-h-6 items-center gap-1 rounded-full border border-line bg-quiet px-3 py-0.5 !text-fg-2', className)}>
      {origin === 'user' ? <User size={16} aria-hidden /> : origin ? <Bot size={16} aria-hidden /> : null}
      {children}
    </span>
  );
}

export function CollabChip({ count }: { count?: number }) {
  if (!count) return null;
  return (
    <span className="t-caption inline-flex min-h-6 items-center gap-1 rounded-full border border-line bg-quiet px-2 py-0.5" title={`${count} collaborator${count > 1 ? 's' : ''}`}>
      <UsersRound size={16} aria-hidden />
      <span className="sr-only">{count} collaborators</span>
    </span>
  );
}

export const originLabel: Record<Origin, string> = { auto: 'Auto-generated', user: 'User-generated', self: 'Self-generated' };

export function Checkbox({ label, className, ...rest }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) {
  return (
    <label className={cx('flex min-h-11 cursor-pointer items-center gap-3 text-base', className)}>
      <input type="checkbox" {...rest} className="size-[18px] shrink-0 cursor-pointer accent-[var(--action)]" />
      <span>{label}</span>
    </label>
  );
}

const input = 'w-full min-h-11 rounded-ctl border border-control bg-page px-3 py-2 text-base leading-snug text-fg transition-[border-color,box-shadow] hover:border-fg-2 focus:border-action focus:shadow-[0_0_0_1px_var(--action)] focus:outline-none placeholder:text-fg-2 aria-[invalid=true]:border-danger aria-[invalid=true]:shadow-[0_0_0_1px_var(--status-error)] disabled:border-line disabled:bg-quiet disabled:text-fg-off';

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className="t-small mt-1 flex items-start gap-2 text-fg">
      <CircleAlert size={16} aria-hidden className="mt-0.5 shrink-0 text-danger" />
      {children}
    </p>
  );
}

export function TextField({ label, error, hint, className, ...rest }: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; hint?: string }) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="t-label mb-1 block">{label}</label>
      <input id={id} {...rest} aria-invalid={!!error} aria-describedby={cx(error && `${id}-err`, hint && `${id}-hint`) || undefined} className={input} />
      {hint && !error && <p id={`${id}-hint`} className="t-small mt-1 text-fg-2">{hint}</p>}
      {error && <FieldError id={`${id}-err`}>{error}</FieldError>}
    </div>
  );
}

export function TextArea({ label, className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="t-label mb-1 block">{label}</label>
      <textarea id={id} {...rest} className={cx(input, 'min-h-24 resize-y')} />
    </div>
  );
}

export function Select({ label, options, error, className, ...rest }: SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[]; error?: string }) {
  const id = useId();
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="t-label mb-1 block">{label}</label>}
      <div className="relative">
        <select id={id} {...rest} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className={cx(input, 'appearance-none pr-10')}>
          <option value="" disabled hidden>Choose one</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fg-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 9l6 6 6-6" /></svg>
      </div>
      {error && <FieldError id={`${id}-err`}>{error}</FieldError>}
    </div>
  );
}

export function Modal({ title, onClose, children, wide }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      prev?.focus?.();
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-scrim p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={titleId} className={cx('z-40 flex max-h-[calc(100dvh-4rem)] w-full flex-col gap-4 overflow-auto rounded-card border border-line bg-overlay p-6 shadow-modal outline-none', wide ? 'max-w-3xl' : 'max-w-[520px]')}>
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="t-h2">{title}</h2>
          <IconButton label="Close" onClick={onClose} className="-mr-3 -mt-2"><X size={20} /></IconButton>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Toast({ message }: { message: string | null }) {
  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      {message && <div className="t-small rounded-ctl border border-line-strong bg-overlay px-4 py-3 text-fg shadow-elevated">{message}</div>}
    </div>
  );
}

/**
 * Renders answer text. Lines are classified like this:
 *  - "1. Heading" or a short line ending in a colon: a subheading
 *  - "Label: text" (label under 60 characters), or a line starting with a bullet: a list item with a bold label
 *  - anything else: a paragraph
 */
export function RichText({ lines }: { lines: readonly string[] }) {
  return (
    <div className="space-y-2 text-base leading-relaxed text-fg">
      {lines.map((raw, i) => {
        const bullet = raw.startsWith('• ');
        const line = bullet ? raw.slice(2) : raw;
        const numbered = /^\d+\.\s/.test(line);
        const isHeading = (numbered && line.length < 120 && !/\.\s.+\./.test(line.replace(/^\d+\.\s/, ''))) || (line.endsWith(':') && line.length < 70);
        const m = line.match(/^([^:]{3,60}):\s(.+)$/s);
        if (bullet || (!isHeading && m)) {
          return (
            <p key={i} className="pl-4 -indent-4 before:mr-2 before:content-['•']">
              {m ? <strong className="font-semibold">{m[1]}: </strong> : null}
              {m ? m[2] : line}
            </p>
          );
        }
        if (isHeading) return <h4 key={i} className="pt-2 font-semibold">{line}</h4>;
        return <p key={i}>{line}</p>;
      })}
    </div>
  );
}
