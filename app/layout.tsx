import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: true })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Repshielder | Enterprise Reputation Protection & Review Removal',
    template: '%s | Repshielder',
  },
  description:
    'Enterprise-level reputation protection and policy-compliant review removal services across Google, Glassdoor, Indeed, Facebook, and Trustpilot.',
  applicationName: 'Repshielder',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Repshielder',
    title: 'Repshielder | Enterprise Reputation Protection & Review Removal',
    description:
      'Enterprise-level reputation protection and policy-compliant review removal services across Google, Glassdoor, Indeed, Facebook, and Trustpilot.',
    url: '/',
    images: [{ url: '/images/hero.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repshielder | Enterprise Reputation Protection & Review Removal',
    description:
      'Enterprise-level reputation protection and policy-compliant review removal services across Google, Glassdoor, Indeed, Facebook, and Trustpilot.',
    images: ['/images/hero.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
