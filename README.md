# ARQUI

ARQUI (ARchitecture QUery and Insight) is a front-end prototype of an organisational insight assistant, built from the "Concept round 3" designs.

## What works

- Sign in (email, or a provider button) with the limitations notice, then "Before we start" onboarding with a simulated AI summary of your role
- Daily dashboard with three tabs, filters by area, theme and type, and "Add a theme"
- Current work, Scenario planning and Organisational views, each with insight lists, filtering, sorting and "Start new chat"
- Insight detail with six tabs: Chat (ask, regenerate, edit a question, export), Chat history, Chat summary (export), Suggested actions, Deliverables (create, open, custom deliverables, upload) and Collaborators (add, remove)
- Scenario landscape bubble chart (horizon, impact, likelihood)
- Responsive layout, desktop first, with a drawer menu on small screens

## Design

The interface uses the personal design system "Design system - default": Public Sans and Lora, light and dark themes (follows the system setting, with a toggle in the top bar), the colour, spacing, radius and shadow tokens in `src/styles/tokens.css`, and the type styles `t-h1` to `t-caption` in `src/index.css`. The sidebar icons and sign-in illustration are the originals, recoloured to the palette.

## Limits

- There is no server. Data is sample data stored in the browser (`localStorage`, key `arqui-state-v3`). Clearing site data resets the app.
- Sign in is simulated. Any valid-looking email works, and the role summary is generated from templates.
- Chat answers are scripted. The Cybersecurity insight has full answers from the design, and other insights get templated answers.
- The admin and set-up screens from the designs are not rebuilt yet.

## Run

```bash
npm install
npm run dev
npm run build
```

Deploy on Vercel with the Vite preset. `vercel.json` rewrites all routes to the app so direct links work.

## Stack

Vite, React 19, TypeScript, Tailwind CSS v4, React Router, lucide-react.
