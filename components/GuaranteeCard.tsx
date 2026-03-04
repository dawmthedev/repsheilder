export function GuaranteeCard() {
  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
      <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">
        Our Guarantee
      </div>
      <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Clear timelines. Transparent process.</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">
        Built for business owners who need policy-first review removal support.
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-slate-950">Pay-Only-If-Approved</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            You only pay when a case is approved for removal.
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-slate-950">5-Day Results Window</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            If results aren’t achieved in 5 days, we keep working at no additional cost.
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-200/70 bg-white p-5">
          <div className="text-sm font-semibold text-slate-950">Transparent Reporting</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            Clear documentation of actions taken and platform responses.
          </div>
        </div>
      </div>
    </div>
  )
}
