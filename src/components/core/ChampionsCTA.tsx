"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface ChampionsCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  showWarning?: boolean;
  warningText?: string;
}

export function ChampionsCTA({ 
  href, 
  children, 
  className,
  variant = "primary",
  showWarning = false,
  warningText = "PRICE INCREASING SOON"
}: ChampionsCTAProps) {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      <Link 
        href={href}
        className={cn(
          "group relative inline-block",
          "transition-transform duration-200 ease-out",
          "hover:scale-[1.02] active:scale-[0.98]",
          className
        )}
      >
        <div
          className={cn(
            "relative",
            // Primary variant - Clean black with subtle border
            variant === "primary" && [
              "bg-black",
              "border border-zinc-800 hover:border-zinc-700",
            ],
            // Secondary variant
            variant === "secondary" && [
              "bg-transparent",
              "border border-white/20 hover:border-white/30",
            ],
            // Outline variant  
            variant === "outline" && [
              "bg-transparent",
              "border border-gold/30 hover:border-gold/50",
            ],
            "transition-all duration-300"
          )}
        >
          {/* Main button content */}
          <div className="relative px-8 py-5">
            {/* Button text and arrow */}
            <div className="relative flex items-center gap-4">
              {/* Text with subtle hover effect */}
              <span className={cn(
                "font-bold text-base uppercase tracking-[0.15em]",
                "transition-all duration-300 ease-out",
                "text-white",
                "relative z-10"
              )}>
                {children}
              </span>
              
              {/* Animated arrow - slides right on hover */}
              <div className="relative overflow-hidden w-5 h-4">
                <div className="absolute inset-0 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                  <svg 
                    className="w-5 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 25 20" 
                    fill="none"
                  >
                    <path d="M1.66663 10H23.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                    <path d="M18.75 5L23.75 10L18.75 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Single golden yellow line at bottom on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          
          {/* Subtle glow effect behind button */}
          <div className={cn(
            "absolute inset-0 -z-10",
            "bg-gradient-to-b from-gold/0 to-gold/10",
            "opacity-0 group-hover:opacity-100",
            "blur-xl",
            "transition-opacity duration-500"
          )} />
        </div>
      </Link>

      {/* Warning text below button */}
      {showWarning && (
        <div className="flex items-center gap-1.5 text-gold animate-pulse">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span className="text-xs font-bold tracking-wider uppercase">
            {warningText}
          </span>
        </div>
      )}
    </div>
  );
}