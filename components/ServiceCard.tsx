import Link from 'next/link'

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="text-base font-semibold text-slate-900 group-hover:text-brand-700">
        {title}
      </div>
      <div className="mt-2 text-sm leading-6 text-slate-600">{description}</div>
      <div className="mt-4 text-sm font-semibold text-brand-700">Learn more</div>
    </Link>
  )
}
