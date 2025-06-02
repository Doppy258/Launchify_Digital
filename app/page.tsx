"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Users, Star, ArrowDown, Zap, Shield, Award, BarChart2, Code, Cpu, PenTool, Smartphone, Search, Target } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import WebsiteShowcase from "@/components/WebsiteShowcase"
import { sampleWebsites } from "@/public/mock-data/websites"
import { generateOrganizationSchema, generateLocalBusinessSchema, jsonLdScriptProps } from "@/lib/seo"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

// Add keyframe animations
const floatAnimation = `
  @keyframes float {
    0% {
      transform: translateY(0px) translateX(0px);
    }
    25% {
      transform: translateY(-10px) translateX(5px);
    }
    50% {
      transform: translateY(0px) translateX(10px);
    }
    75% {
      transform: translateY(10px) translateX(5px);
    }
    100% {
      transform: translateY(0px) translateX(0px);
    }
  }
`;

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
}

const Counter: React.FC<CounterProps> = ({ 
  from, 
  to, 
  duration = 2, 
  delay = 0,
  formatter = (value) => value.toString()
}) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(from + progress * (to - from));
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };
      
      const startAnimation = () => {
        animationFrame = requestAnimationFrame(updateCount);
      };
      
      const timeoutId = setTimeout(startAnimation, delay * 1000);
      
      return () => {
        clearTimeout(timeoutId);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [from, to, duration, delay, isInView]);
  
  return <span ref={nodeRef}>{formatter(count)}</span>;
};

interface StatCardProps {
  value: string | number;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
      <motion.span
        className="text-3xl font-bold text-slate-900 mt-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <span className="text-sm text-slate-600 text-center">{label}</span>
    </motion.div>
  )
}

// Update container classes to ensure proper centering
const containerClass = "container px-4 md:px-6 mx-auto max-w-[1400px] relative z-10";
const sectionClass = "flex flex-col items-center justify-center w-full relative";
const headingClass = "text-center mx-auto";

