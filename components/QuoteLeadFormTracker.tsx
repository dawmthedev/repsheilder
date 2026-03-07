'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/GoogleAnalytics'

export function QuoteLeadFormTracker({
  funnel,
  platform,
}: {
  funnel: string
  platform: string
}) {
  useEffect(() => {
    const handleFocus = () => {
      trackEvent('quote_form_start', { funnel, platform })
    }
    const handleSubmit = () => {
      trackEvent('quote_form_submit', { funnel, platform })
    }

    const form = document.querySelector('form[action*="submitQuoteLeadAndRedirect"]') as HTMLFormElement
    if (!form) return

    form.addEventListener('focusin', handleFocus, { once: true })
    form.addEventListener('submit', handleSubmit, { once: true })

    return () => {
      form.removeEventListener('focusin', handleFocus)
      form.removeEventListener('submit', handleSubmit)
    }
  }, [funnel, platform])

  return null
}
