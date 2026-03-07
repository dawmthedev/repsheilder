'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export const GA_MEASUREMENT_ID = 'G-8J2JGSL80N'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function GoogleAnalyticsPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.gtag) return

    const qs = searchParams ? searchParams.toString() : ''
    const page_path = qs ? `${pathname}?${qs}` : pathname

    if (process.env.NODE_ENV !== 'production') {
      console.log('[GA4 Page View]', { page_path })
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path,
    })

    window.gtag('event', 'page_view', {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (!window.gtag) return
  if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4 Event]', name, params ?? {})
  }
  window.gtag('event', name, params ?? {})
}

export function trackGoogleAdsConversion() {
  if (typeof window === 'undefined') return
  if (!window.gtag) return
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Google Ads Conversion]', { send_to: 'AW-16915751123/EHm6CNzCy4EcENPBh4I_' })
  }
  window.gtag('event', 'conversion', { send_to: 'AW-16915751123/EHm6CNzCy4EcENPBh4I_' })
}
