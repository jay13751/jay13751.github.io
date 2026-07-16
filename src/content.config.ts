import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const statusSchema = z.enum(["draft", "ready", "published", "archived"])
const visibilitySchema = z.enum(["public", "private"]).default("public")

const blog = defineCollection({
  loader: glob({ base: "./content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: statusSchema,
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    visibility: visibilitySchema,
  }),
})

const research = defineCollection({
  loader: glob({ base: "./content/research", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: statusSchema,
    tags: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    confidence: z.enum(["low", "medium", "high"]).default("medium"),
    visibility: visibilitySchema,
  }),
})

const wiki = defineCollection({
  loader: glob({ base: "./content/wiki", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    status: statusSchema,
    category: z.string(),
    tags: z.array(z.string()).default([]),
    lastUpdated: z.coerce.date(),
    visibility: visibilitySchema,
  }),
})

const projects = defineCollection({
  loader: glob({ base: "./content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    category: z.string(),
    client: z.string(),
    role: z.string(),
    contribution: z.string(),
    tools: z.array(z.string()).default([]),
    links: z.record(z.string(), z.string()).default({}),
    featured: z.boolean().default(false),
    status: statusSchema,
    visibility: visibilitySchema,
    summary: z.string(),
  }),
})

export const collections = {
  blog,
  research,
  wiki,
  projects,
}
