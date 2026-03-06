import Image from 'next/image'
import Link from 'next/link'

import { PlatformCard } from '@/components/PlatformCard'
import { PLATFORM_LOGOS } from '@/lib/platformLogos'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            quality={65}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-white" />
        </div>

        <div className="relative mx-auto flex min-h-[68svh] max-w-6xl items-center px-4 py-16 md:min-h-[74svh] md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
              Enterprise reputation protection
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white drop-shadow-sm md:text-6xl">
              Enterprise Reputation Protection & Review Removal
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Policy-first review removal support across Google Business, Airbnb, Facebook, and Trustpilot.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/quote#quote-form"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-9 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Free Case Evaluation
              </Link>
              <Link
                href="/review-removal"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-9 text-base font-semibold text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View services
              </Link>
            </div>

            <div className="mt-10 grid gap-2 text-sm font-medium text-white/80 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-400" />
                Pay only if approved
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-400" />
                Policy-first
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-400" />
                Confidential
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-14">
        <div className="-mt-12 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:-mt-16 md:p-10">
          <div className="text-lg font-semibold text-slate-950 md:text-xl">Choose a platform</div>
          <div className="mt-5 grid grid-cols-2 gap-4 md:gap-6">
            <PlatformCard href="/quote?p=google" logoSrc={PLATFORM_LOGOS.google.logoSrc} label="Google Business" />
            <PlatformCard href="/quote?p=airbnb" logoSrc={PLATFORM_LOGOS.airbnb.logoSrc} label="Airbnb" />
            <PlatformCard href="/quote?p=facebook" logoSrc={PLATFORM_LOGOS.facebook.logoSrc} label="Facebook" />
            <PlatformCard href="/quote?p=trustpilot" logoSrc={PLATFORM_LOGOS.trustpilot.logoSrc} label="Trustpilot" />
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="#case-eval"
              className="inline-flex h-12 w-full max-w-sm items-center justify-center rounded-full bg-brand-600 px-8 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600/50 focus-visible:ring-offset-2"
            >
              Start free case evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
