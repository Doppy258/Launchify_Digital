import { Metadata } from "next"
import LaunchifyDigitalClientPage from "@/components/LaunchifyDigitalClientPage";
import { generateLocalBusinessSchema, generateOrganizationSchema, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Launchify Digital | Toronto's #1 Web Development & Digital Marketing Agency",
  description: 
    "Launchify Digital is Toronto's premier web development & digital marketing agency specializing in high-performance websites and results-driven digital strategies.",
  keywords: ['Launchify Digital', 'Launchified Digital', 'Toronto web agency', 'Toronto digital marketing', 'web development company', 'website design agency', 'digital strategy', 'custom website development', 'professional web design', 'SEO services', 'online marketing'],
  alternates: {
    canonical: '/launchify-digital',
  },
  openGraph: {
    title: "Launchify Digital | Toronto's #1 Web Development & Digital Marketing Agency",
    description: "Launchify Digital is Toronto's premier web development & digital marketing agency specializing in high-performance websites and results-driven digital strategies.",
    url: 'https://launchifydigital.org/launchify-digital',
    siteName: 'Launchify Digital',
    locale: 'en_US',
    type: 'website',
  },
}

export default function LaunchifyDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://launchifydigital.org/launchify-digital",
            "url": "https://launchifydigital.org/launchify-digital",
            "name": "Launchify Digital | Toronto's #1 Web Development & Digital Marketing Agency",
            "description": "Launchify Digital is Toronto's premier web development & digital marketing agency specializing in high-performance websites and results-driven digital strategies.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://launchifydigital.org/#website",
              "url": "https://launchifydigital.org",
              "name": "Launchify Digital",
              "description": "Toronto's Premier Web Development & Digital Marketing Agency",
              "publisher": {
                "@id": "https://launchifydigital.org/#organization"
              }
            },
            "about": {
              "@id": "https://launchifydigital.org/#organization"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://launchifydigital.org/LOGO.png",
              "width": 512,
              "height": 512
            },
            "mainEntity": {
              "@type": "ProfessionalService",
              "name": "Launchify Digital",
              "alternateName": "Launchified Digital",
              "@id": "https://launchifydigital.org/#organization",
              "url": "https://launchifydigital.org",
              "telephone": "+1-647-123-4567",
              "email": "hello@launchifydigital.org",
              "description": "Toronto's premier web development & digital marketing agency specializing in high-performance websites and results-driven digital strategies.",
              "image": "https://launchifydigital.org/LOGO.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Yonge Street",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M5G 1M8",
                "addressCountry": "CA"
              }
            }
          })
        }}
      />
      <LaunchifyDigitalClientPage />
    </>
  );
} 