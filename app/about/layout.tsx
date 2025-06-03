import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us | Launchify Digital',
  description: "Learn about Launchify Digital's mission to help businesses establish a powerful online presence through professional website creation services.",
  keywords: ['website creation', 'web design agency', 'web development company', 'professional websites', 'business websites', 'Launchify Digital'],
  openGraph: {
    title: 'About Launchify Digital - Website Creation Experts',
    description: "We're dedicated to helping businesses transform their digital presence with professional, effective websites.",
    url: 'https://launchifydigital.org/about',
    type: 'website',
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 