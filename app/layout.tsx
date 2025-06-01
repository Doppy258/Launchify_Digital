import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

// Add a timestamp for cache busting
const cacheBuster = Date.now();

export const metadata = {
  title: "Launchify Digital | Professional Web Development & Digital Marketing",
  description:
    "Launchify Digital specializes in creating stunning websites and effective digital marketing strategies for small businesses. Based in San Francisco, our team helps businesses grow online.",
  generator: 'Next.js',
  applicationName: 'Launchify Digital',
  referrer: 'origin-when-cross-origin',
  keywords: ['Launchify Digital', 'Launchify', 'Digital Marketing', 'Web Development', 'small business websites', 'social media management', 'SEO services', 'San Francisco digital agency', 'affordable web design'],
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
    'googlebot': 'index, follow, noimageindex',
    'google-site-verification': 'YOUR_VERIFICATION_CODE',
    'humans': '/humans.txt',
  },
  openGraph: {
    title: 'Launchify Digital | Professional Web Development & Digital Marketing',
    description: 'Launchify Digital specializes in creating stunning websites and effective digital marketing strategies for small businesses. Based in San Francisco, our team helps businesses grow online.',
    url: 'https://launchifydigital.org',
    siteName: 'Launchify Digital',
    images: [
      {
        url: `/LOGO.png?v=${cacheBuster}`,
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
    title: 'Launchify Digital | Professional Web Development & Digital Marketing',
    description: 'Launchify Digital specializes in creating stunning websites and effective digital marketing strategies for small businesses. Based in San Francisco, our team helps businesses grow online.',
    images: [`/LOGO.png?v=${cacheBuster}`],
    creator: '@launchifydigital',
    site: '@launchifydigital',
  },
  icons: {
    icon: [
      { url: `/favicon-16.png?v=${cacheBuster}`, sizes: '16x16', type: 'image/png' },
      { url: `/favicon-32.png?v=${cacheBuster}`, sizes: '32x32', type: 'image/png' },
      { url: `/favicon-48.png?v=${cacheBuster}`, sizes: '48x48', type: 'image/png' },
      { url: `/favicon-96.png?v=${cacheBuster}`, sizes: '96x96', type: 'image/png' },
      { url: `/favicon-192.png?v=${cacheBuster}`, sizes: '192x192', type: 'image/png' },
      { url: `/LOGO.png?v=${cacheBuster}`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `/LOGO.png?v=${cacheBuster}`, sizes: '57x57', type: 'image/png' },
      { url: `/LOGO.png?v=${cacheBuster}`, sizes: '72x72', type: 'image/png' },
      { url: `/LOGO.png?v=${cacheBuster}`, sizes: '114x114', type: 'image/png' },
      { url: `/LOGO.png?v=${cacheBuster}`, sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: `/LOGO.png?v=${cacheBuster}` },
      { rel: 'shortcut icon', url: `/favicon-32.png?v=${cacheBuster}` },
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
        <link rel="icon" type="image/png" sizes="512x512" href={`/LOGO.png?v=${cacheBuster}`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`/favicon-192.png?v=${cacheBuster}`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32.png?v=${cacheBuster}`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16.png?v=${cacheBuster}`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/LOGO.png?v=${cacheBuster}`} />
        <link rel="mask-icon" href={`/LOGO.png?v=${cacheBuster}`} color="#4f46e5" />
        <meta name="msapplication-TileImage" content={`/LOGO.png?v=${cacheBuster}`} />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <link rel="manifest" href="/manifest.json" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(require('../public/schema.json')) }} />
        <script src="/brand-highlight.js" defer></script>
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
      </body>
    </html>
  )
}


import './globals.css'