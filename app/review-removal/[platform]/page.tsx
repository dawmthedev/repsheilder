import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { IntakeForm } from '@/components/IntakeForm'
import { isPlatform, platformKeywords, platformLabel, type Platform } from '@/lib/platform'

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
        <div className="max-w-3xl">
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
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            Remove {label} Reviews & Protect Your Business Reputation
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">{intro}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-black/5 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-xl font-semibold text-slate-950">Why {label} reviews matter</div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Reviews influence buyer trust, conversion rates, and platform visibility. When content
              is false, harassing, or policy-violating, a structured policy-based case can improve
              the likelihood of enforcement.
            </p>

            <div className="mt-8 text-xl font-semibold text-slate-950">
              Our {label} review removal process
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
              <li>Violation detection and policy mapping</li>
              <li>Evidence documentation and timeline capture</li>
              <li>Policy-based reporting and escalation support</li>
              <li>Appeal guidance where applicable</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-black/5 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Trust & compliance</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Confidential handling. Policy-first process. No guaranteed outcomes.
              </div>
            </div>
          </div>

          <div id="intake" className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div className="text-xl font-semibold text-slate-950">Free case evaluation</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Submit details for a confidential review. This is general intake information and not
              legal advice.
            </p>
            <div className="mt-6">
              <IntakeForm platform={platform} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
