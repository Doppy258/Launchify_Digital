"use client";

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function WebsiteDevelopmentPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <Link 
            href="/services" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-block rounded-lg bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800">
                <Code className="h-4 w-4 inline-block mr-2" /> Web Development
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Website Development</h1>
              <p className="text-slate-700 md:text-xl/relaxed">
                Professional coding that brings your design to life with clean, efficient functionality.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-indigo-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="h-24 w-24 text-indigo-500 opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">How We Develop Your Website</h2>
              <p className="text-slate-700">
                Our development process focuses on creating websites that are not only visually appealing but also technically sound, ensuring optimal performance, security, and user experience.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Our Development Process:</h3>
                <ul className="space-y-3">
                  {[
                    "Translating approved designs into clean, semantic HTML, CSS, and JavaScript",
                    "Implementing responsive layouts that work perfectly on all devices",
                    "Optimizing images and assets for fast loading times",
                    "Setting up content management systems when needed",
                    "Implementing SEO best practices and structured data",
                    "Comprehensive testing across browsers and devices"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold">Development Features</h2>
              <p className="text-slate-700">
                Our website development includes these technical features to ensure your site performs exceptionally well:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Clean Code",
                    description: "Well-structured, maintainable code that follows best practices"
                  },
                  {
                    title: "Performance Optimization",
                    description: "Fast loading speeds through efficient code and assets"
                  },
                  {
                    title: "Responsive Framework",
                    description: "Mobile-first approach ensuring compatibility across all devices"
                  },
                  {
                    title: "SEO Implementation",
                    description: "Built-in search engine optimization features"
                  },
                  {
                    title: "Security Measures",
                    description: "Protection against common vulnerabilities and threats"
                  },
                  {
                    title: "Analytics Integration",
                    description: "Setup for tracking visitor behavior and site performance"
                  }
                ].map((feature, i) => (
                  <div key={i} className="p-4 rounded-lg border border-slate-100 bg-slate-50">
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-slate-700 mb-6">
              Let our expert developers create a website that combines beautiful design with powerful functionality.
            </p>
            <Link href="/request-help">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8"
              >
                Request a Development Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 