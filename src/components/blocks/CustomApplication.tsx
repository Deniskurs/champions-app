"use client"

import { motion } from "framer-motion"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import { Section } from "@/components/core/Section"
import Image from "next/image"

interface CustomApplicationData {
  eyebrow: string
  title: string
  features: {
    title: string
    description: string
    highlights: string[]
    image?: string
  }[]
  cta: {
    label: string
    href: string
  }
}

export function CustomApplication({ data }: { data: CustomApplicationData }) {
  return (
    <Section className="bg-dark-bg">
      <div className="text-center mb-16">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4"
        >
          {data.eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-cream leading-tight"
        >
          {data.title}
        </motion.h2>
      </div>

      {/* Features Grid */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {data.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`${index % 2 === 1 ? 'lg:order-first' : ''}`}
          >
            {feature.image && (
              <div className="relative w-full max-w-md mx-auto mb-8 lg:mb-0">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-bg/50 border border-gold/20">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className={feature.image ? 'lg:col-span-1' : 'col-span-full text-center'}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cream">
                {feature.title}
              </h3>
              
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-8">
                {feature.description}
              </p>

              <ul className="space-y-4 mb-8">
                {feature.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    className="flex items-center text-cream/80 text-lg"
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mr-4 flex-shrink-0" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center mt-16"
      >
        <ChampionsCTA href={data.cta.href} variant="primary">
          {data.cta.label}
        </ChampionsCTA>
      </motion.div>
    </Section>
  )
}