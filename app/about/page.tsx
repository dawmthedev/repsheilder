import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Evidence-based dispute support for policy-violating reviews. We do not remove legitimate reviews and we do not guarantee removals.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">About</h1>
          <p className="mt-6 text-base leading-7 text-slate-600">
            We help businesses remove policy-violating reviews through evidence-based disputes. We do not remove
            legitimate reviews, and we do not guarantee removals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-brand-700">What we do</div>
              <div className="mt-3 text-sm leading-6 text-slate-600">
                We assess eligibility under platform policies, prepare a documented evidence pack, and support
                submissions and escalation workflows. Our deliverable is a structured, policy-aligned case file and
                follow-up support.
              </div>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-brand-700">What we don&apos;t do</div>
              <div className="mt-3 text-sm leading-6 text-slate-600">
                We don&apos;t remove legitimate reviews, we don&apos;t offer fake engagement, and we don&apos;t guarantee outcomes.
                Platform decisions are controlled by the platform.
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-black/5 bg-slate-50 p-8">
            <div className="text-sm font-semibold text-slate-900">What&apos;s covered</div>
            <div className="mt-3 text-sm leading-6 text-slate-600">
              Coverage is limited to policy-violating content supported by evidence (for example: spam, harassment,
              impersonation, and conflict-of-interest reviews).
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote#quote-form"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Free case evaluation
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10 text-xs leading-5 text-slate-500">
            Looking for privacy or terms? See our <Link href="/privacy" className="underline">Privacy Policy</Link> and{' '}
            <Link href="/terms" className="underline">Terms</Link>.
          </div>
        </div>
      </section>
    </main>
  )
}
