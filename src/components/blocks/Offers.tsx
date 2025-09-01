"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CTA } from "@/components/core/CTA"
import { CampusItem, PricingPlan } from "@/lib/data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface OffersProps {
  variant?: "programs" | "pricing"
  title: string
  subtitle?: string
  programs?: CampusItem[]
  pricing?: PricingPlan
}

export function Offers({ variant = "programs", title, subtitle, programs, pricing }: OffersProps) {
  if (variant === "pricing" && pricing) {
    return (
      <Section id="pricing" className="bg-black text-white relative overflow-hidden">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90" />
        <div className="relative z-10">
          
          {/* Urgency Banner */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Badge className="bg-accent text-white px-6 py-2 text-sm font-bold tracking-wider uppercase mb-6">
                PRICE INCREASING SOON
              </Badge>
            </motion.div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Lock-in your <span className="text-accent">price</span> of $850
              </h2>
              <div className="max-w-3xl mx-auto space-y-2">
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  <span className="text-white font-medium">The CHAMPIONS program has been massively upgraded</span>
                  <span className="text-white/80"> to guarantee our students success.</span>
                </p>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  <span className="text-white/80">The price will be </span>
                  <span className="text-accent font-medium">increasing soon.</span>
                  <span className="text-white font-medium"> Hundreds of thousands of students</span>
                  <span className="text-white/80"> have become successful through THE REAL WORLD and tens of thousands will now </span>
                  <span className="text-white font-medium">make a million dollars through the CHAMPIONS program.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative inline-block">
                <CTA 
                  asChild 
                  className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-12 py-6 text-lg md:text-xl font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-0 group relative overflow-hidden"
                >
                  <a href={pricing.cta.href} className="relative z-10">
                    <span className="block group-hover:animate-pulse">{pricing.cta.label}</span>
                    <span className="block text-sm opacity-90 font-normal mt-1 group-hover:animate-pulse">{pricing.cta.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </CTA>
                
                {/* Side arrows/decorative elements */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:block">
                  <div className="w-8 h-8 border-2 border-accent transform rotate-45" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:block">
                  <div className="w-8 h-8 border-2 border-accent transform rotate-45" />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Logo Section - matching original */}
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-accent" />
              </div>
              <p className="text-white/80 text-sm font-medium tracking-wider uppercase">
                The Real World Logo
              </p>
            </motion.div>
          </div>
          
        </div>
      </Section>
    )
  }

  // Programs variant
  return (
    <Section id="programs">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs?.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={program.imageSrc}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge 
                  className="absolute top-4 left-4"
                  variant="secondary"
                >
                  {program.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted mb-6">{program.description}</p>
                <CTA variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Learn More
                </CTA>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}