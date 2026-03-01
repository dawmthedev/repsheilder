import type { Metadata } from 'next'
import Link from 'next/link'

import { PLATFORM_LOGOS } from '@/lib/platformLogos'

export const metadata: Metadata = {
  title: 'Platforms We Support',
  description: 'Google, Trustpilot & more. Business platform specialists.',
  alternates: {
    canonical: '/platforms-we-support',
  },
}

export default function PlatformsWeSupportPage() {
  const generalFunnelHref = '/free-review-analysis?utm_campaign=General'

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Platforms We Support
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">Google, Trustpilot &amp; more</p>
          <p className="mt-1 text-base leading-7 text-slate-600">Business platform specialists</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Google Business</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Business Profile and Maps visibility depends on trust signals. We focus on policy-first cases with clear
              evidence.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Trustpilot</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We help structure disputes for reviews that violate content integrity and authenticity standards.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Facebook</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              For recommendations and reviews, we look for actionable violations and craft compliant reporting paths.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Airbnb</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              For host profiles, we focus on policy violations and documentation that improves enforceability.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-black/5 bg-slate-50 p-8">
          <div className="text-lg font-semibold text-slate-950">Start with a confidential evaluation</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Share the platform and a quick summary — we’ll respond with next steps.
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

        <div className="mt-10 text-xs text-slate-500">
          Logos used for reference: {PLATFORM_LOGOS.google.label}, {PLATFORM_LOGOS.trustpilot.label}, {PLATFORM_LOGOS.facebook.label}, {PLATFORM_LOGOS.airbnb.label}.
        </div>
      </section>
    </main>
  )
}
