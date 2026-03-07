import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms of service for Repshielder.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Terms</h1>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            These Terms govern your use of our website and any case evaluation or dispute-support services.
          </p>

          <div className="mt-10 space-y-6 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-900">Service description</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We help businesses remove policy-violating reviews through evidence-based disputes. We do not remove
                legitimate reviews, and we do not guarantee removals. Platforms control enforcement decisions.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Eligibility</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Our services are limited to potential policy violations supported by evidence. We may decline cases
                that do not appear eligible or that request non-compliant activity.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">No legal advice</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We are not a law firm and do not provide legal advice.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">No guarantees</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We can&apos;t guarantee that a platform will remove, suppress, or modify a review. We provide a process,
                documentation, and support.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Acceptable use</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                You agree not to use our site to submit unlawful content, attempt to remove legitimate reviews, or
                request deceptive behavior.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Payments</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Pricing and payment terms are presented during evaluation and onboarding. Any support windows
                (including continued follow-up for 30/60/90 days when applicable) are package-based.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Privacy</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Our <Link href="/privacy" className="underline">Privacy Policy</Link> explains how we handle
                information.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Contact</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Email{' '}
                <a className="underline" href="mailto:support@repshielder.com">
                  support@repshielder.com
                </a>
                .
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs leading-5 text-slate-500">
            Related: <Link href="/about" className="underline">About</Link>,{' '}
            <Link href="/contact" className="underline">Contact</Link>.
          </div>
        </div>
      </section>
    </main>
  )
}
