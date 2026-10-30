import { DESCRIPTIONS as D } from './content';

export type Area = 'current-work' | 'scenario' | 'org';
export type Origin = 'auto' | 'user' | 'self';
export type Horizon = 'Long term' | 'Medium term' | 'Short term';

export interface Insight {
  id: string;
  title: string;
  summary: string;
  origin: Origin;
  theme: string;
  area: Area;
  created: string; // ISO date
  horizon?: Horizon;
  impact?: 1 | 2 | 3;
  likelihood?: 1 | 2 | 3;
  collaborators?: number;
}

export const THEMES = [
  'Innovation & Agility',
  'Cost Optimisation',
  'Strategic Alignment',
  'Resource Management',
  'Cybersecurity',
  'Talent Management',
  'Adoption',
  'Vendor Management',
];

export const AREA_LABEL: Record<Area, string> = {
  'current-work': 'Current work',
  scenario: 'Scenario planning',
  org: 'Organisational views',
};

export const AREA_PATH: Record<Area, string> = {
  'current-work': '/current-work',
  scenario: '/scenario-planning',
  org: '/organisational-views',
};

const d = (title: string, fallback: string) => D[title] ?? fallback;
const today = new Date().toISOString().slice(0, 10);
const daysAgo = (n: number) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);

export const CYBER_ID = 'cyber-remote';

export const SEED_INSIGHTS: Insight[] = [
  // Current work
  { id: 'inventory', title: 'Inventory inaccuracy leading to stockouts and missed sales', area: 'current-work', origin: 'auto', theme: 'Resource Management', created: today, collaborators: 1,
    summary: d('Inventory inaccuracy leading to stockouts and missed sales', 'Sales data and warehouse inventory levels reveal potential stockouts despite adequate recorded stock.') },
  { id: CYBER_ID, title: 'Cybersecurity risks in remote work environment', area: 'current-work', origin: 'auto', theme: 'Cybersecurity', created: today, collaborators: 2,
    summary: 'With the adoption of remote work arrangements, the app detects a rise in security incidents like phishing attempts and unauthorized access attempts. Analysis of network traffic and employee behavior reveals potential weaknesses in endpoint security and VPN configurations. This poses a significant risk to sensitive data and business operations' },
  { id: 'data-assets', title: 'Unutilized data assets hinder decision-making', area: 'current-work', origin: 'auto', theme: 'Resource Management', created: today, collaborators: 1,
    summary: d('Unutilized data assets hinder decision-making', 'Despite diverse data sources, valuable insights remain hidden due to siloed systems and limited analysis capabilities.') },
  { id: 'shadow-it', title: 'Employee use of unapproved cloud applications', area: 'current-work', origin: 'auto', theme: 'Cybersecurity', created: today,
    summary: d('Employee use of unapproved cloud applications', 'Employee use of unauthorized cloud applications and personal devices highlights potential security and compliance risks.') },
  { id: 'vendors', title: 'Vendor management inefficiencies impacting delivery', area: 'current-work', origin: 'user', theme: 'Vendor Management', created: daysAgo(2),
    summary: 'Contract renewals, performance tracking and escalation paths are handled differently across teams, which is slowing delivery and weakening negotiating positions with key vendors.' },
  { id: 'cloud-costs', title: 'Cloud migration costs exceeding budget', area: 'current-work', origin: 'user', theme: 'Cost Optimisation', created: daysAgo(3), collaborators: 1,
    summary: 'Migration spend is running ahead of plan because of duplicated environments, unused reserved capacity and data transfer charges that were not in the original estimate.' },
  { id: 'csat', title: 'Declining customer satisfaction scores', area: 'current-work', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(1),
    summary: 'Customer satisfaction scores have fallen for three consecutive quarters, with the sharpest drops in response time and first-contact resolution.' },
  { id: 'productivity', title: 'Employee productivity lags in remote work model', area: 'current-work', origin: 'auto', theme: 'Talent Management', created: daysAgo(1),
    summary: 'Output per person is lower in teams that rely mainly on asynchronous collaboration, while teams with a regular in-person rhythm are holding steady.' },

  // Scenario planning
  { id: 'demographics', title: 'Shifting customer demographics and preferences', area: 'scenario', origin: 'self', theme: 'Strategic Alignment', created: today, horizon: 'Long term', impact: 3, likelihood: 3,
    summary: d('Shifting customer demographics and preferences', 'Analysis of social media trends and customer feedback reveals an emerging shift towards younger, tech-savvy consumers.') },
  { id: 'quantum', title: "Quantum computing's disruptive potential", area: 'scenario', origin: 'self', theme: 'Innovation & Agility', created: daysAgo(1), horizon: 'Long term', impact: 3, likelihood: 1,
    summary: "Research from MIT suggests quantum computing algorithms could optimise energy distribution within smart grids, potentially reducing transmission losses by 15%. This breakthrough, expected within the next 5 years, could significantly impact Acme's grid management efficiency and competitiveness." },
  { id: 'supply-chain', title: 'Supply chain disruptions and resource scarcity', area: 'scenario', origin: 'auto', theme: 'Resource Management', created: daysAgo(2), horizon: 'Medium term', impact: 3, likelihood: 2,
    summary: d('Supply chain disruptions and resource scarcity', 'Global events and climate concerns point towards potential disruptions in critical supply chains.') },
  { id: 'automation', title: 'Rise of automation and AI in the industry', area: 'scenario', origin: 'auto', theme: 'Innovation & Agility', created: daysAgo(2), horizon: 'Medium term', impact: 2, likelihood: 3, collaborators: 1,
    summary: d('Rise of automation and AI in the industry', 'Rapid advancements in automation and AI threaten to disrupt traditional industry practices.') },
  { id: 'cloud-cost-opt', title: 'Cloud cost optimization potential', area: 'scenario', origin: 'user', theme: 'Cost Optimisation', created: daysAgo(4), horizon: 'Short term', impact: 2, likelihood: 3, collaborators: 1,
    summary: 'Rightsizing workloads, committing to reserved capacity and retiring idle environments could reduce cloud spend materially over the next two quarters.' },
  { id: 'ai-security', title: 'AI-driven security automation', area: 'scenario', origin: 'user', theme: 'Cybersecurity', created: daysAgo(4), horizon: 'Short term', impact: 2, likelihood: 2,
    summary: 'Automating triage and response for common alert types could free security analysts for higher-value investigation, but needs careful governance of automated actions.' },
  { id: 'remote-paradox', title: 'Remote workforce productivity paradox', area: 'scenario', origin: 'auto', theme: 'Talent Management', created: daysAgo(5), horizon: 'Medium term', impact: 1, likelihood: 2,
    summary: 'Surveys show people feel more productive working remotely, while measured output and collaboration indicators move in the opposite direction.' },
  { id: 'regulation', title: 'Regulatory landscape uncertainty in key markets', area: 'scenario', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(1), horizon: 'Long term', impact: 2, likelihood: 2,
    summary: d('Regulatory landscape uncertainty in key markets', 'Recent legislative changes and proposed regulations in key markets pose potential compliance risks.') },
  { id: 'sustainability', title: 'Sustainability risks and opportunities', area: 'scenario', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(3), horizon: 'Short term', impact: 1, likelihood: 1,
    summary: d('Sustainability risks and opportunities', 'Analysis of Sustainability Programs and Environmental Regulations highlights a potential risk of non-compliance.') },

  // Organisational views
  { id: 'data-quality', title: 'Data quality assessment', area: 'org', origin: 'auto', theme: 'Resource Management', created: today,
    summary: 'To ensure the insights you see are as reliable as possible, Arqui checks the completeness, recency and consistency of the documents that feed the digital twin.'.replace('Arqui', 'Arqui') },
  { id: 'innovation', title: 'Innovation bottleneck', area: 'org', origin: 'auto', theme: 'Innovation & Agility', created: today, collaborators: 1,
    summary: d('Innovation bottleneck', 'While the Innovation strategic capability is well-funded, employee data suggests ideas are not being developed.') },
  { id: 'retention', title: 'Mitigating talent retention risks', area: 'org', origin: 'auto', theme: 'Talent Management', created: daysAgo(1),
    summary: 'Engagement and tenure patterns point to retention risk in specialist technical roles, with exit interviews citing limited progression and unclear ownership of career development.' },
  { id: 'automation-potential', title: 'Potential for automation', area: 'org', origin: 'auto', theme: 'Innovation & Agility', created: daysAgo(2),
    summary: 'Several high-volume, rules-based processes in finance and customer service are good candidates for automation, with the largest gains in invoice handling and case triage.' },
  { id: 'data-driven', title: 'Potential for data-driven decision making', area: 'org', origin: 'auto', theme: 'Adoption', created: daysAgo(2),
    summary: 'Teams that already use shared dashboards make faster decisions, but most planning still relies on spreadsheets that are updated by hand.' },
  { id: 'silos', title: 'Siloed information sharing', area: 'org', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(3),
    summary: d('Siloed information sharing', 'While departments collect customer data, the information architecture limits how it is shared.') },
  { id: 'internal-talent', title: 'Overlooking internal talent', area: 'org', origin: 'user', theme: 'Talent Management', created: daysAgo(4),
    summary: 'Most senior roles are filled externally even when internal candidates have matching skills, which discourages progression and increases hiring cost.' },
  { id: 'untapped', title: 'Untapped market potential', area: 'org', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(5),
    summary: d('Untapped market potential', 'Customer satisfaction surveys reveal high customer loyalty in segments the organisation does not currently target.') },
];

