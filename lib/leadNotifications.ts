import crypto from 'crypto'

function getEnv(name: string) {
  const v = process.env[name]
  return typeof v === 'string' ? v : ''
}

function toStringValue(v: unknown) {
  return typeof v === 'string' ? v : ''
}

function isProd() {
  return process.env.NODE_ENV === 'production'
}

export type LeadNotificationInput = {
  uuid?: string | number
  name?: string
  email?: string
  business?: string
  business_url?: string
  city?: string
  source?: string
  phone?: string
  Country?: string
  reviewType?: string
  reviewsToRemove?: string
  postedTimeframe?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  wbraid?: string
  gbraid?: string
  fbclid?: string
  msclkid?: string
}

export type LeadNotificationContext = {
  referer?: string
  platform?: string
}

function normalizeSource(input: { source?: string; platform?: string; referer?: string }) {
  const explicit = (input.source ?? '').toLowerCase()
  const platform = (input.platform ?? '').toLowerCase()
  const ref = (input.referer ?? '').toLowerCase()

  // If source is already explicitly set to 'general' or 'google', honor it
  if (explicit === 'general' || explicit === 'google') return explicit

  // Fallback to platform/referer logic only when source is not explicitly set
  if (platform === 'google') return 'google'
  if (ref.includes('/review-removal/google')) return 'google'
  if (ref.includes('/quote?p=google')) return 'google'
  if (ref.includes('/google-review-')) return 'google'
  if (ref.includes('utm_campaign=general')) return 'general'

  return explicit || 'general'
}

export async function notifyLead(
  input: LeadNotificationInput,
  opts?: { raw?: Record<string, unknown>; context?: LeadNotificationContext }
) {
  const webhookUrl = getEnv('LEADCONNECTOR_WEBHOOK_URL')

  const uuid = input.uuid ?? crypto.randomUUID()

  const source = normalizeSource({
    source: input.source,
    platform: opts?.context?.platform,
    referer: opts?.context?.referer,
  })

  const lead: LeadNotificationInput = {
    uuid,
    name: input.name ?? '',
    email: input.email ?? '',
    business: input.business ?? '',
    business_url: input.business_url ?? '',
    city: input.city ?? '',
    source,
    phone: input.phone ?? '',
    Country: input.Country ?? (getEnv('LEAD_DEFAULT_COUNTRY') || 'USA'),
    reviewType: input.reviewType ?? '',
    reviewsToRemove: input.reviewsToRemove ?? '',
    postedTimeframe: input.postedTimeframe ?? '',
    utm_source: input.utm_source ?? '',
    utm_medium: input.utm_medium ?? '',
    utm_campaign: input.utm_campaign ?? '',
    utm_term: input.utm_term ?? '',
    utm_content: input.utm_content ?? '',
    gclid: input.gclid ?? '',
    wbraid: input.wbraid ?? '',
    gbraid: input.gbraid ?? '',
    fbclid: input.fbclid ?? '',
    msclkid: input.msclkid ?? '',
  }

  const raw = opts?.raw ?? {}
  const webhookBody = {
    ...raw,
    ...lead,
    referer: opts?.context?.referer ?? '',
    platform: opts?.context?.platform ?? '',
  }

  const tasks: Array<Promise<unknown>> = []

  if (!isProd()) {
    console.log('[LeadNotify] prepared', {
      uuid,
      source: lead.source,
      email: lead.email,
      business: lead.business,
      hasWebhookUrl: Boolean(webhookUrl),
      hasTwilioEnv: Boolean(getEnv('TWILIO_ACCOUNT_SID') && getEnv('TWILIO_AUTH_TOKEN') && getEnv('TWILIO_TO') && getEnv('TWILIO_FROM')),
    })
  }

  if (webhookUrl) {
    tasks.push(postWebhook(webhookUrl, webhookBody, uuid))
  } else {
    console.warn('Missing env LEADCONNECTOR_WEBHOOK_URL; skipping webhook')
  }

  tasks.push(sendLeadSms(lead))

  await Promise.allSettled(tasks)

  return { ok: true, uuid }
}

async function postWebhook(webhookUrl: string, body: Record<string, unknown>, uuid: string | number) {
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!isProd()) {
      console.log('[LeadNotify] webhook response', { uuid, status: res.status, ok: res.ok })
    }

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.warn('[LeadNotify] webhook failed', { uuid, status: res.status, body: text.slice(0, 500) })
    }

    return { ok: res.ok, status: res.status }
  } catch (err) {
    console.warn('[LeadNotify] webhook error', { uuid, err })
    return { ok: false }
  }
}

