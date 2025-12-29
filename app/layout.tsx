import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Manrope } from "next/font/google";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

/* ✅ METADATA */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.beelockchain.io"),

  title:
    "AI-Powered Custom Blockchain & Game Development Company | Beelockchain",

  description:
    "Beelockchain is an AI-powered blockchain and game development company delivering secure, scalable blockchain solutions, game art design service, and prediction market software for startups and enterprises.",

  alternates: {
    canonical: "https://www.beelockchain.io/",
    languages: {
      "en-US": "https://www.beelockchain.io/",
      "en-GB": "https://www.beelockchain.io/",
      "en-AE": "https://www.beelockchain.io/",
      "en-IN": "https://www.beelockchain.io/",
    },
  },

  openGraph: {
    type: "website", // og:type
    siteName: "Beelockchain", // og:site_name
    url: "https://www.beelockchain.io/", // og:url
    title:
      "AI-Powered Custom Blockchain & Game Development Company | Beelockchain",
    description:
      "Beelockchain is an AI-powered blockchain and game development company delivering secure, scalable blockchain solutions, game art design service, and prediction market software for startups and enterprises.",
    locale: "en_US",
    images: [
      {
        url: "https://www.beelockchain.io/og/beelockchain-og.webp",
        width: 1200,
        height: 630,
        alt:
          "Beelockchain – AI-Centric Custom Blockchain & Game Development Solution",
        type: "image/webp", // og:image:type
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@beelockchain_io",
    title:
      "AI-Powered Custom Blockchain & Game Development Company | Beelockchain",
    description:
      "Build secure blockchain platforms, Web3 games, crypto solutions, and prediction market software powered by AI.",
    images: ["https://www.beelockchain.io/og/beelockchain-og.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Beelockchain - AI Centric Blockchain & Game Development Company",
    image: "https://www.beelockchain.io/og/beelockchain-og.webp",
    description:
      "Top AI-centric Custom Blockchain & Game Development Company developed DApps, crypto platforms, game art design, and prediction market software.",
    brand: {
      "@type": "Brand",
      name: "Beelockchain.io",
    },
    offers: {
      "@type": "AggregateOffer",
      url: "https://www.beelockchain.io/",
      priceCurrency: "USD",
      lowPrice: "5000",
      highPrice: "10000",
      offerCount: "10",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "1587",
    },
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} antialiased`}>
        {/* ✅ JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
