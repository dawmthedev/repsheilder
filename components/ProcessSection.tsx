export function ProcessSection() {
  const steps = [
    {
      title: 'Case Analysis',
      description:
        'We review your situation, the content, and the platform context to determine a compliant strategy.',
    },
    {
      title: 'Policy Violation Identification',
      description:
        'We map the content to specific platform policies and document supporting evidence.',
    },
    {
      title: 'Platform Escalation & Resolution',
      description:
        'We guide policy-based reporting and escalation workflows aimed at resolution or suppression where appropriate.',
    },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Our Structured Review Removal Process
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Enterprise teams need consistency, documentation, and defensible workflows. Our process
            is built to support policy-compliant escalations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-brand-700">Step</div>
              <div className="mt-2 text-lg font-semibold text-slate-950">{step.title}</div>
              <div className="mt-3 text-sm leading-6 text-slate-600">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
