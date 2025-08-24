import { cn } from "@/lib/utils"

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
    <div className={cn("urgency-banner", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 text-center">
          <span>{message}</span>
          {ctaText && ctaHref && (
            <a 
              href={ctaHref} 
              className="underline font-bold hover:no-underline"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}