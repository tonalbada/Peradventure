import Link from "next/link"
import apps from "@/data/apps"

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded px-2 py-0.5 text-xs bg-neutral-200">{children}</span>
}

function AppCard({
  title, description, href, icon, status,
}: { title: string, description: string, href: string, icon?: string, status?: string }) {
  return (
    <Link href={href} className="block rounded border bg-white p-4 shadow-sm hover:shadow">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{icon ? `${icon} ` : ""}{title}</h3>
        {status ? <Badge>{status}</Badge> : null}
      </div>
      <p className="text-neutral-700">{description}</p>
    </Link>
  )
}

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">peradventure.se</h1>
      <p className="text-neutral-700 max-w-prose">
        Hemskärm med appar. Lägg till nya kort i <code>data/apps.ts</code>. Inga fler inställningar behövs.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {apps.map(app => {
          const href = app.kind === "internal" ? `/app/${app.slug}` : (app.url ?? "#")
          return (
            <AppCard
              key={app.slug}
              title={app.title}
              description={app.description}
              href={href}
              icon={app.icon}
              status={app.status}
            />
          )
        })}
      </div>
    </section>
  )
}
