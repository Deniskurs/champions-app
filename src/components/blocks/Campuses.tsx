"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

interface Campus {
  id: string
  title: string
  description: string
  imageSrc: string
  professorBadge: string
}

interface CampusesData {
  eyebrow: string
  title: string
  subtitle: string
  campuses: Campus[]
}

export function Campuses({ data }: { data: CampusesData }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList())
    })
  }, [emblaApi])

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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream leading-tight"
        >
          {data.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-cream/80 max-w-4xl mx-auto leading-relaxed"
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* Navigation Buttons - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-end gap-3 mb-8"
      >
        <button
          className="w-10 h-10 bg-dark-bg/50 border border-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-cream" />
        </button>

        <button
          className="w-10 h-10 bg-dark-bg/50 border border-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-cream" />
        </button>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {data.campuses.map((campus, index) => (
              <div
                key={campus.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                {/* Card with proper aesthetic */}
                <div className="relative group cursor-pointer h-full bg-dark-bg/30 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 hover:bg-dark-bg/50 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2">
                  {/* Main Campus Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-dark-bg/50 mb-6">
                    <Image
                      src={campus.imageSrc}
                      alt={campus.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-dark-bg/10" />
                    
                    {/* Professor Badge - positioned like on the real site */}
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16">
                      <Image
                        src={campus.professorBadge}
                        alt="Professor Badge"
                        fill
                        className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-cream group-hover:text-gold transition-colors duration-300">
                      {campus.title}
                    </h3>
                    
                    <p className="text-cream/70 leading-relaxed text-sm md:text-base group-hover:text-cream/90 transition-colors duration-300">
                      {campus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="flex justify-center mt-8">
          <div className="px-4 py-2 bg-dark-bg/30 border border-gold/20 rounded-full backdrop-blur-sm">
            <span className="text-sm text-cream/60">
              {selectedIndex + 1} of {data.campuses.length}
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}