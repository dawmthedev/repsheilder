import type { ReactNode } from 'react'

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  keywords: string[]
  category: 'google-reviews'
  heroCtaHref?: string
  heroCtaLabel?: string
  content: () => ReactNode
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-reviews-will-google-remove',
    title: 'What Reviews Will Google Remove? (Policy-First Guide for Businesses)',
    description:
      'A policy-first overview of which Google reviews may be eligible for removal, what is not removable, and how to build a stronger enforcement case.',
    publishedAt: '2026-03-01',
    keywords: [
      'what reviews will google remove',
      'google review removal',
      'google review policy',
      'remove negative google review',
    ],
    category: 'google-reviews',
    heroCtaHref: '/quote?p=google',
    heroCtaLabel: 'Start free case evaluation',
    content: () => (
      <>
        <p>
          Google does not remove reviews simply because they are negative. In most cases, removal is only possible when
          a review violates Google’s content policies (for example: spam, fake engagement, hate, harassment, conflicts of
          interest, or personal information).
        </p>
        <h2>Quick answer</h2>
        <p>
          Google may remove reviews that are:
        </p>
        <ul>
          <li>
            <strong>Spam or fake engagement</strong> (bot-like patterns, review farms, incentivized content, or repeated
            templated posts).
          </li>
          <li>
            <strong>Off-topic</strong> (doesn’t reflect a real customer experience with your business).
          </li>
          <li>
            <strong>Hate, harassment, or threats</strong> (targeted slurs, intimidation, or abusive content).
          </li>
          <li>
            <strong>Personal information</strong> (phone numbers, emails, addresses, full names in a doxxing context).
          </li>
          <li>
            <strong>Impersonation or conflicts of interest</strong> (employees, competitors, or someone pretending to be
            a customer).
          </li>
          <li>
            <strong>Illegal content</strong> or content promoting dangerous activities.
          </li>
        </ul>

        <h2>What Google usually will not remove</h2>
        <p>
          Google generally will not remove reviews that are:
        </p>
        <ul>
          <li>
            <strong>Simply negative opinions</strong> (e.g., “Bad service,” “Not worth the price”) if they don’t violate a
            specific policy.
          </li>
          <li>
            <strong>Hard-to-prove claims</strong> that are not clearly disallowed under policy.
          </li>
          <li>
            <strong>Customer disputes</strong> (billing disagreements, dissatisfaction) when the language stays within
            permitted content.
          </li>
        </ul>

        <h2>How to improve your odds of removal</h2>
        <ol>
          <li>
            <strong>Map the review to a specific policy.</strong> Avoid generic statements like “this is fake.”
          </li>
          <li>
            <strong>Document supporting facts.</strong> Reservation logs, CRM notes, timestamps, or proof the reviewer is a
            competitor/employee can help.
          </li>
          <li>
            <strong>Use clean, consistent reporting.</strong> Repeated low-quality reports can reduce effectiveness.
          </li>
          <li>
            <strong>Escalate responsibly.</strong> If initial reports fail, you may need structured escalation through
            appropriate channels.
          </li>
        </ol>

        <h2>Best practice: treat it like a compliance case</h2>
        <p>
          The strongest cases read like a compliance review: the exact violation, why it applies, and what evidence
          supports it. That’s how you move from “please remove this” to a policy-based enforcement request.
        </p>
      </>
    ),
  },
  {
    slug: 'how-to-report-a-review-in-google-business-profile',
    title: 'How to Report a Review in Google Business Profile (Step-by-Step)',
    description:
      'Step-by-step instructions for reporting Google reviews through Google Business Profile, plus what to do if reporting doesn’t work.',
    publishedAt: '2026-03-01',
    keywords: [
      'how to report a review in google business profile',
      'report google review',
      'google business profile reviews',
    ],
    category: 'google-reviews',
    heroCtaHref: '/quote?p=google',
    heroCtaLabel: 'Get help with a report',
    content: () => (
      <>
        <p>
          Reporting a review in Google Business Profile (GBP) is the first step when a review violates policy. The key is
          being precise about the violation and keeping your reporting clean.
        </p>

        <h2>Step-by-step: report a review in Google Business Profile</h2>
        <ol>
          <li>
            <strong>Open Google Business Profile</strong> and select your business.
          </li>
          <li>
            Go to <strong>Reviews</strong>.
          </li>
          <li>
            Find the review, select the <strong>menu</strong> next to it, and choose <strong>Report review</strong>.
          </li>
          <li>
            Select the most accurate <strong>policy reason</strong>.
          </li>
          <li>
            <strong>Track the status.</strong> Keep a log of dates, review IDs/links, and the policy you referenced.
          </li>
        </ol>

        <h2>What to include in your internal case notes</h2>
        <ul>
          <li>
            <strong>Review URL</strong> or reviewer profile reference.
          </li>
          <li>
            <strong>Exact text</strong> of the review (screenshots help).
          </li>
          <li>
            <strong>Policy mapping</strong> (e.g., spam/fake engagement, off-topic, harassment, personal info).
          </li>
          <li>
            <strong>Supporting evidence</strong> you can provide if escalated.
          </li>
        </ul>

        <h2>If Google doesn’t remove it</h2>
        <p>
          If reporting doesn’t work, the next move is usually not “report again immediately.” Instead:
        </p>
        <ul>
          <li>
            <strong>Re-check the policy fit.</strong> Many rejections happen because the violation category is wrong.
          </li>
          <li>
            <strong>Strengthen evidence.</strong> Add objective facts (dates, transaction records, proof of conflict of interest).
          </li>
          <li>
            <strong>Escalate with structure.</strong> Provide the policy language + evidence summary.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'google-review-policy-violations-examples',
    title: 'Google Review Policy Violations: Examples That Often Qualify for Removal',
    description:
      'Concrete examples of Google review policy violations (spam, off-topic, harassment, conflicts of interest, personal info) and how to document them.',
    publishedAt: '2026-03-01',
    keywords: [
      'google review policy violations examples',
      'google review policy',
      'fake google reviews',
      'report google review',
    ],
    category: 'google-reviews',
    heroCtaHref: '/quote?p=google',
    heroCtaLabel: 'Request a policy review',
    content: () => (
      <>
        <p>
          Below are common policy-violation patterns. The goal is to map what you see to a specific prohibited behavior
          and then document it.
        </p>

        <h2>1) Spam / fake engagement</h2>
        <ul>
          <li>
            Multiple reviews with near-identical wording posted within a short window.
          </li>
          <li>
            Reviewers with unusual account patterns (no profile activity except reviews, repeated across unrelated businesses).
          </li>
          <li>
            Incentivized language (e.g., “they offered me a discount for a 5-star review”).
          </li>
        </ul>

        <h2>2) Off-topic reviews</h2>
        <ul>
          <li>
            Political commentary unrelated to your service.
          </li>
          <li>
            Complaints about a different business/location.
          </li>
          <li>
            Reviews that describe experiences you do not offer (e.g., a restaurant accused of an “oil change”).
          </li>
        </ul>

        <h2>3) Harassment, hate, or threats</h2>
        <ul>
          <li>
            Slurs or dehumanizing language aimed at staff.
          </li>
          <li>
            Threats of harm.
          </li>
          <li>
            Repeated abusive comments across multiple reviews.
          </li>
        </ul>

        <h2>4) Personal information</h2>
        <ul>
          <li>
            Posting employee names with identifying details.
          </li>
          <li>
            Phone numbers, email addresses, or home addresses.
          </li>
          <li>
            Doxxing-style content.
          </li>
        </ul>

        <h2>5) Conflicts of interest</h2>
        <ul>
          <li>
            A reviewer appears to be an employee, former employee, competitor, or a business owner reviewing their own business.
          </li>
          <li>
            A review posted from a known affiliated account.
          </li>
        </ul>

        <h2>How to document a stronger case</h2>
        <ol>
          <li>
            Quote the <strong>exact offending text</strong>.
          </li>
          <li>
            Provide the <strong>policy reason</strong> in one sentence.
          </li>
          <li>
            Add <strong>supporting facts</strong> (timestamps, proof of affiliation, conflicting details).
          </li>
        </ol>
      </>
    ),
  },
  {
    slug: 'what-to-do-after-google-rejects-review-removal',
    title: 'What to Do After Google Rejects Review Removal (A Practical Escalation Playbook)',
    description:
      'If Google rejects your report, here’s how to reassess the policy fit, strengthen evidence, and escalate in a policy-first way without wasting time.',
    publishedAt: '2026-03-01',
    keywords: [
      'what to do after google rejects review removal',
      'google review removal rejected',
      'remove google review',
    ],
    category: 'google-reviews',
    heroCtaHref: '/quote?p=google',
    heroCtaLabel: 'Get an expert review',
    content: () => (
      <>
        <p>
          A rejection is common—and it doesn’t always mean the review is allowed. It often means the case wasn’t aligned
          to the right violation category or lacked supporting details.
        </p>

        <h2>1) Re-check the policy match</h2>
        <p>
          The fastest win is verifying you’re using the correct violation type (spam vs. off-topic vs. harassment, etc.).
          If the category is wrong, enforcement often fails even when the content is problematic.
        </p>

        <h2>2) Upgrade your evidence</h2>
        <ul>
          <li>
            Show why the reviewer is not a customer (logs, dates, service area mismatch).
          </li>
          <li>
            Show conflict of interest (employee/competitor affiliation).
          </li>
          <li>
            Capture patterns (multiple similar reviews, coordinated activity).
          </li>
        </ul>

        <h2>3) Use structured escalation</h2>
        <p>
          Escalation works best when it’s concise:
        </p>
        <ul>
          <li>
            The review link
          </li>
          <li>
            The exact policy cited
          </li>
          <li>
            A short evidence summary
          </li>
        </ul>

        <h2>4) Protect conversions while it’s pending</h2>
        <p>
          While removal is pending, consider:
        </p>
        <ul>
          <li>
            A professional public response (brief, calm, non-accusatory)
          </li>
          <li>
            Review acquisition strategy to dilute impact (policy-compliant)
          </li>
          <li>
            Monitoring to catch additional violations quickly
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'google-removing-reviews-unexpectedly',
    title: 'Google Removing Reviews Unexpectedly: Why It Happens and What to Do',
    description:
      'Google sometimes removes reviews (including good ones) during spam sweeps. Learn the common causes, what’s normal, and how to respond.',
    publishedAt: '2026-03-01',
    keywords: [
      'google removing reviews unexpectedly',
      'google reviews disappeared',
      'google review filter',
      'google spam sweep',
    ],
    category: 'google-reviews',
    heroCtaHref: '/quote?p=google',
    heroCtaLabel: 'Talk to a specialist',
    content: () => (
      <>
        <p>
          It’s not unusual for Google to remove reviews in bulk during automated spam sweeps. This can impact both
          negative and positive reviews.
        </p>

        <h2>Common reasons reviews disappear</h2>
        <ul>
          <li>
            <strong>Spam-filter updates</strong> (Google re-evaluates older reviews).
          </li>
          <li>
            <strong>Reviewer account issues</strong> (accounts suspended, content removed).
          </li>
          <li>
            <strong>Location/GBP changes</strong> (merges, address edits, category changes).
          </li>
          <li>
            <strong>Policy enforcement</strong> (Google removes content deemed in violation).
          </li>
        </ul>

        <h2>What you should do</h2>
        <ol>
          <li>
            <strong>Document the change</strong> (screenshots, dates, review count before/after).
          </li>
          <li>
            <strong>Check for business profile changes</strong> around the same time.
          </li>
          <li>
            <strong>Review acquisition health</strong> (avoid sudden surges or incentivized requests).
          </li>
          <li>
            <strong>Escalate if needed</strong> with clear, factual notes.
          </li>
        </ol>

        <h2>When to get help</h2>
        <p>
          If review volatility is affecting revenue or ad performance, it can be worth doing a structured audit: what is
          being removed, why, and how to stabilize your profile’s trust signals.
        </p>
      </>
    ),
  },
]

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null
}
