"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Footer() {
  return (
    <footer className="w-full border-t bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-[2000px]">
        <motion.div
          className="grid gap-8 lg:gap-12 lg:grid-cols-4 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-4 md:space-y-6" variants={fadeIn}>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden">
                <Image
                  src="/LOGO.png"
                  alt="Launchify Digital Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-bold">Launchify Digital</span>
            </Link>
            <p className="text-sm md:text-base lg:text-lg text-slate-700">
              Empowering small businesses to thrive in the digital world through accessible, high-quality digital
              services.
            </p>
            <div className="flex space-x-4 md:space-x-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, i) => (
                <motion.div key={social.label} whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                  <Link href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">
                    <social.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="space-y-4 md:space-y-6" variants={fadeIn}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Request Help", path: "/request-help" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm md:text-base lg:text-lg text-slate-700 hover:text-slate-900 transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-4 md:space-y-6" variants={fadeIn}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Website Development",
                "Social Media Management",
                "Digital Marketing",
                "Branding & Design",
                "Digital Strategy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm md:text-base lg:text-lg text-slate-700 hover:text-slate-900 transition-colors duration-200 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-4 md:space-y-6" variants={fadeIn}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start space-x-2 md:space-x-3">
                <Mail className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-slate-700 mt-0.5" />
                <a
                  href="mailto:info@launchifydigital.org"
                  className="text-sm md:text-base lg:text-lg text-slate-700 hover:text-slate-900 transition-colors duration-200"
                >
                  info@launchifydigital.org
                </a>
              </li>
              <li className="text-sm md:text-base lg:text-lg text-slate-700">
                123 Digital Avenue
                <br />
                San Francisco, CA 94105
              </li>
              <li className="text-sm md:text-base lg:text-lg text-slate-700">(555) 123-4567</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-12 lg:mt-16 pt-8 md:pt-12 lg:pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xs md:text-sm lg:text-base text-slate-700">
            &copy; {new Date().getFullYear()} Launchify Digital. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms of Service", path: "/terms-of-service" },
              { name: "Accessibility", path: "/accessibility" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-xs md:text-sm lg:text-base text-slate-700 hover:text-slate-900 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
