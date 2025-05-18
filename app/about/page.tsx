import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Launchify Digital</h1>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to help small businesses thrive in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-slate-700 md:text-xl/relaxed">
                At Launchify Digital, we believe that every small business deserves access to high-quality digital
                services that can help them grow and succeed online. Our not-for-profit organization is dedicated to
                bridging the digital divide and empowering small businesses with the tools, knowledge, and support they
                need to thrive in today's digital landscape.
              </p>
              <p className="text-slate-700 md:text-xl/relaxed">
                We work with businesses of all sizes and industries, but we have a special focus on helping those who
                might otherwise struggle to access professional digital services due to budget constraints or lack of
                technical knowledge.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Mission"
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Team</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate experts behind Launchify Digital.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-80 w-full">
                  <Image src="/placeholder.svg?height=500&width=800" alt="Lucas Zhao" fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl">Lucas Zhao</CardTitle>
                <CardDescription className="text-lg text-slate-700 mt-2">
                  Co-Founder & Technical Director
                </CardDescription>
                <p className="mt-4 text-slate-700">
                  With over 8 years of experience in web development and digital strategy, Lucas helps businesses build
                  effective online platforms that drive growth and engagement. He has a background in computer science
                  and has worked with businesses across various industries to develop custom digital solutions.
                </p>
                <p className="mt-4 text-slate-700">
                  Lucas is passionate about using technology to solve real-world problems and believes that a strong
                  online presence is essential for business success in today's digital age.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-80 w-full">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Harrison Wang"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl">Harrison Wang</CardTitle>
                <CardDescription className="text-lg text-slate-700 mt-2">
                  Co-Founder & Marketing Director
                </CardDescription>
                <p className="mt-4 text-slate-700">
                  Harrison specializes in social media strategy and digital marketing, helping small businesses connect
                  with their target audience and build meaningful relationships online. With a background in marketing
                  and communications, he has helped numerous businesses develop and implement successful digital
                  marketing strategies.
                </p>
                <p className="mt-4 text-slate-700">
                  Harrison is dedicated to helping small businesses navigate the complex world of digital marketing and
                  believes that with the right strategy, any business can build a strong online presence regardless of
                  their size or budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto w-full max-w-[500px] relative aspect-video order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Values"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-bold">Accessibility</h3>
                  <p className="text-slate-700">
                    We believe that high-quality digital services should be accessible to all businesses, regardless of
                    size or budget.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-slate-700">
                    We're committed to not just providing services, but also educating our clients so they can better
                    understand and manage their digital presence.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold">Quality</h3>
                  <p className="text-slate-700">
                    We never compromise on quality. Every website we build, every social media campaign we run, and
                    every piece of content we create is held to the highest standards.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-slate-700">
                    We believe in the power of community and are dedicated to supporting local businesses and
                    contributing to economic growth in our communities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-[1400px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Mission</h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're a small business looking for help or a professional wanting to volunteer your skills,
                we'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/request-help">
                <Button size="lg" className="w-full min-[400px]:w-auto bg-white text-slate-900 hover:bg-slate-100">
                  Request Help
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-white text-white hover:bg-slate-800"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
