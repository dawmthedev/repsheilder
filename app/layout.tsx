import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  adjustFontFallback: true,
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Repshielder | Enterprise Reputation Protection & Review Removal',
    template: '%s | Repshielder',
  },
  description:
    'Enterprise-level reputation protection and policy-compliant review removal services across Google Business, Airbnb, Facebook, and Trustpilot.',
  applicationName: 'Repshielder',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Repshielder',
    title: 'Repshielder | Enterprise Reputation Protection & Review Removal',
    description:
      'Enterprise-level reputation protection and policy-compliant review removal services across Google Business, Airbnb, Facebook, and Trustpilot.',
    url: '/',
    images: [{ 
      url: '/images/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Repshielder Enterprise Reputation Protection'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repshielder | Enterprise Reputation Protection & Review Removal',
    description:
      'Enterprise-level reputation protection and policy-compliant review removal services across Google Business, Airbnb, Facebook, and Trustpilot.',
    images: [{
      url: '/images/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Repshielder Enterprise Reputation Protection'
    }],
  },
  icons: {
    icon: [{ url: '/favicon.png', sizes: '32x32' }],
    apple: [{ url: '/favicon.png', sizes: '180x180' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
