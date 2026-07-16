type ContentStatus = "draft" | "ready" | "published" | "archived"
type Visibility = "public" | "private"

type ListableData = {
  readonly status: ContentStatus
  readonly visibility?: Visibility
}

type ListableEntry = {
  readonly data: ListableData
}

export const isPublicEntry = <T extends ListableEntry>(entry: T): boolean => {
  const visibility = entry.data.visibility ?? "public"

  return visibility === "public" && (entry.data.status === "ready" || entry.data.status === "published")
}

export const formatKoreanDate = (value: Date): string =>
  new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(value)
