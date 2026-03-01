import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Review Removal Works',
  description: 'Step-by-step dispute process. Policy-based removals only.',
  alternates: {
    canonical: '/how-review-removal-works',
  },
}

export default function HowReviewRemovalWorksPage() {
  const generalFunnelHref = '/free-review-analysis?utm_campaign=General'

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            How Review Removal Works
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">Step-by-step dispute process</p>
          <p className="mt-1 text-base leading-7 text-slate-600">Policy-based removals only</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">1) Identify the policy issue</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We start by mapping the review to the platform’s specific policies (spam, harassment, conflicts of interest,
              irrelevant content, etc.).
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">2) Build evidence</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Strong cases use clear documentation: screenshots, timelines, context, and supporting proof that ties back
              to policy language.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">3) Submit and escalate</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We guide compliant reporting and escalation paths. Some cases resolve on first report; others require
              structured follow-ups.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">4) Track outcomes</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              You get clear status updates and next-step recommendations. We don’t promise outcomes — we improve case
              quality and enforceability.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/5 bg-slate-50 p-8">
          <div className="text-lg font-semibold text-slate-950">Ready to see if your review qualifies?</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Submit a short request and we’ll confirm if the situation appears eligible under policy.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={generalFunnelHref}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Free Review Evaluation
            </Link>
            <Link
              href="/review-policy-violations"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Review Policy Violations
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
