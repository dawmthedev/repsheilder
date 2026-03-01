import type { Platform } from '@/lib/platform'

export const PLATFORM_LOGOS: Record<Platform, { label: string; logoSrc: string }> = {
  google: { label: 'Google Business', logoSrc: '/images/platforms/googlebusiness.png' },
  airbnb: { label: 'Airbnb', logoSrc: '/images/platforms/airbnb.png' },
  facebook: { label: 'Facebook', logoSrc: '/images/platforms/facebook.png' },
  trustpilot: { label: 'Trustpilot', logoSrc: '/images/platforms/trustpilot.png' },
}
