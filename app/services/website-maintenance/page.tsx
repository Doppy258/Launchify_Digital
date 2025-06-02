"use client";

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function WebsiteMaintenancePage() {
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <Link 
            href="/services" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors mb-8"
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
              <div className="inline-block rounded-lg bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">
                <Cpu className="h-4 w-4 inline-block mr-2" /> Web Maintenance
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Website Maintenance</h1>
              <p className="text-slate-700 md:text-xl/relaxed">
                Keep your site running smoothly with regular updates, backups, and technical support.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-teal-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="h-24 w-24 text-teal-500 opacity-30" />
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
              <h2 className="text-2xl font-bold">How We Maintain Your Website</h2>
              <p className="text-slate-700">
                Our maintenance services ensure your website remains secure, up-to-date, and performing at its best, so you can focus on running your business.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Our Maintenance Process:</h3>
                <ul className="space-y-3">
                  {[
                    "Regular security updates and patches to protect against vulnerabilities",
                    "Performance monitoring and optimization to keep your site running fast",
                    "Comprehensive backups to protect your content and data",
                    "Content updates and additions as needed",
                    "Technical support to address any issues that arise",
                    "Monthly reporting on website performance and health"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
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
              <h2 className="text-2xl font-bold">Maintenance Features</h2>
              <p className="text-slate-700">
                Our website maintenance packages include these essential services to keep your website in top condition:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Security Monitoring",
                    description: "Continuous protection against threats and vulnerabilities"
                  },
                  {
                    title: "Regular Backups",
                    description: "Complete data protection with scheduled backups"
                  },
                  {
                    title: "Software Updates",
                    description: "Keeping all plugins, themes, and core files up to date"
                  },
                  {
                    title: "Performance Tuning",
                    description: "Optimizations to maintain fast loading speeds"
                  },
                  {
                    title: "Technical Support",
                    description: "Help with technical issues and questions"
                  },
                  {
                    title: "Content Updates",
                    description: "Regular updates to keep your content fresh and relevant"
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
            <h2 className="text-3xl font-bold mb-4">Keep Your Website Running Smoothly</h2>
            <p className="text-slate-700 mb-6">
              Let us handle the technical details of website maintenance so you can focus on growing your business.
            </p>
            <Link href="/request-help">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
              >
                Request a Maintenance Plan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 