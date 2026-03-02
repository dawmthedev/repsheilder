import type { Metadata } from 'next'
import Image from 'next/image'

import { QuoteLeadForm } from '@/components/QuoteLeadForm'
import { GuaranteeCard } from '@/components/GuaranteeCard'
import { PLATFORM_LOGOS } from '@/lib/platformLogos'

export const metadata: Metadata = {
  title: 'Remove 1-Star Google Reviews',
  description: 'Target Negative Reviews. Dispute Damaging Ratings.',
  alternates: {
    canonical: '/remove-1-star-google-reviews',
  },
}

export default function Remove1StarGoogleReviewsPage() {
  const platform = 'google'
  const label = 'Google Business'
  const logoSrc = PLATFORM_LOGOS.google?.logoSrc

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {logoSrc ? <Image src={logoSrc} alt={label} width={18} height={18} /> : null}
              <span>{label}</span>
            </div>
          </div>

          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Remove 1-Star Google Reviews
          </h1>
          <p className="mt-4 text-center text-base leading-7 text-slate-600">
            Target Negative Reviews
          </p>
          <p className="mt-2 text-center text-base leading-7 text-slate-600">
            Dispute Damaging Ratings
          </p>

          <div className="mt-10">
            <QuoteLeadForm
              title="Remove 1-Star Google Reviews"
              description="Submit a short request and we will follow up with next steps."
              defaultPlatform={platform}
              searchParams={{ utm_campaign: 'General' }}
            />
          </div>

          <div className="mt-8">
            <GuaranteeCard />
          </div>
        </div>
      </section>
    </main>
  )
}
