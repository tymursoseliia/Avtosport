import { MetadataRoute } from 'next'
import { cars } from '@/data/cars'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sporttech-auto.ru' // Example URL
  
  // Base routes
  const routes = [
    '',
    '/catalog',
    '/services',
    '/about',
    '/team',
    '/calculator',
    '/contacts',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Car detail routes
  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/catalog/${car.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...carRoutes]
}
