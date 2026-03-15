import React, { useEffect, useRef, useMemo, useState } from "react";
import { ChevronDown, Sun, Moon, Github, Linkedin, Download } from "lucide-react";
import { useTheme } from "next-themes";

// Inline Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function Component() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShowButtons(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen text-foreground transition-colors bg-black dark:bg-[#FFF8EC] text-[#f5f5f5] dark:text-black"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Signature */}
          <div className="text-4xl text-[#f5f5f5] dark:text-black" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
            V
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => {
                const newTheme = theme === "light" ? "dark" : "light";
                console.log("Switching theme from", theme, "to", newTheme);
                setTheme(newTheme);
              }}
              className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-[#f5f5f5]" />
              ) : (
                <Sun className="h-5 w-5 text-black" />
              )}
            </button>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col">
        {/* Centered Main Name - Always Perfectly Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="VEDANT"
                delay={100}
                animateBy="letters"
                direction="top"
                className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap text-[#FFFBEB] dark:text-black"
                style={{ fontFamily: "'Fira Code', monospace", fontWeight: 400 }}
              />
            </div>
            <div>
              <BlurText
                text="SUBRAMANIAN"
                delay={100}
                animateBy="letters"
                direction="top"
                className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap text-[#FFFBEB] dark:text-black"
                style={{ fontFamily: "'Fira Code', monospace", fontWeight: 400 }}
              />
            </div>

            {/* Profile Picture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img
                  src="/IMG_0053.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom group: tagline + CTAs + socials + scroll */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full px-6 flex flex-col items-center gap-4 md:gap-5">
          <BlurText
            text="Creating innovative solutions and meaningful digital experiences"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-[#FFFBEB] dark:text-black"
            style={{ fontFamily: "'Antic', sans-serif" }}
          />

          {/* CTAs */}
          <div
            style={{
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
            className="flex items-center gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-2 rounded-md bg-amber-400 text-black text-sm font-semibold tracking-wide hover:bg-amber-300 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-md border border-[#FFFBEB]/20 dark:border-black/20 text-[#FFFBEB] dark:text-black text-sm font-medium tracking-wide hover:bg-[#FFFBEB]/5 dark:hover:bg-black/5 hover:border-[#FFFBEB]/40 dark:hover:border-black/40 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/Vedant_Subramanian_resume.pdf"
              download
              className="flex items-center gap-1.5 px-5 py-2 rounded-md border border-[#FFFBEB]/20 dark:border-black/20 text-[#FFFBEB] dark:text-black text-sm font-medium tracking-wide hover:bg-[#FFFBEB]/5 dark:hover:bg-black/5 hover:border-[#FFFBEB]/40 dark:hover:border-black/40 transition-colors duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Social icons */}
          <div
            style={{
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
            }}
            className="flex items-center gap-3"
          >
            <a
              href="https://github.com/Vedant0667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#FFFBEB]/40 dark:text-black/40 hover:text-[#FFFBEB] dark:hover:text-black transition-colors duration-200 text-xs tracking-wide"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <span className="text-[#FFFBEB]/15 dark:text-black/15 text-xs">·</span>
            <a
              href="https://www.linkedin.com/in/vedant-subramanian-762715300/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#FFFBEB]/40 dark:text-black/40 hover:text-[#FFFBEB] dark:hover:text-black transition-colors duration-200 text-xs tracking-wide"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>

          {/* Scroll indicator */}
          <ChevronDown className="w-5 h-5 text-[#f5f5f5]/30 dark:text-black/30 mt-1" />
        </div>
      </main>
    </div>
  );
}
