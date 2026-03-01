const faqs = [
  {
    q: 'Can Google reviews be removed?',
    a: 'Potentially. Reviews that violate Google policies (spam, harassment, conflicts of interest, etc.) may be eligible for removal after proper reporting and escalation.',
  },
  {
    q: 'Is Glassdoor review removal legal?',
    a: 'Policy-based reporting and escalation are generally legal. We focus on compliant pathways and do not advise actions that violate laws or platform terms.',
  },
  {
    q: 'How long does review removal take?',
    a: 'Timelines vary by platform, severity, and evidence quality. Some cases resolve quickly, while others require multiple escalation cycles.',
  },
  {
    q: 'Can negative Facebook reviews be deleted?',
    a: 'Only in certain circumstances, typically when content violates policy. We help identify policy grounds and prepare compliant documentation.',
  },
  {
    q: 'Do you guarantee review removal?',
    a: 'No. Outcomes depend on the platform and the facts. We provide policy-first assistance designed to improve the quality and clarity of your case.',
  },
  {
    q: 'Do you remove legitimate reviews?',
    a: 'We do not claim the ability to remove legitimate reviews. We focus on false, defamatory, or policy-violating content and compliant enforcement pathways.',
  },
  {
    q: 'What information do you need to evaluate my case?',
    a: 'Typically the review URL, platform, business name, and a short summary of why you believe the content violates policy.',
  },
  {
    q: 'Is my request confidential?',
    a: 'Yes. We treat submitted information as confidential and only use it to evaluate and respond to your request.',
  },
]

export function FAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Answers are general information and not legal advice.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="text-base font-semibold text-slate-950">{item.q}</div>
              <div className="mt-3 text-sm leading-6 text-slate-600">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}
