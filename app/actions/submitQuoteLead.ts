'use server'

import { headers } from 'next/headers'

import { notifyLead } from '@/lib/leadNotifications'

export async function submitQuoteLead(payload: Record<string, unknown>) {
  const h = headers()
  const ua = h.get('user-agent')

  console.log('QUOTE_LEAD', {
    ...payload,
    userAgent: ua,
    receivedAt: new Date().toISOString(),
  })

  try {
    const firstName = typeof payload['firstName'] === 'string' ? payload['firstName'] : ''
    const lastName = typeof payload['lastName'] === 'string' ? payload['lastName'] : ''
    const name = `${firstName} ${lastName}`.trim()

    await notifyLead({
      name,
      email: typeof payload['email'] === 'string' ? payload['email'] : '',
      business: typeof payload['companyName'] === 'string' ? payload['companyName'] : '',
      business_url: typeof payload['businessListingLink'] === 'string' ? payload['businessListingLink'] : '',
      city: '',
      source: typeof payload['platform'] === 'string' ? payload['platform'] : '',
      phone: typeof payload['phone'] === 'string' ? payload['phone'] : '',
      Country: '',
    })
  } catch (err) {
    console.warn('Lead notify failed (quote lead)', err)
  }

  return { ok: true }
}
