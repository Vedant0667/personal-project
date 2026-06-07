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
        className="w-full border-t border-hairline bg-bg px-5 py-24 sm:px-8 md:py-32 lg:px-10"
      >
        <div className="mx-auto max-w-[78rem]">
          <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-accent-ink">
            Contact
          </p>

          <h2 className="display-soft max-w-3xl text-[clamp(2.5rem,7vw,5rem)] font-light leading-[0.98] tracking-[-0.025em] text-ink">
            Say hello.
          </h2>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
            Open to internships, project work, and a good conversation. Email is the
            fastest way to reach me.
          </p>

          {/* Email copy row */}
          <div className="mt-12 flex w-full max-w-md items-stretch overflow-hidden rounded-full border border-hairline bg-surface">
            <span className="min-w-0 flex-1 select-all truncate px-5 py-3.5 text-sm tracking-wide text-ink">
              {EMAIL}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 border-l border-hairline bg-accent/[0.07] px-5 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent-ink transition-colors hover:bg-accent/[0.12]"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Links */}
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            <a
              href="https://github.com/Vedant0667"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm text-ink transition-colors hover:border-hairline-strong hover:bg-surface sm:justify-start"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-subramanian-762715300/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm text-ink transition-colors hover:border-hairline-strong hover:bg-surface sm:justify-start"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="/Vedant_Subramanian_resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-transform hover:-translate-y-0.5 sm:justify-start"
            >
              <Download className="h-4 w-4" />
              Download résumé
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-hairline bg-bg px-5 py-7 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[78rem] items-center justify-between text-[0.78rem] text-muted">
          <span className="font-display tracking-tight text-ink/70">
            Vedant Subramanian
          </span>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="border-b border-hairline pb-px transition-colors hover:border-hairline-strong hover:text-ink"
            >
              Privacy
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  )
}
