"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"

interface RealWorldSystemData {
  eyebrow: string
  title: string
  content: string
  cta: { label: string; href: string }
}

export function RealWorldSystem({ data }: { data: RealWorldSystemData }) {
  return (
    <Section className="bg-dark-bg/95">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-cream/60 mb-8"
        >
          {data.eyebrow}
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-cream mb-12 leading-tight"
        >
          The Real World is a{" "}
          <span className="italic text-gold font-medium">comprehensive</span>{" "}
          financial education system
        </motion.h2>

        {/* Content paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-cream/90 leading-relaxed mb-12 max-w-5xl mx-auto"
        >
          <p>
            The world&apos;s most{" "}
            <span className="text-gold font-semibold">advanced financial education platform</span>
            , which has changed hundreds of thousands of lives. Inside the app, you will learn how to make money from{" "}
            <span className="text-gold font-semibold">multi-millionaire mentors</span>{" "}
            who have already walked the path. Choose from{" "}
            <span className="text-gold font-semibold">over 8 online business models</span>{" "}
            to get started.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
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