'use server'

import { headers } from 'next/headers'

import { leadFromFormData, notifyLead } from '@/lib/leadNotifications'

export async function submitIntake(formData: FormData) {
  const payload = Object.fromEntries(formData.entries())

  const h = headers()
  const ua = h.get('user-agent')
  const referer = h.get('referer')

  console.log('INTAKE_SUBMISSION', {
    ...payload,
    userAgent: ua,
    receivedAt: new Date().toISOString(),
  })

  try {
    const lead = leadFromFormData(formData)
    await notifyLead(lead, {
      raw: payload,
      context: {
        referer: referer ?? '',
        platform: lead.source ?? '',
      },
    })
  } catch (err) {
    console.warn('Lead notify failed (intake)', err)
  }

  return { ok: true }
}
