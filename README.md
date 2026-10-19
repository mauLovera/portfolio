# Mauricio Lovera — Portfolio

**Live site:** https://next-portfolio-ts.vercel.app/

My personal portfolio: a small, animation-heavy site for showcasing projects, built with Next.js, TypeScript, Sass, and Framer Motion.

## Tech

- **Next.js 16** (Pages Router, Turbopack). Every page is statically generated, including the project pages via `getStaticPaths`
- **React 19** + **TypeScript**
- **Sass** CSS modules with shared tokens in `styles/utilities/_palette.scss`
- **Framer Motion**, loaded through `LazyMotion` with shared variants in `lib/motion.ts`. It respects the OS "reduce motion" setting.
- **next/font** for self-hosted Poppins
- **Resend** for contact-form email, via an API route at `pages/api/contact.ts`
- Deployed on **Vercel**

## Running locally

Requires Node 24.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Other scripts: `npm run build`, `npm start`, `npm run lint`.

### Contact form

The form on `/contact` posts to `/api/contact`, which emails the message via [Resend](https://resend.com).

1. Create a free Resend account using the email that should receive messages, then create an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. On Vercel, add it under **Settings → Environment Variables**.

Without a key, the form shows a "not configured" error instead of sending. Resend's sandbox sender can only deliver to the account owner's address. To send from your own domain, verify the domain in Resend and set `CONTACT_FROM_EMAIL`.

## Project structure

```
pages/            routes (index, about, contact, projects/[slug], api/contact)
components/       layout, shared, and per-page components (each with a .module.scss)
lib/projects.js   project data used by the project pages
lib/motion.ts     shared Framer Motion variants
styles/           global styles, reset, and design tokens
public/images/    project screenshots
```

To add a project, add an entry to `lib/projects.js` and its screenshots under `public/images/project-images/<slug>/`.

## Roadmap

- [x] Contact form
- [x] Framer Motion cleanup (shared variants, LazyMotion, reduced motion)
- [ ] Drive the project list and home page from `lib/projects.js` (it's currently duplicated)
- [ ] Optimize gallery images (`next/image` / WebP)
- [ ] Accessible, animated mobile menu
- [ ] Case-study write-ups for each project

## Screenshots

<h3 align="center">Landing Page</h3>

![Landing Page](https://i.imgur.com/0UyPvgd.png)

<h3 align="center">Selected Projects</h3>

![Selected Projects](https://i.imgur.com/LlLCkQt.png)

<h3 align="center">Project Page</h3>

![Project](https://i.imgur.com/mD6kvBE.png)
