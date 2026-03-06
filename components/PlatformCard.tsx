import Image from 'next/image'
import Link from 'next/link'

export function PlatformCard({
  href,
  logoSrc,
  label,
}: {
  href: string
  logoSrc: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-24 flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-black/5 bg-white px-3 shadow-sm transition hover:-translate-y-0.5 hover:border-black/10 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600/40 focus-visible:ring-offset-2 md:h-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-90" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white" />
      </div>

      <Image
        src={logoSrc}
        alt=""
        width={72}
        height={72}
        className="relative h-12 w-12 object-contain transition duration-200 group-hover:scale-[1.06] md:h-14 md:w-14"
      />
      <div className="relative text-center text-sm font-semibold tracking-tight text-slate-800">{label}</div>
    </Link>
  )
}
