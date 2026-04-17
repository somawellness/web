"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Sedes", href: "#sedes" },
  { label: "Horarios", href: "#horarios" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/images/soma-logo.png"
            alt="Soma Wellness"
            width={120}
            height={48}
            className="h-10 w-auto transition-opacity duration-300 md:h-12"
            priority
          />
        </a>

        {/* Desktop / Tablet links — visible from md breakpoint */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons — visible from md breakpoint */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.link/pgl949"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Contactanos
          </a>
          <a
            href="https://somawellness.github.io/socios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            Inscribite
          </a>
        </div>

        {/* Mobile hamburger — only visible below md */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu — only below md */}
      {mobileOpen && (
        <div className="bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 pt-4 md:hidden animate-fade-in-up">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="https://wa.link/pgl949"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary"
            >
              Contactanos
            </a>
            <a
              href="https://somawellness.github.io/socios/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Inscribite
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
