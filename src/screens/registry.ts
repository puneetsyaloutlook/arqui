import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

export type Hotspot = { x: number; y: number; w: number; h: number; to: string };
export type Screen = {
  id: string;
  slug: string;
  title: string;
  group: string;
  Root: LazyExoticComponent<ComponentType>;
  hotspots: Hotspot[];
};

export const screens: Screen[] = [
  { id: '14741', slug: 'sign-in', title: "Sign in", group: "End user", Root: lazy(() => import('./s14741')), hotspots: [{ x: 321, y: 424, w: 105, h: 40, to: 'sign-in-continue' }] },
  { id: '15023', slug: 'sign-in-continue', title: "Sign in, step 2", group: "End user", Root: lazy(() => import('./s15023')), hotspots: [{ x: 321, y: 430, w: 92, h: 40, to: 'about-you' }] },
  { id: '14780', slug: 'about-you', title: "Before we start: about you", group: "End user", Root: lazy(() => import('./s14780')), hotspots: [{ x: 298, y: 644, w: 79, h: 40, to: 'your-role' }] },
  { id: '15065', slug: 'your-role', title: "Before we start: your role", group: "End user", Root: lazy(() => import('./s15065')), hotspots: [{ x: 298, y: 734, w: 79, h: 40, to: 'daily-dashboard' }] },
  { id: '14805', slug: 'daily-dashboard', title: "Daily dashboard", group: "End user", Root: lazy(() => import('./s14805')), hotspots: [{ x: 21, y: 233, w: 196, h: 210, to: 'current-work' }, { x: 21, y: 697, w: 196, h: 224, to: 'org-views' }, { x: 21, y: 461, w: 196, h: 218, to: 'scenario-planning' }, { x: 529, y: 384, w: 1149, h: 147, to: 'current-work' }] },
  { id: '14079', slug: 'current-work', title: "Current work", group: "End user", Root: lazy(() => import('./s14079')), hotspots: [{ x: 21, y: 697, w: 196, h: 224, to: 'org-views' }, { x: 21, y: 461, w: 196, h: 218, to: 'scenario-planning' }, { x: 21, y: 105, w: 196, h: 110, to: 'daily-dashboard' }] },
  { id: '14203', slug: 'scenario-planning', title: "Scenario planning: insight landscape", group: "End user", Root: lazy(() => import('./s14203')), hotspots: [{ x: 21, y: 233, w: 196, h: 210, to: 'current-work' }, { x: 21, y: 697, w: 196, h: 224, to: 'org-views' }, { x: 21, y: 105, w: 196, h: 110, to: 'daily-dashboard' }, { x: 265, y: 392, w: 427, h: 94, to: 'scenario-detail' }] },
  { id: '14337', slug: 'scenario-detail', title: "Scenario planning: insight detail", group: "End user", Root: lazy(() => import('./s14337')), hotspots: [{ x: 21, y: 233, w: 196, h: 210, to: 'current-work' }, { x: 21, y: 697, w: 196, h: 224, to: 'org-views' }, { x: 21, y: 461, w: 221, h: 218, to: 'scenario-planning' }, { x: 21, y: 105, w: 196, h: 110, to: 'daily-dashboard' }, { x: 265, y: 175, w: 427, h: 94, to: 'scenario-planning' }] },
  { id: '14471', slug: 'org-views', title: "Organisational views: digital twin overview", group: "End user", Root: lazy(() => import('./s14471')), hotspots: [{ x: 21, y: 233, w: 196, h: 210, to: 'current-work' }, { x: 21, y: 461, w: 196, h: 218, to: 'scenario-planning' }, { x: 21, y: 105, w: 196, h: 110, to: 'daily-dashboard' }, { x: 265, y: 266, w: 427, h: 94, to: 'org-data-quality' }, { x: 265, y: 382, w: 427, h: 94, to: 'org-insights' }] },
  { id: '14558', slug: 'org-data-quality', title: "Organisational views: data quality", group: "End user", Root: lazy(() => import('./s14558')), hotspots: [{ x: 21, y: 233, w: 196, h: 210, to: 'current-work' }, { x: 21, y: 461, w: 196, h: 218, to: 'scenario-planning' }, { x: 21, y: 105, w: 196, h: 110, to: 'daily-dashboard' }, { x: 265, y: 381, w: 427, h: 94, to: 'org-insights' }, { x: 265, y: 164, w: 427, h: 94, to: 'org-views' }] },
  { id: '14645', slug: 'org-insights', title: "Organisational views: insights", group: "End user", Root: lazy(() => import('./s14645')), hotspots: [{ x: 21, y: 233, w: 196, h: 210, to: 'current-work' }, { x: 21, y: 461, w: 196, h: 218, to: 'scenario-planning' }, { x: 21, y: 105, w: 196, h: 110, to: 'daily-dashboard' }, { x: 265, y: 164, w: 427, h: 94, to: 'org-views' }] },
  { id: '11523', slug: 'admin-sign-in', title: "Admin sign in", group: "Set up and admin", Root: lazy(() => import('./s11523')), hotspots: [{ x: 321, y: 430, w: 92, h: 40, to: 'admin-home' }] },
  { id: '11565', slug: 'admin-home', title: "Admin home", group: "Set up and admin", Root: lazy(() => import('./s11565')), hotspots: [{ x: 39, y: 396, w: 241, h: 400, to: 'step-1-about-you' }, { x: 306, y: 396, w: 241, h: 400, to: 'step-2-upload-documents' }, { x: 323, y: 733, w: 144, h: 40, to: 'organisational-documents' }, { x: 575, y: 396, w: 241, h: 400, to: 'step-3-select-a-model' }, { x: 844, y: 396, w: 241, h: 400, to: 'step-4-news-agents' }, { x: 1166, y: 396, w: 241, h: 400, to: 'capabilities-review' }, { x: 1434, y: 396, w: 241, h: 400, to: 'issues-review' }] },
  { id: '11630', slug: 'step-1-about-you', title: "Step 1: About you", group: "Set up and admin", Root: lazy(() => import('./s11630')), hotspots: [{ x: 341, y: 228, w: 151, h: 40, to: 'step-4-publishing-update' }, { x: 190, y: 228, w: 135, h: 40, to: 'admin-home' }] },
  { id: '11675', slug: 'organisational-documents', title: "Organisational documents", group: "Set up and admin", Root: lazy(() => import('./s11675')), hotspots: [{ x: 336, y: 165, w: 84, h: 40, to: 'admin-home' }] },
  { id: '11727', slug: 'step-2-upload-documents', title: "Step 2: Upload documents", group: "Set up and admin", Root: lazy(() => import('./s11727')), hotspots: [{ x: 341, y: 228, w: 151, h: 40, to: 'step-4-publishing-update' }, { x: 190, y: 228, w: 135, h: 40, to: 'admin-home' }] },
  { id: '11839', slug: 'step-3-select-a-model', title: "Step 3: Select a model", group: "Set up and admin", Root: lazy(() => import('./s11839')), hotspots: [{ x: 341, y: 228, w: 151, h: 40, to: 'step-4-publishing-update' }, { x: 190, y: 228, w: 135, h: 40, to: 'admin-home' }] },
  { id: '11916', slug: 'step-4-news-agents', title: "Step 4: News agents", group: "Set up and admin", Root: lazy(() => import('./s11916')), hotspots: [{ x: 341, y: 228, w: 151, h: 40, to: 'step-4-publishing-update' }, { x: 190, y: 228, w: 135, h: 40, to: 'admin-home' }] },
  { id: '12015', slug: 'step-4-publishing-update', title: "Step 4: Publishing update", group: "Set up and admin", Root: lazy(() => import('./s12015')), hotspots: [{ x: 190, y: 228, w: 80, h: 40, to: 'step-3-select-a-model' }, { x: 466, y: 633, w: 81, h: 40, to: 'admin-home' }] },
  { id: '12132', slug: 'capabilities-review', title: "Capabilities review", group: "Set up and admin", Root: lazy(() => import('./s12132')), hotspots: [{ x: 45, y: 868, w: 134, h: 40, to: 'step-4-news-agents' }, { x: 297, y: 759, w: 127, h: 40, to: 'capability-detail-innovation-management' }, { x: 190, y: 228, w: 135, h: 40, to: 'admin-home' }] },
  { id: '12561', slug: 'capability-detail-innovation-management', title: "Capability detail: innovation management", group: "Set up and admin", Root: lazy(() => import('./s12561')), hotspots: [{ x: 40, y: 234, w: 84, h: 40, to: 'capabilities-review' }] },
  { id: '12770', slug: 'issue-detail-data-integration-bottlenecks', title: "Issue detail: data integration bottlenecks", group: "Set up and admin", Root: lazy(() => import('./s12770')), hotspots: [{ x: 40, y: 234, w: 84, h: 40, to: 'issues-review' }] },
  { id: '12889', slug: 'issues-review', title: "Issues review", group: "Set up and admin", Root: lazy(() => import('./s12889')), hotspots: [{ x: 255, y: 793, w: 99, h: 40, to: 'issue-detail-data-integration-bottlenecks' }, { x: 190, y: 228, w: 135, h: 40, to: 'admin-home' }] },
  { id: '13231', slug: 'step-7-publish-digital-twin', title: "Step 7: Publish digital twin", group: "Set up and admin", Root: lazy(() => import('./s13231')), hotspots: [{ x: 443, y: 228, w: 96, h: 40, to: 'admin-home' }, { x: 190, y: 228, w: 80, h: 40, to: 'issues-review' }] },
];

export const startSlug = 'sign-in';
