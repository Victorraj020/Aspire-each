import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aspireeach.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/testimonials',
        '/contact',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
