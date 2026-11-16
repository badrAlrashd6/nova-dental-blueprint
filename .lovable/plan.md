# Connecting the existing external database — current status

No changes will be made. This explains why the option is missing.

## Finding
1. Lovable Cloud was switched on for this project in the previous step. The project now has its own built-in backend.
2. The "External Supabase" option only appears on projects that have **no backend yet**. That is why it is hidden — on iPhone and on desktop alike. It is not a mobile limitation.
3. Lovable Cloud cannot be removed from a project once added (restoring an older version does not remove it). So project `zetedflpwzhwgiuzdlcj` cannot be connected to *this* project.

## Where the option normally lives (for a project without a backend)
- Desktop: project name (top-left) → Settings → General → External Supabase → Connect → choose the linked organization → pick the project.
- iPhone: Chat mode → bottom-right "..." → Settings → General → External Supabase → Connect. Same steps.
- Prerequisite: a workspace owner or admin must first link the Supabase organization (Workspace Settings). After that, anyone with edit access can connect. Sign-in happens in a browser popup; no keys are pasted in chat.

## Options
1. **Keep Lovable Cloud (simplest).** Build bookings and the admin area on the built-in backend. Nothing to connect.
2. **Use the external project instead.** Create a new Lovable project without a backend (remix this one before any database work is relied on, or start fresh), then on that new project follow the path above and select "badrAlrashd6's Project" (`zetedflpwzhwgiuzdlcj`, eu-central-1) — not Balerion Shop. Linking the organization is easiest from desktop; the connect step also works on iPhone.

## Decision needed
Choose option 1 or 2. No file, setting, database or publishing changes will be made until you confirm.
