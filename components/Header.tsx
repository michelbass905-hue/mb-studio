"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Projets" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-[#161614]/85 px-4 py-2.5 shadow-2xl shadow-black/70 backdrop-blur-md transition-all sm:px-6 sm:py-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-base font-bold tracking-tight text-[#f1efe7] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg px-1.5 py-0.5"
        >
          <span>MB</span>
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 sm:gap-2 text-xs font-medium text-zinc-400 sm:text-sm md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-[#f1efe7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-medium text-orange-300 transition hover:border-orange-500/60 hover:bg-orange-500/20 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <span className="hidden sm:inline">Disponible pour projets</span>
            <span className="sm:hidden">Disponible</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              ↗
            </span>
          </a>

          {/* Bouton menu — mobile */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f1efe7] transition hover:border-orange-500/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu déroulant — mobile */}
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 mt-2 md:hidden">
          {isMenuOpen && (
            <nav
              aria-label="Navigation mobile"
              className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#161614]/95 p-2 shadow-2xl shadow-black/70 backdrop-blur-md"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-[#f1efe7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}