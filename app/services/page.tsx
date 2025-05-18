import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, MessageSquare, Users, Zap, PenTool, BarChart } from "lucide-react"

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive digital solutions tailored to help small businesses thrive online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">
                <Globe className="h-4 w-4 inline-block mr-1" /> Website Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Custom Websites That Convert</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                We design and develop responsive, user-friendly websites that showcase your brand and convert visitors
                into customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Responsive design that works on all devices</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>SEO-optimized structure and content</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>User-friendly navigation and interfaces</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Content management systems</span>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Website Development"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto w-full max-w-[500px] relative aspect-video order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Social Media Management"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">
                <MessageSquare className="h-4 w-4 inline-block mr-1" /> Social Media Management
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Build Your Online Community</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                We help you connect with your audience through strategic content creation and community engagement on
                social media platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Content strategy and calendar planning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Original content creation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Community management and engagement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Performance analytics and reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Platform-specific optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-900">
                <Users className="h-4 w-4 inline-block mr-1" /> Digital Marketing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Reach Your Target Audience</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                We create targeted digital marketing campaigns that reach your ideal customers and drive business
                growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Search engine optimization (SEO)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Pay-per-click (PPC) advertising</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Content marketing strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Analytics and performance tracking</span>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Digital Marketing"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Additional Services</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of specialized services to meet your specific business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-slate-900 mb-2" />
                <CardTitle>Digital Strategy</CardTitle>
                <CardDescription>Comprehensive planning for your online presence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We develop tailored digital strategies that align with your business goals and target audience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PenTool className="h-10 w-10 text-slate-900 mb-2" />
                <CardTitle>Branding & Design</CardTitle>
                <CardDescription>Visual identity that captures your essence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  From logos to complete brand guidelines, we create cohesive visual identities that resonate with your
                  audience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-slate-900 mb-2" />
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>Data-driven insights for growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We track performance metrics and provide regular reports to help you understand what's working and
                  where to improve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's work together to build your online presence and grow your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/request-help">
                <Button size="lg" className="w-full min-[400px]:w-auto bg-white text-slate-900 hover:bg-slate-100">
                  Request Help Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
