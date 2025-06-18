import { Metadata } from 'next';
import { baseMetadata, generateLocalBusinessSchema, generateOrganizationSchema, jsonLdScriptProps } from '@/lib/seo';
import HomeClient from './home-client';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Launchify Digital: Toronto Web Design & Digital Marketing',
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
    },
  },
};

export default function Page() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        {...jsonLdScriptProps({
          '@context': 'https://schema.org',
          '@graph': [localBusinessSchema, organizationSchema],
        })}
      />
      <HomeClient />
    </>
  );
} 