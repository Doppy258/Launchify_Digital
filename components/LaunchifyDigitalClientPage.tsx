"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function LaunchifyDigitalClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              className="space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                <span className="text-blue-600">Launchify Digital</span><br />
                Toronto's Premier Digital Agency
              </h1>
              <p className="text-xl text-slate-700 max-w-[600px] mx-auto lg:mx-0">
                Specializing in creating stunning, high-performance websites and effective digital marketing strategies that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/request-help">
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                  >
                    Launch Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative bg-white rounded-xl p-2 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl transform -rotate-1 scale-[0.98]"></div>
                <div className="relative bg-white p-6 rounded-lg z-10">
                  <h3 className="text-xl font-bold text-center mb-4">Why Choose Launchify Digital?</h3>
                  <div className="space-y-3">
                    {[
                      "Custom-built websites designed for your specific business goals",
                      "Results-driven digital marketing strategies that convert",
                      "SEO expertise to boost your online visibility",
                      "Toronto-based team with global experience",
                      "Dedicated support throughout your project"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link href="/testimonials">
                      <Button variant="link" className="text-blue-600">
                        Read Client Testimonials <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-[1200px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-blue-600">Digital Solutions</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-[800px] mx-auto">
              From custom website development to comprehensive digital marketing strategies, Launchify Digital delivers results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                description: "Custom websites built for performance and conversion, designed to represent your unique brand and business goals.",
                link: "/services/website-development"
              },
              {
                title: "Website Design",
                description: "Eye-catching, modern designs that reflect your brand identity and engage your audience effectively.",
                link: "/services/custom-website-design"
              },
              {
                title: "Website Maintenance",
                description: "Ongoing support and maintenance to keep your site secure, updated, and performing at its best.",
                link: "/services/website-maintenance"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-700 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-[1200px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-blue-600">Launchify Digital</span> Stands Out
            </h2>
            <p className="text-lg text-slate-700 max-w-[800px] mx-auto">
              As Toronto's premier digital agency, we're committed to delivering exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <p className="text-slate-700 mb-6">
                At Launchify Digital, we take a strategic, results-driven approach to every project. We begin by understanding your business objectives, target audience, and competitive landscape before crafting a customized solution that meets your specific needs.
              </p>
              <p className="text-slate-700">
                Our team combines creativity with technical expertise to deliver websites and digital marketing campaigns that not only look great but also perform exceptionally well.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Excellence",
                    description: "We deliver nothing but the highest quality work for our clients."
                  },
                  {
                    title: "Transparency",
                    description: "Clear communication and honest feedback throughout every project."
                  },
                  {
                    title: "Innovation",
                    description: "Staying ahead of digital trends to provide cutting-edge solutions."
                  },
                  {
                    title: "Results",
                    description: "Focused on delivering measurable outcomes that impact your bottom line."
                  }
                ].map((value, i) => (
                  <div key={i} className="flex">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">{value.title}</h4>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6 mx-auto max-w-[800px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-blue-600">Digital Presence?</span>
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Contact Launchify Digital today to discuss how we can help you achieve your business goals with our expert web development and digital marketing services.
            </p>
            <Link href="/request-help">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              >
                Get Started with Launchify Digital <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 