import { Metadata } from 'next';

// Base metadata that can be extended for specific pages
export const baseMetadata: Metadata = {
  title: {
    default: 'Launchify Digital - Empowering Small Businesses Online',
    template: '%s | Launchify Digital'
  },
  description: 'Launchify Digital helps small businesses expand their presence in the digital world through website building, social media management, and digital marketing.',
  keywords: ['digital marketing', 'website development', 'small business', 'social media management', 'SEO', 'web design', 'custom website creation', 'Toronto web agency', 'business websites'],
};

// Generate local business schema.org structured data
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Launchify Digital',
    alternateName: 'Launchified Digital',
    description: 'Launchify Digital is a premier digital agency in Toronto specializing in web development, SEO, and digital marketing for small businesses.',
    image: 'https://www.launchifydigital.org/LOGO.png',
    logo: 'https://www.launchifydigital.org/LOGO.png',
    '@id': 'https://www.launchifydigital.org',
    url: 'https://www.launchifydigital.org',
    telephone: '416-909-5118',
    email: 'hello@launchifydigital.org',
    priceRange: '$$',
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
    alternateName: 'Launchified Digital',
    url: 'https://www.launchifydigital.org',
    logo: 'https://www.launchifydigital.org/LOGO.png',
    description: 'Toronto\'s premier web development and digital marketing agency specializing in high-performance websites and growth strategies for businesses.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '416-909-5118',
      contactType: 'customer service',
      email: 'hello@launchifydigital.org',
      availableLanguage: ['English']
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