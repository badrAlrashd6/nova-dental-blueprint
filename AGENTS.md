# Development Guidelines — Nova Dental Clinic

## TypeScript
- Strict typing. Avoid `any`; prefer explicit types for exported functions and data.
- Model bilingual copy with the `L` type (`{ ar, en }`); never hardcode visible text in one language.
- Treat optional data as nullable (`string | null`) and handle `null` at the point of rendering.

## Architecture (keep it)
- TanStack Start + file-based routes in `src/routes`; never edit `routeTree.gen.ts`; no other router.
- Each content route defines its own `head()` (title, description, og:*). No `og:image` on the root route.
- UI copy lives in `src/lib/site.ts`, demo content in `src/content/clinic.ts`, contact data only in `src/config/contact.ts` — do not duplicate clinic information elsewhere.
- Contact values are `null` until real data is provided; components must hide links for missing values and show the pending label.
- Styling uses semantic design tokens from `src/styles.css`; no hardcoded colours in components.

## Components and naming
- `components/site` for shared/layout, `components/home` for homepage sections, `components/ui` for shadcn primitives.
- Components: PascalCase files and names. Hooks: `useX`. Utilities/constants: camelCase.
- Prefer small reusable components (`Media`, `Reveal`, `Section`, `SectionHeading`, `ContactValue`) over copy-paste.
- RTL/LTR: use logical utilities (`ms-`, `ps-`, `rtl:`/`ltr:`) and flip directional icons with `isAr`.

## Readability
- Keep files focused; extract when a component exceeds one clear responsibility.
- Comment the *why*, not the *what*. Run `bun run format` before committing.

## Error handling
- Route errors go through the root `errorComponent`; SSR failures through `src/server.ts`.
- App-owned error diagnostics use the local console logger without vendor hooks or remote reporting, so application code stays platform-neutral.
- Never let missing optional data throw; render a fallback instead.

## Security
- No secrets in client code or `VITE_*` variables; never commit `.env` files.
- External links use `rel="noreferrer"`; validate all form input with Zod.
- Do not present demo data as real; never use real patient information.

## Dependencies
- Do not add a package when the existing stack covers the need; justify any new dependency.
- Check imports and usage before removing a file or package.
- Keep hosted and standalone Vite configurations separate: the former preserves Lovable preview, while the latter uses open-source plugins and defaults to Nitro's Node server output.
- Reuse centralized disclosure copy in shared headings, images and item displays so demo claims remain labeled wherever reused.

## Verification and academic handoff
- README records commands actually run and their outcomes; never equate a working hosted preview with a verified standalone production build.
- Explain student contributions and assistance truthfully; neither cleanup nor removal of platform runtime hooks establishes sole authorship.
- Bookings persist only through the validated `submitBooking` server function (server-only client); visitors have no table privileges, so never add anon policies or grants on booking tables.
- Admin access is a single allowlisted, email-confirmed account enforced by the `is_nova_admin()` database function plus a server-side check in every admin server function; route gates are convenience only.
- Admin accounts are never created from the app: public signup is disabled and sign-in uses magic links with `shouldCreateUser: false`.
- Booking allowlists (services, doctors, time slots) live in `src/lib/booking.ts` and are mirrored by database CHECK constraints; change both together.
- Contact form and payments remain out of scope; contact values stay placeholders.
- No test runner/script is configured; do not add runner-specific test files to application TypeScript inputs without configuring their tooling, because unresolved test imports break preview checks.

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
