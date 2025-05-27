"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Add a timestamp for cache busting
const cacheBuster = Date.now();

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "border-b shadow-sm bg-background/95" : "bg-background/0"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 md:h-20 lg:h-24 items-center justify-between max-w-[2000px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Link href="/" className="flex items-center gap-1">
            <div className="relative h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden">
              <Image
                src={`/LOGO.png?v=${cacheBuster}`}
                alt="Launchify Digital Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl lg:text-2xl font-bold">Launchify Digital</span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-6 lg:gap-8">
          {["Home", "Services", "About", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm md:text-base lg:text-lg font-medium hover:text-primary relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden md:flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/request-help">
            <Button className="bg-slate-900 hover:bg-slate-800 transition-all duration-300 text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3">Request Help</Button>
          </Link>
        </motion.div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-primary">
                Services
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary">
                Contact
              </Link>
              <Link href="/request-help" className="mt-4">
                <Button className="w-full">Request Help</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
