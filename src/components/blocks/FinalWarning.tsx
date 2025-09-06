"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import Image from "next/image"
import { FinalWarningData } from "@/lib/data"

interface FinalWarningProps {
  data: FinalWarningData
}

export function FinalWarning({ data }: FinalWarningProps) {
  const { eyebrow, title, content, cta, heroImage } = data
  return (
    <Section className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90" />
      <div className="relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-6">
              {eyebrow}
            </p>
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {title}
            </h2>
          </motion.div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Image */}
            <div className="relative">
              {heroImage && (
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={heroImage}
                    alt="Trading setup"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="text-lg md:text-xl leading-relaxed">
                <p>
                  You are <span className="text-white font-bold">entering one of the most up to date,</span> comprehensive programs online today.{" "}
                  <span className="text-white font-bold">A fight gym</span> where the{" "}
                  <span className="text-white font-bold">only thing taught is how to make CASH.</span>
                </p>
                <p className="mt-4">
                  You will want to give up, <span className="text-white font-bold">you will want to quit</span>, you will think it&apos;s hard and as you continue to force yourself through your two year commitment,{" "}
                  <span className="text-white font-bold">but with the CHAMPIONS program, you will win.</span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <ChampionsCTA 
                  href={cta.href}
                  variant="primary"
                >
                  {cta.label}
                </ChampionsCTA>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </Section>
  )
}