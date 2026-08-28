# Mariem Ben Khelifa — Portfolio

A premium, dark-mode developer/designer portfolio built with plain **HTML, CSS and vanilla JavaScript**. Run the included Node server to receive messages and use the private inbox.

## Why no framework?

React/Next.js would add a build step and dependency graph for content that's fundamentally static text, images and a handful of interactions (filtering, a modal, a lightbox, scroll reveals). Vanilla JS keeps the site fast, trivially hostable anywhere (GitHub Pages, Netlify, any static host — just drag the folder in), and easy for you to edit without touching tooling.

## Design direction

- **Palette**: near-black void (`#08080c`) with layered surfaces, a blue → violet gradient accent, and soft ambient glow — restrained, not neon.
- **Type**: Space Grotesk (display/headings), Inter (body copy), JetBrains Mono (labels, nav, code-style eyebrows) — a nod to the "developer" half of your identity.
- **Signature element**: the hero's terminal-style status chip and cycling role line, plus code-comment-style section eyebrows (`// 01 — About`), tie the "developer" identity into the visual language without leaning on generic gradient-blob clichés.
- Motion is used for scroll reveals, hover states and one ambient background drift — nothing looping or attention-grabbing, and everything respects `prefers-reduced-motion`.

## File structure

```
index.html          → all markup/sections (structure only, no content)
css/style.css        → all styling, organized by section, tokens at the top
js/data.js           → ALL YOUR CONTENT lives here — edit this file only
js/main.js           → rendering + interaction logic (nav, filters, modal, lightbox, cursor, reveal)
assets/images/       → profile, project, design and website images go here
assets/cv/           → your CV/resume PDF
```

## Getting started

1. Open `js/data.js`. This is the only file you need to edit for content.
2. Replace every `YOUR_...` placeholder: name, email, GitHub, LinkedIn, CV path, profile photo path, and all project/design/website/certification entries.
3. Drop your images into `assets/images/...` and your CV into `assets/cv/`, matching the filenames you used in `data.js` (or update the paths).
4. Open `index.html` directly in a browser to preview, or serve the folder with any static server, e.g.:
   ```bash
   npx serve .
   # or
   python3 -m http.server
   ```

### Adding a project

Add a new object to the `PROJECTS` array in `js/data.js` — the grid, filters, and modal all update automatically:

```js
{
  id: "unique-id",
  title: "Project Name",
  category: "Web Development", // must match one of PROJECT_CATEGORIES
  tags: ["React", "Node.js"],
  thumbnail: "assets/images/projects/your-image.jpg",
  summary: "One-line description shown on the card.",
  overview: "Longer paragraph shown in the modal.",
  problem: "...", solution: "...", features: ["..."],
  role: "...", results: "...",
  github: "https://github.com/you/repo",
  demo: "https://your-demo-url.com",
}
```

Adding graphic design work, websites, academic projects, timeline entries and certifications follows the same pattern — see the corresponding array in `data.js`.

### Missing images

Until you add real images, every `<img>` has a graceful placeholder fallback (a labeled dark card) so the layout never breaks — you'll just see a placeholder instead of a broken-image icon.

### Contact form and private inbox

Install Node.js 18+ and start the server from the project root:

```bash
npm start
```

The portfolio is available at `http://localhost:3000`. Messages are stored in `data/messages.json` and the private inbox is at `http://localhost:3000/admin`. Set `ADMIN_PASSWORD` before starting the server; the default is intended only for local development.

For production, use HTTPS, set a strong `ADMIN_PASSWORD`, and deploy the server on a host that supports Node.js and persistent storage. A static host such as GitHub Pages cannot run this backend.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties, `IntersectionObserver`, and CSS `columns` for the masonry gallery — all broadly supported.

## Performance notes

- No external JS frameworks or icon libraries — icons are inline SVG.
- Images use `loading="lazy"`.
- Google Fonts are the only external request; consider self-hosting them for a fully offline-capable build.
- Animations are GPU-friendly (`transform`/`opacity`) and gated behind `prefers-reduced-motion`.
