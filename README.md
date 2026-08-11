# Portfolio

Personal portfolio site. Next.js (App Router), static export, Tailwind CSS.
Dark theme, accent `#FF6B2B`, Space Grotesk + Space Mono via `next/font/google`.

Live: [add your Vercel URL here once deployed]

## Stack

- Next.js (App Router), exported as static HTML — no server runtime needed
- Tailwind CSS v4
- Fonts: Space Grotesk (headings), Space Mono (body) — loaded free from Google Fonts
- Deployed on Vercel's free tier

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives directly in the section components — there's no CMS or data file layer, so edit-and-redeploy is just edit-and-commit.

| Section | File |
|---|---|
| Name, nav links | `src/components/Nav.tsx` |
| Hero headline, CTAs | `src/components/Hero.tsx` |
| Bio | `src/components/About.tsx` |
| Skill categories | `src/components/Skills.tsx` |
| Case studies | `src/components/Work.tsx` |
| Experience timeline, education | `src/components/Experience.tsx` |
| Email, LinkedIn, contact form | `src/components/Contact.tsx` |
| Footer | `src/components/Footer.tsx` |
| Site title/meta description | `src/app/layout.tsx` |
| Colors, fonts | `src/app/globals.css` (`--accent`, `--bg`, `--fg` custom properties) |

Search the codebase for bracketed placeholders (`[YOUR NAME]`, `[METRIC]`, `[COMPANY]`, etc.) and replace them with real copy:

```bash
grep -rn "\[" src/components
```

### Resume

Drop your resume PDF at `public/resume.pdf` — the Hero "Download Resume" button already links to `/resume.pdf`.

### Contact form (optional)

The contact form is disabled by default and falls back to a plain mailto link. To enable it:

1. Create a free form at [formspree.io](https://formspree.io) and copy your form ID.
2. Set `FORMSPREE_ID` in `src/components/Contact.tsx`.
3. Update the `mailto:` and LinkedIn links in the same file.

## Deploying

This repo is connected to Vercel and redeploys automatically on every push to `main`. To ship a change:

```bash
git add -A
git commit -m "update copy"
git push
```

Vercel picks up the push, builds, and updates the live URL within a minute or two — no manual deploy step. Pushes to other branches or PRs get their own preview URLs automatically.

## Project structure

```
src/
  app/
    layout.tsx      # fonts, metadata, root shell
    page.tsx         # assembles all sections
    globals.css       # theme tokens, dark background, accent color
  components/         # one component per section
```
