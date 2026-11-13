import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { logApplicationError } from "../lib/error-logger";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ui } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLang } from "@/lib/i18n";

function NotFoundComponent() {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t(ui.notFound)}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(ui.notFoundDesc)}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t(ui.home)}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const { t } = useLang();
  const router = useRouter();
  useEffect(() => {
    logApplicationError(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t(ui.errorTitle)}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(ui.errorDesc)}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t(ui.retry)}
          </Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t(ui.home)}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "عيادة نوفا لطب الأسنان | Nova Dental Clinic — Damascus, Syria" },
      {
        name: "description",
        content:
          "عيادة نوفا — مشروع أكاديمي خيالي في دمشق، سوريا؛ لا يقدم رعاية أو حجوزات فعلية.",
      },
      { name: "author", content: "Nova Dental Clinic (academic project)" },
      { property: "og:site_name", content: "Nova Dental Clinic | عيادة نوفا لطب الأسنان" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "عيادة نوفا لطب الأسنان | Nova Dental Clinic — Damascus, Syria",
      },
      {
        name: "twitter:title",
        content: "عيادة نوفا لطب الأسنان | Nova Dental Clinic — Damascus, Syria",
      },
      {
        property: "og:description",
        content:
          "عيادة نوفا — مشروع أكاديمي خيالي في دمشق، سوريا؛ لا يقدم رعاية أو حجوزات فعلية.",
      },
      {
        name: "twitter:description",
        content:
          "عيادة نوفا — مشروع أكاديمي خيالي في دمشق، سوريا؛ لا يقدم رعاية أو حجوزات فعلية.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <SiteNav />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
