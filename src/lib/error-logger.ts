/** Local diagnostics only: no vendor hooks, remote requests, or form data. */
export function logApplicationError(error: unknown): void {
  const message =
    error instanceof Response
      ? `Application response failed (${error.status})`
      : error instanceof Error
        ? `${error.name}: ${error.message}`
        : "Unknown application error";
  console.error(message);
}
