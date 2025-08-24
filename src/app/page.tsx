import { Nav } from "@/components/blocks/Nav"
import { Hero } from "@/components/blocks/Hero"
import { Offers } from "@/components/blocks/Offers"
import { ProofWall } from "@/components/blocks/ProofWall"
import { FAQ } from "@/components/blocks/FAQ"
import { Apply } from "@/components/blocks/Apply"
import { Footer } from "@/components/blocks/Footer"
import { homeData } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <Nav />
      
      <Hero data={homeData.hero} />
      
      <Offers
        variant="programs"
        title="Proven Wealth-Building Programs"
        subtitle="Learn from industry experts who have generated millions using these exact strategies"
        programs={homeData.campuses}
      />
      
      <ProofWall
        title="Real Results from Real Students"
        subtitle="Join thousands who have transformed their financial future"
        testimonials={homeData.testimonials}
      />
      
      <Offers
        variant="pricing"
        title={homeData.pricing.title}
        subtitle={homeData.pricing.subtitle}
        pricing={homeData.pricing.plan}
      />
      
      <FAQ items={homeData.faq} />
      
      <Apply />
      
      <Footer />
    </>
  )
}