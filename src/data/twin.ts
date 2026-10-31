// Digital twin and data quality content. Text comes from the Figma design.
// Entries marked "authored" were written for this prototype because the design does not show them.

export const TWIN_SUMMARY =
  'Your organization, Acme Corporation, is a leading renewable energy company focused on innovation and sustainability. You excel in product development, manufacturing, and sales, with "SunPro" solar panels at your core. A flat hierarchy and data-driven approach fuel your success. You\'re expanding globally, exploring battery storage, and committed to reducing your carbon footprint through partnerships and circular economy practices. This Digital Twin captures your essence, ready to adapt and grow as you do.';

export interface TwinItem {
  name: string;
  text: string;
  confidence: number; // 0 to 100
  /** Reviewers who have validated the item, out of 4. */
  reviewers?: number;
}
export interface TwinGroup {
  label: string;
  items: TwinItem[];
}
export interface Perspective {
  name: string;
  core: boolean;
  groups: TwinGroup[];
}

export const PERSPECTIVES: Perspective[] = [
  {
    name: 'Capabilities',
    core: true,
    groups: [
      {
        label: 'Capabilities > Strategic',
        items: [
          { name: 'Innovation management', text: 'R&D team focused on next-generation solar panel technologies, partnerships with leading research institutions (e.g., MIT) for advanced materials research.', confidence: 70 },
          { name: 'Market expansion', text: 'Entering new international markets (e.g., Southeast Asia) through strategic partnerships with local distributors.', confidence: 45 },
          { name: 'Sustainability', text: 'Implementing carbon reduction initiatives throughout the supply chain, developing eco-friendly solar panel recycling program.', confidence: 60 },
        ],
      },
      {
        label: 'Capabilities > Core',
        items: [
          { name: 'Product development', text: 'Engineering team designs and develops high-efficiency solar panels under the "SunPro" brand.', confidence: 80 },
          { name: 'Manufacturing', text: 'Automated production facilities in North America and Europe, utilizing Industry 4.0 technologies for efficiency and quality control', confidence: 75 },
          { name: 'Sales & marketing', text: 'Global sales team targeting commercial and residential customers, strong brand recognition in key markets.', confidence: 65 },
        ],
      },
      {
        label: 'Capabilities > Enabling',
        items: [
          { name: 'Information Technology', text: 'Cloud-based IT infrastructure with integrated CRM, ERP, and data analytics platforms (e.g., Salesforce, SAP).', confidence: 85 },
          { name: 'Human Resources', text: 'Focus on talent acquisition and development, fostering a culture of innovation and collaboration.', confidence: 55 },
          { name: 'Finance and Accounting', text: 'Robust financial management practices, secure financial partnerships for expansion.', confidence: 90 },
        ],
      },
    ],
  },
  P('Organisation', true, 'Organisation > Structure', [
    ['Flat hierarchy', 'Few management layers, with decisions made close to the work.', 80],
    ['Regional operating units', 'Operating units in North America, Europe and Southeast Asia.', 60],
    ['Cross-functional product teams', 'Engineering, manufacturing and sales work together on each product line.', 70, 3],
  ]),
  P('Information', true, 'Information > Data and analytics', [
    ['Customer records', 'Customer and sales records held in the CRM.', 70],
    ['Production and inventory data', 'Data collected from production lines and warehouses.', 65, 3],
    ['Financial reporting data', 'Ledgers, forecasts and investor reporting held in the ERP.', 90],
    ['Employee and HR data', 'Headcount, skills and engagement survey data.', 55, 3],
    ['Market and competitor research', 'Industry analyses and market research reports.', 50, 2],
    ['Research and patent library', 'Research papers, test results and patent filings.', 75],
  ]),
  P('Value streams', true, 'Value streams > Customer-facing', [
    ['Sales and marketing to customer service', 'From first enquiry through installation and after-sales support.', 60],
    ['Product development to manufacturing', 'From design and testing through to production and quality control.', 75],
    ['Order to delivery', 'From confirmed order through production, shipping and handover.', 70],
    ['Installation and after-sales service', 'Fitting, commissioning, warranty and maintenance.', 55, 3],
    ['Procure to pay', 'From supplier selection through purchase orders to payment.', 65],
    ['Recruit to onboard', 'From role approval through hiring to a person\'s first 90 days.', 50, 2],
  ]),
  P('Stakeholders', false, 'Stakeholders > External and internal', [
    ['Residential and commercial customers', 'Buyers and installers of SunPro solar panels.', 75],
    ['Investors', 'Shareholders and lenders who fund expansion.', 70],
    ['Employees', 'Staff across engineering, manufacturing, sales and support.', 65, 3],
    ['Research partners', 'Universities and institutes that collaborate on materials research.', 70],
    ['Distributors', 'Local partners in new international markets.', 50, 2],
    ['Regulators', 'Energy, data privacy and environmental authorities in key markets.', 60],
  ]),
  P('Strategies', false, 'Strategies > Growth and capability', [
    ['Global expansion', 'Grow into new markets through local partnerships.', 65],
    ['Innovation leadership', 'Lead on next-generation solar panel technology.', 70],
    ['Sustainability and circular economy', 'Reduce the carbon footprint and recycle end-of-life panels.', 60],
    ['Battery storage entry', 'Explore battery storage as a new product line.', 40, 2],
    ['Digital transformation', 'Move to cloud platforms and data-driven decisions.', 75],
    ['Talent development', 'Attract, develop and keep specialist skills.', 55, 3],
  ]),
  P('Product & Service', false, 'Product & Service > Offerings', [
    ['SunPro solar panels', 'Core product line for commercial and residential customers.', 90],
    ['Installation services', 'Fitting and commissioning through partner installers.', 60],
    ['Battery storage', 'Planned offering that is under exploration.', 40, 2],
  ]),
  P('Policies', false, 'Policies > Governance', [
    ['IT security and data privacy', 'Rules for protecting systems and personal data.', 75],
    ['Procurement and supplier code', 'Standards for selecting and managing suppliers.', 65],
    ['Environmental, social and governance', 'Commitments and reporting on sustainability and ethics.', 60, 3],
  ]),
  P('Initiatives', false, 'Initiatives > Strategic', [
    ['Solar panel recycling program', 'Eco-friendly recycling of end-of-life panels.', 60],
    ['Southeast Asia market entry', 'Distributor partnerships and local compliance work.', 45, 3],
    ['Cloud migration', 'Moving core systems to cloud infrastructure.', 70],
  ]),
  P('Metrics and KPIs', false, 'Metrics and KPIs > Performance', [
    ['Innovation output', 'New products and patents delivered per year.', 55],
    ['Customer satisfaction', 'Survey scores and first-contact resolution.', 60, 3],
    ['Carbon footprint reduction', 'Emissions across operations and the supply chain.', 65],
  ]),
];

