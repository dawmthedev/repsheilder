'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { submitQuoteLead } from '@/app/actions/submitQuoteLead'
import { isPlatform, platformLabel, type Platform } from '@/lib/platform'
import { PLATFORM_LOGOS } from '@/lib/platformLogos'

type Step = 'Contact' | 'Content' | 'Business'

function isStep(value: string | null): value is Step {
  return value === 'Contact' || value === 'Content' || value === 'Business'
}

function nextStep(step: Step): Step {
  if (step === 'Contact') return 'Content'
  if (step === 'Content') return 'Business'
  return 'Business'
}

function prevStep(step: Step): Step {
  if (step === 'Business') return 'Content'
  if (step === 'Content') return 'Contact'
  return 'Contact'
}

function progressIndex(step: Step) {
  if (step === 'Contact') return 0
  if (step === 'Content') return 1
  return 2
}

function Progress({ step }: { step: Step }) {
  const idx = progressIndex(step)
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">Free case evaluation</div>
      <div className="mt-1 text-sm text-slate-600">Most people complete these steps in less than 2 minutes.</div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {['About you', 'Content', 'Business'].map((label, i) => (
          <div key={label} className="grid gap-2">
            <div
              className={`h-2 rounded-full ${
                i <= idx ? 'bg-brand-600' : 'bg-slate-200'
              }`}
            />
            <div className={`text-xs font-semibold ${i <= idx ? 'text-slate-900' : 'text-slate-500'}`}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function getParam(searchParams: URLSearchParams, key: string) {
  return searchParams.get(key) ?? ''
}

function pickTracking(searchParams: URLSearchParams | null) {
  if (!searchParams) {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
      gclid: '',
      wbraid: '',
      gbraid: '',
      fbclid: '',
      msclkid: '',
    }
  }
  return {
    utm_source: getParam(searchParams, 'utm_source'),
    utm_medium: getParam(searchParams, 'utm_medium'),
    utm_campaign: getParam(searchParams, 'utm_campaign'),
    utm_term: getParam(searchParams, 'utm_term'),
    utm_content: getParam(searchParams, 'utm_content'),
    gclid: getParam(searchParams, 'gclid'),
    wbraid: getParam(searchParams, 'wbraid'),
    gbraid: getParam(searchParams, 'gbraid'),
    fbclid: getParam(searchParams, 'fbclid'),
    msclkid: getParam(searchParams, 'msclkid'),
  }
}

export function QuoteFunnel({
  defaultPlatform = 'google',
}: {
  defaultPlatform?: Platform
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const platform = useMemo(() => {
    const p = searchParams?.get('p')
    if (p && isPlatform(p)) return p
    return defaultPlatform
  }, [defaultPlatform, searchParams])

  const step = useMemo<Step>(() => {
    const s = searchParams?.get('step') ?? null
    if (isStep(s)) return s
    return 'Contact'
  }, [searchParams])

  const tracking = useMemo(() => pickTracking(searchParams), [searchParams])

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>('')

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
  })

  const [content, setContent] = useState({
    reviewUrl: '',
    description: '',
  })

  const [business, setBusiness] = useState({
    businessName: '',
    website: '',
    location: '',
  })

  const [clientMeta, setClientMeta] = useState({
    referrer: '',
    landingUrl: '',
    path: '',
  })

  useEffect(() => {
    setClientMeta({
      referrer: document.referrer ?? '',
      landingUrl: window.location.href,
      path: window.location.pathname,
    })
  }, [])

  const header = platformLabel(platform)
  const logo = PLATFORM_LOGOS[platform]?.logoSrc

  const updateStep = (next: Step) => {
    const params = new URLSearchParams(searchParams?.toString() ?? '')
    params.set('p', platform)
    params.set('step', next)
    router.push(`/quote?${params.toString()}`)
  }

  const validate = () => {
    if (step === 'Contact') {
      if (!contact.firstName || !contact.lastName || !contact.email) {
        return 'Please complete required fields.'
      }
    }

    if (step === 'Content') {
      if (!content.reviewUrl || !content.description) {
        return 'Please complete required fields.'
      }
    }

    if (step === 'Business') {
      if (!business.businessName) {
        return 'Please complete required fields.'
      }
    }

    return ''
  }

  const onNext = () => {
    const e = validate()
    if (e) {
      setError(e)
      return
    }
    setError('')
    updateStep(nextStep(step))
  }

  const onBack = () => {
    setError('')
    updateStep(prevStep(step))
  }

  const onSubmit = () => {
    const e = validate()
    if (e) {
      setError(e)
      return
    }

    setError('')

    const payload = {
      platform,
      step,
      ...tracking,
      ...clientMeta,
      ...contact,
      ...content,
      ...business,
    }

    startTransition(async () => {
      const result = await submitQuoteLead(payload)
      if (!result?.ok) {
        setError('Something went wrong. Please try again.')
        return
      }
      const params = new URLSearchParams(searchParams?.toString() ?? '')
      params.set('p', platform)
      params.set('step', 'Business')
      router.push(`/review-removal/${platform}?${params.toString()}`)
    })
  }

  return (
    <div className="grid gap-6">
      <Progress step={step} />

      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          {logo ? <Image src={logo} alt={header} width={32} height={32} /> : null}
          <div className="text-sm font-semibold text-slate-700">Platform</div>
          <div className="text-sm font-semibold text-slate-950">{header}</div>
        </div>

        <div className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
          {step === 'Contact' ? 'Who can we help?' : step === 'Content' ? 'What content needs review?' : 'About your business'}
        </div>

        {error ? <div className="mt-3 text-sm font-semibold text-red-600">{error}</div> : null}

        <div className="mt-8 grid gap-4">
          {step === 'Contact' ? (
            <>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  value={contact.firstName}
                  onChange={(e) => setContact((s) => ({ ...s, firstName: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  value={contact.lastName}
                  onChange={(e) => setContact((s) => ({ ...s, lastName: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact((s) => ({ ...s, email: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  value={contact.phone}
                  onChange={(e) => setContact((s) => ({ ...s, phone: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  id="companyName"
                  value={contact.companyName}
                  onChange={(e) => setContact((s) => ({ ...s, companyName: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
            </>
          ) : null}

          {step === 'Content' ? (
            <>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="reviewUrl">
                  Review URL
                </label>
                <input
                  id="reviewUrl"
                  placeholder="https://"
                  value={content.reviewUrl}
                  onChange={(e) => setContent((s) => ({ ...s, reviewUrl: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  value={content.description}
                  onChange={(e) => setContent((s) => ({ ...s, description: e.target.value }))}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
            </>
          ) : null}

          {step === 'Business' ? (
            <>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="businessName">
                  Business Name
                </label>
                <input
                  id="businessName"
                  value={business.businessName}
                  onChange={(e) => setBusiness((s) => ({ ...s, businessName: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="website">
                  Website
                </label>
                <input
                  id="website"
                  placeholder="https://"
                  value={business.website}
                  onChange={(e) => setBusiness((s) => ({ ...s, website: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-slate-900" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  value={business.location}
                  onChange={(e) => setBusiness((s) => ({ ...s, location: e.target.value }))}
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-brand-600 focus:ring-2"
                />
              </div>
            </>
          ) : null}

          <div className="mt-2 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBack}
              disabled={step === 'Contact' || isPending}
              className="h-11 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm disabled:opacity-50"
            >
              Back
            </button>

            {step === 'Business' ? (
              <button
                type="button"
                onClick={onSubmit}
                disabled={isPending}
                className="h-11 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-50"
              >
                {isPending ? 'Submitting…' : 'Submit'}
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                disabled={isPending}
                className="h-11 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-50"
              >
                Next
              </button>
            )}
          </div>

          <div className="text-xs leading-5 text-slate-500">
            Your details are safe and confidential. Do not submit sensitive personal information.
          </div>
        </div>
      </div>
    </div>
  )
}
