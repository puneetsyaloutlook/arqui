# ARQUI

ARQUI (ARchitecture QUery and Insight) is a front-end prototype of an organisational insight assistant, built from the "Concept round 3" designs.

## What works

- Sign in (email then password, or a provider button) and a two-step onboarding form
- Daily dashboard with three tabs, filters by area, theme and type, and "Add a theme"
- Current work, Scenario planning and Organisational views, each with insight lists, filtering, sorting and "Start new chat"
- Insight detail with six tabs: Chat (ask, regenerate, edit a question, export), Chat history, Chat summary (export), Suggested actions, Deliverables (create, open, custom deliverables, upload) and Collaborators (add, remove)
- Scenario landscape bubble chart (horizon, impact, likelihood)
- Responsive layout, desktop first, with a drawer menu on small screens

## Limits

- There is no server. Data is sample data stored in the browser (`localStorage`, key `arqui-state-v1`). Clearing site data resets the app.
- Sign in is simulated. Any valid-looking email works.
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
