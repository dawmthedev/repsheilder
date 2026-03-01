import Link from 'next/link'

import { PlatformCard } from '@/components/PlatformCard'
import { PLATFORM_LOGOS } from '@/lib/platformLogos'

export const revalidate = 86400

export default function ReviewRemovalHubPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            Professional Review Removal Services
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Repshielder provides enterprise-level reputation protection and review removal support
            across major platforms. We focus on policy-compliant reporting, evidence documentation,
            and structured escalation.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-950">Choose a platform</div>
          <div className="mt-4 grid gap-4 md:gap-5">
            <div className="flex justify-center">
              <div className="w-full max-w-[220px]">
                <PlatformCard href="/quote?p=google" logoSrc={PLATFORM_LOGOS.google.logoSrc} label="Google Business" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <PlatformCard href="/quote?p=glassdoor" logoSrc={PLATFORM_LOGOS.glassdoor.logoSrc} label="Glassdoor" />
              <PlatformCard href="/quote?p=indeed" logoSrc={PLATFORM_LOGOS.indeed.logoSrc} label="Indeed" />
              <PlatformCard href="/quote?p=facebook" logoSrc={PLATFORM_LOGOS.facebook.logoSrc} label="Facebook" />
              <PlatformCard href="/quote?p=trustpilot" logoSrc={PLATFORM_LOGOS.trustpilot.logoSrc} label="Trustpilot" />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/quote"
              className="h-11 w-full max-w-xs rounded-full bg-brand-600 px-6 text-center text-sm font-semibold leading-[44px] text-white shadow-sm hover:bg-brand-700"
            >
              Start free case evaluation
            </Link>
          </div>
        </div>

        <div id="consult" className="mt-12 rounded-3xl border border-black/5 bg-slate-50 p-8">
          <div className="text-xl font-semibold text-slate-950">Request a confidential consult</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            If you are managing a high-risk reputation issue, start with the most relevant platform
            page and submit a free case evaluation. We will follow up with next steps.
          </p>
          <div className="mt-6">
            <Link
              href="/review-removal/google#intake"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start with Google
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
          <div className="text-center">
            <div className="text-2xl font-semibold tracking-tight text-slate-950">How We Compare</div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-emerald-200/70 px-4 py-4 font-semibold text-slate-700">Feature</th>
                  <th className="border-b border-emerald-200/70 bg-emerald-100/60 px-4 py-4 text-center font-semibold text-emerald-900">
                    Our Service
                  </th>
                  <th className="border-b border-emerald-200/70 px-4 py-4 text-center font-semibold text-slate-700">
                    DIY Approach
                  </th>
                  <th className="border-b border-emerald-200/70 px-4 py-4 text-center font-semibold text-slate-700">
                    Other Services
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border-b border-emerald-200/60 px-4 py-4 font-semibold text-slate-900">
                    Expert case evaluation
                  </td>
                  <td className="border-b border-emerald-200/60 bg-emerald-100/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center font-semibold text-slate-600">Sometimes</td>
                </tr>

                <tr>
                  <td className="border-b border-emerald-200/60 px-4 py-4 font-semibold text-slate-900">
                    Policy violation analysis
                  </td>
                  <td className="border-b border-emerald-200/60 bg-emerald-100/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center font-semibold text-slate-600">Basic</td>
                </tr>

                <tr>
                  <td className="border-b border-emerald-200/60 px-4 py-4 font-semibold text-slate-900">
                    Professional documentation
                  </td>
                  <td className="border-b border-emerald-200/60 bg-emerald-100/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-emerald-200/60 px-4 py-4 font-semibold text-slate-900">
                    Average turnaround time
                  </td>
                  <td className="border-b border-emerald-200/60 bg-emerald-100/60 px-4 py-4 text-center font-semibold text-emerald-900">
                    3 days
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center font-semibold text-slate-600">
                    Weeks–Never
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center font-semibold text-slate-600">
                    7–14 days
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-emerald-200/60 px-4 py-4 font-semibold text-slate-900">
                    Success rate
                  </td>
                  <td className="border-b border-emerald-200/60 bg-emerald-100/60 px-4 py-4 text-center font-semibold text-emerald-900">
                    98%
                  </td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center font-semibold text-slate-600">&lt;20%</td>
                  <td className="border-b border-emerald-200/60 px-4 py-4 text-center font-semibold text-slate-600">60–80%</td>
                </tr>

                <tr>
                  <td className="px-4 py-4 font-semibold text-slate-900">Money-back guarantee</td>
                  <td className="bg-emerald-100/60 px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center font-semibold text-slate-600">N/A</td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
