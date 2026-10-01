import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function siteBase() {
  const value = process.env.BASE_PATH;
  if (!value || value === "/") return "/";
  const withLead = value.startsWith("/") ? value : `/${value}`;
  return withLead.endsWith("/") ? withLead : `${withLead}/`;
}

export default defineConfig({
  base: siteBase(),
  plugins: [react()],
});
