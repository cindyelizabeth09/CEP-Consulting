# CEP Consulting Services — Website

A clean, mobile-friendly one-page marketing website for **CEP Consulting Services, LLC**.

---

## Framework & Stack

| Item | Detail |
|---|---|
| Framework | **React 18 + Vite 6** |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Package Manager | pnpm (monorepo workspace) |
| Routing | Wouter |
| UI Components | Radix UI + shadcn/ui |

---

## Running Locally

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install dependencies
```bash
pnpm install
```

### Start the dev server
```bash
pnpm --filter @workspace/cep-consulting run dev
```

The site will be available at: **http://localhost:23924**

> Note: The `PORT` and `BASE_PATH` environment variables are required (see `.env.example`).

### Build for production
```bash
pnpm --filter @workspace/cep-consulting run build
```

Output is written to `artifacts/cep-consulting/dist/public/`.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in any values:

```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the dev server listens on | `23924` |
| `BASE_PATH` | URL base path for the app | `/` |

---

## Project Structure

```
artifacts/cep-consulting/
├── src/
│   ├── App.tsx          # Main single-page component (all sections)
│   ├── main.tsx         # React entry point
│   └── index.css        # Tailwind + theme tokens
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .replit-artifact/
    └── artifact.toml    # Replit deployment config
```

---

## Key Details

- **No database** — this is a fully static frontend site.
- **No backend API** — all content is hardcoded in `src/App.tsx`.
- **No authentication** — public-facing marketing page.
- **No API keys required** — the only external links are Calendly and Instagram (public URLs).

---

## Sections on the Page

1. **Header / Nav** — Sticky navigation with mobile hamburger menu
2. **Hero** — Headline, description, CTA buttons
3. **About** — Company description + Areas of Focus
4. **Services / Capabilities** — 6 capability cards
5. **Contact** — Calendly booking block, email, phone, Instagram
6. **Privacy Policy** — Collapsible legal section
7. **Footer** — Copyright + Privacy Policy link

---

## Deploying

This site is configured for static hosting. After running `pnpm build`, serve the `dist/public/` folder from any static host (Replit, Netlify, Vercel, GitHub Pages, etc.).

On Replit: click **Publish** to deploy instantly.

---

## Contact Info on the Site

- **Email:** cepconsultingservicesllc@gmail.com
- **Phone:** (562) 552-2607
- **Calendly:** https://calendly.com/cindy-437
- **Instagram:** https://www.instagram.com/cep.consulting/

To update any of these, edit the constants at the top of `src/App.tsx`.
