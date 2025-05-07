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

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
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

interface StatCardProps {
  value: string | number;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
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

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
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
              Enterprise-Grade Digital Solutions
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 pb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transform Your Business with Strategic Digital Excellence
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Launchify Digital delivers enterprise-grade digital solutions that drive measurable business growth. Our expert team combines cutting-edge technology with proven strategies to elevate your online presence and maximize ROI.
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
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-slate-300 hover:bg-slate-100 transition-all duration-300"
                >
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
                  />
                ))}
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-semibold">500+</span> businesses transformed
              </div>
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
              <p className="text-sm font-medium mt-1">Rated 4.9/5 by industry leaders</p>
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
  )
}

const StatsSection = () => {
  return (
    <AnimatedSection className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" variants={staggerContainer}>
          <StatCard 
            value="98%" 
            label="Client Retention Rate" 
            icon={<Users className="h-8 w-8 text-slate-700" />} 
          />
          <StatCard 
            value="3.2x" 
            label="Average ROI" 
            icon={<Star className="h-8 w-8 text-slate-700" />} 
          />
          <StatCard
            value="500+"
            label="Projects Delivered"
            icon={<CheckCircle className="h-8 w-8 text-slate-700" />}
          />
          <StatCard 
            value="24/7" 
            label="Expert Support" 
            icon={<Globe className="h-8 w-8 text-slate-700" />} 
          />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

const WhyChooseUsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">Our Advantage</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Industry Leaders Choose Us</h2>
            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning-Fast Results</h3>
            <p className="text-slate-600">
              Our agile methodology and expert team deliver results 40% faster than industry standards.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-50 text-green-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
            <p className="text-slate-600">
              State-of-the-art security measures and compliance with global standards.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
            <p className="text-slate-600">
              Tailored strategies and solutions designed specifically for your business needs.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/about">
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Our Approach <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">Enterprise Solutions</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Comprehensive Digital Transformation Services
            </h2>
            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We deliver end-to-end digital solutions that drive business growth and operational excellence.
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
            <h3 className="text-xl font-bold">Enterprise Web Development</h3>
            <p className="text-slate-700">
              Custom, scalable web applications built with cutting-edge technologies to drive business growth and efficiency.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Custom CMS Solutions
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                E-commerce Integration
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                API Development
              </li>
            </ul>
            <Link href="/services" className="text-slate-900 font-medium hover:underline inline-flex items-center mt-4">
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
            <h3 className="text-xl font-bold">Digital Marketing Strategy</h3>
            <p className="text-slate-700">
              Data-driven marketing campaigns that deliver measurable results and maximize your digital presence.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                SEO Optimization
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Content Strategy
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Analytics & Reporting
              </li>
            </ul>
            <Link href="/services" className="text-slate-900 font-medium hover:underline inline-flex items-center mt-4">
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
            <h3 className="text-xl font-bold">Enterprise Solutions</h3>
            <p className="text-slate-700">
              Comprehensive digital transformation services tailored to your business needs and goals.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Cloud Migration
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Digital Strategy
              </li>
              <li className="flex items-center text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Process Automation
              </li>
            </ul>
            <Link href="/services" className="text-slate-900 font-medium hover:underline inline-flex items-center mt-4">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">Our Leadership</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Executive Team</h2>
            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Industry veterans with decades of combined experience in digital transformation and business growth.
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
                  Chief Technology Officer
                </CardDescription>
                <p className="mt-4 text-slate-700">
                  With over 15 years of experience in enterprise software development and digital transformation, Lucas leads our technical strategy and innovation initiatives.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Enterprise Architecture
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Cloud Solutions
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Digital Innovation
                  </span>
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <div className="flex space-x-4">
                  <Link href="/about" className="text-slate-900 hover:underline inline-flex items-center">
                    View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
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
                  Chief Marketing Officer
                </CardDescription>
                <p className="mt-4 text-slate-700">
                  A digital marketing pioneer with 12+ years of experience, Harrison drives our strategic marketing initiatives and client success programs.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Growth Marketing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Brand Strategy
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    Data Analytics
                  </span>
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <div className="flex space-x-4">
                  <Link href="/about" className="text-slate-900 hover:underline inline-flex items-center">
                    View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">
              Client Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Industry Leaders</h2>
            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how we've helped businesses achieve remarkable digital transformation and growth.
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
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-xl font-bold text-slate-700">SJ</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic">
                      "Launchify Digital transformed our digital presence completely. Their enterprise-grade solutions helped us achieve a 300% increase in online engagement and a 45% boost in conversion rates. Their team's expertise and dedication to our success were truly remarkable."
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-slate-500">CEO, Bloom Boutique</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          E-commerce
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          Digital Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="h-full hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-xl font-bold text-slate-700">MC</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic">
                      "Working with Launchify Digital was a game-changer for our business. Their comprehensive digital strategy and execution helped us streamline operations and achieve a 2.5x increase in revenue. Their team's technical expertise and strategic insights were invaluable."
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-slate-500">Founder, Urban Eats Catering</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          Process Automation
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          Cloud Solutions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const TrustedBySection = () => {
  return (
    <AnimatedSection className="w-full py-12 md:py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-slate-900">Trusted by Industry Leaders</h3>
          <p className="mt-2 text-slate-600">Join the ranks of successful businesses that trust our solutions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[
            { name: "TechCorp", logo: "/logos/techcorp.svg" },
            { name: "Global Solutions", logo: "/logos/globalsolutions.svg" },
            { name: "InnovateX", logo: "/logos/innovatex.svg" },
            { name: "Digital First", logo: "/logos/digitalfirst.svg" },
            { name: "Future Tech", logo: "/logos/futuretech.svg" },
            { name: "Enterprise Plus", logo: "/logos/enterpriseplus.svg" },
          ].map((company) => (
            <motion.div
              key={company.name}
              className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button
              variant="outline"
              className="border-slate-300 hover:bg-slate-100 transition-all duration-300"
            >
              View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

const CTASection = () => {
  return (
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
            <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white/90">
              Ready to Transform Your Business?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Let's Build Your Digital Future Together
            </h2>
            <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
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
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full min-[400px]:w-auto border-white text-white hover:bg-slate-800 transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
          <div className="mt-6 text-sm text-slate-400">
            <p>No commitment required • 30-minute consultation • Expert advice</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* CTA Section */}
      <CTASection />

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
