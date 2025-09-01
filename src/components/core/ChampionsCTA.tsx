"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChampionsCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function ChampionsCTA({ 
  href, 
  children, 
  className,
  variant = "primary" 
}: ChampionsCTAProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "group relative inline-block overflow-hidden cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
        "transition-transform duration-200 ease-out",
        "hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      <div
        className={cn(
          "relative px-8 py-6 transition-all duration-300 ease-out",
          // Primary variant - black background with gold accent
          variant === "primary" && [
            "bg-black border-2 border-gray-800",
            "hover:bg-gray-900 hover:border-gray-700",
          ],
          // Secondary variant
          variant === "secondary" && [
            "bg-transparent border-2 border-white/20",
            "hover:border-white/40 hover:bg-white/5",
          ],
          // Outline variant  
          variant === "outline" && [
            "bg-transparent border-2 border-gold/30",
            "hover:border-gold/60 hover:bg-gold/5",
          ]
        )}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out">
          <div className="h-full w-8 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between">
          <span className={cn(
            "font-bold text-lg uppercase tracking-[0.15em]",
            "transition-all duration-300 ease-out",
            "group-hover:tracking-[0.18em]",
            "text-white"
          )}>
            {children}
          </span>
          
          {/* Arrow */}
          <div className="relative ml-6">
            <ArrowRight className={cn(
              "h-6 w-6 transition-all duration-300 ease-out",
              "group-hover:translate-x-1",
              "text-gold"
            )} />
          </div>
        </div>

        {/* GOLDEN ACCENT LINE - Bottom border that grows on hover */}
        <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden">
          <div 
            className={cn(
              "h-full w-full origin-left transform scale-x-0",
              "transition-transform duration-500 ease-out",
              "group-hover:scale-x-100",
              "bg-gradient-to-r from-gold via-yellow-300 to-gold"
            )}
            style={{ backgroundColor: '#d4af37' }}
          />
        </div>

        {/* Subtle glow effect */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5",
          "group-hover:opacity-100"
        )} />
      </div>
    </Link>
  );
}