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

export interface Campus {
  id: string
  title: string
  description: string
  imageSrc: string
  professorBadge: string
}

export interface CampusesData {
  eyebrow: string
  title: string
  subtitle: string
  campuses: Campus[]
  cta: {
    label: string
    href: string
  }
}

export interface FutureData {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  tagline: string
  question: string
  cta: {
    label: string
    href: string
  }
  decorativeImages?: {
    left?: string
    right?: string
  }
}

export interface YouMustBecomeChampionData {
  urgencyBanner: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  features: string[]
  commitment: string
  cta: {
    label: string
    href: string
  }
  heroImage?: string
  bottomText?: string
}

export interface TestimonialItem {
  id: string
  name: string
  age: number
  country: string
  countryFlag?: string
  revenue: string
  testimonial: string
  image?: string
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

export interface RealWorldSystemData {
  eyebrow: string
  title: string
  content: string
  cta: { label: string; href: string }
}

export interface FinalWarningData {
  eyebrow: string
  title: string
  content: string
  cta: { label: string; href: string }
  heroImage?: string
}

export interface ThousandsOnPathData {
  eyebrow: string
  title: string
  subtitle: string
  bulletPoints: string[]
  content: {
    paragraph1: string
    paragraph2: string
    paragraph3: string
  }
  cta: { label: string; href: string }
  backgroundImage?: string
}

export interface CustomApplicationData {
  eyebrow: string
  title: string
  features: {
    title: string
    description: string
    highlights: string[]
    image?: string
  }[]
  cta: {
    label: string
    href: string
  }
}


// Main data export
export const homeData = {
  evolution: {
    logos: [
      { name: "Hustlers University", src: "/images/hustlers-university-logo.png" },
      { name: "The Real World", src: "/images/the-real-world-logo.png" },
      { name: "Champions", src: "/images/champions-logo.png" }
    ],
    title: "The Champions program is the next evolution to The Real World",
    content: "A special forces program inside the most successful financial education platform on earth.",
    highlights: [
      "CHAMPIONS reach their first 10k month 83% quicker",
      "make their first dollar 40% faster",
      "exclusive bonuses, content and perks",
      "massive student success"
    ],
    cta: { label: "become a champion", href: "#apply" }
  },
  hero: {
    eyebrow: "Strategy First",
    headline: "Champions are made over time",
    sub: "If you have a fight in 3 days, you'd train very differently than if you had a fight in two years. Making money is exactly the same.",
    primaryCta: { label: "BECOME A CHAMPION", href: "#apply" },
    secondaryCta: { label: "See Success Stories", href: "#proof" },
    posterSrc: "/images/hero-poster.svg"
  } as HeroData,

  campuses: {
    eyebrow: "8+ WORLD CLASS BUSINESS MODELS",
    title: "The Real World Campuses",
    subtitle: "When a new technology revolutionizes an industry, The Real World will be the first and only place to teach you how to profit from it.",
    campuses: [
      {
        id: "ecommerce",
        title: "E-Commerce",
        description: "Sell profitable products online. Industry experts will train you to find winning products, create the perfect store, and generate traffic on your sites.",
        imageSrc: "/images/ecom.jpg",
        professorBadge: "/images/pb.png"
      },
      {
        id: "copywriting", 
        title: "Copywriting",
        description: "Master the art of selling with words. We'll give you an easy to follow guide on how to master the art of copywriting and secure a list of high-paying clients.",
        imageSrc: "/images/copy.jpg",
        professorBadge: "/images/pb.png"
      },
      {
        id: "client-acquisition",
        title: "Client Acquisition", 
        description: "If you scroll for hours, but don't get paid for it - this is for you. Our students follow a step-by-step process to gain attention to generate 6 figures.",
        imageSrc: "/images/ca.jpg",
        professorBadge: "/images/pb.png"
      },
      {
        id: "crypto-investing",
        title: "Crypto Investing",
        description: "Profit from the world's highest-performing assets. We'll focus on attacking crypto markets from 3 angles: Long-term, medium-term, and short-term.",
        imageSrc: "/images/crypto-inv.jpg",
        professorBadge: "/images/pb.png"
      },
      {
        id: "crypto-trading",
        title: "Crypto Trading",
        description: "Take advantage of the bull run and master the art of crypto trading in the Crypto Trading campus, where we empower you to navigate the markets with precision.",
        imageSrc: "/images/crypto.jpg",
        professorBadge: "/images/pb.png"
      },
      {
        id: "business",
        title: "Business",
        description: "Master the fundamental skills of business. We'll teach you every skill the hyper successful entrepreneur of tomorrow needs to master.",
        imageSrc: "/images/business.jpg",
        professorBadge: "/images/pb.png"
      },
      {
        id: "content-creation",
        title: "Content Creation",
        description: "We live in a digital age. There are websites worth more than skyscrapers. Videos worth more than houses. We will teach you how to create valuable digital assets and how to sell them.",
        imageSrc: "/images/cc.jpg",
        professorBadge: "/images/pb.png"
      }
    ],
    cta: {
      label: "become a champion",
      href: "#apply"
    }
  } as CampusesData,

  // Legacy campus data for backward compatibility
  campusesLegacy: [
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
      id: "sarah-28",
      name: "Sarah",
      age: 28,
      country: "USA",
      countryFlag: "🇺🇸",
      revenue: "$8,000/month",
      testimonial: "Champions program helped me reach my first 10k month 83% quicker than expected. The step-by-step approach and daily mentoring made all the difference.",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: "marcus-22",
      name: "Marcus", 
      age: 22,
      country: "UK",
      countryFlag: "🇬🇧",
      revenue: "$15,000/month",
      testimonial: "Made my first dollar 40% faster than average students. Went from part-time jobs to running a 6-figure agency in just 8 months.",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: "elena-35",
      name: "Elena",
      age: 35,
      country: "Australia",
      countryFlag: "🇦🇺", 
      revenue: "$25,000/month",
      testimonial: "Single mother who transformed $75 into $2000 in 2 weeks, now earning $25k/month. Financial freedom is finally a reality.",
      image: "/images/testimonial-3.jpg"
    },
    {
      id: "david-19",
      name: "David",
      age: 19,
      country: "Canada",
      countryFlag: "🇨🇦",
      revenue: "$50,000/month",
      testimonial: "At 17, I started with Champions and now earn $50k/month. Relocating my family from poverty to Dubai - dreams do come true.",
      image: "/images/testimonial-4.jpg"
    },
    {
      id: "chris-43",
      name: "Chris",
      age: 43,
      country: "USA",
      countryFlag: "🇺🇸",
      revenue: "$10,000/month", 
      testimonial: "Was at rock bottom with only $75. Champions gave me direction - now making $10k/month through content creation. Life completely changed.",
      image: "/images/testimonial-5.jpg"
    },
    {
      id: "alex-15",
      name: "Alex",
      age: 15,
      country: "EU",
      countryFlag: "🇪🇺",
      revenue: "$9,000/month",
      testimonial: "15 years old earning €75k through copywriting. Champions taught me to overcome laziness and build a real business.",
      image: "/images/testimonial-6.jpg"
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

  customApplication: {
    eyebrow: "A FULLY CUSTOM APPLICATION",
    title: "The Real World",
    features: [
      {
        title: "Step-by-step learning",
        description: "You will get access to 100+ video courses and well-structured tutorials covering everything from the fundamentals of modern business to niche money-making strategies.",
        highlights: [
          "Easy-to-follow program for financial success",
          "New high income skills",
          "Hyper advanced learning application",
          "Accessible via mobile app or desktop"
        ],
        image: "/images/trw-system-1.jpg"
      },
      {
        title: "Daily live sessions with millionaire coaches",
        description: "Each of our professors have made over $1M USD profit using the methods they teach inside of our curriculum. They are hyper-motivated, experienced professionals who will provide you with organized coursework, daily new lessons and constant mentoring throughout your entrepreneurship.",
        highlights: [
          "From learning how to make your first dollar",
          "To scaling to a multi million dollar business", 
          "The Real World is unmatched"
        ],
        image: "/images/trw-mobile-app.jpg"
      },
      {
        title: "An exclusive community with 100k+ like-minded students",
        description: "Our online community is a supportive, high-focus environment. Everyone is on the same mission: acquiring an abundance of wealth.",
        highlights: [
          "Network with 100,000+ people on the same mission",
          "Make like-minded friends on your financial journey",
          "Celebrate your wins with people who understand ambition"
        ],
        image: "/images/trw-community.jpg"
      }
    ],
    cta: {
      label: "become a champion",
      href: "#apply"
    }
  } as CustomApplicationData,

  future: {
    eyebrow: "THIS IS THE FUTURE",
    title: "is The Real World & more",
    subtitle: "Champions is the next evolution. An exclusive community for only those who understand the commitment required to become world-class.",
    description: "",
    tagline: "A community and program designed for the top 1% of the top 1%",
    question: "Are you ready to learn from the best?",
    cta: {
      label: "become a champion",
      href: "#apply"
    },
    decorativeImages: {
      left: "/images/future-left.png",
      right: "/images/future-right.png"
    }
  } as FutureData,

  youMustBecomeChampion: {
    urgencyBanner: "PRICE INCREASING SOON",
    eyebrow: "YOU MUST BECOME A CHAMPION",
    title: "2 years to make one million dollars",
    subtitle: "Our program is reality based",
    description: "The CHAMPIONS program is realistic. With everything THE REAL WORLD has to offer, CHAMPIONS has a custom mix of features which breed fantastic results.",
    features: [
      "A more exclusive, tighter knit community",
      "Exclusive access to specific lessons and channels",
      "Maximum daily coin bonus",
      "A two year all or nothing commitment"
    ],
    commitment: "The CHAMPIONS program is for those who know that quitting is not an option. Poverty is a choice and CHAMPIONS will go through the work to choose rich.",
    cta: {
      label: "become a champion",
      href: "#apply"
    },
    heroImage: "/images/andrew-tate-success.jpg",
    bottomText: "transformation REQUIRES TENACITY"
  } as YouMustBecomeChampionData,

  realWorldSystem: {
    eyebrow: "money making is a skill",
    title: "The Real World is a comprehensive financial education system",
    content: "The world's most advanced financial education platform, which has changed hundreds of thousands of lives. Inside the app, you will learn how to make money from multi-millionaire mentors who have already walked the path. Choose from over 8 online business models to get started.",
    cta: { label: "become a champion", href: "#apply" }
  } as RealWorldSystemData,

  finalWarning: {
    eyebrow: "FINAL WARNING",
    title: "None of this will be \"easy\", but it will work",
    content: "You are entering one of the most up to date, comprehensive programs online today. A fight gym where the only thing taught is how to make CASH. You will want to give up, you will want to quit, you will think it's hard and as you continue to force yourself through your two year commitment, but with the CHAMPIONS program, you will win.",
    cta: { label: "become a champion", href: "#apply" },
    heroImage: "/images/trading-setup.jpg"
  } as FinalWarningData,

  thousandsOnPath: {
    eyebrow: "THOUSANDS ARE ALREADY ON THE PATH",
    title: "What can you expect in 2 years?",
    subtitle: "You can expect to have mobile and PC access to the greatest financial platform on earth.",
    bulletPoints: [
      "Have a question? Ask one of the professors in your pocket.",
      "Need to expand your business? Hire.",
      "Looking for clients? Follow the program."
    ],
    content: {
      paragraph1: "Your entire world will drastically change as your energy levels rise, your fitness skyrockets and your business grows.",
      paragraph2: "You will make the transformation from normal, to above average, to exceptional to champion.",
      paragraph3: "Every 6 months redefining your level of expertise and power in this world."
    },
    cta: { label: "BECOME A CHAMPION", href: "#apply" },
    backgroundImage: "/images/luxury-lifestyle-bg.jpg"
  } as ThousandsOnPathData,


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