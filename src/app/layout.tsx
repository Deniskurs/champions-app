import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { UrgencyBanner } from "@/components/core/UrgencyBanner";
import { LenisProvider } from "@/components/core/LenisProvider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair", 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Champions Program | Transform Your Financial Future",
  description: "Join thousands who have built sustainable wealth through our comprehensive financial education platform. Strategy-first approach to building long-term success.",
  keywords: ["wealth building", "financial education", "online business", "passive income", "entrepreneurship"],
  authors: [{ name: "Champions Program" }],
  creator: "Champions Program",
  publisher: "Champions Program",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://champions-program.com",
    title: "Champions Program | Transform Your Financial Future",
    description: "Join thousands who have built sustainable wealth through our comprehensive financial education platform.",
    siteName: "Champions Program",
  },
  twitter: {
    card: "summary_large_image",
    title: "Champions Program | Transform Your Financial Future", 
    description: "Join thousands who have built sustainable wealth through our comprehensive financial education platform.",
    creator: "@champions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased font-sans bg-black text-white">
        <LenisProvider>
          <div className="page-wrapper">
            <UrgencyBanner 
              message="THE PRICE OF THE CHAMPIONS PROGRAM WILL BE INCREASING SOON."
              ctaText="JOIN NOW"
              ctaHref="/checkout"
            />
            <main className="main-wrapper">
              {children}
            </main>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}