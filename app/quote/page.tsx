import type { Metadata } from 'next'

import { QuoteLeadForm } from '@/components/QuoteLeadForm'

export const metadata: Metadata = {
  title: 'Free Case Evaluation',
  description:
    'Start a confidential, policy-first case evaluation. Submit a short request and we will follow up with next steps.',
  alternates: {
    canonical: '/quote',
  },
}

export default function QuotePage({
  searchParams = {},
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-2xl px-4 py-14">
        <QuoteLeadForm searchParams={searchParams} />
      </section>
    </main>
  )
}
