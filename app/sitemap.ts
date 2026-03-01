import type { MetadataRoute } from 'next'

import { BLOG_POSTS } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.repshielder.com'

  const routes = [
    '/',
    '/blogs',
    '/review-removal',
    '/free-review-analysis',
    '/how-review-removal-works',
    '/platforms-we-support',
    '/case-studies',
    '/review-policy-violations',
    '/pricing-packages',
    '/review-removal/google',
    '/review-removal/airbnb',
    '/review-removal/facebook',
    '/review-removal/trustpilot',
  ]

  const blogRoutes = BLOG_POSTS.map((post) => `/blogs/${post.slug}`)

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
