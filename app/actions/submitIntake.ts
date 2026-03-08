'use server'

import { headers } from 'next/headers'

import { leadFromFormData, notifyLead } from '@/lib/leadNotifications'

function getString(formData: FormData, key: string) {
  const v = formData.get(key)
  return typeof v === 'string' ? v.trim() : ''
}

export async function submitIntake(formData: FormData) {
  const required = {
    name: getString(formData, 'name'),
    email: getString(formData, 'email'),
    phone: getString(formData, 'phone'),
    businessName: getString(formData, 'businessName'),
    reviewUrl: getString(formData, 'reviewUrl'),
    reviewType: getString(formData, 'reviewType'),
    reviewsToRemove: getString(formData, 'reviewsToRemove'),
    postedTimeframe: getString(formData, 'postedTimeframe'),
    description: getString(formData, 'description'),
  }

  const missingKeys = Object.entries(required)
    .filter(([, v]) => !v)
    .map(([k]) => k)

  if (missingKeys.length) {
    console.warn('INTAKE_SUBMISSION_MISSING_FIELDS', { missingKeys })
    return { ok: false }
  }

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
