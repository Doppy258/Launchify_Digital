"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Code, Cpu, Globe } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Custom Website Design",
    description:
      "As a premier Toronto web design agency, we craft eye-catching, modern designs tailored to your brand. Our focus is on creating an intuitive user experience that engages your audience and drives conversions. From initial concept to final polish, we ensure your website is both beautiful and functional.",
    features: [
      "Unique, brand-aligned layouts",
      "Mobile-first responsive design for all devices",
      "Intuitive user experience (UX) and user interface (UI) design",
      "Interactive prototypes & mockups",
    ],
    color: "blue",
    link: "/services/custom-website-design",
    image: "/images/services/custom-design.jpg"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Website Development",
    description:
      "Our expert web developers in Toronto bring your designs to life with clean, efficient, and scalable code. We build robust websites using the latest technologies, ensuring fast-loading pages, SEO-friendly structure, and secure functionality for a seamless user journey.",
    features: [
      "Frontend & backend development",
      "Content Management System (CMS) integration (e.g., WordPress, Shopify)",
      "E-commerce solutions for online stores",
      "API integrations and custom functionality",
    ],
    color: "indigo",
    link: "/services/website-development",
    image: "/images/services/web-development.jpg"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly and securely with our comprehensive maintenance plans. We provide regular updates, performance optimization, security monitoring, and prompt technical support to ensure your online presence remains effective and reliable for your Toronto business.",
    features: [
      "Regular security updates & backups",
      "Performance optimization & monitoring",
      "Content updates & bug fixes",
      "Technical troubleshooting & support",
    ],
    color: "teal",
    link: "/services/website-maintenance",
    image: "/images/services/maintenance.jpg"
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const getAccentColors = (color: string) => {
  switch (color) {
    case "blue":
      return {
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        featureText: "text-blue-500",
        buttonBorder: "border-blue-600",
        buttonText: "text-blue-600",
        buttonHoverBg: "hover:bg-blue-600",
      };
    case "indigo":
      return {
        iconBg: "bg-indigo-100",
        iconText: "text-indigo-600",
        featureText: "text-indigo-500",
        buttonBorder: "border-indigo-600",
        buttonText: "text-indigo-600",
        buttonHoverBg: "hover:bg-indigo-600",
      };
    default: // teal
      return {
        iconBg: "bg-teal-100",
        iconText: "text-teal-600",
        featureText: "text-teal-500",
        buttonBorder: "border-teal-600",
        buttonText: "text-teal-600",
        buttonHoverBg: "hover:bg-teal-600",
      };
  }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <motion.section
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Toronto Web Design & Digital Marketing Services
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            At Launchify Digital, we provide a full suite of web services designed to elevate your online presence in Toronto and beyond. From custom web design to ongoing maintenance, we are your trusted partner in the digital world.
          </p>
        </div>
      </motion.section>

      {/* Services List Section */}
      <motion.section
        className="w-full py-12 md:py-16 lg:py-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => {
              const accent = getAccentColors(service.color);
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-slate-200 overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                  variants={itemVariants}
                >
                  <div className="md:flex md:items-start md:gap-8">
                    {/* Icon */}
                    <div className="flex-shrink-0 mb-6 md:mb-0 text-center md:text-left">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${accent.iconBg} ${accent.iconText}`}
                      >
                        {React.cloneElement(service.icon, {
                          className: "h-8 w-8",
                        })}
                      </div>
                      <div className="mt-4">
                        <Image 
                          src={service.image}
                          alt={`${service.title} service by Launchify Digital in Toronto`}
                          width={200}
                          height={150}
                          className="rounded-lg shadow-md object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-800">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
                        {service.description}
                      </p>

                      <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-3 mt-6">
                        Key Features:
                      </h3>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-slate-600"
                          >
                            <CheckCircle
                              className={`h-5 w-5 mr-2.5 mt-0.5 flex-shrink-0 ${accent.featureText}`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href={service.link}>
                        <Button
                          variant="outline"
                          size="lg"
                          className={`group font-semibold border-2 ${accent.buttonBorder} ${accent.buttonText} ${accent.buttonHoverBg} hover:text-white transition-colors duration-300 px-8 py-3 rounded-lg`}
                        >
                          Learn More About {service.title}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action Section */}
      <motion.section 
        className="w-full py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <div className="container px-4 md:px-6 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
            Ready to Elevate Your Web Presence?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Launchify Digital can help you achieve your online goals. Contact us today for a free consultation.
          </p>
          <Link href="/request-help">
            <Button
              size="xl"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-10 py-3 text-lg"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
