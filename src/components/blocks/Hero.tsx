"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import { Section } from "@/components/core/Section"
import { HeroData } from "@/lib/data"
import Image from "next/image"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function Hero({ data }: { data: HeroData }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false)
      }
    }
    
    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden' // Prevent scrolling
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isVideoModalOpen])

  const handlePlayVideo = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <>
      <Section 
        id="hero" 
        className="relative bg-black overflow-hidden pt-16 pb-0"
        container={false}
      >
        {/* Hero Content */}
        <div className="relative z-20 px-6 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center max-w-6xl mx-auto py-6 md:py-8"
            >
              {/* Clock Icon + BECOME A CHAMPION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mb-6"
              >
                {/* Clock Icon */}
                <div className="w-5 h-5 text-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 28 28" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <path d="M15.1753 6.50293H12.8247V17.2674H20.8963V14.9168H15.1753V6.50293Z" fill="currentColor" fillOpacity="0.49"></path>
                    <path d="M14 0C6.28031 0 0 6.28031 0 14C0 21.7197 6.28058 28 14 28C21.7194 28 28 21.7197 28 14C28 6.28031 21.7194 0 14 0ZM14 25.6494C7.57651 25.6494 2.35062 20.4235 2.35062 14C2.35062 7.57651 7.57651 2.35062 14 2.35062C20.4235 2.35062 25.6494 7.57651 25.6494 14C25.6494 20.4235 20.4235 25.6494 14 25.6494Z" fill="currentColor" fillOpacity="0.49"></path>
                  </svg>
                </div>
                <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-white/90">
                  BECOME A CHAMPION
                </h2>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[clamp(64px,10vw,160px)] font-serif leading-[0.8] tracking-[-0.02em] text-white mb-6 font-normal"
              >
                {data.headline}
              </motion.h1>

              {/* Subtitle text with emphasized span */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-white/70 leading-[1.4] font-light max-w-5xl mx-auto">
                  If you have a fight in 3 days, you&apos;d train very differently than if you had a fight in two years.{" "}
                  <span className="font-semibold text-white">
                    Making money is exactly the same.
                  </span>
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center"
              >
                <ChampionsCTA href={data.primaryCta.href} variant="primary">
                  {data.primaryCta.label}
                </ChampionsCTA>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Video Section - Separate section below hero */}
      {data.posterSrc && (
        <div className="hero-video-wrap relative w-full bg-black pb-16 -mt-8">
          {/* Smooth shadow transition */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black via-black/60 to-transparent z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={data.posterSrc}
                alt="Hero video poster"
                fill
                className="object-cover"
                priority
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  className="group relative cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Play video"
                  onClick={handlePlayVideo}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handlePlayVideo()
                    }
                  }}
                >
                  {/* Main button circle */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-black/60 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center shadow-xl group-hover:border-white/50 group-hover:bg-black/70 group-focus-visible:border-white/60 transition-all duration-300">
                    {/* Play triangle */}
                    <div className="w-0 h-0 border-l-[12px] md:border-l-[14px] border-l-white border-y-[8px] md:border-y-[10px] border-y-transparent ml-1 opacity-90 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors duration-200 z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full p-2"
                aria-label="Close video"
              >
                <X size={24} />
              </button>

              {/* Video placeholder - replace with actual video */}
              <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                <Image
                  src={data.posterSrc || "/images/placeholder-hero.jpg"}
                  alt="Video content"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-xl">
                    Video player would go here
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}