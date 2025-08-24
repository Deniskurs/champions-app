"use client"

import useEmblaCarousel from "embla-carousel-react"
import { EmblaOptionsType } from "embla-carousel"
import { useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SliderProps {
  children: React.ReactNode
  className?: string
  options?: EmblaOptionsType
  showControls?: boolean
}

export function Slider({ 
  children, 
  className, 
  options = { loop: true, align: "start" },
  showControls = true 
}: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  useEffect(() => {
    if (emblaApi) emblaApi.reInit()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {children}
        </div>
      </div>
      
      {showControls && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollPrev}
            className="h-10 w-10 rounded-full p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          
          <Button
            variant="outline" 
            size="sm"
            onClick={scrollNext}
            className="h-10 w-10 rounded-full p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      )}
    </div>
  )
}

export function SliderItem({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn("flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]", className)}>
      {children}
    </div>
  )
}