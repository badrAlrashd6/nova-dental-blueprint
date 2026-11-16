# Phase 1 repair

- [x] Inspect recent edits, identity, contact placeholders, and runtime references.
- [x] Remove the unsupported contact test without adding a test framework.
- [x] Repair lint failures and verify the managed preview and local booking demonstration.
- [x] Record actual check outcomes and independent-build verification limitations.
- [ ] Independent TypeScript/standalone production verification — blocked by this environment's prohibition on manual application typechecks/builds.
- [x] Prepare the incremental repair for commit; stop before Phase 2 without publishing or changing settings.

## Phase 2 (in progress)
- [ ] Connect existing Supabase project zetedflpwzhwgiuzdlcj (Nova only) — blocked: user must connect it in Project Settings → General → External Supabase; project must be ACTIVE
- [ ] Schema + RLS (appointment_requests, user_roles, has_role) — after connection
- [ ] Booking form persistence via validated server function — after schema
- [ ] /admin/login + protected /admin dashboard (view, status change, delete) — after schema
- [ ] Create single admin server-side — needs admin email from user
- Phase 1 typecheck / standalone build remain deferred and unverified
