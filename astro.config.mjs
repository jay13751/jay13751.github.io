import { defineConfig } from "astro/config"

const repository = process.env.GITHUB_REPOSITORY ?? "jay13751/jay.github.io"
const defaultBase = repository === "jay13751/jay13751.github.io" ? "/" : "/jay.github.io"

export default defineConfig({
  output: "static",
  site: "https://jay13751.github.io",
  base: process.env.SITE_BASE ?? defaultBase,
  trailingSlash: "ignore",
})
