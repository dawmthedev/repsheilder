import crypto from 'crypto'

function getEnv(name: string) {
  const v = process.env[name]
  return typeof v === 'string' ? v : ''
}

function toStringValue(v: unknown) {
  return typeof v === 'string' ? v : ''
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
}

export async function notifyLead(input: LeadNotificationInput) {
  const webhookUrl = getEnv('LEADCONNECTOR_WEBHOOK_URL')

  const uuid = input.uuid ?? crypto.randomUUID()
  const lead: LeadNotificationInput = {
    uuid,
    name: input.name ?? '',
    email: input.email ?? '',
    business: input.business ?? '',
    business_url: input.business_url ?? '',
    city: input.city ?? '',
    source: input.source ?? '',
    phone: input.phone ?? '',
    Country: input.Country ?? (getEnv('LEAD_DEFAULT_COUNTRY') || 'USA'),
  }

  const tasks: Array<Promise<unknown>> = []

  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(lead),
      })
    )
  } else {
    console.warn('Missing env LEADCONNECTOR_WEBHOOK_URL; skipping webhook')
  }

  tasks.push(sendLeadSms(lead))

  await Promise.allSettled(tasks)

  return { ok: true, uuid }
}

async function sendLeadSms(lead: LeadNotificationInput) {
  const accountSid = getEnv('TWILIO_ACCOUNT_SID')
  const authToken = getEnv('TWILIO_AUTH_TOKEN')
  const to = getEnv('TWILIO_TO')
  const from = getEnv('TWILIO_FROM')

  if (!accountSid || !authToken || !to || !from) {
    console.warn('Missing Twilio env vars; skipping SMS')
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

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.warn('Twilio SMS failed', res.status, text)
    return { ok: false }
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

  const websiteLine = website ? `\n🌐 Website: ${website}` : ''
  const emailLine = email ? `\n📧 Email: ${email}` : ''

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
  } satisfies LeadNotificationInput
}
