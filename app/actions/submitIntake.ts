'use server'

import { headers } from 'next/headers'

export async function submitIntake(formData: FormData) {
  const payload = Object.fromEntries(formData.entries())

  const h = headers()
  const ua = h.get('user-agent')

  console.log('INTAKE_SUBMISSION', {
    ...payload,
    userAgent: ua,
    receivedAt: new Date().toISOString(),
  })

  return { ok: true }
}
