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

// Generate organization schema.org structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Launchify Digital',
    url: 'https://launchifydigital.org',
    logo: 'https://launchifydigital.org/LOGO.png',
    sameAs: [
      'https://twitter.com/launchifydigital',
      'https://facebook.com/launchifydigital',
      'https://linkedin.com/company/launchifydigital',
      'https://instagram.com/launchifydigital'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+15551234567',
      contactType: 'customer service',
      email: 'info@launchifydigital.org',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Avenue',
      addressLocality: 'Toronto',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    }
  };
}

// Generate local business schema.org structured data
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Launchify Digital',
    image: 'https://launchifydigital.org/LOGO.png',
    '@id': 'https://launchifydigital.org',
    url: 'https://launchifydigital.org',
    telephone: '+15551234567',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Avenue',
      addressLocality: 'Toronto',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194
    },
    openingHoursSpecification: {
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