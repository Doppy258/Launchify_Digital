import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Website Services | Launchify Digital',
  description: 'Professional website creation services including custom design, development, and ongoing maintenance for small businesses and entrepreneurs.',
  keywords: ['website development', 'web design', 'responsive websites', 'business websites', 'website maintenance', 'professional websites'],
  openGraph: {
    title: 'Professional Website Creation Services | Launchify Digital',
    description: 'Turn your vision into a stunning, functional website. Our professional website design and development services help businesses establish a powerful online presence.',
    url: 'https://launchifydigital.org/services',
    type: 'website',
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 