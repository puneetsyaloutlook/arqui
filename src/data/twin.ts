// Digital twin and data quality content. Text comes from the Figma design.
// Entries marked "authored" were written for this prototype because the design does not show them.

export const TWIN_SUMMARY =
  'Your organization, Acme Corporation, is a leading renewable energy company focused on innovation and sustainability. You excel in product development, manufacturing, and sales, with "SunPro" solar panels at your core. A flat hierarchy and data-driven approach fuel your success. You\'re expanding globally, exploring battery storage, and committed to reducing your carbon footprint through partnerships and circular economy practices. This Digital Twin captures your essence, ready to adapt and grow as you do.';

export interface TwinItem {
  name: string;
  text: string;
  confidence: number; // 0 to 100
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
  {
    name: 'Organisation',
    core: true,
    groups: [
      {
        label: 'Organisation > Structure',
        items: [
          { name: 'Flat hierarchy', text: 'Few management layers, with decisions made close to the work (authored).', confidence: 80 },
          { name: 'Regional teams', text: 'Operating units in North America, Europe and Southeast Asia (authored).', confidence: 60 },
        ],
      },
    ],
  },
  {
    name: 'Information',
    core: true,
    groups: [
      {
        label: 'Information > Data and analytics',
        items: [
          { name: 'Customer data', text: 'Customer records held in the CRM, with sales and service data in separate systems (authored).', confidence: 70 },
          { name: 'Operational data', text: 'Production and inventory data collected from facility systems (authored).', confidence: 65 },
        ],
      },
    ],
  },
  {
    name: 'Value streams',
    core: true,
    groups: [
      {
        label: 'Value streams > Customer-facing',
        items: [
          { name: 'Sales and marketing to customer service', text: 'From first enquiry through installation and after-sales support (authored).', confidence: 60 },
          { name: 'Product development to manufacturing', text: 'From design and testing through to production and quality control (authored).', confidence: 75 },
        ],
      },
    ],
  },
  { name: 'Stakeholders', core: false, groups: [{ label: 'Stakeholders > External', items: [{ name: 'Research partners', text: 'Universities and institutes that collaborate on materials research (authored).', confidence: 70 }, { name: 'Distributors', text: 'Local partners in new international markets (authored).', confidence: 50 }] }] },
  { name: 'Policies', core: false, groups: [{ label: 'Policies > Governance', items: [{ name: 'IT security and data privacy', text: 'Policies for IT security, data privacy and compliance (authored).', confidence: 75 }] }] },
  { name: 'Product & Service', core: false, groups: [{ label: 'Product & Service > Products', items: [{ name: 'SunPro solar panels', text: 'Core product line for commercial and residential customers (authored).', confidence: 90 }, { name: 'Battery storage', text: 'Under exploration as a future offering (authored).', confidence: 40 }] }] },
  { name: 'Metrics and KPIs', core: false, groups: [{ label: 'Metrics and KPIs > Innovation', items: [{ name: 'Innovation KPIs', text: 'Innovation output and project completion rates (authored).', confidence: 55 }] }] },
  { name: 'Initiatives', core: false, groups: [{ label: 'Initiatives > Strategic', items: [{ name: 'Solar panel recycling program', text: 'Eco-friendly recycling of end-of-life panels (authored).', confidence: 60 }] }] },
  { name: 'Strategies', core: false, groups: [{ label: 'Strategies > Growth', items: [{ name: 'Global expansion', text: 'Grow into new markets through local partnerships (authored).', confidence: 65 }] }] },
];

/** Capability analysis: a treemap. Size and colour can each show investment, projects, confidence or capability type. */
export const PROJECT_BANDS = [
  { label: '1-5 projects', max: 5, colour: '#fbe3a1' },
  { label: '5-10 projects', max: 10, colour: '#e8a361' },
  { label: '15-20 projects', max: 20, colour: '#d63f3f' },
  { label: '20-25 projects', max: 25, colour: '#b0113c' },
] as const;

export const TYPE_COLOURS = { Strategic: '#fbe3a1', Enabling: '#e8a361', Core: '#b0113c' } as const;

export const CAPABILITY_DATA = [
  { name: 'Innovation management', type: 'Strategic', investment: 1234567, projects: 8, confidence: 70 },
  { name: 'Product development', type: 'Core', investment: 1123456, projects: 22, confidence: 80 },
  { name: 'Market expansion', type: 'Strategic', investment: 765432, projects: 4, confidence: 45 },
  { name: 'Information Technology', type: 'Enabling', investment: 765432, projects: 17, confidence: 85 },
  { name: 'Manufacturing', type: 'Core', investment: 765432, projects: 18, confidence: 75 },
  { name: 'Sustainability', type: 'Strategic', investment: 543210, projects: 3, confidence: 60 },
  { name: 'Finance and Accounting', type: 'Enabling', investment: 543210, projects: 6, confidence: 90 },
  { name: 'Supply chain and logistics (authored)', type: 'Core', investment: 543210, projects: 16, confidence: 65 },
  { name: 'Sales & marketing', type: 'Core', investment: 456789, projects: 9, confidence: 65 },
  { name: 'Human Resources', type: 'Enabling', investment: 345678, projects: 7, confidence: 55 },
] as const;

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
