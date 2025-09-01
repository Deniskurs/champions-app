"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import Image from "next/image"

interface FutureData {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  tagline: string
  question: string
  cta: {
    label: string
    href: string
  }
  decorativeImages?: {
    left?: string
    right?: string
  }
}

export function Future({ data }: { data: FutureData }) {
  return (
    <Section className="bg-dark-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M40 40l20-20v40L40 40zm0 0L20 60V20l20 20zm0 0l20 20H20l20-20zm0 0L60 20H20l20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
            {data.eyebrow}
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
            <em className="text-gold font-semibold not-italic">Champions</em> {data.title}
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-6">
            {data.subtitle}
          </p>
          <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Visual Content Area - with decorative images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-16 mb-12 flex-wrap"
        >
          {/* Left decorative image */}
          {data.decorativeImages?.left && (
            <div className="relative w-16 h-16 md:w-24 md:h-24 opacity-60">
              <Image
                src={data.decorativeImages.left}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* Central tagline */}
          <div className="text-center max-w-lg">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-cream leading-tight">
              {data.tagline}
            </p>
          </div>

          {/* Right decorative image */}
          {data.decorativeImages?.right && (
            <div className="relative w-16 h-16 md:w-24 md:h-24 opacity-60">
              <Image
                src={data.decorativeImages.right}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          )}
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xl md:text-2xl text-cream/90 leading-relaxed">
            {data.question}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <ChampionsCTA href={data.cta.href} variant="primary">
            {data.cta.label}
          </ChampionsCTA>
        </motion.div>
      </div>
    </Section>
  )
}