import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CustomWebsiteDesignPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <Link 
            href="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-block rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
                <PenTool className="h-4 w-4 inline-block mr-2" /> Web Design
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Custom Website Design</h1>
              <p className="text-slate-700 md:text-xl/relaxed">
                Eye-catching, modern designs that reflect your brand identity and engage your audience.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-blue-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <PenTool className="h-24 w-24 text-blue-500 opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">How We Design Your Website</h2>
              <p className="text-slate-700">
                Our design process is collaborative and focused on creating a website that not only looks beautiful but also effectively communicates your brand message and converts visitors into customers.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Our Design Process:</h3>
                <ul className="space-y-3">
                  {[
                    "Discovery call to understand your brand, goals, and target audience",
                    "Mood board creation to establish visual direction",
                    "Wireframing key pages to establish information architecture",
                    "High-fidelity mockups with your brand colors and styling",
                    "Feedback and revision cycles until you're completely satisfied",
                    "Handoff to our development team for implementation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold">Design Features</h2>
              <p className="text-slate-700">
                Our custom website designs include these key features that make your site stand out and perform well:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Responsive Design",
                    description: "Looks perfect on all devices from mobile to desktop"
                  },
                  {
                    title: "Brand Alignment",
                    description: "Perfectly reflects your brand identity and values"
                  },
                  {
                    title: "Conversion Focused",
                    description: "Strategic design that guides users toward key actions"
                  },
                  {
                    title: "User Experience",
                    description: "Intuitive navigation and thoughtful interactions"
                  },
                  {
                    title: "Visual Hierarchy",
                    description: "Organized layouts that prioritize important content"
                  },
                  {
                    title: "Accessibility",
                    description: "Inclusive design that works for all users"
                  }
                ].map((feature, i) => (
                  <div key={i} className="p-4 rounded-lg border border-slate-100 bg-slate-50">
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-700 mb-6">
              Let us help you create a website design that perfectly captures your brand and engages your audience.
            </p>
            <Link href="/request-help">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              >
                Request a Design Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 