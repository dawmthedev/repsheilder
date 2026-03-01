'use client'

import { useEffect } from 'react'

import { trackEvent } from '@/components/GoogleAnalytics'

export function LeadSubmissionTracker({ platform }: { platform: string }) {
  useEffect(() => {
    trackEvent('generate_lead', {
      platform,
      funnel: 'review-removal',
    })
  }, [platform])

  return null
}
