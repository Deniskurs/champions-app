"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialItem } from "@/lib/data"
import { Slider, SliderItem } from "./Slider"
import Image from "next/image"
import { Quote, Star } from "lucide-react"

interface ProofWallProps {
  title?: string
  subtitle?: string
  testimonials: TestimonialItem[]
}

export function ProofWall({ title, subtitle, testimonials }: ProofWallProps) {
  return (
    <Section id="testimonials" className="bg-card/30">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">What YOU WILL LEARN</div>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-4">
            Ready to <span className="highlight-span">make money online?</span>
          </h2>
          {subtitle && (
            <p className="text-muted text-lg max-w-2xl mx-auto">
              <strong className="stats-highlight">Thousands have.</strong> {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Slider 
          options={{ loop: true, align: "start" }}
          showControls={true}
        >
          {testimonials.map((testimonial, index) => (
            <SliderItem key={index} className="px-2">
              <Card className="h-full bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full border-2 border-accent/20"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{testimonial.name}, {testimonial.age}</h4>
                        <span className="text-sm">{testimonial.country}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs uppercase tracking-wider text-muted">
                          new revenue
                        </div>
                        <div className="income-highlight">
                          {testimonial.income}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-accent/20 mb-3" />
                    <p className="text-muted italic leading-relaxed">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SliderItem>
          ))}
        </Slider>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            <span className="stats-highlight">40%</span>
          </div>
          <p className="text-muted">Faster to first dollar</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            <span className="stats-highlight">83%</span>
          </div>
          <p className="text-muted">Quicker to first 10k month</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            <span className="income-highlight">100K+</span>
          </div>
          <p className="text-muted">Like-minded students</p>
        </div>
      </motion.div>
    </Section>
  )
}