import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold text-slate-900">Repshielder</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We help businesses remove policy-violating reviews through evidence-based disputes. We do not remove legitimate reviews, and we do not guarantee removals.
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/about" className="text-slate-600 hover:text-brand-700">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-brand-700">
                Contact
              </Link>
              <Link href="/privacy" className="text-slate-600 hover:text-brand-700">
                Privacy
              </Link>
              <Link href="/terms" className="text-slate-600 hover:text-brand-700">
                Terms
              </Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Services</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link href="/review-removal" className="text-slate-600 hover:text-brand-700">
                Review removal services
              </Link>
              <Link href="/pricing-packages" className="text-slate-600 hover:text-brand-700">
                Pricing &amp; packages
              </Link>
              <Link href="/quote#quote-form" className="text-slate-600 hover:text-brand-700">
                Free case evaluation
              </Link>
              <Link href="/review-removal#consult" className="text-slate-600 hover:text-brand-700">
                Eligibility check
              </Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Compliance</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We provide policy-based guidance and escalation support. Coverage is limited to policy-violating reviews (e.g., spam, harassment, conflict-of-interest) supported by evidence.
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/how-google-review-removal-works" className="text-slate-600 hover:text-brand-700">
                How disputes work
              </Link>
              <Link href="/google-review-policy-violations" className="text-slate-600 hover:text-brand-700">
                Policy violations overview
              </Link>
              <Link href="/google-review-case-studies" className="text-slate-600 hover:text-brand-700">
                Case studies
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Repshielder. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
