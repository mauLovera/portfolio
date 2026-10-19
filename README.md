# Mauricio Lovera — Portfolio

**Live site:** https://next-portfolio-ts.vercel.app/

My personal portfolio: a small, animation-heavy site for showcasing projects, built with Next.js, TypeScript, Sass, and Framer Motion.

## Tech

- **Next.js 16** (Pages Router, Turbopack). Every page is statically generated, including the project pages via `getStaticPaths`
- **React 19** + **TypeScript**
- **Sass** CSS modules with shared tokens in `styles/utilities/_palette.scss`
- **Framer Motion**, loaded through `LazyMotion`. Motion values are tokens in `lib/motion/`, and `SplitText`/`Reveal` components handle reveals. It respects the OS "reduce motion" setting.
- **next/font** for self-hosted Poppins
- Deployed on **Vercel**

## Running locally

Requires Node 24.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Project structure

```
pages/            routes (index, about, contact, projects/[slug])
components/       layout, shared, and per-page components (each with a .module.scss)
lib/projects.js   project data used by the project pages
lib/motion/       motion tokens, timing helpers, variants, triggers
lib/intro.ts      landing intro copy and its derived choreography
styles/           global styles, reset, and design tokens
public/images/    project screenshots
```

To add a project, add an entry to `lib/projects.js` and its screenshots under `public/images/project-images/<slug>/`.

## Roadmap

- [ ] Contact form
- [x] Framer Motion cleanup (motion tokens, derived timing, SplitText/Reveal, LazyMotion, reduced motion)
- [ ] Drive the project list and home page from `lib/projects.js` (it's currently duplicated)
- [ ] Optimize gallery images (`next/image` / WebP)
- [x] Accessible, animated mobile menu
- [ ] Case-study write-ups for each project

## Screenshots

<h3 align="center">Landing Page</h3>

![Landing Page](https://i.imgur.com/0UyPvgd.png)

<h3 align="center">Selected Projects</h3>

![Selected Projects](https://i.imgur.com/LlLCkQt.png)

<h3 align="center">Project Page</h3>

![Project](https://i.imgur.com/mD6kvBE.png)
