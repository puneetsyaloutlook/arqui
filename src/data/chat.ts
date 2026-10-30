import { CYBER } from './content';
import { CYBER_ID, type Insight } from './seed';

/** Words that carry no meaning when matching a question to a canned answer. */
const STOP = new Set(['the', 'and', 'for', 'our', 'are', 'any', 'what', 'how', 'can', 'that', 'this', 'with', 'from', 'have', 'there', 'which', 'should', 'would', 'about', 'into', 'been', 'more', 'than', 'your', 'you', 'who', 'why', 'when']);

const words = (s: string) => s.toLowerCase().match(/[a-z]{3,}/g)?.filter((w) => !STOP.has(w)) ?? [];

const overlap = (a: string, b: string) => {
  const wa = new Set(words(a));
  const wb = words(b);
  return wb.filter((w) => wa.has(w)).length;
};

const THEME_STEPS: Record<string, string[]> = {
  Cybersecurity: ['Review the controls that protect the systems and data named in this insight.', 'Run a short targeted exercise, such as a simulation or access review, to test the current position.', 'Agree owners and dates for the three highest-risk gaps.'],
  'Resource Management': ['Check the data that feeds the process against a physical or system-of-record count.', 'Find the two or three steps where errors are introduced most often.', 'Set a measure that shows whether the fix is working within a month.'],
  'Cost Optimisation': ['Break the spend down by team, service and commitment type.', 'Identify idle or duplicated items that can be retired without risk.', 'Set a monthly review so the savings are kept.'],
  'Talent Management': ['Talk to a small group of people in the affected roles to test what the data suggests.', 'Look for progression and ownership gaps, not only pay.', 'Pilot one change in a single team before rolling it out.'],
  'Strategic Alignment': ['Link this insight to a named strategic objective and its owner.', 'Compare current priorities with what the insight suggests.', 'Bring a short recommendation to the next leadership meeting.'],
  'Innovation & Agility': ['Map where ideas stall between proposal and funding.', 'Define clear entry criteria and decision dates for each stage.', 'Track a small set of flow measures, such as time in stage.'],
  'Vendor Management': ['List the vendors involved, their contract dates and current performance.', 'Agree one standard way to track performance and escalate issues.', 'Prepare for the next renewal with data rather than anecdotes.'],
  Adoption: ['Identify which teams already use the shared tools well and why.', 'Remove one barrier for the teams that do not.', 'Share a short success story from an early adopter.'],
};

const sentences = (s: string) => s.split(/(?<=[.!?])\s+/).filter(Boolean);

/** Lines of rich text. See RichText for how headings and list items are recognised. */
export type Lines = readonly string[];

export function answerFor(insight: Insight, question: string): Lines {
  if (insight.id === CYBER_ID) {
    let best: { score: number; a: Lines } | null = null;
    for (const qa of CYBER.qa) {
      const score = overlap(question, qa.q);
      if (!best || score > best.score) best = { score, a: qa.a };
    }
    if (best && best.score >= 2) return best.a;
  }
  const steps = THEME_STEPS[insight.theme] ?? THEME_STEPS['Strategic Alignment'];
  const facts = sentences(insight.summary).slice(0, 3);
  const q = question.trim().replace(/\?+$/, '');
  return [
    `Here is what Arqui found about "${q}" in the context of "${insight.title}".`,
    'Observations:',
    ...facts,
    'Suggested next steps:',
    ...steps.map((s, i) => `${i + 1}. ${s}`),
    'Remember, this answer is based on the documents and data currently in your digital twin. Check it with the people closest to the work before acting on it.',
  ];
}

export function starterQuestions(insight: Insight): string[] {
  if (insight.id === CYBER_ID) return [CYBER.qa[0].q, CYBER.qa[3].q, CYBER.qa[4].q];
  return [
    `What is driving "${insight.title.toLowerCase()}"?`,
    'Which teams or processes are most affected?',
    'What should we do first, and who should own it?',
  ];
}

export interface ActionItem {
  title: string;
  body: string;
}

export interface DeliverableGroup {
  action: string;
  items: { title: string; text: string; status: 'COMPLETE' | 'IN PROGRESS' | 'AVAILABLE' }[];
}

export function actionsFor(insight: Insight): ActionItem[] {
  if (insight.id === CYBER_ID) return CYBER.actions.map((a) => ({ title: a.title, body: a.body }));
  const steps = THEME_STEPS[insight.theme] ?? THEME_STEPS['Strategic Alignment'];
  const titles = ['Validate the evidence', 'Prioritise the biggest gaps', 'Track progress with a simple measure'];
  return titles.map((t, i) => ({ title: `${t} for "${insight.title}"`, body: steps[i] }));
}

export function deliverablesFor(insight: Insight): DeliverableGroup[] {
  if (insight.id === CYBER_ID) return CYBER.deliverables.map((g) => ({ action: g.action, items: g.items.map((i) => ({ ...i })) }));
  return actionsFor(insight).map((a, i) => ({
    action: a.title,
    items: [
      { title: `${['Evidence review', 'Priority matrix', 'Progress dashboard'][i]}`, text: `An automatically generated document that supports "${a.title.toLowerCase()}", built from the data in your digital twin.`, status: 'AVAILABLE' as const },
      { title: `${['Stakeholder briefing', 'Options paper', 'Monthly status report'][i]}`, text: 'A short document you can share with the people who need to act on this insight.', status: 'AVAILABLE' as const },
    ],
  }));
}

export interface Report {
  date: string;
  intro: string;
  sections: { h: string; items: readonly string[] }[];
  disclaimer: string;
  files: readonly string[];
}

export function reportFor(insight: Insight, title: string): Report {
  if (insight.id === CYBER_ID && title === CYBER.deliverables[0].items[0].title) {
    return { date: CYBER.report.date, intro: CYBER.report.intro, sections: CYBER.report.sections.map((s) => ({ h: s.h, items: s.items })), disclaimer: CYBER.report.disclaimer, files: CYBER.report.files };
  }
  const facts = sentences(insight.summary).slice(0, 2);
  return {
    date: new Date().toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' }),
    intro: `This document supports the insight "${insight.title}". It was generated from the information in your digital twin and should be reviewed before it is shared.`,
    sections: [
      { h: 'What the data shows', items: facts },
      { h: 'Suggested areas for improvement', items: (THEME_STEPS[insight.theme] ?? THEME_STEPS['Strategic Alignment']).slice(0, 3) },
    ],
    disclaimer: 'Disclaimer: This document is based on the data currently available and may not represent the full picture.',
    files: [],
  };
}
