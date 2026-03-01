import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Review Policy Violations',
  description: 'What reviews qualify. Spam, fake & defamatory.',
  alternates: {
    canonical: '/review-policy-violations',
  },
}

export default function ReviewPolicyViolationsPage() {
  const generalFunnelHref = '/free-review-analysis?utm_campaign=General'

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Review Policy Violations
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">What reviews qualify</p>
          <p className="mt-1 text-base leading-7 text-slate-600">Spam, fake &amp; defamatory</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Spam and fake engagement</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reviews that appear automated, duplicated, or coordinated may violate authenticity standards.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Harassment and hate</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Threats, slurs, and targeted harassment often qualify for enforcement when documented properly.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Conflicts of interest</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Competitors, ex-employees, or reviewers with undisclosed relationships can be actionable in some cases.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Defamation and false claims</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              False allegations can sometimes be removed when tied directly to platform policy and supported with proof.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/5 bg-slate-50 p-8">
          <div className="text-lg font-semibold text-slate-950">Not sure if it qualifies?</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Send it in. We’ll tell you if it looks actionable under the platform’s policies.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={generalFunnelHref}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Free Review Evaluation
            </Link>
            <Link
              href="/how-review-removal-works"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              How Review Removal Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
