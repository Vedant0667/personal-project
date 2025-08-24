import { memo } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

function Section({ id, title, subtitle, children }: SectionProps) {
  const isAboutSection = id === "about";
  const paddingClass = isAboutSection 
    ? "mx-auto max-w-6xl px-5 pt-32 pb-14 sm:pt-40 sm:pb-16"
    : "mx-auto max-w-6xl px-5 py-14 sm:py-16";
    
  return (
    <section id={id} className="w-full">
      <div className={paddingClass}>
        {title && (
          <header className="mb-6 sm:mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default memo(Section);