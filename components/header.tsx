"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

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
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Launchify Digital Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold">Launchify Digital</span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-6">
          {["Home", "Services", "About", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary relative group"
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
            <Button className="bg-slate-900 hover:bg-slate-800 transition-all duration-300">Request Help</Button>
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
