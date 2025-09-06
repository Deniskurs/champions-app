"use client"

import { Section } from "@/components/core/Section"
import { FAQItem } from "@/lib/data"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <Section id="FAQ" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/50 mb-4">
            STILL THINKING?
          </p>
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-white">
            Frequently Asked<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
              Questions
            </span>
          </h2>
        </motion.div>
        
        <div className="space-y-2">
          {items.map((item, i) => {
            const isOpen = openItems.includes(i)
            const isLast = i === items.length - 1
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={cn(
                  "border border-zinc-800 overflow-hidden transition-all duration-300",
                  isOpen ? "bg-zinc-900/80" : "bg-zinc-900/30 hover:bg-zinc-900/50",
                  isLast && "border-gold/30"
                )}
              >
                <button
                  onClick={() => toggleItem(i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <h3 className={cn(
                    "text-lg md:text-xl font-semibold transition-colors duration-300",
                    isOpen ? "text-white" : "text-white/90"
                  )}>
                    {item.q}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      isOpen ? "text-gold" : "text-white/50"
                    )} />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{
                    height: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                    opacity: { duration: 0.2 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pt-2">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-4" />
                    <p className="text-zinc-400 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}