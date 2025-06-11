import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { generateLocalBusinessSchema, generateOrganizationSchema, jsonLdScriptProps } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Launchify Digital | Toronto's Premier Web Development & Digital Marketing Agency",
  description:
    "Launchify Digital (also known as Launchified Digital) is Toronto's leading web development and digital marketing agency, specializing in creating high-performance websites and growth strategies for businesses.",
  generator: 'Next.js',
  applicationName: 'Launchify Digital',
  referrer: 'origin-when-cross-origin',
  keywords: ['Launchify Digital', 'Launchified Digital', 'Launchify', 'Launchified', 'Digital Marketing', 'Web Development', 'small business websites', 'social media management', 'Toronto digital agency', 'affordable web design', 'Launchify Digital Agency', 'Launchified web design', 'Launchify web development', 'Launchify SEO', 'Digital marketing Toronto', 'website design agency', 'custom website development', 'business website creation', 'professional web design', 'SEO services', 'digital marketing services'],
  authors: [{ name: 'Launchify Digital Team', url: 'https://launchifydigital.org/about' }],
  colorScheme: 'light',
  creator: 'Launchify Digital',
  publisher: 'Launchify Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://launchifydigital.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://launchifydigital.org',
    },
  },
  manifest: '/manifest.json',
  other: {
    'author': 'Launchify Digital Team',
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'google': 'notranslate',
    'googlebot': 'index, follow',
    'google-site-verification': '', // Verified through domain provider
    'humans': '/humans.txt',
  },
  openGraph: {
    title: 'Launchify Digital | Toronto\'s Premier Web Development & Digital Marketing Agency',
    description: 'Launchify Digital is Toronto\'s leading web development and digital marketing agency for businesses seeking growth and results.',
    url: 'https://launchifydigital.org',
    siteName: 'Launchify Digital',
    images: [
      {
        url: `/LOGO.png`,
        width: 512,
        height: 512,
        alt: 'Launchify Digital Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launchify Digital | Toronto\'s Premier Web Development Agency',
    description: 'Launchify Digital: Toronto\'s leading web development and digital marketing agency for businesses seeking growth.',
    images: [`/LOGO.png`],
    creator: '@launchifydigital',
    site: '@launchifydigital',
  },
  icons: {
    icon: [
      { url: `/favicon-16.png`, sizes: '16x16', type: 'image/png' },
      { url: `/favicon-32.png`, sizes: '32x32', type: 'image/png' },
      { url: `/favicon-48.png`, sizes: '48x48', type: 'image/png' },
      { url: `/favicon-96.png`, sizes: '96x96', type: 'image/png' },
      { url: `/favicon-192.png`, sizes: '192x192', type: 'image/png' },
      { url: `/LOGO.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `/LOGO.png`, sizes: '57x57', type: 'image/png' },
      { url: `/LOGO.png`, sizes: '72x72', type: 'image/png' },
      { url: `/LOGO.png`, sizes: '114x114', type: 'image/png' },
      { url: `/LOGO.png`, sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: `/LOGO.png` },
      { rel: 'shortcut icon', url: `/favicon-32.png` },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script {...jsonLdScriptProps(generateLocalBusinessSchema())} />
        <script {...jsonLdScriptProps(generateOrganizationSchema())} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}


import './globals.css'