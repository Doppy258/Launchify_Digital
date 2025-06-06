import { Metadata } from 'next';

// Base metadata that can be extended for specific pages
export const baseMetadata: Metadata = {
  title: {
    default: 'Launchify Digital - Empowering Small Businesses Online',
    template: '%s | Launchify Digital'
  },
  description: 'Launchify Digital helps small businesses expand their presence in the digital world through website building, social media management, and digital marketing.',
  keywords: ['digital marketing', 'website development', 'small business', 'social media management', 'SEO', 'web design'],
};

// Generate local business schema.org structured data
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Launchify Digital',
    description: 'Launchify Digital is a premier digital agency in Toronto specializing in web development, SEO, and digital marketing for small businesses.',
    image: 'https://www.launchifydigital.org/LOGO.png',
    '@id': 'https://www.launchifydigital.org',
    url: 'https://www.launchifydigital.org',
    telephone: '+1-647-123-4567',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Yonge Street',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      postalCode: 'M5G 1M8',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832
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
      'https://twitter.com/launchifydigital',
      'https://facebook.com/launchifydigital',
      'https://linkedin.com/company/launchify-digital',
      'https://instagram.com/launchifydigital'
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