import { useCallback, useEffect, useState } from 'react';

type Choice = 'light' | 'dark' | null; // null follows the system setting
const KEY = 'arqui-theme';

const read = (): Choice => {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
};

/** Light or dark theme. With no choice made it follows the system setting. */
export function useTheme() {
  const [choice, setChoice] = useState<Choice>(read);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const m = window.matchMedia('(prefers-color-scheme: dark)');
    const on = () => setSystemDark(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (choice) root.setAttribute('data-theme', choice);
    else root.removeAttribute('data-theme');
  }, [choice]);

  const dark = choice ? choice === 'dark' : systemDark;
  const toggle = useCallback(() => {
    const next: Choice = dark ? 'light' : 'dark';
    setChoice(next);
    try {
      localStorage.setItem(KEY, next ?? '');
    } catch {
      /* the choice still applies for this visit */
    }
  }, [dark]);
  return { dark, toggle };
}

/** Applies a saved theme before the first paint of the app. */
export function applySavedTheme() {
  const v = read();
  if (v) document.documentElement.setAttribute('data-theme', v);
}
