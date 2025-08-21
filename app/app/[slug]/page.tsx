import apps from "@/data/apps"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return apps.filter(a => a.kind === "internal").map(a => ({ slug: a.slug }))
}

export default function AppPage({ params }: { params: { slug: string } }) {
  const item = apps.find(a => a.slug === params.slug && a.kind === "internal")
  if (!item) return notFound()

  if (item.slug === "hello") {
    const now = new Date().toLocaleString("sv-SE")
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">👋 Hello</h1>
        <p>Nu är klockan {now}.</p>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      <p>{item.description}</p>
      <p>Bygg din app här. Den renderas på /app/{item.slug}.</p>
    </section>
  )
}
