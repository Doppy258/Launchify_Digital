"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface WebsiteShowcaseProps {
  websites: {
    name: string;
    description?: string;
    image: string;
    height: number; // Full height of the website screenshot
  }[];
  width?: number;
  height?: number;
  scrollSpeed?: number;
  className?: string;
}

const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({
  websites,
  width = 400,
  height = 600,
  scrollSpeed = 20, // seconds for a full scroll cycle
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentWebsite, setCurrentWebsite] = useState(0);
  
  // Auto-switch between websites
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentWebsite((prev) => (prev + 1) % websites.length);
      }
    }, 8000); // Switch every 8 seconds
    
    return () => clearInterval(interval);
  }, [isHovered, websites.length]);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl border border-slate-200 shadow-xl bg-white ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      {/* Browser-like top bar */}
      <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto bg-white rounded-full h-5 px-3 text-xs flex items-center justify-center border border-slate-200">
          {websites[currentWebsite].name}
        </div>
      </div>
      
      {/* Website content */}
      <div className="relative overflow-hidden" style={{ height: height - 8 }}>
        {websites.map((website, index) => (
          <motion.div
            key={website.name}
            className="absolute inset-0 w-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentWebsite === index ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                className="relative w-full"
                style={{ height: website.height }}
                animate={{ 
                  y: [0, -website.height + height],
                }}
                transition={{
                  y: {
                    duration: scrollSpeed,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                    repeatDelay: 1
                  }
                }}
              >
                <Image
                  src={website.image}
                  alt={website.name}
                  width={width}
                  height={website.height} 
                  className="w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Website indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {websites.map((website, index) => (
          <button
            key={`indicator-${index}`}
            className={`w-2 h-2 rounded-full ${currentWebsite === index ? 'bg-blue-600' : 'bg-slate-300'}`}
            onClick={() => setCurrentWebsite(index)}
            aria-label={`View ${website.name}`}
          />
        ))}
      </div>
    </div>
  )
}

export default WebsiteShowcase 