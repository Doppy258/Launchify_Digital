"use client";

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateOrganizationSchema, jsonLdScriptProps } from "@/lib/seo"
import { motion } from "framer-motion"
import { Check, Code, PenTool, Rocket, Lightbulb, ExternalLink, CheckCircle, Users, Shield } from "lucide-react"

export default function About() {
  // Generate organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Launchify Digital",
    url: "https://launchifydigital.org",
    logo: "https://launchifydigital.org/LOGO.png",
    description: "A professional website creation agency helping businesses establish a powerful online presence.",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+16478956675",
      contactType: "customer service",
      email: "lucaszhao09@gmail.com"
    }
  };

  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script {...jsonLdScriptProps(organizationSchema)} />
      <script {...jsonLdScriptProps(generateOrganizationSchema())} />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent pb-2">About Launchify Digital</h1>
              <p className="max-w-[800px] text-slate-700 md:text-xl/relaxed lg:text-2xl/relaxed">
                We transform businesses with powerful, professional websites that deliver results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6 max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                At Launchify Digital, we believe that every business deserves a professional website that not only looks great but effectively supports their business goals. We're dedicated to making high-quality website creation accessible to businesses of all sizes.
              </p>
              <p className="text-slate-700 md:text-xl/relaxed">
                Our mission is to empower businesses to thrive online through expertly crafted websites that connect with their audience, communicate their value, and convert visitors into customers.
              </p>
              <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 justify-center lg:justify-start">
                <Link href="/services">
                  <Button className="bg-slate-900 hover:bg-slate-800 transition-all duration-300">
                    Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-slate-300 hover:bg-slate-100 transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[550px] relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 p-1">
                <div className="rounded-lg overflow-hidden w-full h-full bg-white">
                <Image
                  src="/images/about/visuals/company-values-visual.svg"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Website Creation Process</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We follow a proven, structured approach to ensure every website we create is a success.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex flex-col items-center text-center space-y-4"
              variants={fadeIn}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-blue-600" />
          </div>
              <h3 className="text-xl font-bold">1. Discovery</h3>
              <p className="text-slate-700">
                We start by understanding your business, goals, target audience, and specific needs for your website.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-4"
              variants={fadeIn}
            >
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                <PenTool className="h-8 w-8 text-teal-600" />
                </div>
              <h3 className="text-xl font-bold">2. Design</h3>
              <p className="text-slate-700">
                We create custom designs that align with your brand and provide an exceptional user experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-4"
              variants={fadeIn}
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">3. Development</h3>
              <p className="text-slate-700">
                Our developers build your website with clean, efficient code and modern technologies.
                </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-4"
              variants={fadeIn}
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-pink-600" />
                </div>
              <h3 className="text-xl font-bold">4. Launch</h3>
              <p className="text-slate-700">
                After thorough testing, we launch your site and provide ongoing support to ensure continued success.
                </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Core Values</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These principles guide everything we do and every decision we make.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-slate-700 mx-auto max-w-[95%]">
                We never compromise on quality. Every website we create is built to the highest standards of design, functionality, and performance.
              </p>
              <ul className="text-left space-y-2 w-full">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-700">Rigorous testing procedures</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-700">Best-in-class development practices</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-700">Attention to every detail</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Client Focus</h3>
              <p className="text-slate-700 mx-auto max-w-[95%]">
                We're committed to understanding your business and goals to create websites that truly serve your needs and help you succeed.
              </p>
              <ul className="text-left space-y-2 w-full">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-700">Thorough discovery process</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-700">Ongoing communication</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-700">Solutions tailored to your goals</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-slate-700 mx-auto max-w-[95%]">
                We stay at the forefront of web design and development, embracing new technologies and trends to create modern, cutting-edge websites.
              </p>
              <ul className="text-left space-y-2 w-full">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-purple-600" />
                  </div>
                  <span className="text-sm text-slate-700">Continuous learning culture</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-purple-600" />
                  </div>
                  <span className="text-sm text-slate-700">Modern technology stack</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-purple-600" />
                  </div>
                  <span className="text-sm text-slate-700">Creative problem-solving</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-slate-700 mx-auto max-w-[95%]">
                We deliver projects on time and on budget, with transparent communication throughout the process.
              </p>
              <ul className="text-left space-y-2 w-full">
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-amber-600" />
                  </div>
                  <span className="text-sm text-slate-700">Clear project timelines</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-amber-600" />
                  </div>
                  <span className="text-sm text-slate-700">Transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-amber-600" />
                  </div>
                  <span className="text-sm text-slate-700">Dependable support after launch</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Ready to Transform Your Online Presence?</h2>
              <p className="max-w-[800px] text-slate-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                Let's create a website that helps your business succeed in the digital world.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/request-help">
                <Button size="lg" className="w-full min-[400px]:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg font-medium px-6 md:px-8 py-3">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto bg-transparent border border-slate-600 hover:bg-slate-800 text-white shadow-sm hover:shadow-md transition-all duration-300 text-base md:text-lg font-medium px-6 md:px-8 py-3"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
