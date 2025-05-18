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
  generator: 'v0.dev',
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