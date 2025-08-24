"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/core/Section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react"

export function Apply() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <Section id="apply" className="bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-semibold tracking-tight mb-6">
            Ready to <span className="text-accent">transform</span> your future?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
            Join thousands who have built sustainable wealth through strategic financial education. 
            Your journey to financial independence starts today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 border-accent/20 bg-background/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold mb-2">Start Immediately</h4>
                  <p className="text-sm text-muted">Access your courses instantly after enrollment</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold mb-2">Expert Mentorship</h4>
                  <p className="text-sm text-muted">Learn from successful entrepreneurs and investors</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold mb-2">Proven System</h4>
                  <p className="text-sm text-muted">Follow battle-tested strategies for building wealth</p>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-6 mb-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-3">
                    🔥 Limited Time Offer
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-3xl font-bold line-through text-muted">$1,200</div>
                    <div className="text-5xl font-bold text-accent">$850</div>
                  </div>
                  <p className="text-sm text-muted mt-2">2-year program - Save $350</p>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 text-lg"
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white px-8 h-12 font-semibold"
                    >
                      Join Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted">
                    By joining, you agree to our Terms of Service and Privacy Policy. 
                    30-day money-back guarantee.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Welcome to Champions!
                  </h3>
                  <p className="text-green-700">
                    Check your email for next steps and access to your dashboard.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-sm text-muted"
        >
          <p>🔒 Secure payment • 💯 30-day guarantee • 🌍 Join 10,000+ students worldwide</p>
        </motion.div>
      </div>
    </Section>
  )
}