// ClientSideFloatingBlobs component to handle client-side only rendering of random elements
const ClientSideFloatingBlobs = () => {
  const [blobs, setBlobs] = useState<Array<{
    width: number;
    height: number;
    top: string;
    left: string;
    opacity: number;
    transform: string;
    animation: string;
    animationDelay: string;
  }>>([]);
  
  useEffect(() => {
    const newBlobs = [...Array(20)].map(() => ({
      width: Math.random() * 400 + 100,
      height: Math.random() * 400 + 100,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.3,
      transform: `scale(${Math.random() + 0.5})`,
      animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 5}s`
    }));
    
    setBlobs(newBlobs);
  }, []);
  
  return (
    <>
      {blobs.map((blob, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-100/20 to-indigo-100/20 blur-3xl"
          style={{
            width: `${blob.width}px`,
            height: `${blob.height}px`,
            top: blob.top,
            left: blob.left,
            opacity: blob.opacity,
            transform: blob.transform,
            animation: blob.animation,
            animationDelay: blob.animationDelay
          }}
        />
      ))}
    </>
  );
};

// ClientSideFloatingParticles component for the CTA section
const ClientSideFloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    top: string;
    left: string;
    width: number;
    height: number;
    opacity: number;
    animation: string;
    animationDelay: string;
  }>>([]);
  
  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: Math.random() * 6 + 1,
      height: Math.random() * 6 + 1,
      opacity: Math.random() * 0.6,
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`
    }));
    
    setParticles(newParticles);
  }, []);
  
  return (
    <>
      {particles.map((particle, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            opacity: particle.opacity,
            animation: particle.animation,
            animationDelay: particle.animationDelay
          }}
        />
      ))}
    </>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Make sure video plays when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(e => console.log("Video play error:", e));
    }
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen py-16 md:py-24 lg:py-36 overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-slate-50">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(
              circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(100, 116, 139, 0.5), 
              rgba(100, 116, 139, 0) 40%
            )`
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          <ClientSideFloatingBlobs />
        </div>
      </div>

      <div className={containerClass}>
        <div className="grid gap-8 xl:gap-16 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6 relative mx-auto text-center lg:text-left max-w-[750px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-800 shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2"></span>
              Professional Website Creation
            </motion.div>
            
            <motion.h1
              className="font-bold tracking-tight pb-2 w-full overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap">Transform Your</div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Online Presence</div>
            </motion.h1>
            
            <motion.p
              className="text-slate-700 text-xl md:text-2xl mt-3 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Launchify Digital creates stunning, professional websites that convert visitors into customers. Our expert team builds custom sites that perfectly represent your brand and business goals.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link href="/request-help">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-10 py-7 text-lg"
                >
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 hover:bg-slate-100 transition-all duration-300 rounded-full px-10 py-7 text-lg"
                >
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
            </motion.div>
            
            <motion.div
            className="mx-auto w-full max-w-[600px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {/* Main device mockup container */}
            <div className="relative z-20">
              {/* Glass effect background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 blur-xl opacity-80" />
              
              {/* Laptop mockup */}
              <div className="relative">
                {/* Laptop base */}
                <div className="relative bg-slate-800 rounded-2xl pt-8 pb-8 px-8 shadow-2xl">
                  {/* Laptop screen */}
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-inner">
                    {/* Website mockup in screen */}
                    <div className="aspect-[16/10] relative bg-white rounded-t-lg overflow-hidden border-b border-slate-200">
                      {/* Navigation bar */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-slate-100 flex items-center px-4 z-10">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
                        <div className="flex-1 flex justify-center">
                          <div className="bg-slate-100 rounded-full h-6 w-48 mx-auto flex items-center justify-center px-3">
                            <div className="h-2 w-2 rounded-full bg-blue-400 mr-1"></div>
                            <div className="h-1 bg-slate-300 w-28 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Website hero section mockup */}
                      <div className="absolute top-10 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-50 to-indigo-50">
                        {/* Hero content */}
                        <div className="absolute top-1/4 left-8 max-w-[40%]">
                          <div className="h-4 w-24 bg-slate-800 rounded-full mb-4"></div>
                          <div className="h-10 w-48 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mb-4"></div>
                          <div className="space-y-2">
                            <div className="h-2 w-full bg-slate-600 rounded-full"></div>
                            <div className="h-2 w-[85%] bg-slate-600 rounded-full"></div>
                            <div className="h-2 w-[70%] bg-slate-600 rounded-full"></div>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <div className="h-6 w-20 bg-blue-600 rounded-full"></div>
                            <div className="h-6 w-20 bg-white rounded-full border border-slate-300"></div>
                          </div>
                        </div>
                        
                        {/* Hero image */}
                        <div className="absolute top-1/4 right-8 w-[40%] aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Website content below fold */}
                    <div className="p-4">
                      {/* Stats section */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-slate-50 rounded-lg p-3">
                            <div className="h-8 w-8 rounded-full bg-blue-100 mb-2 flex items-center justify-center">
                              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="h-3 w-12 bg-slate-800 rounded-full mb-2"></div>
                            <div className="h-2 w-full bg-slate-300 rounded-full"></div>
                          </div>
                  ))}
                </div>
                      
                      {/* Feature section */}
                      <div className="flex items-center justify-between">
                        <div className="w-1/3">
                          <div className="h-3 w-24 bg-slate-800 rounded-full mb-3"></div>
                          <div className="space-y-1">
                            <div className="h-2 w-full bg-slate-300 rounded-full"></div>
                            <div className="h-2 w-[90%] bg-slate-300 rounded-full"></div>
                </div>
                        </div>
                        <div className="w-1/2 h-24 bg-gradient-to-br from-slate-100 to-blue-50 rounded-xl flex items-center justify-center">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop keyboard (simplified) */}
                  <div className="relative mt-1 mx-auto w-32 h-1 bg-slate-600 rounded-b-xl"></div>
                </div>
              </div>
              
              {/* Phone mockup (overlapping on the side) */}
              <div className="absolute -right-6 -bottom-12 w-[140px] z-30 transform rotate-12">
                <div className="relative rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
                  <div className="absolute top-0 w-1/2 h-6 bg-slate-800 left-1/2 transform -translate-x-1/2 rounded-b-xl z-10"></div>
                  <div className="aspect-[9/19] bg-white overflow-hidden">
                    {/* Phone screen content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50">
                      {/* Mobile navbar */}
                      <div className="h-6 bg-white border-b border-slate-100 flex items-center justify-center">
                        <div className="h-2 w-10 bg-slate-400 rounded-full"></div>
                      </div>
                      
                      {/* Mobile hero */}
                      <div className="pt-4 px-3">
                        <div className="h-3 w-16 bg-slate-700 rounded-full mb-2"></div>
                        <div className="h-6 w-28 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mb-3"></div>
                        <div className="space-y-1 mb-4">
                          <div className="h-1.5 w-full bg-slate-600 rounded-full"></div>
                          <div className="h-1.5 w-[90%] bg-slate-600 rounded-full"></div>
                        </div>
                        <div className="h-16 w-full bg-white rounded-lg shadow-md mb-3"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-10 w-full bg-blue-100 rounded-lg"></div>
                          <div className="h-10 w-full bg-indigo-100 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-slate-700 rounded-full"></div>
                </div>
              </div>
              
              {/* Tablet mockup (behind laptop, visible on the left) */}
              <div className="absolute -left-10 bottom-4 w-[180px] z-10 transform -rotate-12">
                <div className="relative rounded-2xl overflow-hidden border-[8px] border-slate-700 shadow-xl">
                  <div className="aspect-[4/3] bg-white overflow-hidden">
                    {/* Tablet screen content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50">
                      <div className="grid grid-cols-2 h-full p-3 gap-2">
                        <div className="bg-white rounded-lg p-2 shadow-sm">
                          <div className="h-2 w-12 bg-blue-400 rounded-full mb-2"></div>
                          <div className="h-1.5 w-full bg-slate-200 rounded-full mb-1"></div>
                          <div className="h-1.5 w-[80%] bg-slate-200 rounded-full mb-1"></div>
                          <div className="h-8 w-full bg-blue-50 rounded-md mt-2"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-12 bg-white rounded-lg shadow-sm"></div>
                          <div className="h-12 bg-white rounded-lg shadow-sm"></div>
                          <div className="h-12 bg-white rounded-lg shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute bottom-12 -right-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-40 blur-xl z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute -top-10 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-30 blur-xl z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            
            {/* Floating design elements */}
            <motion.div 
              className="absolute top-1/4 right-1/4 z-30"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-white shadow-xl border border-blue-100 flex items-center justify-center rotate-12">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"></div>
              </div>
          </motion.div>

          <motion.div
              className="absolute bottom-1/3 left-0 z-30"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
          >
              <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
            </motion.div>
            
            {/* Award badges */}
            <motion.div
              className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg z-40 transform -rotate-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <div className="text-xs font-medium text-slate-800">100% Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          onClick={scrollToNextSection}
        >
          <div className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
            <ArrowDown className="h-6 w-6 text-blue-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
      </div>
      
      <div className={containerClass}>
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Approach</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Create Your Website</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our streamlined process ensures we deliver high-quality websites efficiently and with attention to detail.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-10" />
              <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
              <Counter
                from={0}
                to={98}
                formatter={(value) => `${value}%`}
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-1">Client Retention</h3>
            <p className="text-slate-600 text-center text-sm">
              Long-term partnerships built on trust and results
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-10" />
              <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm">
                <BarChart2 className="h-7 w-7 text-indigo-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
              <Counter
                from={0}
                to={150}
                delay={0.2}
                formatter={(value) => `${value}%`}
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-1">Faster Growth</h3>
            <p className="text-slate-600 text-center text-sm">
              Accelerating business growth with our digital strategies
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-10" />
              <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 shadow-sm">
                <CheckCircle className="h-7 w-7 text-purple-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
              <Counter
                from={0}
                to={121}
                delay={0.4}
                formatter={(value) => `${value}%`}
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-1">Higher Conversions</h3>
            <p className="text-slate-600 text-center text-sm">
              Increased conversion rates for our clients
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center p-8 rounded-2xl transition-all duration-300"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur-xl opacity-10" />
              <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 shadow-sm">
                <Globe className="h-7 w-7 text-green-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
              <span>24/7</span>
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-1">Support</h3>
            <p className="text-slate-600 text-center text-sm">
              Dedicated team available around the clock
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Website Design",
      description: "Eye-catching, modern designs that reflect your brand identity and engage your audience.",
      features: ["Unique, brand-aligned layouts", "Mobile-first responsive design", "Intuitive user experience"],
      color: "blue",
      image: "/services/web-development.jpg",
      link: "/services/custom-website-design"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Website Development",
      description: "Professional coding that brings your design to life with clean, efficient functionality.",
      features: ["Fast-loading pages", "SEO-friendly structure", "Secure, reliable code"],
      color: "indigo",
      image: "/services/digital-marketing.jpg",
      link: "/services/website-development"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Website Maintenance",
      description: "Keep your site running smoothly with regular updates, backups, and technical support.",
      features: ["Regular security updates", "Performance optimization", "Technical troubleshooting"],
      color: "teal",
      image: "/services/enterprise-solutions.jpg",
      link: "/services/website-maintenance"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.05)_0%,rgba(255,255,255,0)_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.05)_0%,rgba(255,255,255,0)_50%)]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
      </div>
      
      <div className={containerClass}>
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Website Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Beautiful Websites</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We create stunning, functional websites that help your business stand out and convert visitors into customers.
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:gap-16 md:grid-cols-3 mx-auto max-w-6xl justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative h-full flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="relative z-10 h-full w-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              >
                {/* Enhanced animated color stripe at top */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1 ${
                  service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  service.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                  'bg-gradient-to-r from-teal-500 to-teal-600'
                  }`}
                  layoutId={`stripe-${index}`}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative flex flex-col h-full">
                  <div className="flex-grow">
                    {/* Animated icon */}
                    <motion.div 
                      className={`
                    flex h-14 w-14 items-center justify-center rounded-xl mb-6
                    ${service.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      service.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                      'bg-teal-50 text-teal-600'}
                    `}
                    initial={{ scale: 0.8, rotateY: 0 }}
                    whileInView={{ scale: 1, rotateY: 360 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Content with enhanced animations */}
                  <motion.h3 
                    className="text-xl font-bold mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-slate-600 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Animated Features */}
                  <motion.ul 
                    className="space-y-3 mt-4 mb-8"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: index * 0.1 + 0.6
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-sm"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 }
                        }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.6 + (i * 0.1) }}
                        >
                        <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${
                          service.color === 'blue' ? 'text-blue-500' :
                          service.color === 'indigo' ? 'text-indigo-500' :
                          'text-teal-500'
                        }`} />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                 </div> {/* End of flex-grow wrapper */}
                  
                  {/* Animated CTA */}
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                  >
                    <Link href={service.link}> {/* Use the explicit link property */}
                      <button className={`
                        group inline-flex items-center text-sm font-medium transition-colors
                        ${service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                          service.color === 'indigo' ? 'text-indigo-600 hover:text-indigo-700' :
                          'text-teal-600 hover:text-teal-700'}
                      `}>
                        Learn more 
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="ml-1 h-4" />
                        </motion.div>
                      </button>
                    </Link>
                  </motion.div>
                </div> {/* This is the closing tag for <div className="relative flex flex-col h-full"> */}
                
                {/* Enhanced background decor */}
                <motion.div 
                  className={`
                    absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-all duration-300
                  ${service.color === 'blue' ? 'bg-blue-400' :
                    service.color === 'indigo' ? 'bg-indigo-400' :
                    'bg-teal-400'}
                  `}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.3, scale: 1.1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              
              {/* Card shine effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-white/30 opacity-0 transition-opacity duration-300 blur-sm"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
            >
              <span className="relative z-10 flex items-center">
                See All Services
                <ArrowRight className="ml-2 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, target audience, and website requirements through in-depth consultation.",
      icon: <Users className="h-6 w-6" />,
      color: "blue"
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create mockups of your website's layout, color scheme, and overall look and feel for your approval.",
      icon: <PenTool className="h-6 w-6" />,
      color: "indigo"
    },
    {
      number: "03",
      title: "Development",
      description: "Our developers build your website with clean code, ensuring it's responsive, fast-loading, and SEO-friendly.",
      icon: <Code className="h-6 w-6" />,
      color: "teal"
    },
    {
      number: "04",
      title: "Launch",
      description: "After thorough testing, we deploy your website and provide training on how to maintain and update it.",
      icon: <Zap className="h-6 w-6" />,
      color: "green"
    }
  ];
  
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-50 flex items-center justify-center">
      <style jsx global>{floatAnimation}</style>
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
      </div>
      
      <div className={containerClass}>
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Approach</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Create Your Website</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our streamlined process ensures we deliver high-quality websites efficiently and with attention to detail.
          </p>
        </motion.div>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="relative z-10 h-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Step number with enhanced animation */}
                <motion.div 
                  className={`absolute -top-5 -right-5 h-20 w-20 rounded-full opacity-10 ${
                    step.color === 'blue' ? 'bg-blue-400' :
                    step.color === 'indigo' ? 'bg-indigo-400' :
                    step.color === 'teal' ? 'bg-teal-400' :
                    'bg-green-400'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                />
                
                <motion.div 
                  className={`
                    flex h-14 w-14 items-center justify-center rounded-xl mb-6
                    ${step.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      step.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                      step.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                      'bg-green-50 text-green-600'}
                  `}
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.15 + 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <motion.div 
                  className="absolute top-6 right-8 text-4xl font-bold opacity-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {step.number}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="text-slate-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
              
              {/* Connection line for desktop with animation */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-slate-200">
                  <motion.div 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300"
                    initial={{ x: 12 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
                  />
                  <motion.div 
                    className="absolute left-0 w-0 h-full bg-blue-200"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                  />
                </div>
              )}
            </motion.div>
                    ))}
                  </div>
        
        <motion.div
          className="mt-16 mx-auto max-w-3xl p-8 bg-white rounded-2xl shadow-xl border border-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div 
              className="md:w-1/4 flex justify-center"
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.6 }}
            >
              <div className="h-24 w-24 rounded-full bg-blue-50 flex items-center justify-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="h-12 w-12 text-blue-600" />
                </motion.div>
                </div>
            </motion.div>
            <div className="md:w-3/4">
              <motion.h3 
                className="text-xl font-bold mb-2 text-center md:text-left"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                Our Commitment to Quality
              </motion.h3>
              <motion.p 
                className="text-slate-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                Every website we create undergoes rigorous quality testing to ensure excellent performance, 
                security, and user experience. We don't just build websites—we craft digital experiences 
                that represent your brand and drive business results.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Launchify Digital transformed our online presence completely. Our new website has significantly increased our conversion rates and customer engagement.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "NexGen Solutions",
      avatar: "/images/testimonials/avatar-1.jpg",
      rating: 5
    },
    {
      quote: "Working with Launchify was a game-changer for our business. They delivered a stunning website that perfectly captures our brand and vision.",
      author: "Michael Chen",
      role: "Founder & CEO",
      company: "Horizon Ventures",
      avatar: "/images/testimonials/avatar-2.jpg",
      rating: 5
    },
    {
      quote: "The team at Launchify Digital exceeded all our expectations. Their expertise and attention to detail resulted in a website that's not just beautiful but also performs exceptionally well.",
      author: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Elevate Retail",
      avatar: "/images/testimonials/avatar-3.jpg",
      rating: 5
    }
  ];
  
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
      </div>
      
      <div className={containerClass}>
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Client Success Stories</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-slate-100">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 7.5C11 8.33 10.33 9 9.5 9C8.67 9 8 8.33 8 7.5C8 6.67 8.67 6 9.5 6C10.33 6 11 6.67 11 7.5ZM11 13.5C11 14.33 10.33 15 9.5 15C8.67 15 8 14.33 8 13.5C8 12.67 8.67 12 9.5 12C10.33 12 11 12.67 11 13.5ZM17 7.5C17 8.33 16.33 9 15.5 9C14.67 9 14 8.33 14 7.5C14 6.67 14.67 6 15.5 6C16.33 6 17 6.67 17 7.5ZM17 13.5C17 14.33 16.33 15 15.5 15C14.67 15 14 14.33 14 13.5C14 12.67 14.67 12 15.5 12C16.33 12 17 12.67 17 13.5Z" fill="currentColor" />
                </svg>
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
              
              {/* Testimonial */}
              <p className="text-slate-700 mb-6 italic relative z-10">"{testimonial.quote}"</p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 mr-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 z-0"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/request-help">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
            >
              <span className="relative z-10 flex items-center">
                Join Our Success Stories
                <ArrowRight className="ml-2 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const WebsiteFeaturesSection = () => {
  const features = [
    {
      title: "Responsive Design",
      description: "Websites that look and function perfectly on any device - from desktop computers to smartphones and tablets.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "sky",
      stats: "100%",
      statsLabel: "Device Compatibility"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds with optimized code, compressed images, and efficient resource delivery.",
      icon: <Zap className="h-8 w-8" />,
      color: "indigo",
      stats: "<2s",
      statsLabel: "Average Load Time"
    },
    {
      title: "SEO Best Practices",
      description: "Built-in search engine optimization to help your website rank higher in search results and attract more visitors.",
      icon: <Search className="h-8 w-8" />,
      color: "purple",
      stats: "Top 10",
      statsLabel: "Search Rankings"
    },
    {
      title: "Security Protection",
      description: "Comprehensive security measures to protect your website and your visitors' data from threats.",
      icon: <Shield className="h-8 w-8" />,
      color: "amber",
      stats: "24/7",
      statsLabel: "Monitoring"
    },
    {
      title: "Conversion Focused",
      description: "Strategic design elements that guide visitors toward taking action, whether that's making a purchase or contacting you.",
      icon: <Target className="h-8 w-8" />,
      color: "rose",
      stats: "+150%",
      statsLabel: "Conversion Rate"
    },
    {
      title: "Analytics Integration",
      description: "Built-in tracking and reporting to monitor website performance and visitor behavior for continuous improvement.",
      icon: <BarChart2 className="h-8 w-8" />,
      color: "teal",
      stats: "Real-time",
      statsLabel: "Data Insights"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-30 transform rotate-12" />
      </div>
      
      <div className={containerClass}>
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Technical Excellence</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight mb-4">
            Built With <span className="text-blue-600">Advanced Features</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every website we create includes these powerful features to ensure optimal performance, security, and user experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 relative overflow-hidden h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              {/* Feature Icon */}
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                feature.color === 'sky' ? 'bg-sky-50 text-sky-600' :
                feature.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                feature.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                feature.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                feature.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                feature.color === 'green' ? 'bg-green-50 text-green-600' :
                feature.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                'bg-teal-50 text-teal-600'
              }`}>
                {feature.icon}
              </div>
              
              {/* Feature Stats */}
              <div className="absolute top-8 right-8">
                <div className={`font-bold text-lg ${
                  feature.color === 'sky' ? 'text-sky-600' :
                  feature.color === 'blue' ? 'text-blue-600' :
                  feature.color === 'indigo' ? 'text-indigo-600' :
                  feature.color === 'purple' ? 'text-purple-600' :
                  feature.color === 'amber' ? 'text-amber-600' :
                  feature.color === 'green' ? 'text-green-600' :
                  feature.color === 'rose' ? 'text-rose-600' :
                  'text-teal-600'
                }`}>
                  {feature.stats}
                </div>
                <div className="text-xs text-slate-500">{feature.statsLabel}</div>
              </div>
              
              {/* Feature Content */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-700">{feature.description}</p>
              
              {/* Background Decoration */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 ${
                feature.color === 'sky' ? 'bg-sky-400' :
                feature.color === 'blue' ? 'bg-blue-400' :
                feature.color === 'indigo' ? 'bg-indigo-400' :
                feature.color === 'purple' ? 'bg-purple-400' :
                feature.color === 'amber' ? 'bg-amber-400' :
                feature.color === 'green' ? 'bg-green-400' :
                feature.color === 'rose' ? 'bg-rose-400' :
                'bg-teal-400'
              }`}></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-900 text-white flex items-center justify-center">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-br from-blue-500/20 to-indigo-500/5 blur-3xl opacity-50 rounded-full transform -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-indigo-500/20 to-purple-500/5 blur-3xl opacity-50 rounded-full transform translate-y-1/2 -translate-x-1/3" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <ClientSideFloatingParticles />
      </div>

      <div className={containerClass}>
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-px bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white/90">Ready For A New Website?</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Let's Build Your Perfect Website Together
                </h2>
                
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                  Schedule a free consultation with our web design experts and discover how we can create a website that perfectly represents your brand.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/request-help">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
                    >
                      <span className="flex items-center">
                        Schedule Free Consultation
                        <ArrowRight className="ml-2 h-4" />
                      </span>
                    </Button>
                  </Link>
                  
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-transparent border border-slate-600 hover:bg-slate-800 text-white shadow-sm hover:shadow-md transition-all duration-300 rounded-full px-8"
                    >
                      Contact Our Team
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6 text-sm text-slate-400 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-blue-400" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-blue-400" />
                    <span>30-minute consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-blue-400" />
                    <span>Free quote & timeline</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data for SEO */}
      <script
        {...jsonLdScriptProps(generateOrganizationSchema())}
      />
      <script
        {...jsonLdScriptProps(generateLocalBusinessSchema())}
      />
      
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WebsiteFeaturesSection />
      <CTASection />
    </div>
  );
}
