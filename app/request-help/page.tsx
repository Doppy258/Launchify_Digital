"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { motion } from "motion/react"
import { Check, Sparkles, Clock, PenTool, Code, Rocket, CheckCircle } from "lucide-react"
import Link from "next/link"

const requestHelpFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  helpType: z.string().min(1, { message: "Please select a project type" }),
  about: z.string().min(1, { message: "Please describe your project" }),
  needs: z.string().min(1, { message: "Please describe your goals" }),
  timeline: z.string().min(1, { message: "Please select your timeline" }),
  budget: z.string().min(1, { message: "Please select your budget range" }),
  hearAbout: z.string().optional(),
});

type RequestHelpFormValues = z.infer<typeof requestHelpFormSchema>;

export default function RequestHelp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const { toast } = useToast();

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
        staggerChildren: 0.1
      }
    }
  };

  const form = useForm<RequestHelpFormValues>({
    resolver: zodResolver(requestHelpFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      helpType: '',
      about: '',
      needs: '',
      timeline: '',
      budget: '',
      hearAbout: '',
    },
  });

  async function onSubmit(values: RequestHelpFormValues) {
    setIsSubmitting(true);

    const currentTime = Date.now();
    const COOLDOWN_PERIOD = 60000; // 60 seconds, adjust as needed

    if (lastSubmissionTime && (currentTime - lastSubmissionTime < COOLDOWN_PERIOD)) {
      toast({
        title: "Please wait",
        description: `You can submit another request in ${Math.ceil((COOLDOWN_PERIOD - (currentTime - lastSubmissionTime)) / 1000)} seconds.`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    console.log('Submitting form with values:', values);
    try {
      const response = await fetch('/api/request-help', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        form.reset();
        setIsSubmissionSuccessful(true);
        setLastSubmissionTime(Date.now());
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to send your request.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Start Your Website Project</h1>
              <p className="max-w-[800px] text-slate-700 md:text-xl/relaxed lg:text-2xl/relaxed">
                Tell us about your business and website needs, and we'll help bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
            <motion.div 
              className="lg:col-span-4 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Why Choose Us</h2>
                <p className="text-slate-700">
                  We create professional, high-performance websites that help businesses succeed online.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Custom Website Design</h3>
                    <p className="text-slate-700 text-sm">Uniquely designed to match your brand and business goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Responsive Development</h3>
                    <p className="text-slate-700 text-sm">Works perfectly on all devices - mobile, tablet, and desktop.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">SEO Optimization</h3>
                    <p className="text-slate-700 text-sm">Built to help your business rank higher in search results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Support</h3>
                    <p className="text-slate-700 text-sm">We provide maintenance and updates to keep your site running smoothly.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-xl">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-yellow-400" /> Quick Turnaround
                </h3>
                <p className="text-slate-300">
                  Most website projects are completed within 2-4 weeks depending on complexity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
                  <CardTitle className="text-2xl">Website Project Request</CardTitle>
                  <CardDescription className="text-slate-300">
                    Fill out the form below to request a quote for your website project
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-8">
                  {isSubmissionSuccessful ? (
                    <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <h3 className="text-2xl font-semibold">Request Sent!</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Thank you for your project request. We'll review it and be in touch within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmissionSuccessful(false)}
                        className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">First name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your first name" className="h-10" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">Last name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your last name" className="h-10" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="Enter your email" className="h-10" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">Phone number</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="Enter your phone number" className="h-10" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">Company name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your company name" className="h-10" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="website"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">Current website (if any)</FormLabel>
                                  <FormControl>
                                    <Input type="url" placeholder="https://yourcompany.com" className="h-10" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="helpType"
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="font-medium">What type of website do you need?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-10">
                                      <SelectValue placeholder="Select a project type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="business">Business/Corporate Website</SelectItem>
                                    <SelectItem value="ecommerce">E-commerce Website</SelectItem>
                                    <SelectItem value="portfolio">Portfolio/Personal Website</SelectItem>
                                    <SelectItem value="blog">Blog Website</SelectItem>
                                    <SelectItem value="landing">Landing Page</SelectItem>
                                    <SelectItem value="redesign">Website Redesign</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="about"
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="font-medium">Describe your project</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your business and what you're looking for in a website"
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="needs"
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="font-medium">What are your goals for this website?</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="What do you want your website to achieve for your business?"
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="timeline"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">What is your timeline?</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-10">
                                        <SelectValue placeholder="Select a timeline" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="urgent">ASAP/Urgent</SelectItem>
                                      <SelectItem value="1-month">Within 1 month</SelectItem>
                                      <SelectItem value="2-months">Within 2 months</SelectItem>
                                      <SelectItem value="3-months">Within 3 months</SelectItem>
                                      <SelectItem value="flexible">Flexible</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="budget"
                              render={({ field }) => (
                                <FormItem className="space-y-2">
                                  <FormLabel className="font-medium">What is your budget range?</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-10">
                                        <SelectValue placeholder="Select a budget range" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="below-2k">Below $2,000</SelectItem>
                                      <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                      <SelectItem value="10k-plus">$10,000+</SelectItem>
                                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="hearAbout"
                            render={({ field }) => (
                              <FormItem className="space-y-2">
                                <FormLabel className="font-medium">How did you hear about us?</FormLabel>
                                <FormControl>
                                  <Input placeholder="Google, referral, social media, etc." className="h-10" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-300" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Website Creation Process</h2>
              <p className="max-w-[800px] text-slate-700 md:text-xl/relaxed">
                We follow a structured approach to ensure your website project is completed efficiently and effectively.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg h-full relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Discovery & Design</h3>
                <p className="text-slate-700">We learn about your business and design a website that matches your brand and goals.</p>
              </div>
              <div className="absolute top-8 right-0 w-12 h-2 bg-slate-200 hidden lg:block"></div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg h-full relative z-10">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Development</h3>
                <p className="text-slate-700">Our developers build your site with clean code and modern technologies for optimal performance.</p>
              </div>
              <div className="absolute top-8 right-0 w-12 h-2 bg-slate-200 hidden lg:block"></div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg h-full relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Review & Refine</h3>
                <p className="text-slate-700">We collaborate with you to review and refine your website until it's perfect.</p>
              </div>
              <div className="absolute top-8 right-0 w-12 h-2 bg-slate-200 hidden lg:block"></div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">4. Launch & Support</h3>
                <p className="text-slate-700">We launch your site and provide ongoing support to ensure it continues to serve your business.</p>
              </div>
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[800px] text-slate-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                Submit your project request today and let's create a website that helps your business succeed online.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Button size="lg" className="w-full min-[400px]:w-auto bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 text-base md:text-lg font-medium px-6 md:px-8 py-3">
                  Start Your Project
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
