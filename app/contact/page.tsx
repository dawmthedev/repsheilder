import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Repshielder for eligibility-first, evidence-based dispute support.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Contact</h1>
          <p className="mt-6 text-base leading-7 text-slate-600">
            We help businesses remove policy-violating reviews through evidence-based disputes. We do not remove
            legitimate reviews, and we do not guarantee removals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Fastest option</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Submit a free case evaluation and we&apos;ll follow up with eligibility and next steps.
              </p>
              <div className="mt-6">
                <Link
                  href="/quote#quote-form"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
                >
                  Free case evaluation
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Email</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                For general questions, email us. Please don&apos;t send sensitive personal information.
              </p>
              <div className="mt-4 text-sm font-semibold text-brand-700">
                <a href="mailto:support@repshielder.com" className="underline">
                  support@repshielder.com
                </a>
              </div>
              <div className="mt-6 text-xs leading-5 text-slate-500">
                Business identity details (company name, address, phone) should be listed here and in your footer.
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-black/5 bg-slate-50 p-8">
            <div className="text-sm font-semibold text-slate-900">Support scope</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              We only support policy-violation disputes backed by evidence. We do not offer review gating, fake
              reviews, or removal of legitimate customer feedback.
            </div>
          </div>

          <div className="mt-10 text-xs leading-5 text-slate-500">
            See also: <Link href="/about" className="underline">About</Link>,{' '}
            <Link href="/privacy" className="underline">Privacy Policy</Link>,{' '}
            <Link href="/terms" className="underline">Terms</Link>.
          </div>
        </div>
      </section>
    </main>
  )
}
