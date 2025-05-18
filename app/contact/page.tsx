"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

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
          description: "Your message has been sent.",
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or want to learn more about our services? Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 justify-items-center">
            <div className="space-y-8 max-w-2xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="mt-2 text-slate-700">Fill out the form and we'll get back to you as soon as possible.</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
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
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter the subject" {...field} />
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter your message" className="min-h-[120px]" {...field} />
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
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 max-w-2xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="mt-2 text-slate-700">Here's how you can reach us directly.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Mail className="h-10 w-10 text-slate-900" />
                    <CardTitle>Email</CardTitle>
                    <CardDescription className="space-y-2">
                      <a href="mailto:wangharrison2009@gmail.com" className="hover:underline block">
                        wangharrison2009@gmail.com
                      </a>
                      <a href="mailto:lucaszhao09@gmail.com" className="hover:underline block">
                        lucaszhao09@gmail.com
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Phone className="h-10 w-10 text-slate-900" />
                    <CardTitle>Phone</CardTitle>
                    <CardDescription>
                      <a href="tel:+16478956675" className="hover:underline">
                        (647) 895-6675
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Clock className="h-10 w-10 text-slate-900" />
                    <CardTitle>Hours</CardTitle>
                    <CardDescription>
                      Monday - Friday
                      <br />
                      9:00 AM - 5:00 PM PST
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video w-full bg-slate-100 rounded-lg flex items-center justify-center">
                    <p className="text-slate-500">Map will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