/** Shorthand used above. Items are authored for this prototype where the design does not show them. */
function P(name: string, core: boolean, label: string, rows: [string, string, number, number?][]): Perspective {
  return { name, core, groups: [{ label, items: rows.map(([n, text, confidence, reviewers]) => ({ name: n, text, confidence, reviewers: reviewers ?? 4 })) }] };
}

/** Capability analysis: a treemap. The measures match the filter droplist in the design. */
export const MEASURES = ['Investment', 'Projects', 'Maturity', 'Capacity', 'Utilisation'] as const;
export type Measure = (typeof MEASURES)[number];

export const PROJECT_BANDS = [
  { label: '1-5 projects', max: 5, colour: '#fbe3a1' },
  { label: '5-10 projects', max: 10, colour: '#e8a361' },
  { label: '15-20 projects', max: 20, colour: '#d63f3f' },
  { label: '20-25 projects', max: 25, colour: '#b0113c' },
] as const;
export const SCALE = ['#fbe3a1', '#e8a361', '#d63f3f', '#b0113c'] as const;

export interface CapabilityData {
  name: string;
  type: 'Strategic' | 'Core' | 'Enabling';
  text: string;
  Investment: number;
  Projects: number;
  Maturity: number; // percent
  Capacity: number; // percent
  Utilisation: number; // percent
}

