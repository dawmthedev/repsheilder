'use server'

import { headers } from 'next/headers'

export async function submitQuoteLead(payload: Record<string, unknown>) {
  const h = headers()
  const ua = h.get('user-agent')

  console.log('QUOTE_LEAD', {
    ...payload,
    userAgent: ua,
    receivedAt: new Date().toISOString(),
  })

  return { ok: true }
}
