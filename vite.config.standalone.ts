// Platform-independent Vite configuration.
// Uses only open-source plugins, so the app can be built and deployed
// without @lovable.dev/vite-tanstack-config.
//   bun run dev:standalone   |   bun run build:standalone
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: { port: 3000 },
  resolve: { dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"] },
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({ server: { entry: "server" } }),
    // Default Nitro preset is "node-server"; set NITRO_PRESET (e.g. "vercel",
    // "netlify", "cloudflare-module") to target another host.
    nitro(),
    viteReact(),
  ],
});
