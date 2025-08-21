export type AppItem = {
  slug: string
  title: string
  description: string
  icon?: string
  kind: "internal" | "external"
  url?: string
  status?: "idé" | "wip" | "klar"
}

const apps: AppItem[] = [
  {
    slug: "hello",
    title: "Hello",
    description: "Minimal intern app som visar datum",
    icon: "👋",
    kind: "internal",
    status: "klar",
  },
  {
    slug: "formue",
    title: "Formue",
    description: "Länk till formue.se",
    icon: "🌐",
    kind: "external",
    url: "https://formue.se",
    status: "klar",
  },
]

export default apps
