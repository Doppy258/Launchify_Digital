"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Users, Star, ArrowDown, Zap, Shield, Award, BarChart2, Code, Cpu } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

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
const containerClass = "container px-4 md:px-6 mx-auto max-w-7xl relative z-10";
const sectionClass = "flex flex-col items-center justify-center w-full relative";
const headingClass = "text-center mx-auto";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
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

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  
  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 overflow-hidden flex items-center justify-center"
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
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 relative mx-auto text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              Enterprise-Grade Digital Solutions
            </motion.div>
            
            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block">Transform Your</span>
              <span className="block mt-1 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Digital Presence</span>
            </motion.h1>
            
            <motion.p
              className="max-w-[600px] text-slate-700 text-xl mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Launchify Digital delivers enterprise-grade solutions that drive measurable business growth. Our expert team combines cutting-edge technology with proven strategies to elevate your online presence.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link href="/request-help">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
                >
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 hover:bg-slate-100 transition-all duration-300 rounded-full px-8"
                >
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-6 mt-10 pt-4 border-t border-slate-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  Trusted by <span className="font-semibold text-slate-900">500+</span> businesses
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-[600px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 blur-xl opacity-70" />
            <div className="relative aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="grid grid-cols-2 gap-6 p-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {[
                    { icon: <Globe className="h-6 w-6" />, label: "Web Development" },
                    { icon: <Code className="h-6 w-6" />, label: "Custom Solutions" },
                    { icon: <BarChart2 className="h-6 w-6" />, label: "Growth Strategy" },
                    { icon: <Cpu className="h-6 w-6" />, label: "Digital Transformation" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 mb-3">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <motion.div
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <Award className="h-5 w-5 text-blue-600" />
              </motion.div>
            </div>
            
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-medium mt-1">Rated 4.9/5 by industry leaders</p>
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
            Our proven track record speaks for itself. We've helped hundreds of businesses
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
                to={3}
                delay={0.2}
                formatter={(value) => `${value}.2x`}
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-1">Average ROI</h3>
            <p className="text-slate-600 text-center text-sm">
              Return on investment for our clients' digital initiatives
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
                to={500}
                delay={0.4}
                formatter={(value) => `${value}+`}
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-1">Projects Completed</h3>
            <p className="text-slate-600 text-center text-sm">
              Successfully delivered and deployed worldwide
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
            <h3 className="text-lg font-medium text-slate-800 mb-1">Expert Support</h3>
            <p className="text-slate-600 text-center text-sm">
              Dedicated team available around the clock
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const WhyChooseUsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const features = [
    { 
      title: "Lightning-Fast Results", 
      description: "Our agile methodology and expert team deliver results 40% faster than industry standards.",
      icon: <Zap className="h-8 w-8" />,
      color: "blue"
    },
    { 
      title: "Enterprise-Grade Security", 
      description: "State-of-the-art security measures and compliance with global standards.",
      icon: <Shield className="h-8 w-8" />,
      color: "green"
    },
    { 
      title: "Custom Solutions", 
      description: "Tailored strategies and solutions designed specifically for your business needs.",
      icon: <Code className="h-8 w-8" />,
      color: "purple"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute right-0 top-0 opacity-10 transform translate-x-1/3 -translate-y-1/4"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className="absolute left-0 bottom-0 opacity-10 transform -translate-x-1/3 translate-y-1/4"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="400" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
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
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Advantage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
            Why Industry Leaders Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver exceptional results.
            Our unique approach sets us apart from the competition.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl w-full">
          <div className="grid gap-10 lg:grid-cols-3 mx-auto justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`
                  relative z-10 h-full p-8 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300
                  ${hoveredCard === index ? 'transform -translate-y-2 shadow-2xl' : ''}
                `}>
                  <div className={`
                    absolute top-0 left-0 w-full h-1 
                    ${feature.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                      feature.color === 'green' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 
                      'bg-gradient-to-r from-violet-500 to-purple-500'}
                  `} />
                  
                  <div className="relative z-10">
                    <div className={`
                      flex items-center justify-center w-16 h-16 mb-6 rounded-xl
                      ${feature.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                        feature.color === 'green' ? 'bg-emerald-50 text-emerald-600' : 
                        'bg-violet-50 text-violet-600'}
                    `}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                    
                    <div className="mt-8 flex items-center text-sm font-medium">
                      <span className={`
                        ${feature.color === 'blue' ? 'text-blue-600' : 
                          feature.color === 'green' ? 'text-emerald-600' : 
                          'text-violet-600'}
                      `}>
                        Learn more
                      </span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className={`
                    absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 transition-all duration-300
                    ${hoveredCard === index ? 'opacity-30 scale-110' : 'opacity-20'}
                    ${feature.color === 'blue' ? 'bg-blue-400' : 
                      feature.color === 'green' ? 'bg-emerald-400' : 
                      'bg-violet-400'}
                  `} />
                </div>

                {/* Card shadow */}
                <div className={`
                  absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 transition-opacity duration-300
                  ${hoveredCard === index ? 'opacity-20' : ''}
                  ${feature.color === 'blue' ? 'from-blue-500 to-indigo-500' : 
                    feature.color === 'green' ? 'from-emerald-500 to-teal-500' : 
                    'from-violet-500 to-purple-500'}
                `} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-20 text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/approach">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8"
            >
              <span className="relative z-10 flex items-center">
                Learn More About Our Approach 
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
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Enterprise Web Development",
      description: "Custom, scalable web applications built with cutting-edge technologies.",
      features: ["Custom CMS Solutions", "E-commerce Integration", "API Development"],
      color: "blue",
      image: "/services/web-development.jpg"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Digital Marketing Strategy",
      description: "Data-driven marketing campaigns that deliver measurable results.",
      features: ["SEO Optimization", "Content Strategy", "Analytics & Reporting"],
      color: "indigo",
      image: "/services/digital-marketing.jpg"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Enterprise Solutions",
      description: "Comprehensive digital transformation services for your business.",
      features: ["Cloud Migration", "Digital Strategy", "Process Automation"],
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
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Enterprise Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Digital Transformation</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We deliver end-to-end digital solutions that drive business growth and operational excellence.
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
                        Learn more 
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
                Explore All Services
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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Launchify Digital transformed our digital presence completely. Their enterprise-grade solutions helped us achieve a 300% increase in online engagement and a 45% boost in conversion rates.",
      author: "Sarah Johnson",
      position: "CEO, Bloom Boutique",
      initials: "SJ",
      rating: 5,
      tags: ["E-commerce", "Digital Marketing"]
    },
    {
      text: "Working with Launchify Digital was a game-changer for our business. Their comprehensive digital strategy and execution helped us streamline operations and achieve a 2.5x increase in revenue.",
      author: "Michael Chen",
      position: "Founder, Urban Eats Catering",
      initials: "MC",
      rating: 5,
      tags: ["Process Automation", "Cloud Solutions"]
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-50 to-transparent" />
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Industry Leaders</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve remarkable digital transformation and growth.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              className="relative"
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative z-10 h-full rounded-2xl p-8 bg-gradient-to-br from-white to-slate-50 shadow-xl border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border border-slate-100 flex items-center justify-center">
                      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{testimonial.initials}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.position}</p>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {testimonial.tags.map((tag, i) => (
                          <span key={i} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quote mark decoration */}
                <div className="absolute -top-2 -left-2 text-6xl text-slate-100 pointer-events-none select-none">
                  "
                </div>
              </div>
              
              {/* Card shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl blur-lg -z-10" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/case-studies">
            <Button
              variant="outline"
              className="border-slate-300 hover:bg-slate-100 transition-all duration-300 rounded-full px-8"
            >
              <span className="flex items-center">
                View All Case Studies 
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  return (
    <AnimatedSection className="w-full py-12 md:py-16 bg-slate-50 flex items-center justify-center">
      <div className={containerClass}>
        <div className="text-center mb-8 mx-auto">
          <h3 className="text-xl font-semibold text-slate-900">Trusted by Industry Leaders</h3>
          <p className="mt-2 text-slate-600">Join the ranks of successful businesses that trust our solutions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mx-auto">
          {[
            { name: "TechCorp", logo: "/logos/techcorp.svg" },
            { name: "Global Solutions", logo: "/logos/globalsolutions.svg" },
            { name: "InnovateX", logo: "/logos/innovatex.svg" },
            { name: "Digital First", logo: "/logos/digitalfirst.svg" },
            { name: "Future Tech", logo: "/logos/futuretech.svg" },
            { name: "Enterprise Plus", logo: "/logos/enterpriseplus.svg" },
          ].map((company) => (
            <motion.div
              key={company.name}
              className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center w-full">
          <Link href="/case-studies">
            <Button
              variant="outline"
              className="border-slate-300 hover:bg-slate-100 transition-all duration-300"
            >
              View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

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

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Trusted By Section */}
      <TrustedBySection />

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
