import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real client removal examples. Proven dispute strategies.',
  alternates: {
    canonical: '/case-studies',
  },
}

export default function CaseStudiesPage() {
  const generalFunnelHref = '/free-review-analysis?utm_campaign=General'

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Case Studies</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">Real client removal examples</p>
          <p className="mt-1 text-base leading-7 text-slate-600">Proven dispute strategies</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Google Business</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Case structured around a clear policy violation with time-stamped evidence and precise references.
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Trustpilot</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Dispute packaged to highlight authenticity gaps and content issues, minimizing back-and-forth.
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Facebook</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Report aligned to platform policy with consistent documentation and escalation timing.
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/5 bg-slate-50 p-8">
          <div className="text-lg font-semibold text-slate-950">Want a case plan like these?</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Start with a confidential evaluation. We’ll tell you whether it looks eligible and what the process would be.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={generalFunnelHref}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Free Review Evaluation
            </Link>
            <Link
              href="/pricing-packages"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Pricing & Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
