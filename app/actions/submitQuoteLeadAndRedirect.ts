'use server'

import { redirect } from 'next/navigation'

import { submitQuoteLead } from '@/app/actions/submitQuoteLead'
import { isPlatform, type Platform } from '@/lib/platform'

function getString(formData: FormData, key: string) {
  const v = formData.get(key)
  return typeof v === 'string' ? v : ''
}

export async function submitQuoteLeadAndRedirect(formData: FormData) {
  const platformValue = getString(formData, 'platform')
  const platform: Platform = isPlatform(platformValue) ? platformValue : 'google'

  const payload = {
    platform,
    campaignTag: getString(formData, 'campaignTag'),
    firstName: getString(formData, 'firstName'),
    lastName: getString(formData, 'lastName'),
    email: getString(formData, 'email'),
    phone: getString(formData, 'phone'),
    companyName: getString(formData, 'companyName'),
    businessListingLink: getString(formData, 'businessListingLink'),
    reviewType: getString(formData, 'reviewType'),
    reviewsToRemove: getString(formData, 'reviewsToRemove'),
    postedTimeframe: getString(formData, 'postedTimeframe'),
    pricingAcknowledgement: getString(formData, 'pricingAcknowledgement'),
    utm_source: getString(formData, 'utm_source'),
    utm_medium: getString(formData, 'utm_medium'),
    utm_campaign: getString(formData, 'utm_campaign'),
    utm_term: getString(formData, 'utm_term'),
    utm_content: getString(formData, 'utm_content'),
    gclid: getString(formData, 'gclid'),
    wbraid: getString(formData, 'wbraid'),
    gbraid: getString(formData, 'gbraid'),
    fbclid: getString(formData, 'fbclid'),
    msclkid: getString(formData, 'msclkid'),
  }

  const result = await submitQuoteLead(payload)
  if (!result?.ok) {
    redirect(`/quote?p=${platform}&error=1`)
  }

  redirect(`/review-removal/${platform}?submitted=1`)
}
