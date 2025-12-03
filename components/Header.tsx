import React, { useState, useEffect } from "react";

interface HeaderProps {
  initials: string;
  name?: string;
}

const navLinks = [
  { name: "Case Studies", href: "#projects", id: "projects" },
  { name: "Strategy", href: "#vision", id: "vision" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Header: React.FC<HeaderProps> = ({ initials, name }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Feature: Scroll-Triggered Navigation Reveal
      setIsScrolled(scrollY > 50);

      // Trigger line: The point on screen where we consider a section "active"
      const triggerPoint = window.innerHeight * 0.4;

      let current = "";

      // Iterate through links to find which section is currently active
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // If the top of the element is above the trigger point, it's a candidate
        if (rect.top <= triggerPoint) {
          current = link.id;
        }
      }

      // Edge case: If we are at the very bottom of the page, force the last item (Contact) to be active.
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 20) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 z-50 w-full border-b transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isScrolled 
          ? "border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 opacity-100 translate-y-0 pointer-events-auto visible" 
          : "border-transparent bg-transparent opacity-0 -translate-y-5 pointer-events-none invisible"
        }
      `}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 font-bold text-lg shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {initials}
          </div>
          <span className="font-bold tracking-tight hidden sm:inline-block text-slate-100">
            {name || "Yasser Riaz"}
          </span>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isBlurred = activeSection && !isActive;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`
                  transition-all duration-500 ease-in-out
                  ${isActive 
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-105" 
                    : "text-slate-400 hover:text-slate-200"
                  }
                  ${isBlurred ? "blur-[1px] opacity-60 hover:blur-0 hover:opacity-100" : ""}
                `}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};