import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6">
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
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="mt-2 text-slate-700">Fill out the form and we'll get back to you as soon as possible.</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter the subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="mt-2 text-slate-700">Here's how you can reach us directly.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Mail className="h-10 w-10 text-slate-900" />
                    <CardTitle>Email</CardTitle>
                    <CardDescription>
                      <a href="mailto:info@launchifydigital.org" className="hover:underline">
                        info@launchifydigital.org
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <Phone className="h-10 w-10 text-slate-900" />
                    <CardTitle>Phone</CardTitle>
                    <CardDescription>
                      <a href="tel:+15551234567" className="hover:underline">
                        (555) 123-4567
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <MapPin className="h-10 w-10 text-slate-900" />
                    <CardTitle>Location</CardTitle>
                    <CardDescription>
                      123 Digital Avenue
                      <br />
                      San Francisco, CA 94105
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
