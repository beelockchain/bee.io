import "./globals.css";
import { Poppins, Manrope } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

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


/* ✅ META DATA */
export const metadata: Metadata = {
  title: "Beelockchain Development Company & Game Development Company",
   icons: {
    icon: [
      { url: "/assets/images/favicon.png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
   description:"Beelockchain.io is a full-cycle AI Centric Blockchain & Game Development Company offering custom blockchain, crypto & game development services for startups and enterprises globally",
    keywords: [
    "game development company",
    "blockchain development",
    "game development agency",
    "video game development company",
    "blockchain development services",
    "blockchain development company USA",
    "Blockchain Game Development Company",
    "game development services",
    "web3 development company",
    "blockchain development companies in usa",
    "blockchain software development company",
    "dapp development services",
    "enterprise blockchain development company",
    "blockchain smart contract development",
    "game design company",
  ],
   alternates: {
    canonical: "https://www.beelockchain.io/",
  },
    other: {
    robots:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
  openGraph: {
    type: "website",
    siteName: "Beelockchain",
    url: "https://www.beelockchain.io/",
    title:
      "AI-Powered Custom Blockchain & Game Development Company | Beelockchain",
    description:
      "Beelockchain is an AI-powered blockchain and game development company delivering secure, scalable blockchain solutions, game art design service, and prediction market software for startups and enterprises.",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_IN"],
    images: [
      {
        url: "https://ik.imagekit.io/racjwdojq/ogimg.webp", 
        width: 1200,
        height: 630,
        alt:
          "Beelockchain – AI-Centric Custom Blockchain & Game Development Solution",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@beelockchain_io",
    title:
      "AI-Powered Custom Blockchain & Game Development Company | Beelockchain",
    description:
      "Build secure blockchain platforms, Web3 games, crypto solutions, and prediction market software powered by AI. Explore Beelockchain.io.",
    images: [
      "https://ik.imagekit.io/racjwdojq/ogimg.webp", 
    ],
  },
};
export default function RootLayout({ children}: { children: React.ReactNode;}) {

  
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} antialiased`}>
        {children}
          {/* Product Schema */}
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Beelockchain - AI Centric Blockchain & Game Development Company",
              image: "https://ik.imagekit.io/racjwdojq/ogimg.webp",
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
            }),
          }}
        />
        {/* tawk.to Script */}\
        
         <Script id="tawkto-script" strategy="afterInteractive">
        {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function(){
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src='https://embed.tawk.to/695b988fe013bc197da990e7/1je6snt4o';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();

          Tawk_API.onLoad = function(){
            Tawk_API.hideWidget(); // hide default bubble
          };
        `}
      </Script>
      </body>
    </html>
  );
}
