import type { Metadata } from 'next'
import Link from 'next/link'

import { QuoteLeadForm } from '@/components/QuoteLeadForm'

export const metadata: Metadata = {
  title: 'Free Review Evaluation',
  description: 'Get a confidential case review and see if your review qualifies.',
  alternates: {
    canonical: '/free-review-analysis',
  },
}

export default function FreeReviewAnalysisPage({
  searchParams = {},
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const funnelParams = { ...searchParams, utm_campaign: 'General' }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              Confidential. Policy-first. No misleading promises.
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Free Review Evaluation
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Get a confidential case review
            </p>
            <p className="mt-1 text-base leading-7 text-slate-600">See if your review qualifies</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#form"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free evaluation
              </a>
              <Link
                href="/review-policy-violations"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                See what qualifies
              </Link>
            </div>

            <div className="mt-10 grid gap-3 rounded-3xl border border-black/5 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">What you’ll get</div>
              <ul className="grid gap-2 text-sm leading-6 text-slate-600">
                <li>Policy violation review of your situation</li>
                <li>Recommended platform-specific next steps</li>
                <li>Clear expectations and timelines</li>
              </ul>
            </div>
          </div>

          <div id="form" className="lg:pt-2">
            <QuoteLeadForm
              title="Free Review Evaluation"
              description="Tell us the platform and a few details. We’ll confirm if the review appears eligible under policy."
              searchParams={funnelParams}
            />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3 text-sm">
          <Link href="/how-review-removal-works" className="font-semibold text-brand-700 hover:text-brand-800">
            How Review Removal Works
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/platforms-we-support" className="font-semibold text-brand-700 hover:text-brand-800">
            Platforms We Support
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/pricing-packages" className="font-semibold text-brand-700 hover:text-brand-800">
            Pricing & Packages
          </Link>
        </div>
      </section>
    </main>
  )
}
