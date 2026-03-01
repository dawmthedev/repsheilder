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
      className="group flex h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-white px-3 shadow-sm transition hover:-translate-y-0.5 hover:border-black/10 hover:shadow md:h-24"
    >
      <Image
        src={logoSrc}
        alt=""
        width={64}
        height={64}
        className="h-10 w-10 object-contain transition group-hover:scale-[1.03] md:h-12 md:w-12"
      />
      <div className="text-center text-xs font-semibold text-slate-700">{label}</div>
    </Link>
  )
}