// Innovation management's projects, maturity, capacity and utilisation come from the overlay in the design.
// The other values were written for this prototype.
export const CAPABILITY_DATA: CapabilityData[] = [
  { name: 'Innovation management', type: 'Strategic', text: 'R&D team focused on next-generation solar panel technologies, partnerships with leading research institutions (e.g., MIT) for advanced materials research.', Investment: 1234567, Projects: 21, Maturity: 76, Capacity: 89, Utilisation: 87 },
  { name: 'Product development', type: 'Core', text: 'Engineering team designs and develops high-efficiency solar panels under the "SunPro" brand.', Investment: 1123456, Projects: 22, Maturity: 82, Capacity: 91, Utilisation: 84 },
  { name: 'Market expansion', type: 'Strategic', text: 'Entering new international markets (e.g., Southeast Asia) through strategic partnerships with local distributors.', Investment: 765432, Projects: 4, Maturity: 48, Capacity: 62, Utilisation: 71 },
  { name: 'Information Technology', type: 'Enabling', text: 'Cloud-based IT infrastructure with integrated CRM, ERP, and data analytics platforms (e.g., Salesforce, SAP).', Investment: 765432, Projects: 17, Maturity: 88, Capacity: 79, Utilisation: 93 },
  { name: 'Manufacturing', type: 'Core', text: 'Automated production facilities in North America and Europe, utilizing Industry 4.0 technologies for efficiency and quality control', Investment: 765432, Projects: 18, Maturity: 80, Capacity: 86, Utilisation: 90 },
  { name: 'Sustainability', type: 'Strategic', text: 'Implementing carbon reduction initiatives throughout the supply chain, developing eco-friendly solar panel recycling program.', Investment: 543210, Projects: 3, Maturity: 58, Capacity: 66, Utilisation: 64 },
  { name: 'Finance and Accounting', type: 'Enabling', text: 'Robust financial management practices, secure financial partnerships for expansion.', Investment: 543210, Projects: 6, Maturity: 91, Capacity: 83, Utilisation: 78 },
  { name: 'Supply chain and logistics', type: 'Core', text: 'Planning, sourcing and distribution of panels and components across regions.', Investment: 543210, Projects: 16, Maturity: 69, Capacity: 74, Utilisation: 88 },
  { name: 'Sales & marketing', type: 'Core', text: 'Global sales team targeting commercial and residential customers, strong brand recognition in key markets.', Investment: 456789, Projects: 9, Maturity: 73, Capacity: 81, Utilisation: 76 },
  { name: 'Human Resources', type: 'Enabling', text: 'Focus on talent acquisition and development, fostering a culture of innovation and collaboration.', Investment: 345678, Projects: 7, Maturity: 64, Capacity: 70, Utilisation: 68 },
];

export const QUALITY = {
  intro: "This section provides a quick overview of the data quality within your digital twin to ensure the insights you see are as reliable as possible. Here's a breakdown for each aspect:",
  accuracy: {
    metricsIntro: 'Arqui employs a multi-step data validation process to ensure accuracy. During the latest upload:',
    metrics: [
      { value: '98.7%', text: 'of data points passed automated validation checks' },
      { value: '1.3%', text: 'were flagged for potential inconsistencies and require manual review' },
    ],
    indicators: [
      { value: '25', text: 'Duplicate records identified (primarily within employee names and contact information in HR documents and Leadership Team documents).' },
      { value: '10', text: 'Data outliers detected (e.g., a significant fluctuation in a specific KPI within a departmental report)' },
    ],
  },
  consistency: {
    assessment: 'Overall, the data exhibits a good level of consistency in terms of formatting and categorization. Arqui automatically standardized data formats (e.g., dates, currencies) during upload.',
    inconsistent: [
      'Minor inconsistencies were identified in product category classifications between marketing materials (Market_Trends_Forecasts_2023-2025.doc) and financial statements Income_Statements_Q3_2022.pdf).',
      'Variations in terminology used across departments for similar concepts (e.g., "employee satisfaction" vs. "staff morale").',
    ],
  },
  transparency: {
    intro: 'The digital twin is populated with data from a variety of sources, categorized as follows:',
    sources: [
      { name: 'Internal documents', text: 'The majority of data originates from internal reports, presentations, and policies.', pct: 60 },
      { name: 'External reports and data', text: 'This includes industry analyses, market research, and public data sources', pct: 20 },
      { name: 'Third-party agreements', text: 'Contracts with suppliers, partners, and insurance providers provide data on external relationships', pct: 10 },
      { name: 'Employee surveys', text: 'Data on employee sentiment and skills is captured through internal surveys', pct: 10 },
    ],
    credibility:
      'Arqui assesses the credibility of each data source based on factors like publisher reputation, data collection methodology, and alignment with industry standards. For example, industry reports from reputable firms (Industry_Analyses_2023.pdf) are considered highly credible, while customer satisfaction surveys conducted internally (Customer_Satisfaction_Surveys_Q4_2022.xlsx) might require additional context regarding sampling methodology.',
  },
};
