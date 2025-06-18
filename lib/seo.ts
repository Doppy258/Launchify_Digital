import { Metadata } from 'next';

// Base metadata that can be extended for specific pages
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.launchifydigital.org'),
  title: {
    default: 'Launchify Digital: Toronto Web Design & Digital Marketing',
    template: '%s | Launchify Digital'
  },
  description: 'Launchify Digital is a top-rated Toronto web design and digital marketing agency. We build high-performance websites to help your business grow online.',
  keywords: ['Launchify Digital', 'web design', 'digital marketing', 'Toronto web agency', 'website development', 'SEO services', 'small business websites', 'custom web design'],
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
    },
  },
  openGraph: {
    title: 'Launchify Digital: Toronto Web Design & Digital Marketing',
    description: 'We build high-performance websites to help your business grow. Contact Toronto\'s top-rated web design and digital marketing agency.',
    url: 'https://www.launchifydigital.org',
    siteName: 'Launchify Digital',
    images: [
      {
        url: '/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Launchify Digital - Professional Web Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launchify Digital: Toronto Web Design & Digital Marketing',
    description: 'We build high-performance websites to help your business grow. Contact Toronto\'s top-rated web design and digital marketing agency.',
    // creator: '@yourtwitterhandle', // Add your twitter handle
    images: ['/twitter-image.png'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Generate local business schema.org structured data
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Launchify Digital',
    alternateName: ['Launchified Digital', 'Launchify Digital Toronto'],
    description: 'Launchify Digital is a premier digital agency in Toronto specializing in web development, SEO, and digital marketing for small businesses.',
    image: 'https://www.launchifydigital.org/LOGO.png',
    logo: 'https://www.launchifydigital.org/LOGO.png',
    '@id': 'https://www.launchifydigital.org',
    url: 'https://www.launchifydigital.org',
    telephone: '416-909-5118',
    email: 'hello@launchifydigital.org',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Yonge Street', // Please update with the real address
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      postalCode: 'M5E 1W7',
      addressCountry: 'CA'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      // "https://www.facebook.com/yourprofile", // Add your social media links
      // "https://www.twitter.com/yourprofile",
      // "https://www.instagram.com/yourprofile",
      // "https://www.linkedin.com/company/yourcompany"
    ],
    keywords: [
      'web development',
      'digital marketing',
      'SEO',
      'Toronto web agency',
      'website design',
      'custom websites',
      'business websites',
      'web design agency',
      'Launchify Digital',
      'Launchified Digital'
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6532,
        longitude: -79.3832
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            url: 'https://launchifydigital.org/services/website-development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing',
            url: 'https://launchifydigital.org/services/digital-marketing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            url: 'https://launchifydigital.org/services/seo'
          }
        }
      ]
    }
  };
}

// Generate organization schema for broader visibility
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.launchifydigital.org',
    name: 'Launchify Digital',
    alternateName: ['Launchified Digital', 'Launchify Digital Toronto'],
    url: 'https://www.launchifydigital.org',
    logo: 'https://www.launchifydigital.org/LOGO.png',
    description: 'Toronto\'s premier web development and digital marketing agency specializing in high-performance websites and growth strategies for businesses.',
    founder: {
      '@type': 'Person',
      name: 'Michael Chen',
      jobTitle: 'Founder & CEO'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '416-909-5118',
      contactType: 'customer service',
      email: 'hello@launchifydigital.org',
      availableLanguage: ['English']
    },
    sameAs: [
      // "https://www.facebook.com/yourprofile", // Add your social media links
      // "https://www.twitter.com/yourprofile",
      // "https://www.instagram.com/yourprofile",
      // "https://www.linkedin.com/company/yourcompany"
    ]
  };
}

// Generate service schema.org structured data
export function generateServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'Organization',
      name: 'Launchify Digital',
      url: 'https://launchifydigital.org'
    },
    description,
    url
  };
}

// Schema data for FAQ page
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Helper to generate JSON-LD script content
export function jsonLdScriptProps(data: any) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data)
    }
  };
} 