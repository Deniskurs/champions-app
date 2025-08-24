import { Logo } from "@/components/core/Logo"
import { Container } from "@/components/core/Container"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: "Programs", href: "#programs" },
      { label: "Success Stories", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" }
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  }

  return (
    <footer className="bg-card/50 border-t border-border">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <Logo className="mb-6" />
              <p className="text-muted max-w-md mb-6 leading-relaxed">
                Transform your financial future with our comprehensive wealth-building platform. 
                Join thousands who have achieved financial independence through strategic education and mentorship.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>10,000+ Active Students</span>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm">
              © {currentYear} Champions Program. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted">
              <span>Made with ❤️ for future champions</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}