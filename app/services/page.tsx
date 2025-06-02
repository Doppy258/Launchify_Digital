"use client";

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Code, PenTool, Zap, Settings, BarChart3, ArrowRight, Cpu } from "lucide-react"
import { generateServiceSchema, jsonLdScriptProps } from "@/lib/seo"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Custom Website Design",
    description: "Eye-catching, modern designs that reflect your brand identity and engage your audience.",
    features: ["Unique, brand-aligned layouts", "Mobile-first responsive design", "Intuitive user experience"],
    color: "blue",
    link: "/services/custom-website-design"
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Website Development",
    description: "Professional coding that brings your design to life with clean, efficient functionality.",
    features: ["Fast-loading pages", "SEO-friendly structure", "Secure, reliable code"],
    color: "indigo",
    link: "/services/website-development"
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Website Maintenance",
    description: "Keep your site running smoothly with regular updates, backups, and technical support.",
    features: ["Regular security updates", "Performance optimization", "Technical troubleshooting"],
    color: "teal",
    link: "/services/website-maintenance"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <motion.div 
            className="mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Web Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer comprehensive web development services to create stunning, functional websites that help your business grow online.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 lg:gap-12 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                variants={fadeIn}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="relative z-10 h-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                >
                  {/* Color stripe at top */}
                  <motion.div 
                    className={`absolute top-0 left-0 right-0 h-1 ${
                    service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    service.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                    'bg-gradient-to-r from-teal-500 to-teal-600'
                    }`}
                  />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div 
                      className={`
                      flex h-14 w-14 items-center justify-center rounded-xl mb-6
                      ${service.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                        service.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                        'bg-teal-50 text-teal-600'}
                      `}
                    >
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mt-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div>
                            <div className={`h-4 w-4 mr-2 flex-shrink-0 rounded-full ${
                              service.color === 'blue' ? 'bg-blue-100' :
                              service.color === 'indigo' ? 'bg-indigo-100' :
                              'bg-teal-100'
                            }`} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <div className="mt-auto">
                      <Link href={service.link}>
                        <button className={`
                          group inline-flex items-center text-sm font-medium transition-colors
                          ${service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                            service.color === 'indigo' ? 'text-indigo-600 hover:text-indigo-700' :
                            'text-teal-600 hover:text-teal-700'}
                        `}>
                          Learn more 
                          <ArrowRight className="ml-1 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div 
                    className={`
                      absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-all duration-300
                    ${service.color === 'blue' ? 'bg-blue-400' :
                      service.color === 'indigo' ? 'bg-indigo-400' :
                      'bg-teal-400'}
                    `}
                    style={{ opacity: 0.2 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/request-help">
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
