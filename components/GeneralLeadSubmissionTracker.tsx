'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { trackEvent } from '@/components/GoogleAnalytics'

export function GeneralLeadSubmissionTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const submitted = searchParams?.get('submitted') === '1'
    if (!submitted) return

    trackEvent('generate_lead', {
      platform: 'general',
      funnel: 'quote',
    })
  }, [searchParams])

  return null
}
