import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { IntakeForm } from '@/components/IntakeForm'
import { GuaranteeCard } from '@/components/GuaranteeCard'
import { LeadSubmissionTracker } from '@/components/LeadSubmissionTracker'
import { GoogleAdsConversionTracker } from '@/components/GoogleAdsConversionTracker'
import { isPlatform, platformKeywords, platformLabel, type Platform } from '@/lib/platform'
import { PLATFORM_LOGOS } from '@/lib/platformLogos'

export const revalidate = 86400

export function generateStaticParams() {
  return [
    { platform: 'google' },
    { platform: 'airbnb' },
    { platform: 'facebook' },
    { platform: 'trustpilot' },
  ]
}

export function generateMetadata({
  params,
}: {
  params: { platform: string }
}): Metadata {
  if (!isPlatform(params.platform)) return {}
  const platform = params.platform
  const { description } = platformKeywords(platform)
  const label = platformLabel(platform)
  const url = `/review-removal/${platform}`

  return {
    title: `Remove ${label} Reviews`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Remove ${label} Reviews | Repshielder`,
      description,
      url,
      type: 'website',
      images: [{ url: '/images/hero.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Remove ${label} Reviews | Repshielder`,
      description,
      images: ['/images/hero.jpg'],
    },
  }
}

function getPageCopy(platform: Platform) {
  const label = platformLabel(platform)

  const highIntentKeywords: Record<Platform, string[]> = {
    google: ['remove google reviews', 'google review removal service', 'delete negative google review'],
    airbnb: ['airbnb review removal', 'remove airbnb reviews', 'airbnb dispute review'],
    facebook: ['remove facebook reviews', 'facebook review removal', 'delete facebook recommendation'],
    trustpilot: ['trustpilot review removal', 'remove trustpilot reviews', 'trustpilot dispute'],
  }

  return {
    label,
    keywords: highIntentKeywords[platform],
    intro: `Professional ${label} review removal services for false, defamatory, and policy-violating reviews.`,
  }
}

function jsonLdForService(platform: Platform) {
  const label = platformLabel(platform)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Remove ${label} Reviews`,
    provider: {
      '@type': 'Organization',
      name: 'Repshielder',
      url: 'https://www.repshielder.com',
      logo: 'https://www.repshielder.com/images/logo.png',
    },
    areaServed: 'US',
    serviceType: `${label} review removal`,
    url: `https://www.repshielder.com/review-removal/${platform}`,
  }
}

function jsonLdBreadcrumb(platform: Platform) {
  const label = platformLabel(platform)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.repshielder.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Review Removal',
        item: 'https://www.repshielder.com/review-removal',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: label,
        item: `https://www.repshielder.com/review-removal/${platform}`,
      },
    ],
  }
}

export default function PlatformPage({
  params,
  searchParams = {},
}: {
  params: { platform: string }
  searchParams?: Record<string, string | string[] | undefined>
}) {
  if (!isPlatform(params.platform)) return notFound()
  const platform = params.platform
  const { label, keywords, intro } = getPageCopy(platform)
  const submitted = searchParams.submitted === '1' || searchParams.submitted === 'true'
  const logoSrc = PLATFORM_LOGOS[platform]?.logoSrc

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdForService(platform)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb(platform)) }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {submitted ? <LeadSubmissionTracker platform={platform} /> : null}
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="mb-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="text-lg font-semibold text-emerald-950">Submission received</div>
                  <div className="mt-1 text-sm leading-6 text-emerald-900/80">
                    Thanks — we’ll be in touch soon. A specialist will review your request and follow up with next steps.
                  </div>

                  <ul className="mt-4 grid gap-2 text-sm text-emerald-950">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Confidential review of your case details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Policy-first removal plan and timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>No review URL required upfront — we’ll collect details after contact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {logoSrc ? <Image src={logoSrc} alt={label} width={18} height={18} /> : null}
              <span>{label}</span>
            </div>
          </div>

          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {label} Review Removal
          </h1>
          <p className="mt-4 text-center text-base leading-7 text-slate-600">
            Confidential, policy-first dispute support for business owners
          </p>
          <p className="mt-2 text-center text-sm leading-6 text-slate-600">{intro}</p>

          <div id="intake" className="mt-10 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Free case evaluation</div>
            <div className="mt-1 text-sm text-slate-600">Submit a short request and we will follow up with next steps.</div>
            <div className="mt-6">
              <IntakeForm platform={platform} />
            </div>
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
