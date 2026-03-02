'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { trackGoogleAdsConversion } from './GoogleAnalytics'

/**
 * Fires the Google Ads conversion event when the URL includes ?submitted=1
 * and the platform is google. Used on quote and review-removal success pages.
 */
export function GoogleAdsConversionTracker({ platform }: { platform?: string }) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const submitted = searchParams?.get('submitted') === '1'
    if (submitted && platform === 'google') {
      trackGoogleAdsConversion()
    }
  }, [searchParams, platform])

  return null
}
