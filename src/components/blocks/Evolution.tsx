"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface SocialProofCard {
  id: string
  user: string
  location: string
  earnings: string
  percentage: string
  screenshot: string
  description: string
  verified?: boolean
}

interface EvolutionData {
  logos: Array<{ name: string; src: string }>
  title: string
  content: string
  highlights: string[]
  cta: { label: string; href: string }
  socialProofCards?: SocialProofCard[]
}

export function Evolution({ data }: { data: EvolutionData }) {
  const [isMobile, setIsMobile] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Scroll-triggered horizontal movement on desktop
  useEffect(() => {
    if (isMobile || !scrollContainerRef.current) return
    
    const scrollContainer = scrollContainerRef.current
    const section = scrollContainer.closest('section')
    if (!section) return
    
    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Check if section is in view
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        // Calculate how much of the section is visible (0 to 1)
        const visibilityRatio = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ))
        
        // Map visibility to horizontal scroll position with much slower ratio (0.3x speed)
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth
        scrollContainer.scrollLeft = visibilityRatio * maxScrollLeft * 0.3
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  // Track scroll progress for mobile scrollbar
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return

    const scrollContainer = scrollContainerRef.current

    const handleScrollProgress = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth
      const progress = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0
      setScrollProgress(progress)
    }

    scrollContainer.addEventListener('scroll', handleScrollProgress, { passive: true })
    handleScrollProgress() // Initial call

    return () => scrollContainer.removeEventListener('scroll', handleScrollProgress)
  }, [isMobile])

  const defaultSocialProofCards: SocialProofCard[] = [
    {
      id: "ricky-screenshot",
      user: "ricky_cocaina",
      location: "yesterday at 7:51 AM",
      earnings: "$157,730.17",
      percentage: "519 % (+$132,230.98)",
      screenshot: "/images/social-proof-1.jpg",
      description: "What color is your McLaren #TRW #TOPG #PIMPING",
      verified: true
    },
    {
      id: "mattygcfc-screenshot", 
      user: "MattyGCFC",
      location: "yesterday at 6:48 AM",
      earnings: "$197,730.17",
      percentage: "Up almost 500 percent this last year... and just bought my first rental property. Win the day, fellas!",
      screenshot: "/images/social-proof-2.jpg",
      description: "SPECIAL THANKS TO ANDREW TATE THE TOP G FOR HELPING ME TO HAVE A BETTER LIFE",
      verified: true
    },
    {
      id: "trading-screenshot",
      user: "TraderPro",
      location: "2 hours ago",
      earnings: "My trading changed my life",
      percentage: "TRW 10X £10.89 → £16.93",
      screenshot: "/images/social-proof-3.jpg",
      description: "Thanks to Champions program for the discipline and mindset",
      verified: true
    }
  ]

  const socialProofCards = data.socialProofCards || defaultSocialProofCards

  return (
    <Section className="relative bg-dark-bg/95 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Logo progression with arrows - exactly like website */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 md:gap-12 mb-16"
        >
          {data.logos.map((logo, index) => (
            <div key={logo.name} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 relative opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain filter brightness-90"
                    unoptimized
                  />
                </div>
              </motion.div>
              {/* Arrow between logos */}
              {index < data.logos.length - 1 && (
                <div className="mx-4 md:mx-6 text-cream/40">
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M1 7H22.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    <path d="M18.0833 2L23.0833 7L18.0833 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Main content - matching exact structure from website */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-none"
        >
          {/* Main text paragraph - exactly as on website */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-cream mb-8 leading-tight"
            >
              The <span className="italic text-gold font-medium">Champions</span> program is the next evolution to{" "}
              <span className="italic text-gold font-medium">The Real World.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl leading-relaxed text-cream/90 space-y-6"
            >
              <p>
                <span className="font-semibold text-gold">A special forces program</span> inside the most successful financial education platform on earth. 
                When you join THE REAL WORLD you will make money, your entire{" "}
                <span className="font-semibold text-gold">financial life will change</span> and you will be given the{" "}
                <span className="font-semibold text-gold">best education on the planet.</span>
              </p>
              
              <p>
                When you join the <span className="font-semibold text-gold">CHAMPIONS</span> program, you will be{" "}
                <span className="font-semibold text-gold">given everything and more.</span>
              </p>
              
              <p>
                A special program crafted under the knowledge that every member has committed the next{" "}
                <span className="font-semibold text-gold">two years to making $1 million</span> dollars. A goal{" "}
                <span className="font-semibold text-gold">every member will achieve</span> when they give it their all.
              </p>
              
              <p>
                On average, members of the <span className="font-semibold text-gold">CHAMPIONS</span> program{" "}
                <span className="font-semibold text-gold">make their first dollar 40% faster</span> than the average student of THE REAL WORLD.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
      
      {/* Social proof slider section - TRULY edge-to-edge breaking out of all containers */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Lighter shadow blending - softer transparency */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-48 xl:w-64 bg-gradient-to-r from-black/60 via-black/40 via-black/20 via-black/10 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-48 xl:w-64 bg-gradient-to-l from-black/60 via-black/40 via-black/20 via-black/10 to-transparent z-20 pointer-events-none" />
          
          {/* Full-width scrolling container */}
          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 w-full ${isMobile ? 'overflow-x-auto scrollbar-hide pb-4' : 'overflow-hidden'} ${!isMobile ? 'cursor-default' : ''}`}
            style={{
              paddingLeft: isMobile ? '2rem' : '3rem',
              paddingRight: isMobile ? '2rem' : '3rem',
              scrollBehavior: isMobile ? 'smooth' : 'auto'
            }}
          >
            {/* Create seamless infinite scroll effect for desktop */}
            {[...socialProofCards, ...socialProofCards, ...socialProofCards].map((card, index) => (
              <motion.div
                key={`${card.id}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index % socialProofCards.length) * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <SocialProofCard card={card} />
              </motion.div>
            ))}
          </div>

          {/* Custom gold scrollbar for mobile/tablet - positioned inside the edge-to-edge container */}
          {isMobile && (
            <div className="mt-6 px-8">
              <div className="relative h-1.5 bg-cream/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold via-gold/90 to-gold/70 rounded-full shadow-lg"
                  style={{ width: `${scrollProgress * 100}%` }}
                  transition={{ type: "spring", stiffness: 400, damping: 40 }}
                />
                {/* Subtle highlight for Apple-quality polish */}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white/10 to-transparent rounded-full pointer-events-none" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-none"
        >
          {/* Bottom stats - exactly as website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-12"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-6">
              <span className="uppercase tracking-wide">CHAMPIONS</span> reach their{" "}
              <span className="text-cream">first 10k month 83% quicker.</span>
            </p>
            <div className="text-lg md:text-xl text-cream/90 leading-relaxed space-y-4">
              <p>
                Due to the <span className="font-semibold text-gold">2 year commitment</span>, the students of the special CHAMPIONS program are not only harder working but also gain access to{" "}
                <span className="font-semibold text-gold">exclusive bonuses, content</span> and{" "}
                <span className="font-semibold text-gold">perks</span> that{" "}
                <span className="font-semibold text-gold">make the difference.</span>
              </p>
              <p>
                It is the highest level of the platform that prides itself on{" "}
                <span className="font-semibold text-gold">massive student success.</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ChampionsCTA href={data.cta.href} variant="primary">
              {data.cta.label}
            </ChampionsCTA>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

// Social Proof Card Component - with gold bottom border on hover like CTA button
function SocialProofCard({ card }: { card: SocialProofCard }) {
  return (
    <motion.div
      className="relative bg-dark-bg/50 border border-gold/20 rounded-2xl overflow-hidden backdrop-blur-sm h-96"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {},
        hover: {}
      }}
    >
      {/* Gold bottom border that appears on hover - exactly like CTA button */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold/90 to-gold"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />
      {/* Card image */}
      <div className="relative h-64 bg-gradient-to-br from-dark-bg/50 to-dark-bg overflow-hidden">
        <Image
          src={card.screenshot}
          alt={`${card.user} earnings`}
          fill
          className="object-cover"
          unoptimized
        />
        
        {/* Earnings overlay - positioned like on website */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-dark-bg/95 backdrop-blur-sm border border-gold/30 rounded-lg p-3">
            <div className="text-gold font-bold text-xl">
              {card.earnings}
            </div>
            <div className="text-cream/80 text-sm">
              {card.percentage}
            </div>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 h-32 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-gold/30 to-gold/60 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-dark-bg">$</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-cream text-sm">{card.user}</p>
            <p className="text-xs text-cream/60">{card.location}</p>
          </div>
          {card.verified && (
            <div className="text-gold text-sm">✓</div>
          )}
        </div>
        <p className="text-cream/90 text-sm leading-tight line-clamp-2">
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}