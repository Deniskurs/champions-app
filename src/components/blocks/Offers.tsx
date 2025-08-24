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
      <Section id="pricing" className="bg-gradient-to-b from-background to-card/20">
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

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className={cn(
              "relative border-2 shadow-2xl",
              pricing.featured ? "border-accent bg-gradient-to-b from-accent/5 to-background" : "border-border"
            )}>
              {pricing.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-white px-4 py-1 rounded-full font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    RECOMMENDED
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-serif">{pricing.title}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-accent">{pricing.price}</span>
                    <span className="text-muted text-lg">/ {pricing.period}</span>
                  </div>
                  {pricing.savings && (
                    <p className="text-green-600 font-medium mt-2">{pricing.savings}</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="space-y-8">
                  {/* Standard Features */}
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {pricing.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Champion Features */}
                  {pricing.championFeatures && (
                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold mb-4 text-lg text-accent">Champion Exclusive:</h4>
                      <ul className="space-y-3">
                        {pricing.championFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <CTA asChild className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg font-semibold">
                    <a href={pricing.cta.href}>{pricing.cta.label}</a>
                  </CTA>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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