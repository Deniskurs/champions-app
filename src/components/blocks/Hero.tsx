"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import { Section } from "@/components/core/Section"
import { HeroData } from "@/lib/data"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { X, Play } from "lucide-react"

export function Hero({ data }: { data: HeroData }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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
      <section 
        id="hero" 
        className="relative bg-black overflow-hidden pt-16 pb-8"
      >
        {/* Hero Content */}
        <div className="relative z-20 px-6 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center max-w-6xl mx-auto pt-8 md:pt-12 pb-8"
            >
              {/* Champions Logo Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-white/30 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white/80 font-bold text-sm tracking-wider">
                    {/* Placeholder for Champions badge */}
                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                      <text x="20" y="24" textAnchor="middle" className="text-xs font-bold fill-current">TRW</text>
                    </svg>
                  </div>
                </div>
              </motion.div>
              
              {/* BECOME A CHAMPION with clock */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                {/* Clock Icon */}
                <div className="w-4 h-4 text-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 28 28" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <path d="M15.1753 6.50293H12.8247V17.2674H20.8963V14.9168H15.1753V6.50293Z" fill="currentColor" fillOpacity="0.49"></path>
                    <path d="M14 0C6.28031 0 0 6.28031 0 14C0 21.7197 6.28058 28 14 28C21.7194 28 28 21.7197 28 14C28 6.28031 21.7194 0 14 0ZM14 25.6494C7.57651 25.6494 2.35062 20.4235 2.35062 14C2.35062 7.57651 7.57651 2.35062 14 2.35062C20.4235 2.35062 25.6494 7.57651 25.6494 14C25.6494 20.4235 20.4235 25.6494 14 25.6494Z" fill="currentColor" fillOpacity="0.49"></path>
                  </svg>
                </div>
                <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  BECOME A CHAMPION
                </h2>
              </motion.div>

              {/* Main headline - Exact TRW Champions style with forced line breaks */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[clamp(56px,8vw,120px)] font-serif leading-[1.1] tracking-[-0.02em] text-white mb-8 font-normal"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Champions are<br />
                made over time
              </motion.h1>

              {/* Subtitle text with emphasized span */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-lg md:text-xl text-white/80 leading-[1.6] font-light max-w-4xl mx-auto">
                  If you have a fight in 3 days, you&apos;d train very differently than if you had a fight in two years.{" "}
                  <span className="font-medium text-white">
                    Making money is exactly the same.
                  </span>
                </p>
              </motion.div>

              {/* CTA Button - Clean without warning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center"
              >
                <ChampionsCTA 
                  href={data.primaryCta.href} 
                  variant="primary"
                >
                  {data.primaryCta.label}
                </ChampionsCTA>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section with autoplay background */}
      {data.posterSrc && (
        <div className="hero-video-wrap relative w-full bg-black pb-16 mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-7xl mx-auto px-0 md:px-4"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-none md:rounded-xl">
              {/* Video background */}
              {data.videoSrc && (
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={data.posterSrc}
                >
                  <source src={data.videoSrc} type="video/mp4" />
                </video>
              )}
              
              {/* Fallback poster image */}
              {!data.videoSrc && (
                <Image
                  src={data.posterSrc}
                  alt="Hero video poster"
                  fill
                  className="object-cover"
                  priority
                />
              )}
              
              {/* Video overlay with custom play button */}
              <div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer group transition-all duration-300 hover:bg-black/20"
                onClick={handlePlayVideo}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glassmorphism play button like TRW */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28">
                    {/* Outer ring with gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/10 to-white/20 p-[1px]">
                      <div className="w-full h-full rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    
                    {/* Pulsing glow effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
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

              {/* Actual video player */}
              <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                {data.videoSrc ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    poster={data.posterSrc}
                  >
                    <source src={data.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={data.posterSrc || "/images/placeholder-hero.jpg"}
                      alt="Video content"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/70 text-lg">
                        Video player placeholder
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}