export const PERSPECTIVES = [
  { name: 'Capabilities', core: true, count: 42 },
  { name: 'Organisation', core: true, count: 27 },
  { name: 'Information', core: true, count: 118 },
  { name: 'Value streams', core: true, count: 9 },
  { name: 'Stakeholders', core: false, count: 64 },
  { name: 'Policies', core: false, count: 31 },
  { name: 'Products', core: false, count: 18 },
  { name: 'Metrics', core: false, count: 76 },
  { name: 'Initiatives', core: false, count: 23 },
  { name: 'Strategies', core: false, count: 11 },
];

export const QUALITY_SOURCES = [
  { name: 'Business plans and strategy', score: 92, note: 'Up to date, last revised 4 weeks ago' },
  { name: 'Financial statements', score: 88, note: 'Complete for the last six quarters' },
  { name: 'Customer surveys', score: 74, note: 'Q4 results missing for two regions' },
  { name: 'Employee satisfaction surveys', score: 69, note: 'Low response rate in operations' },
  { name: 'Risk and compliance records', score: 81, note: 'Some policy documents are over 18 months old' },
  { name: 'Meeting minutes', score: 58, note: 'Formats vary, so action items are hard to extract' },
];

export const WIP_DELIVERABLES = [
  { title: 'Warehouse cycle count analysis', date: '16-JAN-2024', text: 'Analysing cycle count data from high-demand areas to identify root causes of inventory discrepancies.', insightId: 'inventory' },
  { title: 'Customer persona development', date: '16-JAN-2024', text: 'Creating detailed customer personas representing the emerging younger, tech-savvy demographic.', insightId: 'demographics' },
  { title: 'Endpoint security vulnerability assessment', date: '16-JAN-2024', text: 'Evaluating endpoint security software across user devices and identifying potential weaknesses in configuration.', insightId: CYBER_ID },
];
