# Sreekutty M R · Portfolio

Personal portfolio built with React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion and React Router 7.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Start the dev server                              |
| `npm run build`     | Type-check and build to `dist/`                   |
| `npm run preview`   | Serve the production build locally                |
| `npm run typecheck` | TypeScript only                                   |
| `npm run lint`      | ESLint                                            |
| `npm run assets`    | Re-render `og-image.png` / `apple-touch-icon.png` from `design/*.svg` (needs `rsvg-convert`) |

## Content

All text lives in `src/data/`:

- `site.ts`: name, title, email, social links, resume filename
- `projects.ts`: project cards and case studies (one object per project)
- `experience.ts`, `skills.ts`, `leadership.ts`, `education.ts`

To add details to a case study, extend the project's `challenges`, `features` or `responsibilities`, or add `links` for a public repo or demo. Sections render only when data is present.

## Resume

Place your PDF at **`public/resume.pdf`**. Resume buttons (navbar, hero, mobile menu, contact) appear automatically when the file exists and stay hidden when it doesn't. The dev server restarts on its own when the file is added.

## Site URL and SEO

Copy `.env.example` to `.env` and set your domain:

```
VITE_SITE_URL=https://your-domain.com
```

With it set, the build adds canonical and Open Graph URLs, the social share image, and `sitemap.xml`. `robots.txt` is always generated. Person structured data (JSON-LD) is included in `index.html`.

## Deploy

The output in `dist/` is a static single-page app. Project pages (`/projects/:slug`) need a fallback to `index.html`:

- **Vercel**: import the repo; `vercel.json` already has the rewrite. Set `VITE_SITE_URL` in project settings.
- **Netlify**: build command `npm run build`, publish directory `dist`; `public/_redirects` handles the fallback.
- **GitHub Pages / other static hosts**: configure a 404 → `index.html` fallback, or switch to a host that supports rewrites.
