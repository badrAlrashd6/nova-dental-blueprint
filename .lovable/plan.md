# Phase 2 Plan — Database Schema and Row Level Security (planning only)

Status: Phase 1 independent verification is deferred. `bun run typecheck` and `bun run build:standalone` remain unverified; Phase 1 is not complete. This plan makes no file edits, migrations, writes, users, or settings changes.

## Current state (inspected)
- No backend is connected: no `src/integrations/supabase`, no `supabase/` folder, no Supabase package usage in `src` or `package.json`.
- Services (10, keyed by `slug`) and doctors (4, keyed by `slug`) are static bilingual content in `src/content/clinic.ts`.
- The booking form (`/book`) collects: name, phone, email, service, doctor, date, time, notes; it validates locally only.
- The contact page has no message form (displays placeholder contact values only).

## Proposed tables (minimum)
1. `services` — mirror of existing static services: `slug` (unique), `name_ar`, `name_en`, `is_active`, `sort_order`, `is_demo` (default true).
2. `doctors` — mirror of existing static doctors: `slug` (unique), `name_ar`, `name_en`, `is_active`, `sort_order`, `is_demo` (default true).
3. `appointment_requests` — `full_name`, `phone`, `email` (nullable), `service_id` (FK services, nullable), `doctor_id` (FK doctors, nullable = "any doctor"), `preferred_date`, `preferred_time`, `notes`, `locale` ('ar'|'en'), `status` ('new'|'contacted'|'confirmed'|'cancelled'), `created_at`.
4. `contact_messages` — `full_name`, `phone`/`email` (at least one required), `message`, `locale`, `status` ('new'|'read'|'archived'), `created_at`. Only needed if a contact form is added (see decisions).
5. `user_roles` + `app_role` enum ('admin') + `has_role()` security-definer function — roles kept separate from any profile table.

No separate `patients` table in the first release: submissions are anonymous requests, not patient records (avoids storing medical data).

## Constraints and indexes
- Check constraints: name 2–100 chars, phone 6–20 chars of digits/+/spaces, email format, notes/message max 1000, `preferred_date >= current_date` enforced by a validation trigger (not a CHECK, which must be immutable), enums for status/locale.
- FKs use `on delete set null` so removing a service/doctor keeps history.
- Indexes: `appointment_requests(status, created_at desc)`, `(preferred_date)`, `(doctor_id)`, `(service_id)`; `contact_messages(status, created_at desc)`; unique on `slug`.

## Row Level Security
| Table | Public (anon) | Admin |
|---|---|---|
| services, doctors | SELECT where `is_active` | full CRUD |
| appointment_requests | INSERT only, forced `status='new'`; no SELECT | SELECT, UPDATE status, DELETE |
| contact_messages | INSERT only, forced `status='new'`; no SELECT | SELECT, UPDATE, DELETE |
| user_roles | none | SELECT own row |

Every table gets explicit GRANTs matching these policies (anon: SELECT on catalog, INSERT on submissions; authenticated: as policies allow; service_role: all). Admin checks use `has_role(auth.uid(),'admin')`.

## Data and UI
- Seed services/doctors from the existing fictional content, flagged `is_demo = true`; demo labels in the UI stay unchanged.
- No UI, routing, Arabic/English or RTL/LTR changes in this step. Static content remains the display source until a later step switches reads.
- Submissions will go through a validated (Zod) server function later, not directly from the browser, enabling rate limiting.

## Out of scope (later phases)
Admin sign-in and dashboard, creating the admin account, wiring the booking form, email notifications, publishing.

## Assumptions and missing decisions
1. Enabling Lovable Cloud is required before any migration — needs your approval.
2. Contact form: add a `contact_messages` table now, or defer until a form exists? (Plan assumes include.)
3. Should services/doctors live in the database at all, or stay static with requests storing just the `slug` text? (Plan assumes database mirror for referential integrity.)
4. Data retention period for submissions (e.g. delete after 90 days)?
5. Spam protection approach (rate limit by server function, optional captcha).
6. Admin account email/creation method — deferred to the authentication phase.
7. Updates to README/AGENTS.md/PHASE1_AUDIT.md to record the deferred verification will be made when implementation begins.