async function sendLeadSms(lead: LeadNotificationInput) {
  const accountSid = getEnv('TWILIO_ACCOUNT_SID')
  const authToken = getEnv('TWILIO_AUTH_TOKEN')
  const to = getEnv('TWILIO_TO')
  const from = getEnv('TWILIO_FROM')

  if (!accountSid || !authToken || !to || !from) {
    const missing = [
      !accountSid ? 'TWILIO_ACCOUNT_SID' : '',
      !authToken ? 'TWILIO_AUTH_TOKEN' : '',
      !to ? 'TWILIO_TO' : '',
      !from ? 'TWILIO_FROM' : '',
    ].filter(Boolean)
    console.warn('Missing Twilio env vars; skipping SMS', { missing })
    return { ok: false }
  }

  const message = formatLeadSms(lead)

  const body = new URLSearchParams()
  body.set('To', to)
  body.set('From', from)
  body.set('Body', message)

  const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64')

  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      authorization: `Basic ${auth}`,
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body,
  })

  if (!isProd()) {
    console.log('[LeadNotify] twilio response', { uuid: lead.uuid ?? '', status: res.status, ok: res.ok })
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.warn('Twilio SMS failed', res.status, text)
    return { ok: false }
  }

  if (!isProd()) {
    const json = await res.json().catch(() => null)
    console.log('[LeadNotify] twilio sent', { uuid: lead.uuid ?? '', sid: json && typeof json === 'object' ? (json as any).sid : '' })
  }

  return { ok: true }
}

function formatLeadSms(lead: LeadNotificationInput) {
  const business = lead.business ?? ''
  const website = lead.business_url ?? ''
  const name = lead.name ?? ''
  const email = lead.email ?? ''
  const phone = lead.phone ?? ''
  const city = lead.city ?? ''
  const country = lead.Country ?? ''
  const source = lead.source ?? ''
  const uuid = lead.uuid ?? ''
  const reviewType = lead.reviewType ?? ''
  const reviewsToRemove = lead.reviewsToRemove ?? ''
  const postedTimeframe = lead.postedTimeframe ?? ''
  const utmCampaign = lead.utm_campaign ?? ''
  const gclid = lead.gclid ?? ''

  const websiteLine = website ? `\n🌐 Website: ${website}` : ''
  const emailLine = email ? `\n📧 Email: ${email}` : ''
  const reviewTypeLine = reviewType ? `\n📝 Review Type: ${reviewType}` : ''
  const countLine = reviewsToRemove ? `\n🔢 Reviews To Remove: ${reviewsToRemove}` : ''
  const timeframeLine = postedTimeframe ? `\n⏱ Timeframe: ${postedTimeframe}` : ''
  const utmLine = utmCampaign ? `\n🏷 Campaign: ${utmCampaign}` : ''
  const gclidLine = gclid ? `\n🧷 GCLID: ${gclid}` : ''

  return (
    `⭐️⭐️⭐️ NEW REVIEW REMOVAL LEAD! ⭐️⭐️⭐️` +
    `\n\n📍 Business: ${business}` +
    websiteLine +
    `\n👤 Name: ${name}` +
    emailLine +
    `\n📞 Phone: ${phone}` +
    `\n🏙 City: ${city}` +
    `\n🌎 Country: ${country}` +
    `\n🔎 Source: ${source}` +
    reviewTypeLine +
    countLine +
    timeframeLine +
    utmLine +
    gclidLine +
    `\n🆔 Lead ID: ${uuid}` +
    `\n\n🔥 Follow up immediately!`
  )
}

export function leadFromFormData(formData: FormData) {
  const get = (key: string) => toStringValue(formData.get(key))

  const firstName = get('firstName')
  const lastName = get('lastName')
  const name = `${firstName} ${lastName}`.trim() || get('name')

  const business = get('business') || get('businessName') || get('companyName')
  const business_url = get('business_url') || get('businessListingLink') || get('businessUrl') || get('website') || get('reviewUrl')

  const source = get('source') || get('platform') || get('service')

  return {
    uuid: get('uuid') || undefined,
    name,
    email: get('email'),
    business,
    business_url,
    city: get('city'),
    source,
    phone: get('phone'),
    Country: get('Country') || get('country'),
    reviewType: get('reviewType'),
    reviewsToRemove: get('reviewsToRemove'),
    postedTimeframe: get('postedTimeframe'),
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_term: get('utm_term'),
    utm_content: get('utm_content'),
    gclid: get('gclid'),
    wbraid: get('wbraid'),
    gbraid: get('gbraid'),
    fbclid: get('fbclid'),
    msclkid: get('msclkid'),
  } satisfies LeadNotificationInput
}
