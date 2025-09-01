import { cn } from "@/lib/utils"
import { CTA } from "./CTA"

interface UrgencyBannerProps {
  message: string
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function UrgencyBanner({ 
  message, 
  ctaText, 
  ctaHref, 
  className 
}: UrgencyBannerProps) {
  return (
    <div 
      data-urgency-banner
      className={cn(
        "w-full bg-black text-white py-2",
        "border-b border-gray-800",
        className
      )}>
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-center gap-4 text-center text-sm">
          <span className="font-medium">{message}</span>
          {ctaText && ctaHref && (
            <a 
              href={ctaHref}
              className="uppercase font-bold text-white hover:text-gray-300 transition-colors underline"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}