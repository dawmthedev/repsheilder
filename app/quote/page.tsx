import type { Metadata } from 'next'
import Image from 'next/image'

import { QuoteLeadForm } from '@/components/QuoteLeadForm'
import { GuaranteeCard } from '@/components/GuaranteeCard'
import { GoogleAdsConversionTracker } from '@/components/GoogleAdsConversionTracker'
import { isPlatform, platformLabel, type Platform } from '@/lib/platform'
import { PLATFORM_LOGOS } from '@/lib/platformLogos'

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
  const pValue = typeof searchParams.p === 'string' ? searchParams.p : Array.isArray(searchParams.p) ? searchParams.p[0] : ''
  const hasPlatformParam = Boolean(pValue)
  const platform: Platform = isPlatform(pValue) ? pValue : 'google'
  const label = hasPlatformParam && isPlatform(pValue) ? platformLabel(platform) : 'Review Removal'
  const logoSrc = hasPlatformParam && isPlatform(pValue) ? PLATFORM_LOGOS[platform]?.logoSrc : undefined
  const formTitle = hasPlatformParam && isPlatform(pValue) ? `Free ${label} review evaluation` : 'Free case evaluation'

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {logoSrc ? <Image src={logoSrc} alt={label} width={18} height={18} /> : null}
              <span>{hasPlatformParam && isPlatform(pValue) ? label : 'All Platforms'}</span>
            </div>
          </div>

          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {hasPlatformParam && isPlatform(pValue) ? `${label} Review Removal` : 'Free Case Evaluation'}
          </h1>
          <p className="mt-4 text-center text-base leading-7 text-slate-600">
            Confidential, policy-first dispute support for business owners
          </p>

          <div id="quote-form" className="mt-10 scroll-mt-28">
            <QuoteLeadForm
              title={formTitle}
              description="Submit a short request and we will follow up with next steps."
              defaultPlatform={platform}
              searchParams={searchParams}
            />
          </div>

          <div className="mt-8">
            <GuaranteeCard />
          </div>

          <GoogleAdsConversionTracker platform={platform} />
        </div>
      </section>
    </main>
  )
}
