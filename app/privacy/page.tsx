import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Repshielder.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Privacy Policy</h1>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            This Privacy Policy explains how we collect, use, and share information when you use our website and
            submit a case evaluation.
          </p>

          <div className="mt-10 space-y-6 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-900">Summary</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We collect the information you submit (such as contact details and business listing links) to review
                your request, communicate with you, and provide evidence-based dispute support.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Information we collect</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                This may include your name, email, phone number, company name, platform selection, business listing
                link, and details about the reviews you want to dispute.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">How we use information</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We use it to:
                <div className="mt-2 grid gap-1">
                  <div>Evaluate eligibility under platform policies.</div>
                  <div>Communicate about next steps and service options.</div>
                  <div>Provide documentation, submission guidance, and escalation support.</div>
                  <div>Improve site reliability and prevent abuse.</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Analytics and advertising</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We may use analytics tools to understand site performance and advertising conversion tracking to
                measure campaign effectiveness. These tools may use cookies or similar technologies.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Sharing</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We don&apos;t sell personal information. We may share information with service providers that help us
                operate the site, communicate with you, or store data securely.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Data retention</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                We retain information as needed to provide services, comply with legal obligations, resolve disputes,
                and enforce agreements.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Your choices</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                You can request access, correction, or deletion of your information by contacting us.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Contact</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Email us at{' '}
                <a className="underline" href="mailto:support@repshielder.com">
                  support@repshielder.com
                </a>
                .
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs leading-5 text-slate-500">
            Related: <Link href="/terms" className="underline">Terms</Link>.
          </div>
        </div>
      </section>
    </main>
  )
}
