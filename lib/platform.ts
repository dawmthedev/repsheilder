export const PLATFORMS = ['google', 'glassdoor', 'indeed', 'facebook', 'trustpilot'] as const

export type Platform = (typeof PLATFORMS)[number]

export function isPlatform(value: string): value is Platform {
  return (PLATFORMS as readonly string[]).includes(value)
}

export function platformLabel(platform: Platform) {
  switch (platform) {
    case 'google':
      return 'Google'
    case 'glassdoor':
      return 'Glassdoor'
    case 'indeed':
      return 'Indeed'
    case 'facebook':
      return 'Facebook'
    case 'trustpilot':
      return 'Trustpilot'
  }
}

export function platformKeywords(platform: Platform) {
  const label = platformLabel(platform)
  return {
    title: `Remove ${label} Reviews`,
    description: `Professional ${label} review removal services built around policy-compliant reporting and structured escalation.`
  }
}
