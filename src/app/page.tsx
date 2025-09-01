import { Nav } from "@/components/blocks/Nav"
import { Hero } from "@/components/blocks/Hero"
import { Evolution } from "@/components/blocks/Evolution"
import { CustomApplication } from "@/components/blocks/CustomApplication"
import { RealWorldSystem } from "@/components/blocks/RealWorldSystem"
import { Campuses } from "@/components/blocks/Campuses"
import { Offers } from "@/components/blocks/Offers"
import { ProofWall } from "@/components/blocks/ProofWall"
import { TestimonialCarousel } from "@/components/blocks/TestimonialCarousel"
import { Future } from "@/components/blocks/Future"
import { YouMustBecomeChampion } from "@/components/blocks/YouMustBecomeChampion"
import { FAQ } from "@/components/blocks/FAQ"
import { Apply } from "@/components/blocks/Apply"
import { FinalWarning } from "@/components/blocks/FinalWarning"
import { ThousandsOnPath } from "@/components/blocks/ThousandsOnPath"
import { Footer } from "@/components/blocks/Footer"
import { homeData } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <Nav />
      
      <Hero data={homeData.hero} />
      
      <Evolution data={homeData.evolution} />
      
      <RealWorldSystem data={homeData.realWorldSystem} />
      
      <CustomApplication data={homeData.customApplication} />
      
      <Campuses data={homeData.campuses} />
      
      <TestimonialCarousel
        testimonials={homeData.testimonials}
        title="Ready to make money online?"
        subtitle="What YOU WILL LEARN"
      />
      
      <Future data={homeData.future} />
      
      <YouMustBecomeChampion data={homeData.youMustBecomeChampion} />
      
      <Offers
        variant="pricing"
        title={homeData.pricing.title}
        subtitle={homeData.pricing.subtitle}
        pricing={homeData.pricing.plan}
      />
      
      <FAQ items={homeData.faq} />
      
      <Apply />
      
      <FinalWarning data={homeData.finalWarning} />
      
      <ThousandsOnPath data={homeData.thousandsOnPath} />
      
      <Footer />
    </>
  )
}