"use client"

import { useState } from "react"
import { Copy, Check, Github, Linkedin, Download } from "lucide-react"

const EMAIL = "vedant.subramanian@gmail.com"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <section
        id="contact"
        className="w-full bg-black dark:bg-[#FFF9F0] py-24 md:py-32 px-4 md:px-8 lg:px-10 transition-colors border-t border-[#FFFBEB]/5 dark:border-black/5"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-amber-400 mb-5 font-medium">
            Contact
          </p>

          <h2
            className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-[#FFFBEB] dark:text-black leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700 }}
          >
            Let&apos;s connect.
          </h2>

          <p className="text-[#FFFBEB]/50 dark:text-black/50 text-base md:text-lg max-w-md mb-12 leading-relaxed">
            Whether it&apos;s a project, internship, or just a conversation — I&apos;d love to hear from you.
          </p>

          {/* Email copy row */}
          <div className="flex items-stretch w-fit mb-8 rounded-lg overflow-hidden border border-[#FFFBEB]/10 dark:border-black/10">
            <span className="px-5 py-3 text-[#FFFBEB]/70 dark:text-black/70 text-sm font-mono tracking-wide bg-[#FFFBEB]/3 dark:bg-black/3 select-all">
              {EMAIL}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-3 bg-amber-400/10 hover:bg-amber-400/20 border-l border-[#FFFBEB]/10 dark:border-black/10 text-amber-400 text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Social links + Resume */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/Vedant0667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#FFFBEB]/10 dark:border-black/10 text-[#FFFBEB]/50 dark:text-black/50 hover:text-[#FFFBEB] dark:hover:text-black hover:border-[#FFFBEB]/30 dark:hover:border-black/30 text-sm transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-subramanian-762715300/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#FFFBEB]/10 dark:border-black/10 text-[#FFFBEB]/50 dark:text-black/50 hover:text-[#FFFBEB] dark:hover:text-black hover:border-[#FFFBEB]/30 dark:hover:border-black/30 text-sm transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/Vedant_Subramanian_resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 hover:bg-amber-400/20 hover:border-amber-400/50 text-sm transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black dark:bg-[#FFF9F0] border-t border-[#FFFBEB]/5 dark:border-black/5 py-6 px-4 md:px-8 lg:px-10 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-[#FFFBEB]/20 dark:text-black/20 text-xs">
            © 2026 Vedant Subramanian
          </span>
          <span className="text-[#FFFBEB]/15 dark:text-black/15 text-xs">
            Built with Next.js
          </span>
        </div>
      </footer>
    </>
  )
}
