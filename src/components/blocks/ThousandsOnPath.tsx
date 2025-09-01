"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { CTA } from "@/components/core/CTA"
import Image from "next/image"

interface ThousandsOnPathProps {
  data: {
    eyebrow: string
    title: string
    subtitle: string
    bulletPoints: string[]
    content: {
      paragraph1: string
      paragraph2: string
      paragraph3: string
    }
    cta: { label: string; href: string }
    backgroundImage?: string
  }
}

export function ThousandsOnPath({ data }: ThousandsOnPathProps) {
  const { eyebrow, title, subtitle, bulletPoints, content, cta, backgroundImage } = data

  return (
    <Section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Luxury lifestyle background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 text-sm font-bold tracking-[0.2em] uppercase mb-16">
              {eyebrow}
            </p>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight mb-8">
              {title}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-light text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </h3>
          </motion.div>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {bulletPoints.map((point, index) => (
              <div key={index} className="text-white/80 text-base">
                {point}
              </div>
            ))}
          </motion.div>

          {/* Main Content Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 mb-12 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            <p className="text-white/90">
              Your entire world will drastically change as your energy levels rise, your{" "}
              <span className="text-white font-bold">fitness skyrockets</span> and your{" "}
              <span className="text-white font-bold">business grows</span>.
            </p>
            
            <p className="text-white/90">
              You will make the <span className="text-white font-bold">transformation</span>{" "}
              from normal, to above average,{" "}
              <span className="text-white font-bold">to exceptional</span> to{" "}
              <span className="text-white font-bold">champion</span>.
            </p>
            
            <p className="text-white/90">
              <span className="text-white font-bold">Every 6 months</span> redefining your level of{" "}
              <span className="text-white font-bold">expertise</span> and{" "}
              <span className="text-white font-bold">power</span> in this world.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CTA 
              asChild 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 text-base md:text-lg font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-0 group relative overflow-hidden"
            >
              <a href={cta.href} className="relative z-10 flex items-center gap-2">
                <span>{cta.label}</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </CTA>
          </motion.div>
          
        </div>
      </div>
    </Section>
  )
}