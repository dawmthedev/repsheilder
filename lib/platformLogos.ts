import type { Platform } from '@/lib/platform'

export const PLATFORM_LOGOS: Record<Platform, { label: string; logoSrc: string }> = {
  google: { label: 'Google', logoSrc: '/images/platforms/googlebusiness.png' },
  glassdoor: { label: 'Glassdoor', logoSrc: '/images/platforms/Glassdoor.png' },
  indeed: { label: 'Indeed', logoSrc: '/images/platforms/indeed.png' },
  facebook: { label: 'Facebook', logoSrc: '/images/platforms/facebook.png' },
  trustpilot: { label: 'Trustpilot', logoSrc: '/images/platforms/trustpilot.png' },
}
