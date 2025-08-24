"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/core/Logo" 
import { Container } from "@/components/core/Container"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "#programs" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-accent text-white py-3 text-center text-sm font-medium">
        🚀 <strong>Limited Time:</strong> Lock in your price before it increases - Join now!
      </div>

      <nav 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo />

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm font-medium hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="#login">Login</Link>
              </Button>
              <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
                <Link href="#apply">Join Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </Container>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <Container>
              <div className="py-6 space-y-4">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-sm font-medium hover:text-accent transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#login">Login</Link>
                  </Button>
                  <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
                    <Link href="#apply">Join Now</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </>
  )
}