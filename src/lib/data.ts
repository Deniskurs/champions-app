// Types
export interface HeroData {
  eyebrow?: string
  headline: string
  sub: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  posterSrc?: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface CampusItem {
  id: string
  title: string
  description: string
  imageSrc: string
  category: string
  color: string
}

export interface TestimonialItem {
  name: string
  age: number
  country: string
  income: string
  testimonial: string
  avatar: string
}

export interface PricingPlan {
  title: string
  price: string
  period: string
  savings?: string
  features: string[]
  championFeatures?: string[]
  featured?: boolean
  cta: { label: string; href: string }
}

export interface PricingData {
  title: string
  subtitle: string
  urgencyBanner?: string
  plan: PricingPlan
}

// Main data export
export const homeData = {
  hero: {
    eyebrow: "Strategy First",
    headline: "Champions are made over time",
    sub: "If you have a goal in 3 days, you'd approach it very differently than if you had a goal in two years. Building wealth is exactly the same.",
    primaryCta: { label: "Become a Champion", href: "#apply" },
    secondaryCta: { label: "See Success Stories", href: "#proof" },
    posterSrc: "/images/hero-poster.jpg"
  } as HeroData,

  campuses: [
    {
      id: "ecommerce",
      title: "E-Commerce",
      description: "Build profitable online stores. Learn product research, store creation, and traffic generation from industry experts.",
      imageSrc: "/images/campus-ecommerce.jpg",
      category: "Business",
      color: "purple"
    },
    {
      id: "copywriting", 
      title: "Copywriting",
      description: "Master the art of persuasive writing. Create compelling copy that converts and secure high-paying clients.",
      imageSrc: "/images/campus-copywriting.jpg",
      category: "Marketing",
      color: "blue"
    },
    {
      id: "client-acquisition",
      title: "Client Acquisition", 
      description: "Transform your social media time into income. Step-by-step process to generate consistent revenue.",
      imageSrc: "/images/campus-clients.jpg",
      category: "Sales",
      color: "green"
    },
    {
      id: "investing",
      title: "Smart Investing",
      description: "Build wealth through strategic investments. Learn proven methods from successful investors.",
      imageSrc: "/images/campus-investing.jpg",
      category: "Finance",
      color: "orange"
    },
    {
      id: "trading",
      title: "Market Trading",
      description: "Navigate volatile markets with precision. Advanced strategies for consistent returns.",
      imageSrc: "/images/campus-trading.jpg",
      category: "Finance", 
      color: "red"
    },
    {
      id: "content",
      title: "Content Creation",
      description: "Build valuable digital assets. Create content that generates passive income streams.",
      imageSrc: "/images/campus-content.jpg",
      category: "Creative",
      color: "indigo"
    }
  ] as CampusItem[],

  testimonials: [
    {
      name: "Sarah",
      age: 28,
      country: "🇺🇸",
      income: "$8,000/month",
      testimonial: "Champions program helped me reach my first 10k month 83% quicker than expected. The step-by-step approach and daily mentoring made all the difference.",
      avatar: "/images/testimonial-1.jpg"
    },
    {
      name: "Marcus", 
      age: 22,
      country: "🇬🇧",
      income: "$15,000/month",
      testimonial: "Made my first dollar 40% faster than average students. Went from part-time jobs to running a 6-figure agency in just 8 months.",
      avatar: "/images/testimonial-2.jpg"
    },
    {
      name: "Elena",
      age: 35,
      country: "🇦🇺", 
      income: "$25,000/month",
      testimonial: "Single mother who transformed $75 into $2000 in 2 weeks, now earning $25k/month. Financial freedom is finally a reality.",
      avatar: "/images/testimonial-3.jpg"
    },
    {
      name: "David",
      age: 19,
      country: "🇨🇦",
      income: "$50,000/month",
      testimonial: "At 17, I started with Champions and now earn $50k/month. Relocating my family from poverty to Dubai - dreams do come true.",
      avatar: "/images/testimonial-4.jpg"
    },
    {
      name: "Chris",
      age: 43,
      country: "🇺🇸",
      income: "$10,000/month", 
      testimonial: "Was at rock bottom with only $75. Champions gave me direction - now making $10k/month through content creation. Life completely changed.",
      avatar: "/images/testimonial-5.jpg"
    },
    {
      name: "Alex",
      age: 15,
      country: "🇪🇺",
      income: "$9,000/month",
      testimonial: "15 years old earning €75k through copywriting. Champions taught me to overcome laziness and build a real business.",
      avatar: "/images/testimonial-6.jpg"
    }
  ] as TestimonialItem[],

  pricing: {
    title: "Lock in your price of $850",
    subtitle: "The Champions program has been massively upgraded. The price will be increasing soon.",
    urgencyBanner: "PRICE INCREASING SOON",
    plan: {
      title: "Champions Program",
      price: "$850",
      period: "2 years", 
      savings: "Save $349.76",
      features: [
        "Simple step-by-step tutorials",
        "18+ wealth creation methods",
        "Beginner friendly",
        "Custom-made learning app", 
        "Access to millionaire mentors",
        "Community chat groups",
        "Cancel anytime, risk-free",
        "New information every day"
      ],
      championFeatures: [
        "Maximum daily coin bonus",
        "Special emergency broadcasts", 
        "Champions-only chat room",
        "2 year discounted subscription",
        "Exclusive Content and Expert Coaching"
      ],
      featured: true,
      cta: { label: "Become a Champion", href: "#apply" }
    } as PricingPlan
  },

  faq: [
    { 
      q: "Is the program suitable for beginners?", 
      a: "Absolutely. Our program is designed for people at all skill levels, with step-by-step guidance that assumes no prior experience." 
    },
    { 
      q: "How quickly will I see results?", 
      a: "Results vary based on effort and consistency. Many students see their first income within weeks, but building sustainable wealth takes time and dedication." 
    },
    { 
      q: "Do I need money to start?", 
      a: "Not necessarily. Many of our strategies require no upfront capital - like copywriting and consulting - allowing you to start with just your skills and dedication." 
    },
    { 
      q: "Does age matter?", 
      a: "No, we have successful students from age 18 to 65+. What matters is your commitment to learning and taking action." 
    },
    {
      q: "What if I have questions?",
      a: "You'll have access to our community, mentors, and support team. We're committed to helping you succeed."
    },
    { 
      q: "Is there a money-back guarantee?", 
      a: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied with the program." 
    }
  ] as FAQItem[]
}

export default homeData