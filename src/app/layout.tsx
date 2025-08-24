import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ScrollReset from "@/components/ScrollReset";

export const metadata: Metadata = {
  title: "Vedant Subramanian",
  description: "Personal site",
};

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

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
      <body style={bgStyle} className="text-slate-900 antialiased">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
