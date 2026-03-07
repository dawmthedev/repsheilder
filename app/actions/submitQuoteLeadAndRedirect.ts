'use server'

import { redirect } from 'next/navigation'

import { submitQuoteLead } from '@/app/actions/submitQuoteLead'
import { isPlatform, type Platform } from '@/lib/platform'

function getString(formData: FormData, key: string) {
  const v = formData.get(key)
  return typeof v === 'string' ? v : ''
}

export async function submitQuoteLeadAndRedirect(formData: FormData) {
  const funnel = getString(formData, 'funnel')
  const platformValue = getString(formData, 'platform')
  const platform: Platform = isPlatform(platformValue) ? platformValue : 'google'

  const phone = getString(formData, 'phone').trim()
  const businessListingLink = getString(formData, 'businessListingLink').trim()

  if (!phone || !businessListingLink) {
    if (funnel === 'general') {
      redirect(`/quote?error=1`)
    }
    redirect(`/quote?p=${platform}&error=1`)
  }

  const payload = {
    platform,
    funnel,
    campaignTag: getString(formData, 'campaignTag'),
    firstName: getString(formData, 'firstName'),
    lastName: getString(formData, 'lastName'),
    email: getString(formData, 'email'),
    phone,
    businessListingLink,
    companyName: getString(formData, 'companyName'),
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
    if (funnel === 'general') {
      redirect(`/quote?error=1`)
    }
    redirect(`/quote?p=${platform}&error=1`)
  }

  const leadIdParam = result && typeof (result as any).leadId !== 'undefined' ? `&leadId=${encodeURIComponent(String((result as any).leadId))}` : ''

  if (funnel === 'general') {
    redirect(`/thank-you?submitted=1${leadIdParam}`)
  }

  redirect(`/review-removal/${platform}?submitted=1${leadIdParam}`)
}
