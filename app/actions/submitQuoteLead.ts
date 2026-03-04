'use server'

import { headers } from 'next/headers'

import { notifyLead } from '@/lib/leadNotifications'

export async function submitQuoteLead(payload: Record<string, unknown>) {
  const h = headers()
  const ua = h.get('user-agent')
  const referer = h.get('referer')

  console.log('QUOTE_LEAD', {
    ...payload,
    userAgent: ua,
    receivedAt: new Date().toISOString(),
  })

  try {
    const firstName = typeof payload['firstName'] === 'string' ? payload['firstName'] : ''
    const lastName = typeof payload['lastName'] === 'string' ? payload['lastName'] : ''
    const name = `${firstName} ${lastName}`.trim()

    const platform = typeof payload['platform'] === 'string' ? payload['platform'] : ''
    const funnel = typeof payload['funnel'] === 'string' ? payload['funnel'] : ''
    const source = funnel === 'general' ? 'general' : platform

    const notifyResult = await notifyLead({
      name,
      email: typeof payload['email'] === 'string' ? payload['email'] : '',
      business: typeof payload['companyName'] === 'string' ? payload['companyName'] : '',
      business_url: typeof payload['businessListingLink'] === 'string' ? payload['businessListingLink'] : '',
      city: '',
      source,
      phone: typeof payload['phone'] === 'string' ? payload['phone'] : '',
      Country: '',
      reviewType: typeof payload['reviewType'] === 'string' ? payload['reviewType'] : '',
      reviewsToRemove: typeof payload['reviewsToRemove'] === 'string' ? payload['reviewsToRemove'] : '',
      postedTimeframe: typeof payload['postedTimeframe'] === 'string' ? payload['postedTimeframe'] : '',
      utm_source: typeof payload['utm_source'] === 'string' ? payload['utm_source'] : '',
      utm_medium: typeof payload['utm_medium'] === 'string' ? payload['utm_medium'] : '',
      utm_campaign: typeof payload['utm_campaign'] === 'string' ? payload['utm_campaign'] : '',
      utm_term: typeof payload['utm_term'] === 'string' ? payload['utm_term'] : '',
      utm_content: typeof payload['utm_content'] === 'string' ? payload['utm_content'] : '',
      gclid: typeof payload['gclid'] === 'string' ? payload['gclid'] : '',
      wbraid: typeof payload['wbraid'] === 'string' ? payload['wbraid'] : '',
      gbraid: typeof payload['gbraid'] === 'string' ? payload['gbraid'] : '',
      fbclid: typeof payload['fbclid'] === 'string' ? payload['fbclid'] : '',
      msclkid: typeof payload['msclkid'] === 'string' ? payload['msclkid'] : '',
    }, {
      raw: payload,
      context: {
        referer: referer ?? '',
        platform,
      },
    })

    return { ok: true, leadId: notifyResult.uuid }
  } catch (err) {
    console.warn('Lead notify failed (quote lead)', err)
  }

  return { ok: true }
}
