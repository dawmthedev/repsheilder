 'use client'

 import { useEffect, useMemo } from 'react'
 import { useSearchParams } from 'next/navigation'

 import { submitIntake } from '@/app/actions/submitIntake'
 import type { Platform } from '@/lib/platform'

export function IntakeForm({ platform }: { platform: Platform }) {
  const searchParams = useSearchParams()

  const utm = useMemo(() => {
    const get = (key: string) => searchParams.get(key) ?? ''
    return {
      utm_source: get('utm_source'),
      utm_medium: get('utm_medium'),
      utm_campaign: get('utm_campaign'),
      utm_term: get('utm_term'),
      utm_content: get('utm_content'),
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
          className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
        />
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
