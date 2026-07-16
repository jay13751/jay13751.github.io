const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, "")

export const withBase = (path: `/${string}`): string => {
  if (path === "/") {
    return normalizedBase === "" ? "/" : `${normalizedBase}/`
  }

  return `${normalizedBase}${path}`
}
