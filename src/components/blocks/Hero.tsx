"use client"

import { motion } from "framer-motion"
import { CTA } from "@/components/core/CTA"
import { Section } from "@/components/core/Section"
import { HeroData } from "@/lib/data"
import Image from "next/image"

export function Hero({ data }: { data: HeroData }) {
  return (
    <Section className="text-center relative overflow-hidden min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl w-full" 
      >
        {data.eyebrow && (
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <div className="bg-red-600/10 border border-red-600/20 rounded-full px-6 py-3">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                {data.eyebrow}
              </p>
            </div>
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6"
        >
          {data.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8"
        >
          {data.sub}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <CTA asChild>
            <a href={data.primaryCta.href} className="bg-accent hover:bg-accent/90">
              {data.primaryCta.label}
            </a>
          </CTA>
          
          {data.secondaryCta && (
            <CTA variant="outline" asChild>
              <a href={data.secondaryCta.href}>
                {data.secondaryCta.label}
              </a>
            </CTA>
          )}
        </motion.div>
      </motion.div>

      {/* Optional poster/video */}
      {data.posterSrc && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 mx-auto max-w-4xl rounded-3xl overflow-hidden border border-border shadow-2xl"
        >
          <div className="relative aspect-video bg-card">
            <Image
              src={data.posterSrc}
              alt="Hero Video Poster"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/10 transition-colors">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-8 border-l-accent border-y-6 border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  )
}