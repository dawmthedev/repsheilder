export function GuaranteeCard() {
  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
      <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">
        Our Guarantee
      </div>
      <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Clear timelines. Transparent process.</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">
        We help businesses remove policy-violating reviews through evidence-based disputes. We do not remove legitimate reviews, and we do not guarantee removals.
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-slate-950">Eligibility Audit (24–48h)</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            A policy-first review of the content and platform rules to confirm whether a dispute pathway is viable.
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-slate-950">Evidence Pack + Submission</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            Structured evidence + policy mapping, plus submission guidance designed to reduce back-and-forth.
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-slate-950">Escalation + Status Reporting</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            If eligible, continued follow-up and escalation support for 30/60/90 days (package-based) at no extra fee.
          </div>
        </div>
      </div>
    </div>
  )
}
