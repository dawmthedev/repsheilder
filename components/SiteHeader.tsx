import Image from 'next/image'
import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Repshielder"
            width={160}
            height={48}
            priority
            className="h-9 w-auto"
          />
          <span className="sr-only">Repshielder</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="/review-removal" className="hover:text-brand-600">
            Review Removal
          </Link>
          <Link href="/quote?p=google" className="hover:text-brand-600">
            Google
          </Link>
          <Link href="/quote?p=glassdoor" className="hover:text-brand-600">
            Glassdoor
          </Link>
          <Link href="/quote?p=indeed" className="hover:text-brand-600">
            Indeed
          </Link>
          <Link href="/quote?p=facebook" className="hover:text-brand-600">
            Facebook
          </Link>
          <Link href="/quote?p=trustpilot" className="hover:text-brand-600">
            Trustpilot
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/quote?p=google"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Free Case Evaluation
          </Link>
        </div>
      </div>
    </header>
  )
}
