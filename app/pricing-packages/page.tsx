import type { Metadata } from 'next'
import Link from 'next/link'

import { QuoteLeadForm } from '@/components/QuoteLeadForm'

export const metadata: Metadata = {
  title: 'Pricing & Packages',
  description: 'Transparent service options. No hidden fees.',
  alternates: {
    canonical: '/pricing-packages',
  },
}

export default function PricingPackagesPage({
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
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Pricing &amp; Packages
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">Transparent service options</p>
            <p className="mt-1 text-base leading-7 text-slate-600">No hidden fees</p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Evaluation &amp; Case Plan</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  A fast, policy-first assessment with clear next steps and documentation guidance.
                </div>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Dispute Package</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  Structured evidence + policy mapping designed to reduce back-and-forth and improve enforceability.
                </div>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Escalation Support</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  Follow-ups and escalation timing support tailored to the platform’s process.
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-black/5 bg-slate-50 p-7">
              <div className="text-sm font-semibold text-slate-900">Important note</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pricing varies based on platform and case complexity. We do not guarantee outcomes and we do not help
                remove legitimate reviews.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/how-review-removal-works"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                How Review Removal Works
              </Link>
              <Link
                href="/review-policy-violations"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Review Policy Violations
              </Link>
            </div>
          </div>

          <div className="lg:pt-2">
            <QuoteLeadForm
              title="Free Review Evaluation"
              description="Submit your details and we’ll follow up with pricing guidance after confirming eligibility."
              searchParams={funnelParams}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
