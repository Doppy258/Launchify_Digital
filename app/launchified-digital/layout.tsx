import type { Metadata } from 'next'

// This file contains metadata for the Launchified Digital page - fix for Vercel build issue
export const metadata: Metadata = {
  title: "Launchified Digital | Web Development & Digital Marketing Agency",
  description: "Launchified Digital (also known as Launchify Digital) is a premier digital agency in Toronto specializing in web development, SEO, and digital marketing for small businesses.",
  keywords: ['Launchified Digital', 'Launchify Digital', 'Launchified', 'Launchify', 'Digital Marketing', 'Web Development', 'Toronto digital agency'],
}

export default function LaunchifiedDigitalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 