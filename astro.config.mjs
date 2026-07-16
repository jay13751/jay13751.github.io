import { defineConfig } from "astro/config"

const repository = process.env.GITHUB_REPOSITORY ?? "jay13751/jay13751.github.io"
const repositoryName = repository.split("/").at(-1) ?? "jay13751.github.io"
const defaultBase = repositoryName === "jay13751.github.io" ? "/" : `/${repositoryName}`

export default defineConfig({
  output: "static",
  site: "https://jay13751.github.io",
  base: process.env.SITE_BASE ?? defaultBase,
  trailingSlash: "ignore",
})
