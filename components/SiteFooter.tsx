import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold text-slate-900">Repshielder</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Enterprise-level reputation protection and policy-compliant review removal.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Services</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link href="/review-removal/google" className="text-slate-600 hover:text-brand-700">
                Google Review Removal
              </Link>
              <Link
                href="/review-removal/glassdoor"
                className="text-slate-600 hover:text-brand-700"
              >
                Glassdoor Reviews Removal
              </Link>
              <Link href="/review-removal/indeed" className="text-slate-600 hover:text-brand-700">
                Indeed Reviews Removal
              </Link>
              <Link
                href="/review-removal/facebook"
                className="text-slate-600 hover:text-brand-700"
              >
                Facebook Reviews Removal
              </Link>
              <Link
                href="/review-removal/trustpilot"
                className="text-slate-600 hover:text-brand-700"
              >
                Trustpilot Reviews Removal
              </Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Compliance</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Repshielder provides policy-based guidance and escalation support. We do not guarantee
              outcomes and do not offer advice that violates platform terms or applicable laws.
            </p>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Repshielder. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
