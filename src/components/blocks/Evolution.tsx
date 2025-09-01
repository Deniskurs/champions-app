"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import Image from "next/image"

interface EvolutionData {
  logos: Array<{ name: string; src: string }>
  title: string
  content: string
  highlights: string[]
  cta: { label: string; href: string }
}

export function Evolution({ data }: { data: EvolutionData }) {
  return (
    <Section className="bg-dark-bg/95 border-y border-gold/10">
      <div className="max-w-6xl mx-auto">
        {/* Logo progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 md:gap-16 mb-16"
        >
          {data.logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-20 h-20 md:w-32 md:h-32 relative opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain filter brightness-90"
                />
              </div>
              {/* Evolution arrow */}
              {index < data.logos.length - 1 && (
                <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 text-gold/60">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-cream mb-8 leading-tight"
          >
            The <span className="italic text-gold font-medium">Champions</span> program is the next evolution to{" "}
            <span className="italic text-gold font-medium">The Real World.</span>
          </motion.h2>

          {/* Description paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-cream/90 leading-relaxed mb-12 space-y-6"
          >
            <p>
              <span className="text-gold font-semibold">A special forces program</span> inside the most successful financial education platform on earth. 
              When you join <span className="uppercase font-bold text-cream">THE REAL WORLD</span> you will make money, your entire{" "}
              <span className="text-gold font-semibold">financial life will change</span> and you will be given the{" "}
              <span className="text-gold font-semibold">best education on the planet.</span>
            </p>
            
            <p>
              When you join the <span className="uppercase font-bold text-gold">CHAMPIONS</span> program, you will be{" "}
              <span className="text-gold font-semibold">given everything and more.</span>
            </p>
            
            <p>
              A special program crafted under the knowledge that every member has committed the next{" "}
              <span className="text-gold font-semibold">two years to making $1 million</span> dollars. A goal{" "}
              <span className="text-gold font-semibold">every member will achieve</span> when they give it their all.
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-gold">
              On average, members of the <span className="uppercase">CHAMPIONS</span> program{" "}
              <span className="text-cream">make their first dollar 40% faster</span> than the average student of THE REAL WORLD.
            </p>
          </motion.div>

          {/* Stats highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold/10 to-cream/5 border border-gold/20 rounded-lg p-8 mb-12"
          >
            <p className="text-3xl md:text-4xl font-bold text-gold mb-4">
              <span className="uppercase">CHAMPIONS</span> reach their{" "}
              <span className="text-cream">first 10k month 83% quicker.</span>
            </p>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              Due to the <span className="text-gold font-semibold">2 year commitment</span>, the students of the special CHAMPIONS program are not only harder working but also gain access to{" "}
              <span className="text-gold font-semibold">exclusive bonuses, content</span> and{" "}
              <span className="text-gold font-semibold">perks</span> that{" "}
              <span className="text-gold font-semibold">make the difference.</span>
            </p>
            <p className="text-lg text-cream/80 mt-4">
              It is the highest level of the platform that prides itself on{" "}
              <span className="text-gold font-semibold">massive student success.</span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
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