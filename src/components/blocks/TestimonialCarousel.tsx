"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { TestimonialItem } from '@/lib/data';

type Testimonial = TestimonialItem;

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialCarousel({ 
  testimonials, 
  title = "Ready to make money online?",
  subtitle = "What YOU WILL LEARN"
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg to-dark-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">
            {subtitle}
          </p>
          <h2 className="text-section font-serif mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word.includes('money') ? 'text-gold' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            <span className="text-gold font-bold">Thousands have.</span> Our modern, practical approach 
            to teaching has led to tens of thousands of our students{' '}
            <span className="text-gold">generating money from anywhere</span> in the world.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4",
              "w-12 h-12 bg-dark-bg/80 backdrop-blur-sm border border-gold/30",
              "flex items-center justify-center rounded-full",
              "transition-all duration-300 hover:bg-gold/10 hover:border-gold/50",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6 text-gold" />
          </button>
          
          <button
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4",
              "w-12 h-12 bg-dark-bg/80 backdrop-blur-sm border border-gold/30",
              "flex items-center justify-center rounded-full",
              "transition-all duration-300 hover:bg-gold/10 hover:border-gold/50",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6 text-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative h-full">
      {/* Card container */}
      <div className={cn(
        "relative h-full bg-gradient-to-b from-dark-bg to-dark-bg/50",
        "border border-gold/20 rounded-lg p-6",
        "transition-all duration-300",
        "hover:border-gold/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10"
      )}>
        {/* Profile section */}
        <div className="flex items-start gap-4 mb-6">
          {/* Profile image */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/10" />
            )}
          </div>
          
          {/* Name and info */}
          <div className="flex-1">
            <h3 className="font-bold text-cream flex items-center gap-2">
              {testimonial.name}, {testimonial.age}
              {testimonial.countryFlag && (
                <span className="text-lg">{testimonial.countryFlag}</span>
              )}
            </h3>
            <div className="mt-1">
              <span className="text-xs uppercase tracking-wider text-gold/80">new revenue</span>
              <p className="text-2xl font-bold text-gold">{testimonial.revenue}</p>
            </div>
          </div>
        </div>

        {/* Testimonial text */}
        <p className="text-sm text-cream/80 leading-relaxed">
          {testimonial.testimonial}
        </p>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </div>
    </div>
  );
}