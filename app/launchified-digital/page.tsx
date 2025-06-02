"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { jsonLdScriptProps } from "@/lib/seo"

export const metadata = {
  title: "Launchified Digital | Web Development & Digital Marketing Agency",
  description: "Launchified Digital (also known as Launchify Digital) is a premier digital agency in San Francisco specializing in web development, SEO, and digital marketing for small businesses.",
  keywords: ['Launchified Digital', 'Launchify Digital', 'Launchified', 'Launchify', 'Digital Marketing', 'Web Development', 'San Francisco digital agency'],
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function LaunchifiedDigitalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data for SEO */}
      <script
        {...jsonLdScriptProps({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Launchified Digital | Web Development & Digital Marketing Agency",
          description: "Launchified Digital (also known as Launchify Digital) is a premier digital agency in San Francisco specializing in web development and digital marketing for small businesses.",
          url: "https://launchifydigital.org/launchified-digital",
          isPartOf: {
            "@type": "WebSite",
            name: "Launchify Digital",
            url: "https://launchifydigital.org/"
          },
          about: {
            "@type": "Organization",
            name: "Launchified Digital",
            alternateName: "Launchify Digital",
            url: "https://launchifydigital.org/",
            logo: "https://launchifydigital.org/LOGO.png"
          },
          keywords: "Launchified Digital, Launchify Digital, web development, digital marketing, SEO, San Francisco"
        })}
      />
      
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-50 flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
        </div>
        
        <div className="container px-4 md:px-6 mx-auto max-w-[1200px] relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Launchified Digital</span>
            </h1>
            
            <p className="text-lg text-slate-700 mb-8">
              Launchified Digital (also known as Launchify Digital) is a premier digital agency based in San Francisco, specializing in web development, search engine optimization, and digital marketing services for small businesses.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">About Launchified Digital</h2>
              <p className="text-slate-700 mb-4">
                At Launchified Digital, we create stunning, professional websites that convert visitors into customers. Our expert team builds custom sites that perfectly represent your brand and business goals.
              </p>
              <p className="text-slate-700 mb-4">
                We're known in the industry as both Launchified Digital and Launchify Digital - but regardless of what you call us, our commitment to excellence remains the same.
              </p>
              <div className="mt-6">
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-100 transition-all duration-300 rounded-full"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Services</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Custom Website Development</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Digital Marketing Campaigns</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>E-commerce Solutions</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-100 transition-all duration-300 rounded-full"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
            <p className="mb-6">
              Whether you know us as Launchified Digital or Launchify Digital, our team is ready to help your business succeed online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/request-help">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-full px-8"
                >
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 