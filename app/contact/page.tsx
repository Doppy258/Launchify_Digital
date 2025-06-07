"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Code, CheckCircle } from "lucide-react"
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

    const currentTime = Date.now();
    const COOLDOWN_PERIOD = 60000; // 60 seconds

    if (lastSubmissionTime && (currentTime - lastSubmissionTime < COOLDOWN_PERIOD)) {
      toast({
        title: "Please wait",
        description: `You can send another message in ${Math.ceil((COOLDOWN_PERIOD - (currentTime - lastSubmissionTime)) / 1000)} seconds.`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

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
        form.reset();
        setIsSubmissionSuccessful(true);
        setLastSubmissionTime(Date.now());
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
      <motion.section 
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Contact Us</h1>
            <p className="max-w-[800px] text-slate-700 md:text-xl/relaxed lg:text-2xl/relaxed">
              Ready to start your project? Get in touch with our expert team.
            </p>
          </div>
        </div>
      </motion.section>

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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="text-slate-700 md:text-lg">
                  We're here to help you succeed online. Fill out the form, and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-700"><a href="mailto:lzhaolaunchifydigital@gmail.com" className="hover:underline">lzhaolaunchifydigital@gmail.com</a></p>
                    <p className="text-slate-700"><a href="mailto:hwanglaunchifydigital@gmail.com" className="hover:underline">hwanglaunchifydigital@gmail.com</a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-slate-700">416-909-5118</p>
                  </div>
                </div>
              </div>
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
                  {isSubmissionSuccessful ? (
                    <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <h3 className="text-2xl font-semibold">Message Sent!</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Thank you for reaching out! We'll be in touch shortly.
                      </p>
                      <Button
                        onClick={() => setIsSubmissionSuccessful(false)}
                        className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Website Design Inquiry" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell us about your project..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
