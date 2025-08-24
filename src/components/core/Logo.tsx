import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  href?: string
}

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center space-x-2 font-serif font-bold text-xl",
        "hover:opacity-80 transition-opacity",
        className
      )}
    >
      <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-2 rounded-lg flex items-center justify-center text-white font-black">
        C
      </div>
      <span>Champions</span>
    </Link>
  )
}