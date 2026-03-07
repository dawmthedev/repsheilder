import type { MetadataRoute } from 'next'

import { BLOG_POSTS } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.repshielders.com'

  const routes = [
    '/',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
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
    '/google-review-case-evaluation',
    '/how-google-review-removal-works',
    '/google-review-policy-violations',
    '/remove-1-star-google-reviews',
    '/google-review-case-studies',
    '/google-review-removal-pricing',
  ]

  const blogRoutes = BLOG_POSTS.map((post) => `/blogs/${post.slug}`)

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
