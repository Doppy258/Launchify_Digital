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
  title: "Launchify Digital - Empowering Small Businesses Online",
  description:
    "Launchify Digital helps small businesses expand their presence in the digital world through website building, social media management, and digital marketing.",
  generator: 'Next.js',
  applicationName: 'Launchify Digital',
  referrer: 'origin-when-cross-origin',
  keywords: ['digital marketing', 'website development', 'small business', 'social media management', 'SEO', 'web design'],
  authors: [{ name: 'Launchify Digital Team' }],
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
  },
  manifest: '/manifest.json',
  other: {
    'author': 'Launchify Digital Team',
    'robots': 'index, follow',
    'google': 'notranslate',
    'googlebot': 'index, follow',
    'humans': '/humans.txt',
  },
  openGraph: {
    title: 'Launchify Digital - Empowering Small Businesses Online',
    description: 'Launchify Digital helps small businesses expand their presence in the digital world through website building, social media management, and digital marketing.',
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
    title: 'Launchify Digital - Empowering Small Businesses Online',
    description: 'Launchify Digital helps small businesses expand their presence in the digital world through website building, social media management, and digital marketing.',
    images: [`/LOGO.png?v=${cacheBuster}`],
    creator: '@launchifydigital',
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