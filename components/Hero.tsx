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
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-white" />
        </div>

        <div className="relative mx-auto flex min-h-[64svh] max-w-6xl items-center px-4 py-14 md:min-h-[70svh] md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
              Enterprise reputation protection
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Enterprise Reputation Protection & Review Removal
            </h1>
            <p className="mt-5 text-base leading-7 text-white/85 md:text-lg">
              Policy-first review removal support across Google Business, Airbnb, Facebook, and Trustpilot.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/quote?p=google"
                className="rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Free Case Evaluation
              </Link>
              <Link
                href="/review-removal"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur hover:bg-white/15"
              >
                View services
              </Link>
            </div>

            <div className="mt-10 grid gap-2 text-sm text-white/80 sm:grid-cols-3">
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
        <div className="-mt-12 rounded-3xl border border-black/5 bg-white p-5 shadow-sm md:-mt-16 md:p-8">
          <div className="text-lg font-semibold text-slate-950">Choose a platform</div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:gap-5">
            <PlatformCard href="/quote?p=google" logoSrc={PLATFORM_LOGOS.google.logoSrc} label="Google Business" />
            <PlatformCard href="/quote?p=airbnb" logoSrc={PLATFORM_LOGOS.airbnb.logoSrc} label="Airbnb" />
            <PlatformCard href="/quote?p=facebook" logoSrc={PLATFORM_LOGOS.facebook.logoSrc} label="Facebook" />
            <PlatformCard href="/quote?p=trustpilot" logoSrc={PLATFORM_LOGOS.trustpilot.logoSrc} label="Trustpilot" />
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="#case-eval"
              className="h-11 w-full max-w-xs rounded-full bg-brand-600 px-6 text-center text-sm font-semibold leading-[44px] text-white shadow-sm hover:bg-brand-700"
            >
              Start free case evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
