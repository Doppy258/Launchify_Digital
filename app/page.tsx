"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Users, Star, ArrowDown, Zap, Shield, Award, BarChart2, Code, Cpu } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import WebsiteShowcase from "@/components/WebsiteShowcase"
import { sampleWebsites } from "@/public/mock-data/websites"

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
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-100/20 to-indigo-100/20 blur-3xl"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
                transform: `scale(${Math.random() + 0.5})`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className={containerClass}>
        <div className="grid gap-8 xl:gap-16 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6 relative mx-auto text-center lg:text-left max-w-[750px] lg:-ml-12"
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
              Enterprise-Grade Digital Solutions
            </motion.div>
            
            <motion.h1
              className="font-bold tracking-tight pb-6 w-full overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap">Transform Your</div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Digital Presence</div>
            </motion.h1>
            
            <motion.p
              className="text-slate-700 text-xl md:text-2xl mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Launchify Digital delivers enterprise-grade solutions that drive measurable business growth. Our expert team combines cutting-edge technology with proven strategies to elevate your online presence.
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
              className="absolute top-12 right-0 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-40 transform rotate-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <div className="text-xs font-medium text-slate-800">Award Winning</div>
              </div>
            </motion.div>
            
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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight mb-4">
            Delivering Exceptional <span className="text-blue-600">Results</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven track record speaks for itself. We've helped businesses
            achieve extraordinary growth and digital transformation.
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
      title: "Website Design & Development",
      description: "Beautiful, user-friendly websites that look great and actually work for your business.",
      features: ["Custom designs that stand out", "Mobile-friendly layouts", "Easy content management"],
      color: "blue",
      image: "/services/web-development.jpg"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Social Media Management",
      description: "We'll handle your social presence so you can focus on what you do best.",
      features: ["Content creation", "Community engagement", "Growth strategies"],
      color: "indigo",
      image: "/services/digital-marketing.jpg"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Practical marketing approaches that bring real people to your business.",
      features: ["SEO that actually works", "Targeted ads", "Results you can see"],
      color: "purple",
      image: "/services/enterprise-solutions.jpg"
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
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Helping You <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Stand Out Online</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We create stunning websites and manage your online presence so you can focus on running your business.
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:gap-16 md:grid-cols-3 mx-auto max-w-6xl justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10 h-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden border border-slate-100">
                {/* Color stripe at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  service.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                  'bg-gradient-to-r from-purple-500 to-purple-600'
                }`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`
                    flex h-14 w-14 items-center justify-center rounded-xl mb-6
                    ${service.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      service.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                      'bg-purple-50 text-purple-600'}
                  `}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mt-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${
                          service.color === 'blue' ? 'text-blue-500' :
                          service.color === 'indigo' ? 'text-indigo-500' :
                          'text-purple-500'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <button className={`
                        group inline-flex items-center text-sm font-medium transition-colors
                        ${service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                          service.color === 'indigo' ? 'text-indigo-600 hover:text-indigo-700' :
                          'text-purple-600 hover:text-purple-700'}
                      `}>
                        See how we do it 
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Background decor */}
                <div className={`
                  absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-20 transition-all duration-300 group-hover:opacity-30
                  ${service.color === 'blue' ? 'bg-blue-400' :
                    service.color === 'indigo' ? 'bg-indigo-400' :
                    'bg-purple-400'}
                `} />
              </div>
              
              {/* Card shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
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
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Lucas Zhao",
      position: "Chief Technology Officer",
      bio: "With over 15 years of experience in enterprise software development and digital transformation, Lucas leads our technical strategy and innovation initiatives.",
      skills: ["Enterprise Architecture", "Cloud Solutions", "Digital Innovation"],
      image: "/LOGO.png",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" }
      ]
    },
    {
      name: "Harrison Wang",
      position: "Chief Marketing Officer",
      bio: "A digital marketing pioneer with 12+ years of experience, Harrison drives our strategic marketing initiatives and client success programs.",
      skills: ["Growth Marketing", "Brand Strategy", "Data Analytics"],
      image: "/LOGO.png",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" }
      ]
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
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Executive Team</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry veterans with decades of combined experience in digital transformation and business growth.
          </p>
        </motion.div>
        
        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto justify-center">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden border border-slate-100 transition-all duration-500 group-hover:shadow-2xl">
                {/* Card top shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/0 to-blue-100/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/0" />
                  
                  {/* Content on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-200 font-medium">{member.position}</p>
                  </div>
                  
                  {/* Social links */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {member.socialLinks.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-300"
                        aria-label={`${member.name}'s ${link.platform}`}
                      >
                        {link.platform === "LinkedIn" ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Bio */}
                  <p className="text-slate-700 mb-6">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <Link href={`/about/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <button className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                        View Full Profile 
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/about">
            <Button
              variant="outline"
              className="border-slate-300 hover:bg-slate-100 transition-all duration-300 rounded-full px-8"
            >
              <span className="flex items-center">
                Meet Our Entire Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              opacity: Math.random() * 0.6,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
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
                  <span className="text-sm font-medium text-white/90">Ready to Transform Your Business?</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Let's Build Your Digital Future Together
                </h2>
                
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                  Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/request-help">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
                    >
                      <span className="flex items-center">
                        Schedule Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
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
                    <span>Expert advice</span>
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
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutSection />

      {/* CTA Section */}
      <CTASection />

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
          <Link href="/request-help">
            <Button
              size="lg"
              className="rounded-full shadow-lg bg-white hover:bg-slate-50 text-slate-900 transition-all duration-300 flex items-center gap-2 px-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
