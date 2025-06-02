"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Code } from "lucide-react"
import Script from "next/script"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { jsonLdScriptProps } from "@/lib/seo"
import { motion } from "motion/react"
import Link from "next/link"

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Contact page structured data
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    description: "Contact information for Launchify Digital - Website Creation Experts",
    mainEntity: {
      "@type": "Organization",
      name: "Launchify Digital",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Digital Avenue",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5V 2A1",
        addressCountry: "CA"
      },
      telephone: "+16478956675",
      email: "lzhaolaunchifydigital@gmail.com,hwanglaunchifydigital@gmail.com",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }
    }
  };

  // Animation variants
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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    console.log('Contact form submitting with values:', values);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      console.log('Contact form response status:', response.status);

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll respond shortly.",
        });
        form.reset();
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to send your message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script {...jsonLdScriptProps(contactStructuredData)} />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Contact Us</h1>
              <p className="max-w-[800px] text-slate-700 md:text-xl/relaxed lg:text-2xl/relaxed">
                Ready to create a stunning website for your business? Get in touch with our team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div 
            className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="space-y-8 max-w-2xl"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Let's Discuss Your Website Project</h2>
                <p className="text-slate-700 md:text-lg">
                  Fill out the form and we'll get back to you within 24 hours to discuss how we can help create the perfect website for your business.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Quick Response</h3>
                    <p className="text-slate-700">We respond to all inquiries within 24 hours during business days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Website Expertise</h3>
                    <p className="text-slate-700">Specialized in creating professional, high-performing websites for businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Code className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Modern Technology</h3>
                    <p className="text-slate-700">We use the latest web technologies to build fast, secure, and scalable websites.</p>
                  </div>
                </div>
              </div>
              <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-4 flex items-center">
                    <Mail className="h-5 w-5 mr-2" /> Email Us Directly
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base">
                    If you prefer, you can email us directly at:
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <a href="mailto:lzhaolaunchifydigital@gmail.com" className="block text-white hover:text-blue-300 transition-colors">
                      lzhaolaunchifydigital@gmail.com
                    </a>
                    <a href="mailto:hwanglaunchifydigital@gmail.com" className="block text-white hover:text-blue-300 transition-colors">
                      hwanglaunchifydigital@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="w-full"
            >
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-slate-300">
                    Fill out the form below and we'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-base font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-base font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-base font-medium">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What is your message about?" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-base font-medium">Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your website needs" className="min-h-[150px] resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-300" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Additional Contact Information</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are other ways to reach our website creation team.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="border-0 shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Phone</CardTitle>
                  <CardDescription className="text-base">
                    <a href="tel:+16478956675" className="hover:underline">
                      (647) 895-6675
                    </a>
                  </CardDescription>
                  <p className="text-slate-700">
                    Available Monday - Friday, 9:00 AM - 5:00 PM EST
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-0 shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                  <CardDescription className="text-base">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM EST
                  </CardDescription>
                  <p className="text-slate-700">
                    We respond to all after-hours inquiries on the next business day.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-0 shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Location</CardTitle>
                  <CardDescription className="text-base">
                    Toronto, Ontario
                    <br />
                    Canada
                  </CardDescription>
                  <p className="text-slate-700">
                    We serve clients remotely across North America and beyond.
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Ready to Create Your Dream Website?</h2>
              <p className="max-w-[800px] text-slate-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                Let's transform your online presence together.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Button size="lg" className="w-full min-[400px]:w-auto bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 text-base md:text-lg font-medium px-6 md:px-8 py-3">
                  Contact Us Now
                </Button>
              </a>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-white text-white hover:bg-slate-800 transition-all duration-300 text-base md:text-lg font-medium px-6 md:px-8 py-3"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
