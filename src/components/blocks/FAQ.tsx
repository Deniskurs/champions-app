"use client"

import { Section } from "@/components/core/Section"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { FAQItem } from "@/lib/data"
import { motion } from "framer-motion"

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <Section id="faq" className="bg-card/50">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-muted text-lg">
            Get answers to common questions about the Champions Program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-border rounded-lg px-6 py-2 bg-background/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors py-6">
                  <span className="font-medium text-lg">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted pb-6 pt-2 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  )
}