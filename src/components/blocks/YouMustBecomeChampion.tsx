"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChampionsCTA } from "@/components/core/ChampionsCTA"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Trophy, Star, Zap } from "lucide-react"

interface YouMustBecomeChampionData {
  urgencyBanner: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  features: string[]
  commitment: string
  cta: {
    label: string
    href: string
  }
  heroImage?: string
  bottomText?: string
}

export function YouMustBecomeChampion({ data }: { data: YouMustBecomeChampionData }) {
  return (
    <Section className="bg-dark-bg relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg" />
      
      <div className="relative z-10">
        {/* Three Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-8 md:gap-16 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-2">
                <Crown className="w-8 h-8 text-gold" />
              </div>
              <p className="text-sm font-bold text-cream">Hustlers University</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-2">
                <Trophy className="w-8 h-8 text-gold" />
              </div>
              <p className="text-sm font-bold text-cream">The Real World</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-2">
                <Star className="w-10 h-10 text-dark-bg" fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-gold">Champions</p>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            The Champions program is the <span className="text-gold">next evolution</span> to The Real World.
          </h2>
          
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-4xl mx-auto mb-8">
            A special forces program inside the most successful financial education platform on earth. 
            When you join <span className="text-gold font-semibold">THE REAL WORLD</span> you will make money, 
            your entire financial life will change and you will be given the best education on the planet.
          </p>
          
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-4xl mx-auto mb-12">
            When you join the <span className="text-gold font-semibold">CHAMPIONS program</span>, you will be given everything and more.
          </p>
          
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-cream leading-relaxed mb-4">
              A special program crafted under the knowledge that every member has committed the next 
              <span className="text-gold font-bold"> two years to making $1 million dollars</span>. 
              A goal every member will achieve when they give it their all.
            </p>
          </div>
        </motion.div>
        
        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <Card className="bg-gold/10 border-gold/30">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-4">40%</div>
              <p className="text-lg text-cream">On average, members of the CHAMPIONS program make their first dollar <strong>40% faster</strong> than the average student of THE REAL WORLD.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gold/10 border-gold/30">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-4">83%</div>
              <p className="text-lg text-cream">CHAMPIONS reach their first <strong>10k month 83% quicker</strong>.</p>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Exclusive Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-cream mb-4">
              Due to the 2 year commitment, the students of the special CHAMPIONS program are not only harder working but also gain access to:
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gold/20 to-gold/10 border-gold/30">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-cream mb-2">Exclusive bonuses</h4>
                <p className="text-cream/80">Maximum daily coin bonus</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gold/20 to-gold/10 border-gold/30">
              <CardContent className="p-6 text-center">
                <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-cream mb-2">Special content</h4>
                <p className="text-cream/80">Emergency broadcasts</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gold/20 to-gold/10 border-gold/30">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-cream mb-2">Elite perks</h4>
                <p className="text-cream/80">Champions-only chat room</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-4xl mx-auto">
            It is <span className="text-gold font-semibold">the highest level of the platform</span> that prides itself on massive student success.
          </p>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <ChampionsCTA href="#apply" variant="primary" className="text-2xl px-12 py-6">
            become a champion
          </ChampionsCTA>
        </motion.div>

        {/* Bottom Text */}
        {data.bottomText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg md:text-xl font-bold uppercase tracking-[0.1em] text-gold">
              {data.bottomText}
            </p>
          </motion.div>
        )}
      </div>
    </Section>
  )
}