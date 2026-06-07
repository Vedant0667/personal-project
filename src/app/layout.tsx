import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import ScrollReset from "@/components/ScrollReset";
import Analytics from "./analytics";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL('https://vedantsubramanian.com'),
  title: "Vedant Subramanian — Developer & Founder",
  description: "Vedant Subramanian is an incoming finance freshman at UT Austin who builds software and runs Shelter Aid TX, a Dallas shoe-donation nonprofit that has donated 1,700+ pairs of shoes.",
  keywords: "Vedant Subramanian, UT Austin, McCombs, finance, software developer, Next.js, Shelter Aid TX",
  authors: [{ name: "Vedant Subramanian" }],
  creator: "Vedant Subramanian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vedantsubramanian.com",
    title: "Vedant Subramanian — Developer & Founder",
    description: "Incoming finance freshman at UT Austin who builds software and runs Shelter Aid TX, a Dallas shoe-donation nonprofit.",
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
    title: "Vedant Subramanian — Developer & Founder",
    description: "Incoming finance freshman at UT Austin. Builds software and runs Shelter Aid TX, a Dallas shoe-donation nonprofit.",
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
  display: "swap",
  preload: true,
});

// High-contrast display serif. Optical size + soft axes for editorial headings.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  axes: ["opsz", "SOFT", "WONK"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#f6f2e9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#161310" media="(prefers-color-scheme: dark)" />
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
      <body className="antialiased font-sans-var bg-bg text-ink">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
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
        </ThemeProvider>
      </body>
    </html>
  );
}
