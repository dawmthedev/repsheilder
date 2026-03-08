 'use client'

import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

import { submitIntake } from '@/app/actions/submitIntake'
import type { Platform } from '@/lib/platform'

export function IntakeForm({ platform }: { platform: Platform }) {
  const searchParams = useSearchParams()

  const utm = useMemo(() => {
    const get = (key: string) => searchParams?.get(key) ?? ''
    return {
      utm_source: get('utm_source'),
      utm_medium: get('utm_medium'),
      utm_campaign: get('utm_campaign'),
      utm_term: get('utm_term'),
      utm_content: get('utm_content'),
      gclid: get('gclid'),
      wbraid: get('wbraid'),
      gbraid: get('gbraid'),
      fbclid: get('fbclid'),
      msclkid: get('msclkid'),
    }
  }, [searchParams])

  useEffect(() => {
    const set = (name: string, value: string) => {
      const el = document.querySelector<HTMLInputElement>(`input[name="${name}"]`)
      if (el) el.value = value
    }

    set('utm_source', utm.utm_source)
    set('utm_medium', utm.utm_medium)
    set('utm_campaign', utm.utm_campaign)
    set('utm_term', utm.utm_term)
    set('utm_content', utm.utm_content)
    set('gclid', utm.gclid)
    set('wbraid', utm.wbraid)
    set('gbraid', utm.gbraid)
    set('fbclid', utm.fbclid)
    set('msclkid', utm.msclkid)
  }, [utm])

  return (
    <form action={submitIntake} className="grid gap-4">
      <input type="hidden" name="service" value={platform} />

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-900" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-900" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
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
          inputMode="tel"
          required
          className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-900" htmlFor="businessName">
          Business Name
        </label>
        <input
          id="businessName"
          name="businessName"
          required
          className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-900" htmlFor="reviewUrl">
          Review URL
        </label>
        <input
          id="reviewUrl"
          name="reviewUrl"
          required
          placeholder="https://"
          inputMode="url"
          autoComplete="url"
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
            required
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
          required
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
            required
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

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-900" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-brand-600 focus:ring-2"
        />
      </div>

      <input type="hidden" name="utm_source" defaultValue="" />
      <input type="hidden" name="utm_medium" defaultValue="" />
      <input type="hidden" name="utm_campaign" defaultValue="" />
      <input type="hidden" name="utm_term" defaultValue="" />
      <input type="hidden" name="utm_content" defaultValue="" />

      <input type="hidden" name="gclid" defaultValue="" />
      <input type="hidden" name="wbraid" defaultValue="" />
      <input type="hidden" name="gbraid" defaultValue="" />
      <input type="hidden" name="fbclid" defaultValue="" />
      <input type="hidden" name="msclkid" defaultValue="" />

      <button
        type="submit"
        className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
      >
        Submit
      </button>

      <div className="text-xs leading-5 text-slate-500">
        By submitting, you agree to be contacted about your request. Do not submit sensitive
        personal information.
      </div>
    </form>
  )
}
