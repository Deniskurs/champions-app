"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import { Check, Star } from "lucide-react"
import Image from "next/image"

export function Apply() {
  const standardFeatures = [
    "Simple-step-by-step tutorials",
    "18+ wealth creation methods",
    "Beginner friendly",
    "Custom-made learning app",
    "Access to millionaire mentors",
    "Community chat groups",
    "Cancel anytime, risk-free",
    "New information every day"
  ]

  const championFeatures = [
    "Maximum daily coin bonus",
    "Special emergency broadcasts",
    "Champions-only chat room",
    "2 year discounted subscription",
    "Exclusive Content and Expert Coaching"
  ]

  return (
    <Section id="apply" className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90" />
      <div className="relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-bold tracking-wider uppercase mb-4">
              JOIN THE 1%
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              The <span className="italic font-serif">choice</span> is yours
            </h2>
          </motion.div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Single Container with border */}
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              {/* Take Action Header with Pricing */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Take Action</h3>
                  <p className="text-yellow-400 text-lg">You need to act now.</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-1">
                    $850<span className="text-lg font-normal text-white/60">/2 years</span>
                  </div>
                  <p className="text-yellow-400 text-sm font-medium uppercase tracking-wide">SAVE $349.76</p>
                </div>
              </div>

              {/* Features in Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                {/* Left Column - First 4 features */}
                <div className="space-y-4">
                  {standardFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Right Column - Last 4 features */}
                <div className="space-y-4">
                  {standardFeatures.slice(4, 8).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Champions Only Features Section */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-6">+ Champions Only Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {championFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logo Section */}
          <div className="text-center mt-12 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-accent" />
              </div>
              <p className="text-white/80 text-sm font-medium tracking-wider uppercase">
                The Real World Logo
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ChampionsCTA 
                href="#apply"
                showWarning={true}
                warningText="PRICE INCREASING SOON"
              >
                become a champion
              </ChampionsCTA>
            </motion.div>
          </div>
          
        </div>
      </div>
    </Section>
  )
}