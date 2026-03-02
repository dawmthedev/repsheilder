import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

import { GuaranteeCard } from '@/components/GuaranteeCard'
import { GeneralLeadSubmissionTracker } from '@/components/GeneralLeadSubmissionTracker'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Submission received. We will follow up with next steps.',
  alternates: {
    canonical: '/thank-you',
  },
}

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <Suspense fallback={null}>
            <GeneralLeadSubmissionTracker />
          </Suspense>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-950">Submission received</div>
                <div className="mt-1 text-sm leading-6 text-emerald-900/80">
                  Thanks — we’ll be in touch soon. A specialist will review your request and follow up with next steps.
                </div>
                <div className="mt-4 grid gap-2 text-sm text-emerald-900/80">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    Confidential review of your case details
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    Policy-first removal plan and timeline
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    We’ll confirm what we need over email or phone
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                  >
                    Back to home
                  </Link>
                  <Link
                    href="/review-removal"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-emerald-200 bg-white px-6 text-sm font-semibold text-emerald-900 shadow-sm hover:bg-emerald-50"
                  >
                    View services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <GuaranteeCard />
          </div>
        </div>
      </section>
    </main>
  )
}
