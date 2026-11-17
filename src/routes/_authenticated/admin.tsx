import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "لوحة الإدارة | Nova Dental Clinic — Admin" },
      { name: "description", content: "Private dashboard for demo appointment requests." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin dashboard | Nova Dental Clinic" },
      { property: "og:description", content: "Private administrator area of an academic demo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminDashboard,
});
