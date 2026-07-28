# Nova Dental Clinic — Foundation & Scaffolding

Set up a premium, front-end-only dental clinic site with a full design system, routing, shared layout (nav + footer), and scaffolded pages. Homepage detailed design deferred.

## Design System (`src/styles.css`)

Replace default shadcn tokens with Nova's palette:

- `--background`: white `oklch(1 0 0)`
- `--foreground`: near-black `oklch(0.18 0.02 260)`
- `--primary`: `#2563EB` → `oklch(0.554 0.213 262)` (primary-foreground white)
- `--accent`: `#06B6D4` → `oklch(0.746 0.128 210)`
- `--muted`: soft cool gray, `--muted-foreground` mid-gray
- `--border`: `oklch(0.94 0.005 260)`
- `--ring`: primary
- `--radius`: `1rem` (16px), utilities give 20px via `rounded-xl`/`rounded-2xl`
- Custom tokens: `--shadow-soft`, `--shadow-elevated`, `--shadow-glow` (primary tint); `--gradient-primary` (primary → accent); `--gradient-hero` (subtle white → cool tint)
- Motion tokens: `--transition-smooth`, `--transition-spring`
- Only light mode used site-wide (remove `.dark` usage for MVP but keep tokens harmless)

## Typography

Load via `<link>` in `src/routes/__root.tsx` head:
- Headings: **Fraunces** (modern serif, luxurious)
- Body: **Inter** (clean, readable)

Register in `@theme`: `--font-display: "Fraunces"`, `--font-sans: "Inter"`. Body defaults to Inter; `.font-display` for headings. Large spacing scale via generous section padding.

## Routing (`src/routes/`)

TanStack file routes; each has its own `head()` metadata (title, description, og:title, og:description):

- `index.tsx` — Home (replace placeholder; scaffold hero placeholder only, detailed design deferred)
- `about.tsx` — About Nova
- `services.tsx` — Services overview
- `doctors.tsx` — Meet the doctors
- `book.tsx` — Book Appointment (form scaffold)
- `testimonials.tsx` — Patient stories
- `faq.tsx` — FAQ
- `contact.tsx` — Contact / location

`__root.tsx` wraps `<Outlet />` with `<SiteNav />` + `<SiteFooter />`, keeps QueryClientProvider, updates meta to Nova defaults.

## Shared Components (`src/components/site/`)

- `SiteNav.tsx` — sticky, transparent-over-hero, blurs/whitens on scroll (glassmorphism: `backdrop-blur-xl bg-white/70`). Contains: Nova wordmark logo (SVG), nav links (Home, About, Services, Doctors, Testimonials, FAQ, Contact), "Call" ghost button (`tel:` link), "Book Appointment" primary button → `/book`. Mobile: hamburger → slide-in sheet.
- `SiteFooter.tsx` — 4-column grid: Clinic info + logo, Quick Links, Working Hours (Sat–Thu 9am–9pm, Fri closed), Contact (Kuwait address, phone, email) + social icons (Instagram, X, Facebook, TikTok). Bottom bar with © 2026 Nova Dental Clinic.
- `Container.tsx` — max-w wrapper with responsive padding
- `Section.tsx` — vertical rhythm wrapper (large spacing)
- `SectionHeading.tsx` — eyebrow + display heading + subcopy
- `PageHero.tsx` — reusable inner-page hero (title, subtitle, gradient background)

Realistic Kuwait clinic details used consistently:
- Address: Salem Al Mubarak Street, Salmiya, Kuwait
- Phone: +965 2222 8899
- Email: hello@novadental.kw
- Hours: Sat–Thu 9:00 AM – 9:00 PM; Friday closed

## Page Scaffolds

Each scaffolded page renders `<PageHero>` + one placeholder `<Section>` with a short realistic intro paragraph and a comment marking where full content will be built next. Home renders a minimal hero placeholder with real headline ("Precision dentistry, refined for Kuwait.") and CTA buttons only — no full sections yet.

## Folder Structure

```text
src/
  components/
    site/         (SiteNav, SiteFooter, Container, Section, SectionHeading, PageHero)
    ui/           (existing shadcn)
  routes/         (all pages above)
  styles.css      (design system)
  lib/
```

## Out of Scope (this step)

Detailed Home sections, full Services grid, doctor bios, full booking form logic, testimonials carousel content, FAQ accordion content — scaffolds only; built in follow-up turns.
