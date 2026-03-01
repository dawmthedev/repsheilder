import { submitQuoteLeadAndRedirect } from '@/app/actions/submitQuoteLeadAndRedirect'
import { isPlatform, PLATFORMS, platformLabel, type Platform } from '@/lib/platform'

function readParam(searchParams: Record<string, string | string[] | undefined>, key: string) {
  const value = searchParams[key]
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value[0] ?? ''
  return ''
}

export function QuoteLeadForm({
  className,
  title = 'Free case evaluation',
  description = 'Tell us the platform and a few details. We will follow up with next steps.',
  defaultPlatform = 'google',
  searchParams = {},
}: {
  className?: string
  title?: string
  description?: string
  defaultPlatform?: Platform
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const initialPlatformValue = readParam(searchParams, 'p')
  const platform: Platform = isPlatform(initialPlatformValue) ? initialPlatformValue : defaultPlatform

  const campaignTag = readParam(searchParams, 'campaignTag') || readParam(searchParams, 'utm_campaign')

  const trackingKeys = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'wbraid',
    'gbraid',
    'fbclid',
    'msclkid',
  ]

  return (
    <form action={submitQuoteLeadAndRedirect} className={className}>
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{description}</div>

        {campaignTag ? <input type="hidden" name="campaignTag" value={campaignTag} /> : null}

        {trackingKeys.map((key) => {
          const value = readParam(searchParams, key)
          if (!value) return null
          return <input key={key} type="hidden" name={key} value={value} />
        })}

        <div className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="platform">
              Platform
            </label>
            <div className="relative">
              <select
                id="platform"
                name="platform"
                defaultValue={platform}
                className="h-12 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 pr-12 text-sm font-semibold text-slate-900 shadow-sm outline-none ring-brand-600 transition focus:ring-2 focus:ring-offset-1"
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {platformLabel(p)}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5.5 7.5L10 12L14.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="businessListingLink">
              Business Listing Link
            </label>
            <input
              id="businessListingLink"
              name="businessListingLink"
              placeholder="https://"
              inputMode="url"
              autoComplete="url"
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
            <div className="text-xs leading-5 text-slate-500">
              For Google, paste your Google Maps / Business Profile listing link if available.
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              required
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              required
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="companyName">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              autoComplete="organization"
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="reviewType">
              Review Type
            </label>
            <div className="relative">
              <select
                id="reviewType"
                name="reviewType"
                defaultValue=""
                className="h-12 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 pr-12 text-sm font-semibold text-slate-900 shadow-sm outline-none ring-brand-600 transition focus:ring-2 focus:ring-offset-1"
              >
                <option value="" disabled>
                  Select review type
                </option>
                <option value="text">Text-only reviews</option>
                <option value="image">Reviews with images</option>
                <option value="video">Reviews with videos</option>
                <option value="mixed">Mixed / not sure</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5.5 7.5L10 12L14.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="reviewsToRemove">
              Number of Reviews to Remove
            </label>
            <input
              id="reviewsToRemove"
              name="reviewsToRemove"
              type="number"
              min={1}
              step={1}
              placeholder="1"
              inputMode="numeric"
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-900" htmlFor="postedTimeframe">
              How long ago were these reviews posted?
            </label>
            <div className="relative">
              <select
                id="postedTimeframe"
                name="postedTimeframe"
                defaultValue=""
                className="h-12 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 pr-12 text-sm font-semibold text-slate-900 shadow-sm outline-none ring-brand-600 transition focus:ring-2 focus:ring-offset-1"
              >
                <option value="" disabled>
                  Select a timeframe
                </option>
                <option value="0-7d">0–7 days</option>
                <option value="8-30d">8–30 days</option>
                <option value="1-3m">1–3 months</option>
                <option value="3-12m">3–12 months</option>
                <option value="1y+">1+ year</option>
                <option value="not-sure">Not sure</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5.5 7.5L10 12L14.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <label className="mt-1 flex items-start gap-3 rounded-2xl border border-black/5 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            <input
              type="checkbox"
              name="pricingAcknowledgement"
              value="1"
              className="mt-1 h-4 w-4 rounded border-black/20 text-brand-600 focus:ring-brand-600"
            />
            <span>
              I understand pricing may vary based on platform and case complexity, and I’m comfortable proceeding if my
              case is approved.
            </span>
          </label>

          <div className="mt-2 flex items-center justify-end">
            <button
              type="submit"
              className="h-11 w-full rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-50 sm:w-auto"
            >
              Submit
            </button>
          </div>

          <div className="text-xs leading-5 text-slate-500">
            Your details are safe and confidential. Do not submit sensitive personal information.
          </div>
        </div>
      </div>
    </form>
  )
}
