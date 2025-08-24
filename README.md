# Champions Program - Next.js Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS. Converted from a complex HTML design into a clean, maintainable React application.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS v4** with custom design tokens
- **shadcn/ui** components for consistent UI
- **Framer Motion** for smooth animations
- **Embla Carousel** for image sliders
- **Inter + Playfair Display** fonts via `next/font`
- Fully responsive design
- Accessibility-focused
- SEO optimized

## 🏗️ Architecture

### Core Components (`src/components/core/`)
- `Container.tsx` - Responsive container wrapper
- `Section.tsx` - Standardized section layout
- `CTA.tsx` - Call-to-action button component
- `Logo.tsx` - Brand logo component

### Block Components (`src/components/blocks/`)
- `Nav.tsx` - Navigation with mobile menu
- `Hero.tsx` - Hero section with video poster
- `Offers.tsx` - Programs and pricing sections
- `ProofWall.tsx` - Testimonials carousel
- `FAQ.tsx` - Accordion FAQ section
- `Apply.tsx` - Final CTA form
- `Footer.tsx` - Site footer

### Design System
- Custom color palette (crimson accent, gold secondary)
- Typography scale optimized for readability
- Consistent spacing and border radius
- Dark mode support
- Focus-visible styles for accessibility

## 🎨 Design Tokens

```css
:root {
  --bg: 0 0% 100%;
  --text: 0 0% 4%;
  --accent: 350 84% 42%; /* Crimson */
  --accent-2: 45 100% 50%; /* Gold */
  --muted: 0 0% 40%;
  --card: 0 0% 98%;
  --border: 0 0% 86%;
}
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx           # Main page composition
│   └── globals.css        # Global styles & design tokens
├── components/
│   ├── core/              # Reusable core components
│   ├── blocks/            # Page section components
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── data.ts            # Content data & types
│   └── utils.ts           # Utility functions
└── public/
    └── images/            # Placeholder images (SVG)
```

## 🎯 Key Improvements

### From Original HTML:
- ❌ Removed external dependencies (GSAP, Swiper, Webflow CSS)
- ❌ Replaced copyrighted content with placeholders
- ❌ Removed inline styles and complex CSS

### To Clean React:
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Tailwind utilities for styling
- ✅ Framer Motion for animations
- ✅ Embla for carousels
- ✅ Next.js optimization features

## 🌐 Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any platform supporting Node.js

## 📝 Content Management

All content is managed through `src/lib/data.ts`:
- Hero section content
- Program/course data
- Testimonials
- FAQ items
- Pricing information

Update the data file to modify site content without touching components.

## 🎨 Customization

1. **Colors**: Update CSS variables in `globals.css`
2. **Typography**: Modify font imports in `layout.tsx`
3. **Content**: Edit `lib/data.ts`
4. **Components**: Extend or modify components in `components/`

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix)
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Icons**: Lucide React
- **Fonts**: next/font/google

Built following modern React and Next.js best practices with accessibility and performance in mind.