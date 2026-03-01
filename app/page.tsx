import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import { QuoteLeadForm } from '@/components/QuoteLeadForm'
import { ProcessSection } from '@/components/ProcessSection'
import { TrustBlock } from '@/components/TrustBlock'
import { getFAQSchema } from '@/components/FAQ'

export default function HomePage({
  searchParams = {},
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Repshielder',
    url: 'https://www.repshielder.com',
    logo: 'https://www.repshielder.com/images/logo.png',
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />
      <Hero />
      <section id="case-eval" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-12">
          <QuoteLeadForm searchParams={searchParams} />
        </div>
      </section>
      <TrustBlock />
      <ProcessSection />
      <FAQ />
    </main>
  )
}
