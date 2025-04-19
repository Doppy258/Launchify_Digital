"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Users, Star, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const StatCard = ({ value, label, icon }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
      <motion.span
        className="text-3xl font-bold text-slate-900 mt-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <span className="text-sm text-slate-600 text-center">{label}</span>
    </motion.div>
  )
}

export default function Home() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 overflow-visible flex items-center">
        <div className="absolute inset-0 -bottom-8 bg-gradient-to-b from-slate-50 to-slate-100" />
        <div className="absolute inset-0 -bottom-8 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_50%)]" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-block rounded-lg bg-gradient-to-r from-slate-200 to-slate-100 px-3 py-1 text-sm text-slate-900 shadow-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Empowering Small Businesses
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Launch Your Business into the Digital World
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Launchify Digital helps small businesses establish and expand their online presence through website
                development, social media management, and digital marketing strategies.
              </motion.p>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link href="/request-help">
                  <Button
                    size="lg"
                    className="w-full min-[400px]:w-auto bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request Help <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-slate-300 hover:bg-slate-100 transition-all duration-300"
                  >
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="mx-auto w-full max-w-[500px] relative aspect-video lg:aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-slate-200 to-slate-100 blur-xl opacity-70 animate-pulse" />
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Business Growth"
                width={600}
                height={600}
                className="rounded-xl object-cover relative shadow-2xl"
                priority
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-medium mt-1">Trusted by 200+ businesses</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            onClick={scrollToNextSection}
          >
            <ArrowDown className="h-10 w-10 text-slate-400" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" variants={staggerContainer}>
            <StatCard value="200+" label="Businesses Helped" icon={<Users className="h-8 w-8 text-slate-700" />} />
            <StatCard value="95%" label="Client Satisfaction" icon={<Star className="h-8 w-8 text-slate-700" />} />
            <StatCard
              value="500+"
              label="Projects Completed"
              icon={<CheckCircle className="h-8 w-8 text-slate-700" />}
            />
            <StatCard value="3x" label="Average Growth" icon={<ArrowRight className="h-8 w-8 text-slate-700" />} />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How We Help Small Businesses Thrive
              </h2>
              <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive digital solutions tailored to your business needs.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              variants={scaleUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Website Development</h3>
              <p className="text-slate-700">
                Custom websites designed to showcase your brand and convert visitors into customers.
              </p>
              <Link href="/services" className="text-slate-900 font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              variants={scaleUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Social Media Management</h3>
              <p className="text-slate-700">
                Strategic content creation and community engagement to build your online presence.
              </p>
              <Link href="/services" className="text-slate-900 font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              variants={scaleUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Digital Marketing</h3>
              <p className="text-slate-700">
                Targeted campaigns that reach your ideal customers and drive business growth.
              </p>
              <Link href="/services" className="text-slate-900 font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Team</h2>
              <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Passionate experts dedicated to helping small businesses succeed in the digital landscape.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={scaleUp}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Lucas Zhao"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Lucas Zhao</CardTitle>
                  <CardDescription className="text-lg text-slate-700 mt-2">
                    Co-Founder & Technical Director
                  </CardDescription>
                  <p className="mt-4 text-slate-700">
                    With over 8 years of experience in web development and digital strategy, Lucas helps businesses
                    build effective online platforms that drive growth and engagement.
                  </p>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <div className="flex space-x-4">
                    <Link href="/about" className="text-slate-900 hover:underline inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={scaleUp}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Harrison Wang"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Harrison Wang</CardTitle>
                  <CardDescription className="text-lg text-slate-700 mt-2">
                    Co-Founder & Marketing Director
                  </CardDescription>
                  <p className="mt-4 text-slate-700">
                    Harrison specializes in social media strategy and digital marketing, helping small businesses
                    connect with their target audience and build meaningful relationships online.
                  </p>
                </CardContent>
                <CardFooter className="border-t p-6">
                  <div className="flex space-x-4">
                    <Link href="/about" className="text-slate-900 hover:underline inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
              <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how we've helped small businesses transform their digital presence.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="h-full hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 italic">
                        "Launchify Digital transformed our online presence. Our website traffic has increased by 200%
                        and we're seeing real business results from our social media efforts."
                      </p>
                      <p className="mt-4 font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-slate-500">Bloom Boutique</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="h-full hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 italic">
                        "As a small business owner with limited technical knowledge, I was struggling to establish an
                        online presence. Launchify Digital made the process simple and effective."
                      </p>
                      <p className="mt-4 font-semibold">Michael Chen</p>
                      <p className="text-sm text-slate-500">Urban Eats Catering</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <AnimatedSection className="w-full py-12 md:py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-900">Trusted By</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-slate-200 rounded-md flex items-center justify-center">
                <span className="text-slate-500 font-medium">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_50%)]" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Launch Your Digital Journey?
              </h2>
              <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's work together to build your online presence and grow your business.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/request-help">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Help Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-white text-white hover:bg-slate-800 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Link href="/request-help">
          <Button
            size="lg"
            className="rounded-full shadow-lg bg-slate-900 hover:bg-slate-800 transition-all duration-300 px-6"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
