export const DEPARTMENTS = ['Information technology', 'Finance', 'Operations', 'Human resources', 'Risk and compliance', 'Customer service', 'Sales and marketing', 'Legal'];

export const JOB_TITLES = [
  'Chief information officer',
  'Chief financial officer',
  'Chief operating officer',
  'Chief executive officer',
  'Head of technology',
  'Operations manager',
  'Finance manager',
  'HR manager',
  'Risk and compliance manager',
  'Customer service Manager',
  'Business analyst',
];

export const INTERESTS = [
  'Finance and performance',
  'Workforce and talent',
  'Market and customer trends',
  'Risk and compliance',
  'Innovation and technology',
  'Sustainability and social responsibility',
];

/** A simulated AI summary of the role. The Chief information officer text comes from the design. */
export function describeRole(title: string, department: string): string {
  if (title === 'Chief information officer') {
    return [
      "As the chief information officer, you play a pivotal role in driving Acme's digital strategy and ensuring the effective utilisation of information technology to achieve strategic objectives. Your responsibilities likely encompass:",
      '• Leading the IT department: Overseeing all technology operations, including infrastructure, applications, and cybersecurity.',
      '• Formulating IT strategy: Aligning technology investments with business goals, ensuring innovation and efficient resource allocation.',
      '• Managing IT governance: Establishing policies and frameworks for IT security, data privacy, and compliance.',
      '• Monitoring IT performance: Tracking key metrics and KPIs to measure the effectiveness and efficiency of IT services.',
      "• Facilitating digital transformation: Leading the organisation's journey towards digital maturity, leveraging technology to drive innovation and competitive advantage.",
      '• Staying informed: Keeping abreast of emerging technologies and industry trends to anticipate future needs and opportunities.',
    ].join('\n');
  }
  const dept = department || 'your department';
  return [
    `As the ${title}, you play a key role in ${dept} at Acme. Your responsibilities likely encompass:`,
    `• Leading the team: Setting priorities, supporting people and making sure ${dept} work is delivered.`,
    `• Planning and budgeting: Aligning ${dept} plans and spending with Acme's strategic objectives.`,
    `• Managing risk: Identifying, tracking and reducing the risks that affect ${dept}.`,
    '• Reporting performance: Tracking key metrics and reporting results to senior leaders.',
    '• Working across teams: Coordinating with other departments to remove blockers and share information.',
    '• Staying informed: Keeping up with developments in your field that could affect Acme.',
  ].join('\n');
}
