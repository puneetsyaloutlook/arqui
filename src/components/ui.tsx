import { useEffect, useId, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { Bot, User, UsersRound, X } from 'lucide-react';
import type { Origin } from '../data/seed';

const cx = (...parts: (string | false | undefined | null)[]) => parts.filter(Boolean).join(' ');

type Variant = 'filled' | 'outlined' | 'tonal' | 'text';

export function Button({ variant = 'outlined', className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    filled: 'bg-primary text-on-primary hover:bg-[#e0d2ff] disabled:bg-white/10 disabled:text-white/40',
    outlined: 'border border-outline text-primary hover:bg-primary/10 disabled:opacity-40',
    tonal: 'bg-panel-hi text-primary hover:bg-[#36343b]',
    text: 'text-primary hover:bg-primary/10',
  };
  return (
    <button
      type="button"
      {...rest}
      className={cx('inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-[0.1px] transition-colors disabled:cursor-not-allowed', styles[variant], className)}
    />
  );
}

export function IconButton({ label, className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button type="button" aria-label={label} title={label} {...rest} className={cx('inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/10', className)}>
      {children}
    </button>
  );
}

export function Chip({ origin, children, className }: { origin?: Origin; children: ReactNode; className?: string }) {
  return (
    <span className={cx('inline-flex h-8 items-center gap-1.5 rounded-lg border border-chip px-3 text-xs font-medium uppercase tracking-[0.5px] text-subtle', className)}>
      {origin === 'user' ? <User size={14} aria-hidden /> : origin ? <Bot size={14} aria-hidden /> : null}
      {children}
    </span>
  );
}

export function CollabChip({ count }: { count?: number }) {
  if (!count) return null;
  return (
    <span className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-chip px-2.5 text-xs text-subtle" title={`${count} collaborator${count > 1 ? 's' : ''}`}>
      <UsersRound size={14} aria-hidden />
      <span className="sr-only">{count} collaborators</span>
    </span>
  );
}

export const originLabel: Record<Origin, string> = { auto: 'Auto-generated', user: 'User-generated', self: 'Self-generated' };

export function Checkbox({ label, className, ...rest }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) {
  return (
    <label className={cx('flex cursor-pointer items-center gap-3 py-1.5 text-base text-ink', className)}>
      <input type="checkbox" {...rest} className="size-[18px] shrink-0 cursor-pointer accent-[#d0bcff]" />
      <span>{label}</span>
    </label>
  );
}

const fieldBase = 'peer w-full rounded-t bg-field px-4 pt-6 pb-2 text-base text-white outline-none border-b border-outline focus:border-b-2 focus:border-primary placeholder-transparent';
const floatLabel = 'pointer-events-none absolute left-4 top-4 origin-left text-base text-[#cac4d0] transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs';

export function TextField({ label, error, className, ...rest }: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  const id = useId();
  return (
    <div className={className}>
      <div className="relative">
        <input id={id} placeholder=" " {...rest} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className={fieldBase} />
        <label htmlFor={id} className={floatLabel}>
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 px-4 text-xs text-[#f2b8b5]">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextArea({ label, className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const id = useId();
  return (
    <div className={cx('relative', className)}>
      <textarea id={id} placeholder=" " {...rest} className={cx(fieldBase, 'min-h-24 resize-y')} />
      <label htmlFor={id} className={floatLabel}>
        {label}
      </label>
    </div>
  );
}

export function Select({ label, options, className, ...rest }: SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }) {
  const id = useId();
  return (
    <div className={cx('relative', className)}>
      <select id={id} {...rest} className={cx(fieldBase, 'appearance-none pr-10')}>
        <option value="" disabled hidden />
        {options.map((o) => (
          <option key={o} value={o} className="bg-field">
            {o}
          </option>
        ))}
      </select>
      <label htmlFor={id} className="pointer-events-none absolute left-4 top-1.5 text-xs text-[#cac4d0]">
        {label}
      </label>
      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#cac4d0]" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7 10l5 5 5-5z" />
      </svg>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={titleId} className={cx('max-h-[90dvh] w-full overflow-y-auto rounded-2xl bg-panel p-6 shadow-2xl outline-none', wide ? 'max-w-3xl' : 'max-w-lg')}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-2xl text-white">
            {title}
          </h2>
          <IconButton label="Close" onClick={onClose} className="-mr-2 -mt-2">
            <X size={20} />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Toast({ message }: { message: string | null }) {
  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      {message && <div className="rounded-lg bg-[#e6e0e9] px-4 py-3 text-sm text-[#322f35] shadow-lg">{message}</div>}
    </div>
  );
}

/**
 * Renders answer text. Lines are classified like this:
 *  - "1. Heading" or a short line ending in a colon: a heading
 *  - "Label: text" (label under 60 characters): a list item with a bold label
 *  - anything else: a paragraph
 */
export function RichText({ lines }: { lines: readonly string[] }) {
  return (
    <div className="space-y-2 text-[15px] leading-6 text-ink">
      {lines.map((line, i) => {
        const numbered = /^\d+\.\s/.test(line);
        const isHeading = (numbered && line.length < 120 && !/\.\s.+\./.test(line.replace(/^\d+\.\s/, ''))) || (line.endsWith(':') && line.length < 70);
        if (isHeading) return <h4 key={i} className="pt-2 font-medium text-white">{line}</h4>;
        const m = line.match(/^([^:]{3,60}):\s(.+)$/s);
        if (m) {
          return (
            <p key={i} className="pl-4 -indent-4 before:mr-2 before:content-['•']">
              <strong className="font-medium text-white">{m[1]}: </strong>
              {m[2]}
            </p>
          );
        }
        return <p key={i}>{line}</p>;
      })}
    </div>
  );
}
