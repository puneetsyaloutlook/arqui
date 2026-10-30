# Arqui prototype

Arqui stands for ARchitecture QUery and Insight.

A click-through prototype built from the Figma file "Arky", page "Concept round 3". It has 24 screens: 11 for end users (sign in, onboarding, daily dashboard, current work, scenario planning, organisational views) and 13 for setting up and administering Arqui.

Each screen is a fixed 1728 x 956 artboard that scales to fit the browser window. Navigation follows the prototype links set up in Figma. On the current work, scenario planning and organisational views screens, the tabs (Chat, Chat history, Chat summary, Suggested actions, Deliverables, Collaborators) switch between the content states defined in Figma.

## Run it locally

```
npm install
npm run dev
```

The app opens on the sign-in screen. Open `/screens` for a list of every screen.

## Put it on GitHub and deploy it on Vercel

1. Create an empty repository on GitHub.
2. From this folder, run:
   ```
   git init
   git add .
   git commit -m "Arqui prototype"
   git branch -M main
   git remote add origin https://github.com/<your-account>/<your-repo>.git
   git push -u origin main
   ```
3. In Vercel, choose Add New, then Project, and import the repository.
4. Accept the detected settings (framework Vite, build command `npm run build`, output folder `dist`) and deploy.

`vercel.json` sends every path to `index.html`, so links such as `/s/current-work` work when opened directly.

## How it is built

- Vite, React, TypeScript and React Router.
- Tailwind CSS (build-time dependency), because Figma generates its styles as Tailwind classes.
- `src/screens/s<node id>.tsx` is one screen, named after its Figma frame id (for example `s14079` is node `4801:14079`).
- `src/screens/registry.ts` lists the screens, their routes and their click targets.
- `src/assets/img` holds the icons and illustrations. Lines, circles and standard icons are SVG. The isometric illustrations and sign-in logos are PNG renders from Figma.

## Known gaps

- Some small icons are still missing (for example the menu and search icons in the top bar). They render as empty space.
- The three "Sources" panels and the hover and pressed states are not built. Typing in fields, ticking checkboxes and similar form behaviour are not wired either.
- The ARQUI logo uses the Oswald font because the original font is not available on the web.
- The titles of two admin screens ("Capabilities review" and "Issues review") are working labels. The Figma frames are named only by number.
