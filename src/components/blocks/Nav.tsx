"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import Lottie from "lottie-react"

const navItems = [
  { label: "Application", href: "#Application" },
  { label: "Courses", href: "#Courses" },
  { label: "Interviews", href: "#Interviews" },
  { label: "Reviews", href: "#Reviews" },
  { label: "FAQ", href: "#FAQ" },
]

const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="flex flex-col justify-center w-5 h-4 gap-1">
        <motion.div 
          className="h-0.5 w-full bg-white origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
        <motion.div 
          className="h-0.5 w-full bg-white"
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1
          }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        />
        <motion.div 
          className="h-0.5 w-full bg-white origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  )
}

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [urgencyBannerHeight, setUrgencyBannerHeight] = useState(40)
  const { scrollY } = useScroll()
  
  const navTop = useTransform(
    scrollY, 
    [0, urgencyBannerHeight], 
    [urgencyBannerHeight, 0]
  )

  useEffect(() => {
    const urgencyElement = document.querySelector('[data-urgency-banner]')
    if (urgencyElement) {
      setUrgencyBannerHeight(urgencyElement.getBoundingClientRect().height)
    } else {
      setUrgencyBannerHeight(0)
    }
  }, [])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <motion.nav 
        className="fixed left-0 right-0 z-40 pointer-events-none"
        style={{ top: navTop }}
      >
        <div className="px-6 md:px-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-between py-4 pointer-events-auto">
              
              {/* Mobile Layout */}
              <div className="flex md:hidden items-center justify-between w-full">
                {/* Logo on left */}
                <Link href="/" className="flex items-center group">
                  <Image 
                    src="/images/unlimited.PNG" 
                    alt="Unlimited Logo" 
                    width={120} 
                    height={40} 
                    className="h-8 w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </Link>

                {/* Menu Button on right */}
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                      "group relative flex items-center gap-2 px-3 py-2 cursor-pointer",
                      "text-white hover:text-white transition-all duration-200",
                      "hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      "border border-white/20 hover:border-white/40",
                      isOpen && "bg-white/10 border-white/40"
                    )}
                  >
                    <HamburgerMenu isOpen={isOpen} />
                    <span className="font-medium text-xs uppercase tracking-wide text-white">
                      MENU
                    </span>
                  </button>

                  {/* Mobile Dropdown - Right aligned */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-full right-0 mt-3 w-72 z-[60] bg-black border border-white/20 shadow-2xl"
                      >
                        <div className="py-2">
                          {navItems.map((item, index) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                              className="relative"
                            >
                              <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                              >
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "group relative flex items-center px-8 py-5",
                                    "text-white/80 hover:text-white transition-all duration-200",
                                    "hover:shadow-[4px_4px_12px_rgba(255,255,255,0.1)] focus:outline-none"
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="relative z-10 text-xl font-serif text-white">
                                    {item.label}
                                  </span>
                                </Link>
                              </motion.div>
                              {/* Partial line separator */}
                              {index < navItems.length - 1 && (
                                <div className="px-8">
                                  <div className="h-px bg-white/10 w-3/4" />
                                </div>
                              )}
                            </motion.div>
                          ))}
                          {/* Mobile CTA in dropdown */}
                          <motion.div 
                            className="p-6 border-t border-white/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: navItems.length * 0.1, ease: [0.23, 1, 0.32, 1] }}
                          >
                            <Link
                              href="/checkout"
                              className={cn(
                                "group relative flex items-center justify-center w-full",
                                "px-6 py-4 bg-transparent border border-white",
                                "text-white hover:bg-white hover:text-black",
                                "transition-all duration-300 overflow-hidden",
                                "font-semibold text-sm uppercase tracking-wide",
                                "focus:outline-none"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              <motion.div 
                                className="absolute inset-0 bg-white"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                style={{ originX: 0 }}
                              />
                              <span className="relative z-10">BECOME A CHAMPION</span>
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between w-full">
                {/* Left side - Logo and Menu */}
                <div className="flex items-center gap-8">
                  {/* Logo */}
                  <Link href="/" className="flex items-center group">
                    <Image 
                      src="/images/unlimited.PNG" 
                      alt="Unlimited Logo" 
                      width={120} 
                      height={40} 
                      className="h-8 w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </Link>

                  {/* Menu Button */}
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={cn(
                        "group relative flex items-center gap-3 px-4 py-2 cursor-pointer",
                        "text-white hover:text-white transition-all duration-200",
                        "hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        "border border-white/20 hover:border-white/40",
                        isOpen && "bg-white/10 border-white/40"
                      )}
                    >
                      <HamburgerMenu isOpen={isOpen} />
                      <span className="font-medium text-sm text-white">
                        Menu
                      </span>
                    </button>

                    {/* Desktop Dropdown - Left aligned */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-0 mt-3 w-80 z-[60] bg-black border border-white/20 shadow-2xl"
                        >
                          <div className="py-2">
                            {navItems.map((item, index) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                className="relative"
                              >
                                <motion.div
                                  whileHover={{ x: 4 }}
                                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                >
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "group relative flex items-center px-8 py-5",
                                      "text-white/80 hover:text-white transition-all duration-200",
                                      "hover:shadow-[4px_4px_12px_rgba(255,255,255,0.1)] focus:outline-none"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="relative z-10 text-xl font-serif text-white">
                                      {item.label}
                                    </span>
                                  </Link>
                                </motion.div>
                                {/* Partial line separator */}
                                {index < navItems.length - 1 && (
                                  <div className="px-8">
                                    <div className="h-px bg-white/10 w-3/4" />
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right side - CTA Button */}
                <div>
                  <Link 
                    href="/checkout"
                    className={cn(
                      "group relative flex items-center justify-center",
                      "px-8 py-3 bg-transparent border border-white",
                      "text-white hover:bg-white hover:text-black",
                      "transition-all duration-200",
                      "font-semibold text-sm uppercase tracking-wide",
                      "focus:outline-none overflow-hidden"
                    )}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    />
                    <span className="relative z-10">BECOME A CHAMPION</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Click outside to close backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-transparent z-30 pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}