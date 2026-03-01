import type { Metadata } from 'next'
import Link from 'next/link'

import { BLOG_POSTS } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Policy-first guides for review removal and reputation protection across Google Business Profile and major platforms.',
  alternates: {
    canonical: '/blogs',
  },
}

export default function BlogsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Repshielder Blog</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Policy-first resources on Google reviews, reporting, and structured escalation.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-black/10 hover:shadow"
            >
              <div className="text-xs font-semibold text-slate-500">{post.publishedAt}</div>
              <div className="mt-2 text-xl font-semibold text-slate-950">{post.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{post.description}</div>
              <div className="mt-4 text-sm font-semibold text-brand-700">Read article</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-black/5 bg-slate-50 p-8">
          <div className="text-xl font-semibold text-slate-950">Need help with a review removal case?</div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            Start a free case evaluation. We’ll review your situation and follow up with next steps.
          </div>
          <div className="mt-6">
            <Link
              href="/quote?p=google"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free case evaluation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
