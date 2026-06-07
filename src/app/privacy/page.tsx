import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Vedant Subramanian",
  description:
    "How this site handles analytics and data. The short version: it uses Google Analytics and collects nothing else.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full bg-bg px-5 py-16 sm:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-2xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.82rem] text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        {/* Header */}
        <header className="mt-10 border-b border-hairline pb-10">
          <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-accent-ink">
            Privacy
          </p>
          <h1 className="display-soft text-[clamp(2.25rem,6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.025em] text-ink">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-muted">Last updated: June 2026</p>
        </header>

        {/* Body */}
        <div className="mt-12 space-y-12">
          <section>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              The short version
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
              This is a personal portfolio. It has no accounts, no logins, and no
              forms that store your information. The only data it gathers is
              anonymous usage analytics, described below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              Analytics
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
              This site uses Google Analytics to understand how it&apos;s used —
              roughly how many people visit and which pages they read. Google
              Analytics sets cookies and collects a limited set of data on my
              behalf, including:
            </p>
            <ul className="mt-5 space-y-2.5 text-[1.02rem] leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-[0.6em] h-1 w-1 flex-shrink-0 rounded-full bg-accent-ink" />
                <span>Pages you visit and how long you stay</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.6em] h-1 w-1 flex-shrink-0 rounded-full bg-accent-ink" />
                <span>
                  Approximate location (derived from your IP address, not a
                  precise one)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.6em] h-1 w-1 flex-shrink-0 rounded-full bg-accent-ink" />
                <span>
                  Device and browser details, like screen size and operating
                  system
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.6em] h-1 w-1 flex-shrink-0 rounded-full bg-accent-ink" />
                <span>How you reached the site, such as a search or a link</span>
              </li>
            </ul>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              This data is aggregated and anonymous — it isn&apos;t tied to your
              name or identity, and I don&apos;t use it to track individuals. How
              Google handles the data it collects is covered by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-ink underline decoration-hairline-strong underline-offset-2 transition-colors hover:decoration-current"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              What I don&apos;t collect
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
              The site itself stores no personal data. There are no sign-ups,
              newsletters, or contact forms here. If you email me, that&apos;s a
              direct conversation between us — nothing on this site logs it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              Opting out
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
              You can block analytics cookies through your browser settings, or
              install Google&apos;s{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-ink underline decoration-hairline-strong underline-offset-2 transition-colors hover:decoration-current"
              >
                official opt-out add-on
              </a>
              . The site works exactly the same either way.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              Questions
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
              Reach me at{" "}
              <a
                href="mailto:vedant.subramanian@gmail.com"
                className="text-accent-ink underline decoration-hairline-strong underline-offset-2 transition-colors hover:decoration-current"
              >
                vedant.subramanian@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-hairline pt-7 text-[0.78rem] text-muted">
          <Link
            href="/"
            className="font-display tracking-tight text-ink/70 transition-colors hover:text-ink"
          >
            Vedant Subramanian
          </Link>
        </footer>
      </div>
    </main>
  );
}
