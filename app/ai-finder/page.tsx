import Heropage from "./components/hero";
import AifinderChatbot from "./components/Ai-finderChatbot";
import FAQ from "./components/Faq";
import ContactSection from "../components/ContactSection";
import GlobalMap from "../components/GlobalMap";
import type { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "AI Project Finder | Instant Idea Analysis Tool - Beelockchain.io",
  description:
    "Beelockchain’s AI Project Finder helps founders and enterprises turn ideas into clear, build-ready development solutions using AI.",

  keywords: [
    "software development solution",
    "custom software development services",
    "custom business software",
    "software development solution finder",
    "ai powered blockchain development"
  ],

  authors: [{ name: "Beelockchainio" }],

  alternates: {
    canonical: "https://beelockchain.io/ai-project-finder",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

 openGraph: {
  title: "AI Project Finder | Beelockchainio",
  description:
    "Beelockchain’s AI Project Finder instantly understands your idea, analyzes it with EVO AI, and maps it to the right software development solution.",
  url: "https://beelockchain.io/ai-project-finder",
  siteName: "Beelockchain.io",
  type: "website",
  locale: "en_US",

  alternateLocale: [
    "en_GB",
    "en_AE",
    "en_IN",
  ],

  images: [
    {
      url: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/Ai-Project+finder+page+OG+image.webp", // replace with actual OG image URL
      width: 1200,
      height: 630,
      alt: "AI Project Finder | Beelockchainio",
      type: "image/webp",
    },
  ],
},

  twitter: {
     card: "summary_large_image",
  title: "AI Project Finder | Beelockchain",
  description:
    "Beelockchain’s AI Project Finder instantly understands your idea, analyzes it with EVO AI, and maps it to the right software development solution.",
  site: "@Beelockchain",
  creator: "@Beelockchain",
   images: [
    {
      url: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/Ai-Project+finder+page+OG+image.webp", // replace if needed
      alt: "AI Project Finder | Beelockchainio",
    },
  ],
  },
};

export default function AiFinderPage() {
  return (
    <>
    <Script
      id="ai-project-finder-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://beelockchain.io/ai-project-finder",
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [
              "h1",
              ".ai-project-finder-intro",
              ".faq-section"
            ],
          },
        }),
      }}
    />

    <main className="bg-black text-white">

      <Heropage/>
      <AifinderChatbot/>
      <FAQ/>
      <ContactSection/>
      <GlobalMap/>
      
    </main></>

  );
}