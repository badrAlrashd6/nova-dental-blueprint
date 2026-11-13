# Nova Dental Clinic — عيادة نوفا لطب الأسنان

A bilingual (Arabic / English) website for a fictional dental clinic in Damascus, Syria.

## 1. Project overview
The site is front-end only. It has eight pages: Home, About, Services, Doctors, Book Appointment, Testimonials, FAQ and Contact. Arabic is the default language (RTL) and English is the secondary language (LTR). The site remembers the visitor's language choice in `localStorage`.

## 2. Academic purpose
This is an **academic demonstration project**. It is **not** a real, operating dental clinic. The project shows a production-style front-end architecture: routing, server-side rendering, bilingual content, accessibility and responsive design.

## 3. Technology stack
| Area | Technology |
| --- | --- |
| UI | React 19, TypeScript |
| Framework / routing | TanStack Start v1, TanStack Router (file-based), SSR |
| Data utilities | TanStack Query |
| Styling | Tailwind CSS v4 (configured in `src/styles.css`), shadcn/ui (Radix primitives) |
| Forms | React Hook Form + Zod |
| Build | Vite 8 (installed repository version), Nitro (server output) |
| Quality | TypeScript, ESLint, Prettier |

## 4. Architecture
- **Routes** (`src/routes`): one file per page. Each page defines its own `head()` metadata. `__root.tsx` is the app shell (navigation, footer and language provider).
- **Content layer**: all visible text is stored as `{ ar, en }` pairs.
  - `src/lib/site.ts`: clinic identity and the UI dictionary.
  - `src/content/clinic.ts`: services, doctors, testimonials, FAQ and timeline. **All of this is demo data.**
  - `src/config/contact.ts`: the **single source of truth** for contact details (phone, WhatsApp, email, address, map, social, hours). Every value is currently a `null` placeholder.
- **i18n** (`src/lib/i18n.tsx`): `LanguageProvider` and the `useLang()` hook. The hook provides `t()` for translation, plus `dir` and `isAr`.
- **Components**: `src/components/site` holds the layout and shared components, `src/components/home` holds the homepage sections and `src/components/ui` holds the shadcn primitives.

## 5. Folder structure
```
src/
  assets/          Images used by pages
  components/
    home/          Homepage sections
    site/          Layout + shared components (nav, footer, Media, Reveal, CountUp…)
    ui/            shadcn/ui primitives
  config/          contact.ts — contact placeholders
  content/         Bilingual demo content
  lib/             i18n, site dictionary, utilities, error handling
  routes/          File-based routes (routeTree.gen.ts is generated — do not edit)
  server.ts        SSR entry with error wrapper
  start.ts         TanStack Start middleware
  styles.css       Tailwind v4 theme + design tokens
```

## 6. Prerequisites
- Node.js 20 or newer, **or** Bun 1.1 or newer
- Git

## 7. Installation
```sh
# From your downloaded project folder:
bun install        # or: npm install
```

## 8. Development
```sh
bun run dev:standalone   # independent config, http://localhost:3000
```

## 9. Production build
```sh
bun run build:standalone   # outputs .output/ (Nitro "node-server" preset)
bun run start:standalone   # serves the build with Node
```
The standalone configuration defaults to Nitro's Node server preset. Other hosting presets have not been verified in this audit.

> `bun run dev` and `bun run build` use `vite.config.ts`. That file depends on the hosting platform's preset package. It is kept for now so the existing hosted preview keeps working. `vite.config.standalone.ts` uses only open-source plugins.

For the Lovable-hosted preview, use `bun run dev`; its development server is managed by Lovable in this workspace. The standalone configuration is a separate path, not evidence that the entire project is already independent. The repository still requires `@lovable.dev/vite-tanstack-config` for its hosted configuration.

## 10. Linting and type checks
```sh
bun run lint        # ESLint (+ Prettier rules)
bun run typecheck   # existing TypeScript check (not executed in this audit environment)
bun run format      # Prettier
```

## 11. Environment variables
The app needs **no** environment variables. There are no secrets, API keys or backend connections. If you add variables later:
- Only `VITE_*` variables are exposed to the browser. Never put secrets in them.
- Read server-only values through `process.env` inside server code.
- Keep `.env*` files out of version control.

## 12. Current limitations
- Front-end only: no backend, no database and no authentication.
- The booking form validates input but **does not send or store data**. Contact is an information page; there is no contact form in the current repository.
- Contact details (phone, WhatsApp, email, address, map, social, hours) are **placeholders** until real information is provided in `src/config/contact.ts`. Buttons for missing details are hidden automatically.
- Audit regression checks are described below; there is no comprehensive application test suite.

## 13. Demo data disclaimer
The doctors, qualifications, licences, statistics, patient reviews, testimonials, before/after images and insurance partners are **fictional demonstration data**. They do not represent verified real-world information or real patients. Images are illustrative.

This disclosure also covers invented years, facility dimensions, treatment timings and outcomes. No care, appointment confirmation, emergency line, insurance coverage, payment processing or real follow-up is offered. Use fictional input when trying the booking form. Currency identity remains SYP; no prices are published.

## 14. Academic authorship
This repository is an academic demonstration developed with AI assistance. Students should describe their own contributions and any tools or assistance accurately according to their institution's rules. Platform-neutral runtime code does not establish sole authorship. No authorship declaration or required disclosure has been removed.

## 15. Phase 1 verification
The Phase 1 audit report is in `PHASE1_AUDIT.md` and records actual command outcomes. This environment prohibits manual application builds and typechecks because those are managed by the preview harness. Consequently, `bun run typecheck` and `bun run build:standalone` were **not run**, and a standalone production build has **not genuinely passed this audit**. Existing documentation or earlier claims are not proof of an independent build.

## 16. Remaining platform references
The hosted Vite configuration/package, lockfile, Bun installation exceptions, `.lovable` metadata and managed block in `AGENTS.md` remain intentionally. The historical `.lovable/plan.md` still mentions Kuwait/Salmiya and old fictional contacts; it is not application data and was left untouched as requested. The workspace display name reported by the owner is “Kuwait Dental Elegance”, which conflicts with Nova Dental Clinic; workspace metadata was not changed or independently queried. No publication, visibility or database settings were changed.
