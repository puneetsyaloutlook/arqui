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
  /** Built-in views that are pinned above the other insights. */
  pinned?: 'landscape' | 'twin' | 'quality';
  /** Shorter text used on the daily dashboard. */
  dashboard?: string;
}

export const THEMES = [
  'Innovation and Agility',
  'Strategic Alignment',
  'Cybersecurity',
  'Cost Optimisation',
  'Resource Management',
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
    dashboard: 'Increased remote work coincides with a rise in incidents like phishing and unauthorized access attempts. Network traffic and employee behavior analysis suggest potential weaknesses in endpoint security and VPN configurations, posing risks to sensitive data and operations.',
    summary: 'With the adoption of remote work arrangements, the app detects a rise in security incidents like phishing attempts and unauthorized access attempts. Analysis of network traffic and employee behavior reveals potential weaknesses in endpoint security and VPN configurations. This poses a significant risk to sensitive data and business operations' },
  { id: 'data-assets', title: 'Unutilized data assets hinder decision-making', area: 'current-work', origin: 'auto', theme: 'Cybersecurity', created: today, collaborators: 1,
    dashboard: 'Despite diverse data sources, valuable insights remain hidden due to siloed systems and limited analysis capabilities. This hinders informed decision-making, as evidenced by potential gaps in combining customer service and sales data for churn risk identification.',
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
  { id: 'landscape', pinned: 'landscape', title: 'Insights landscape', area: 'scenario', origin: 'self', theme: 'Innovation and Agility', created: today, collaborators: 1,
    summary: 'The future scenarios explore a range of possibilities impacting your organization, from managing a remote workforce and the evolving threat landscape to the ethical considerations of AI and the potential for cost savings through cloud optimization.' },
  { id: 'demographics', title: 'Shifting customer demographics and preferences', area: 'scenario', origin: 'self', theme: 'Strategic Alignment', created: today, horizon: 'Long term', impact: 3, likelihood: 3, collaborators: 1,
    summary: d('Shifting customer demographics and preferences', 'Analysis of social media trends and customer feedback reveals an emerging shift towards younger, tech-savvy consumers with evolving expectations.'),
    dashboard: 'Analysis of social media trends and customer feedback reveals an emerging shift towards younger, tech-savvy consumers with evolving expectations. This presents both a challenge and an opportunity to adapt product offerings and marketing strategies to cater to these changing preferences.' },
  { id: 'quantum', title: "Quantum computing's disruptive potential", area: 'scenario', origin: 'self', theme: 'Innovation and Agility', created: daysAgo(1), horizon: 'Long term', impact: 3, likelihood: 1, collaborators: 1,
    summary: "Research from MIT suggests quantum computing algorithms could optimise energy distribution within smart grids, potentially reducing transmission losses by 15%. This breakthrough, expected within the next 5 years, could significantly impact Acme's grid management efficiency and competitiveness." },
  { id: 'supply-chain', title: 'Supply chain disruptions and resource scarcity', area: 'scenario', origin: 'auto', theme: 'Resource Management', created: daysAgo(2), horizon: 'Medium term', impact: 3, likelihood: 2,
    summary: d('Supply chain disruptions and resource scarcity', 'Global events and climate concerns point towards potential disruptions in critical supply chains.'),
    dashboard: 'Global events and climate concerns point towards potential disruptions in critical supply chains and increasing scarcity of key resources. This necessitates exploring alternative sourcing strategies, diversifying suppliers, and investing in sustainable practices to mitigate future risks.' },
  { id: 'automation', title: 'Rise of automation and AI in the industry', area: 'scenario', origin: 'auto', theme: 'Innovation and Agility', created: daysAgo(2), horizon: 'Medium term', impact: 2, likelihood: 3, collaborators: 1,
    summary: 'Rapid advancements in automation and AI threaten to disrupt traditional industry practices and potentially displace certain job roles. This presents an opportunity to upskill the workforce, embrace automation for efficiency gains, and explore innovative applications of AI to stay competitive.' },
  { id: 'cloud-cost-opt', title: 'Cloud cost optimization potential', area: 'scenario', origin: 'user', theme: 'Cost Optimisation', created: daysAgo(4), horizon: 'Short term', impact: 2, likelihood: 3, collaborators: 1,
    summary: 'Rightsizing workloads, committing to reserved capacity and retiring idle environments could reduce cloud spend materially over the next two quarters.' },
  { id: 'ai-security', title: 'AI-driven security automation', area: 'scenario', origin: 'user', theme: 'Cybersecurity', created: daysAgo(4), horizon: 'Short term', impact: 2, likelihood: 2,
    summary: 'Automating triage and response for common alert types could free security analysts for higher-value investigation, but needs careful governance of automated actions.' },
  { id: 'remote-paradox', title: 'Remote workforce productivity paradox', area: 'scenario', origin: 'auto', theme: 'Talent Management', created: daysAgo(5), horizon: 'Medium term', impact: 1, likelihood: 2,
    summary: 'Surveys show people feel more productive working remotely, while measured output and collaboration indicators move in the opposite direction.' },
  { id: 'regulation', title: 'Regulatory landscape uncertainty in key markets', area: 'scenario', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(1), horizon: 'Long term', impact: 2, likelihood: 2, collaborators: 1,
    summary: d('Regulatory landscape uncertainty in key markets', 'Recent legislative changes and proposed regulations in key markets pose potential compliance risks.'),
    dashboard: "Recent legislative changes and proposed regulations in key markets pose potential compliance risks and operational challenges for Acme's global operations. This requires close monitoring and proactive adaptation to ensure adherence to evolving regulations." },
  { id: 'sustainability', title: 'Sustainability risks and opportunities', area: 'scenario', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(3), horizon: 'Short term', impact: 1, likelihood: 1,
    summary: d('Sustainability risks and opportunities', 'Analysis of Sustainability Programs and Environmental Regulations highlights a potential risk of non-compliance.') },
  { id: 'biometrics', title: 'Biometric authentication adoption surge', area: 'scenario', origin: 'auto', theme: 'Cybersecurity', created: daysAgo(6), horizon: 'Short term', impact: 1, likelihood: 3,
    summary: 'Customers and employees increasingly expect fingerprint and face sign-in. Adopting it could cut password resets, but raises questions about storing and protecting biometric data.' },
  { id: 'skills-gap', title: 'Cybersecurity skills gap widens', area: 'scenario', origin: 'auto', theme: 'Talent Management', created: daysAgo(6), horizon: 'Medium term', impact: 2, likelihood: 3,
    summary: 'Demand for security specialists is growing faster than the organisation can hire or train, which could leave critical monitoring and response work understaffed.' },
  { id: 'hyperautomation', title: 'Hyperautomation and job displacement', area: 'scenario', origin: 'user', theme: 'Talent Management', created: daysAgo(7), horizon: 'Long term', impact: 3, likelihood: 2,
    summary: 'Combining process automation, AI and analytics could remove large amounts of routine work. Roles and skills would need to change, and the transition would need to be planned with the people affected.' },
  { id: 'ethical-ai', title: 'Ethical implications of AI in business', area: 'scenario', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(7), horizon: 'Medium term', impact: 2, likelihood: 1,
    summary: 'Growing use of AI in customer service and decision support raises questions about bias, transparency and accountability that customers and regulators are starting to ask.' },
  { id: 'privacy', title: 'Data privacy concerns intensify', area: 'scenario', origin: 'auto', theme: 'Cybersecurity', created: daysAgo(8), horizon: 'Short term', impact: 3, likelihood: 3, collaborators: 1,
    summary: 'Customers and regulators are paying closer attention to how personal data is collected, stored and shared, which increases both compliance effort and reputational risk.' },

  // Organisational views
  { id: 'twin', pinned: 'twin', title: 'Digital twin overview', area: 'org', origin: 'auto', theme: 'Digital twin', created: today, collaborators: 1,
    summary: 'Explore the interactive model of your organisation. Arqui uses this model to underpin the insights it generates about the organisation.' },
  { id: 'quality', pinned: 'quality', title: 'Data quality assessment', area: 'org', origin: 'auto', theme: 'Digital twin', created: today, collaborators: 1,
    summary: 'To ensure the insights you see are as reliable as possible, this section provides a quick assessment of the data quality within the organisation\u2019s digital twin.' },
  { id: 'innovation', title: 'Innovation bottleneck', area: 'org', origin: 'auto', theme: 'Resource Management', created: today,
    summary: d('Innovation bottleneck', 'While the Innovation strategic capability is well-funded, employee data suggests ideas are not being developed.') },
  { id: 'silos', title: 'Siloed information sharing', area: 'org', origin: 'auto', theme: 'Innovation and Agility', created: daysAgo(1), collaborators: 1,
    summary: d('Siloed information sharing', 'While departments collect customer data, the information architecture limits how it is shared.') },
  { id: 'automation-potential', title: 'Potential for automation', area: 'org', origin: 'user', theme: 'Cost Optimisation', created: daysAgo(2), collaborators: 1,
    summary: 'Several high-volume, rules-based processes in finance and customer service are good candidates for automation, with the largest gains in invoice handling and case triage.' },
  { id: 'data-driven', title: 'Potential for data-driven decision making', area: 'org', origin: 'auto', theme: 'Adoption', created: daysAgo(2),
    summary: 'Teams that already use shared dashboards make faster decisions, but most planning still relies on spreadsheets that are updated by hand.' },
  { id: 'stakeholders', title: 'Evolving stakeholder expectations', area: 'org', origin: 'user', theme: 'Strategic Alignment', created: daysAgo(3),
    summary: 'Investors, customers and employees are asking for clearer reporting on sustainability and data use, which is raising the bar for how the organisation communicates and measures its performance.' },
  { id: 'retention', title: 'Mitigating talent retention risks', area: 'org', origin: 'auto', theme: 'Talent Management', created: daysAgo(3),
    summary: 'Engagement and tenure patterns point to retention risk in specialist technical roles, with exit interviews citing limited progression and unclear ownership of career development.' },
  { id: 'internal-talent', title: 'Overlooking internal talent', area: 'org', origin: 'auto', theme: 'Talent Management', created: daysAgo(4), collaborators: 1,
    summary: 'Most senior roles are filled externally even when internal candidates have matching skills, which discourages progression and increases hiring cost.' },
  { id: 'pm-silos', title: 'Risk of project management silos', area: 'org', origin: 'auto', theme: 'Strategic Alignment', created: daysAgo(5),
    summary: 'Teams run projects with different tools and reporting formats, which makes it hard to see dependencies, share lessons and compare progress across the portfolio.' },
];

export const DASHBOARD_IDS = ['inventory', CYBER_ID, 'data-assets', 'demographics', 'regulation', 'supply-chain'];
