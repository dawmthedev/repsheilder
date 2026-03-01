import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blogPosts'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  const url = `/blogs/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      images: [{ url: '/images/hero.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/hero.jpg'],
    },
  }
}

function jsonLdForPost(post: { title: string; description: string; slug: string; publishedAt: string; updatedAt?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: `https://www.repshielder.com/blogs/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Repshielder',
      url: 'https://www.repshielder.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Repshielder',
      url: 'https://www.repshielder.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.repshielder.com/images/logo.png',
      },
    },
    image: ['https://www.repshielder.com/images/hero.jpg'],
  }
}

function ArticleCta({ title }: { title: string }) {
  return (
    <div className="rounded-3xl border border-black/5 bg-slate-50 p-6">
      <div className="text-lg font-semibold text-slate-950">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-600">
        Start a free case evaluation. We’ll review your situation and follow up with next steps.
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/quote?p=google"
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Start free case evaluation
        </Link>
        <Link
          href="/review-removal/google"
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:border-black/20"
        >
          View Google service
        </Link>
      </div>
    </div>
  )
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdForPost(post)) }}
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex items-center justify-between gap-6">
          <Link href="/blogs" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
            Back to Blog
          </Link>
          <div className="text-xs font-semibold text-slate-500">{post.publishedAt}</div>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">{post.title}</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">{post.description}</p>

        <div className="mt-8">
          <ArticleCta title="Get a policy-first review removal plan" />
        </div>

        <article className="prose prose-slate mt-10 max-w-none">
          {post.content()}
        </article>

        <div className="mt-12">
          <ArticleCta title="Ready for next steps?" />
        </div>
      </section>
    </main>
  )
}
