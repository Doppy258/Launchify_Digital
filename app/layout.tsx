import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

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
        url: '/LOGO.png',
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
    images: ['/LOGO.png'],
    creator: '@launchifydigital',
  },
  icons: {
    icon: [
      { url: '/LOGO.png', sizes: '16x16', type: 'image/png' },
      { url: '/LOGO.png', sizes: '32x32', type: 'image/png' },
      { url: '/LOGO.png', sizes: '48x48', type: 'image/png' },
      { url: '/LOGO.png', sizes: '96x96', type: 'image/png' },
      { url: '/LOGO.png', sizes: '192x192', type: 'image/png' },
      { url: '/LOGO.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/LOGO.png', sizes: '57x57', type: 'image/png' },
      { url: '/LOGO.png', sizes: '72x72', type: 'image/png' },
      { url: '/LOGO.png', sizes: '114x114', type: 'image/png' },
      { url: '/LOGO.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/LOGO.png' },
      { rel: 'shortcut icon', url: '/LOGO.png' },
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
        <link rel="icon" type="image/png" sizes="512x512" href="/LOGO.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/LOGO.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/LOGO.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/LOGO.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/LOGO.png" />
        <link rel="mask-icon" href="/LOGO.png" color="#000000" />
        <meta name="msapplication-TileImage" content="/LOGO.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
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
      </body>
    </html>
  )
}


import './globals.css'