import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import ScrollReset from "@/components/ScrollReset";
import Analytics from "./analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://vedantsubramanian.com'),
  title: "Vedant Subramanian - Student, Developer & Innovator",
  description: "High school student at Greenhill School creating innovative solutions and meaningful digital experiences. Skilled in Python, Next.js, and community operations.",
  keywords: "Vedant Subramanian, student developer, Greenhill School, Python, Next.js, web development, innovation",
  authors: [{ name: "Vedant Subramanian" }],
  creator: "Vedant Subramanian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vedantsubramanian.com",
    title: "Vedant Subramanian - Student, Developer & Innovator", 
    description: "High school student at Greenhill School creating innovative solutions and meaningful digital experiences.",
    siteName: "Vedant Subramanian",
    images: [{
      url: "/headshot-vedant.jpeg",
      width: 1200,
      height: 630,
      alt: "Vedant Subramanian headshot"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Subramanian - Student, Developer & Innovator",
    description: "High school student creating innovative solutions and meaningful digital experiences.",
    images: ["/headshot-vedant.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here"  // To be added when site is deployed
  }
};

const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans", 
  display: "optional",
  preload: true 
});
const display = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display", 
  display: "optional",
  preload: true 
});
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono", 
  display: "optional" 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bgStyle: React.CSSProperties = {
    backgroundColor: "#FFFBEB",
    backgroundImage: `
      radial-gradient(rgba(245,158,11,0.16) 1.25px, transparent 1.25px),
      radial-gradient(rgba(245,158,11,0.10) 1.25px, transparent 1.25px)
    `,
    backgroundPosition: "0 0, 14px 14px",
    backgroundSize: "28px 28px",
    backgroundAttachment: "fixed",
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#FFFBEB" />
        <link rel="canonical" href="https://vedantsubramanian.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/age-17-photo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vedant Subramanian",
              "jobTitle": "Student Developer",
              "url": "https://vedantsubramanian.com",
              "sameAs": [],
              "alumniOf": "Greenhill School",
              "knowsAbout": ["Python", "Next.js", "Web Development", "Community Operations"]
            })
          }}
        />
      </head>
      <body style={bgStyle} className="text-slate-900 antialiased font-sans-var">
        {/* Google Analytics - External Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VV120HEYG4"
          strategy="afterInteractive"
        />

        {/* Google Analytics - Initialization Script */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VV120HEYG4');
          `}
        </Script>

        <Analytics />
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
