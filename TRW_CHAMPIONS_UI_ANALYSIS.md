# TRW Champions Website UI/UX Analysis & Implementation Guide

## Visual Design System

### Color Palette
- **Background**: `rgb(11, 10, 9)` - Near black
- **Primary Text**: `rgb(255, 248, 241)` - Off-white/cream
- **Accent Gold**: `#d4af37` / `#ffd700` - Premium gold for highlights
- **Accent Red**: `#dc143c` - Crimson for emphasis
- **Muted**: Gray tones for secondary text

### Typography
- **H1**: Playfair Display, 100px, 400 weight, -0.64px letter-spacing
- **Body**: Work Sans Variable, 16px base
- **Uppercase**: Used extensively for CTAs and labels
- **Line Heights**: Tight for headings (1:1), relaxed for body (1.6)

### Key UI Components to Match

## 1. Hero Section
- **Background**: Diamond pattern SVG overlay on dark
- **Badge Animation**: "BECOME A CHAMPION" with pulse/glow effect
- **Title**: Large serif font with tight line height
- **CTA Button**: 
  - Double-text effect (text appears twice for animation)
  - Arrow icons that animate on hover
  - Golden underline that expands
  - Text slides up on hover

## 2. Video Section
- **Embedded Vimeo Player**: Custom controls overlay
- **Logo Evolution Display**: HU → War Room → TRW progression
- **Diagonal Background Elements**: Creates depth

## 3. Statistics Section
- **Highlighted Numbers**: Golden color with emphasis
- **Image Gallery**: 5 preview images with lightbox
- **Text Animations**: Fade-in on scroll with stagger

## 4. Campus Carousel (Swiper)
- **Card Design**: 
  - Icon badge at top
  - Title and description
  - Hover: Slight scale and shadow
- **Navigation**: Arrow buttons, drag/swipe enabled
- **Auto-rotation**: With pause on hover

## 5. Testimonial Carousel
- **Card Structure**:
  - Profile image with gradient border
  - Name, age, country flag
  - Revenue badge (green accent)
  - Testimonial text
  - Hover: Lift effect with shadow
- **Multi-item Display**: 3-4 cards visible
- **Navigation**: Previous/Next arrows

## 6. Review Cards
- **Video Testimonials**: 
  - Profile image
  - Quote text
  - Star rating display
  - Name and revenue info

## 7. Pricing Section
- **Card Design**:
  - Dark gradient background
  - Price prominently displayed
  - Feature list with checkmarks
  - Champions-only features highlighted
  - Golden border accent

## 8. FAQ Accordion
- **Minimal Design**: Simple expand/collapse
- **Icon Animation**: Plus rotates to X
- **Smooth height transitions**

## Animation Effects

### Scroll Animations (GSAP/Framer Motion equivalents)
1. **Fade Up**: Elements fade in and move up 20-30px
2. **Stagger**: Sequential animations with 0.1-0.2s delays
3. **Scale In**: Cards scale from 0.95 to 1
4. **Text Reveal**: Line-by-line text animations

### Hover Effects
1. **CTAs**: 
   - Background slides in from left
   - Text color inverts
   - Arrow animates right
2. **Cards**:
   - Transform: translateY(-5px)
   - Box-shadow increases
   - Slight scale (1.02)
3. **Images**:
   - Zoom effect (scale 1.1)
   - Brightness adjustment

### Interactive Elements
1. **Sticky Navigation**: Background blur on scroll
2. **Parallax Effects**: Background images move slower
3. **Smooth Scroll**: Sections linked with smooth behavior
4. **Video Autoplay**: Muted video in hero

## Implementation Priorities

### Must-Have Features
1. Dark theme with golden accents
2. Responsive carousel components
3. Smooth scroll animations
4. CTA hover effects
5. Mobile-responsive design

### Technical Stack Mapping
- **GSAP ScrollTrigger** → Framer Motion scroll animations
- **Swiper.js** → Embla Carousel
- **Webflow interactions** → Framer Motion variants
- **Custom CSS animations** → Tailwind + Framer Motion

### Component Structure
```
- Hero (with video background)
- StatsSection (with lightbox gallery)
- CampusCarousel (Embla)
- TestimonialCarousel (Embla)
- ReviewSection (video cards)
- PricingTable (feature comparison)
- FAQAccordion (shadcn/ui)
- Footer (minimal links)
```

## Critical UI Details

1. **Button Style**: No rounded corners, uppercase text, golden underline
2. **Section Spacing**: Large padding (100px+ desktop)
3. **Text Emphasis**: Strategic use of golden highlights
4. **Background Textures**: Subtle patterns and gradients
5. **Mobile Menu**: Full-screen overlay with animated entrance

## Performance Considerations
- Lazy load images and videos
- Optimize carousel performance
- Use CSS transforms for animations
- Implement intersection observer for scroll triggers