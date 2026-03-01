'use client'

import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { PLATFORMS, type Platform, platformLabel } from '@/lib/platform'

export function QuickStartForm({ className }: { className?: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [platform, setPlatform] = useState<Platform>('google')

  const trackingParams = useMemo(() => {
    const keys = [
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

    const params = new URLSearchParams()
    for (const key of keys) {
      const value = searchParams?.get(key)
      if (value) params.set(key, value)
    }
    return params
  }, [searchParams])

  const onStart = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(trackingParams.toString())
    params.set('p', platform)
    params.set('step', 'Contact')

    router.push(`/quote?${params.toString()}`)
  }

  return (
    <form
      onSubmit={onStart}
      className={
        className ??
        'mt-6 flex flex-col items-stretch gap-3 pb-6 sm:flex-row sm:items-center'
      }
    >
      <label className="sr-only" htmlFor="service">
        Service
      </label>
      <select
        id="service"
        value={platform}
        onChange={(e) => setPlatform(e.target.value as Platform)}
        className="h-11 w-full rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm outline-none ring-brand-600 focus:ring-2 sm:w-[320px]"
      >
        {PLATFORMS.map((p) => (
          <option key={p} value={p}>
            {platformLabel(p)}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="h-11 w-full rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:w-auto"
      >
        Start
      </button>
    </form>
  )
}
