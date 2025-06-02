"use client";

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Code, PenTool, Zap, Settings, BarChart3 } from "lucide-react"
import { generateServiceSchema, jsonLdScriptProps } from "@/lib/seo"
import { motion } from "framer-motion"

export default function Services() {
  // Services for structured data
  const servicesData = [
    {
      name: "Website Design",
      description: "Visually stunning, brand-aligned website designs that captivate your audience.",
      url: "https://launchifydigital.org/services#website-design"
    },
    {
      name: "Website Development",
      description: "Custom, responsive website development with modern technologies for optimal performance.",
      url: "https://launchifydigital.org/services#website-development"
    },
    {
      name: "Website Maintenance",
      description: "Ongoing website maintenance, updates, and support to keep your site secure and performing at its best.",
      url: "https://launchifydigital.org/services#website-maintenance"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      {servicesData.map((service, index) => (
        <script key={index} {...jsonLdScriptProps(generateServiceSchema(service.name, service.description, service.url))} />
      ))}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Website Creation Services</h1>
              <p className="max-w-[800px] text-slate-700 md:text-xl/relaxed lg:text-2xl/relaxed">
                Transform your digital presence with our professional website solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="website-design" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6 max-w-2xl">
              <div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 text-sm font-medium text-slate-900">
                <PenTool className="h-4 w-4 inline-block mr-2" /> Website Design
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Captivating Website Design</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                We create visually stunning website designs that perfectly align with your brand and captivate your audience. Our design process focuses on user experience, ensuring your website not only looks beautiful but also drives results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Custom designs tailored to your brand identity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">User-focused interfaces that guide visitors to action</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Modern aesthetics with attention to detail</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Comprehensive branding integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Mobile-first responsive design approach</span>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[550px] relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 p-1">
                <div className="rounded-lg overflow-hidden w-full h-full bg-white">
                  <Image
                    src="/images/services/visuals/website-design-visual.svg"
                    alt="Website Design Services"
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

      <section id="website-development" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="mx-auto w-full max-w-[550px] relative order-2 lg:order-1">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-teal-500 to-cyan-600 p-1">
                <div className="rounded-lg overflow-hidden w-full h-full bg-white">
                  <Image
                    src="/images/services/visuals/website-development-visual.svg"
                    alt="Website Development Services"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-teal-100 to-cyan-100 px-4 py-2 text-sm font-medium text-slate-900">
                <Code className="h-4 w-4 inline-block mr-2" /> Website Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Website Development</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                Our development team brings your website designs to life with clean, efficient code and modern technologies. We create responsive, accessible websites that work flawlessly on any device and load quickly for optimal user experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Custom-coded websites with clean, semantic HTML</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Responsive development for all devices and screen sizes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Content management system (CMS) integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Performance optimization for fast loading times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">SEO-friendly structure and technical setup</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="website-maintenance" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-slate-900">
                <Settings className="h-4 w-4 inline-block mr-2" /> Website Maintenance
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ongoing Website Maintenance</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                Your website requires ongoing care to stay secure, up-to-date, and performing at its best. Our maintenance services ensure your site continues to serve your business effectively long after launch.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Regular security updates and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Content updates and site modifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Performance optimization and speed improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Technical support and issue resolution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">Analytics reporting and performance tracking</span>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[550px] relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-500 to-pink-600 p-1">
                <div className="rounded-lg overflow-hidden w-full h-full bg-white">
                  <Image
                    src="/images/services/visuals/website-maintenance-visual.svg"
                    alt="Website Maintenance Services"
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
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Website Creation Process</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined approach ensures your website project progresses smoothly from concept to completion.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-3 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <CardTitle>Discovery & Planning</CardTitle>
                  <CardDescription>Understanding your vision and goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    We begin by understanding your business, target audience, and goals for your website. This foundation allows us to create a detailed plan tailored to your specific needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white mb-2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <CardTitle>Design & Development</CardTitle>
                  <CardDescription>Bringing your website to life</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Our designers create the visual concept while our developers build the functional foundation. We collaborate closely with you during this phase to ensure your vision is realized.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white mb-2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <CardTitle>Launch & Support</CardTitle>
                  <CardDescription>Going live and growing forward</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    After thorough testing, we launch your website and provide ongoing support and maintenance to ensure it continues to serve your business effectively.
                  </p>
                </CardContent>
              </Card>
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
                Let's create a website that helps your business shine in the digital world.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/request-help">
                <Button size="lg" className="w-full min-[400px]:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg font-medium px-6 md:px-8 py-3">
                  Get Started Today
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
