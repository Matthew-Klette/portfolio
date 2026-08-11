# Portfolio

Personal portfolio site. Next.js (App Router), static export, Tailwind CSS.
Monochrome dark theme (black/white/gray), Bebas Neue + JetBrains Mono via `next/font/google`.

Live: [add your Vercel URL here once deployed]

## Stack

- Next.js (App Router), exported as static HTML — no server runtime needed
- Tailwind CSS v4
- Fonts: Bebas Neue (headings), JetBrains Mono (body/labels) — loaded free from Google Fonts
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
| Name, nav links, logo mark | `src/components/Nav.tsx` |
| Hero headline, CTAs | `src/components/Hero.tsx` |
| Tech stack ticker | `src/components/TechStack.tsx` |
| Bio | `src/components/About.tsx` |
| Skill categories | `src/components/Skills.tsx` |
| Case studies | `src/components/Work.tsx` |
| Experience (role, scope of ownership) | `src/components/Experience.tsx` |
| Education (BCAD course clusters) | `src/components/Education.tsx` |
| Email, LinkedIn, contact form | `src/components/Contact.tsx` |
| Footer | `src/components/Footer.tsx` |
| Site title/meta description, favicon | `src/app/layout.tsx` |
| Colors, fonts | `src/app/globals.css` (`--bg`, `--fg`, `--off-white`, `--border` custom properties) |

Search the codebase for bracketed placeholders (`[YOUR-LINKEDIN]`, `[TIMEFRAME]`, `[Institution name]`, `[PROJECT NAME]`, etc.) and replace them with real copy:

```bash
grep -rn "\[" src/components
```

### Resume

Drop your resume PDF at `public/resume.pdf` — the Hero "Download Resume" button already links to `/resume.pdf`.

### Contact form (optional)

The contact form is disabled by default and falls back to a plain mailto link. To enable it:

1. Create a free form at [formspree.io](https://formspree.io) and copy your form ID.
2. Set `FORMSPREE_ID` in `src/components/Contact.tsx`.
3. Update the LinkedIn link in the same file (email is already set).

### Logo / favicon

The MK monogram lives at `public/mark.png` (used as favicon + nav mark) and `public/apple-touch-icon.png`. The untouched original is kept at `public/logo-full.png`. Regenerate the crop if you replace the source logo:

```bash
python3 -c "
from PIL import Image
img = Image.open('public/logo-full.png')
crop = img.crop((370, 290, 890, 710))
w, h = crop.size
side = max(w, h) + 40
square = Image.new('RGBA', (side, side), (0, 0, 0, 0))
square.paste(crop, ((side - w) // 2, (side - h) // 2))
square.save('public/mark.png')
square.resize((180, 180)).save('public/apple-touch-icon.png')
square.convert('RGBA').save('src/app/favicon.ico', format='ICO', sizes=[(16,16),(32,32),(48,48)])
"
```

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
    globals.css       # theme tokens: monochrome palette, fonts
  components/         # one component per section
```
