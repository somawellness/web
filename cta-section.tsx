"use client"

import { useEffect, useRef, useState } from "react"

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="reservar" ref={ref} className="relative py-24 md:py-32 bg-foreground overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full border border-primary-foreground" />
      </div>

      <div
        className={`relative mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl font-medium tracking-tight text-primary-foreground md:text-5xl text-balance">
          {'Decidí vivir la experiencia.'}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base text-primary-foreground/70 md:text-lg">
          Inscribite y empezá a entrenar desde la conciencia.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://somawellness.github.io/socios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-10 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02]"
          >
            Inscribite
          </a>
          <a
            href="https://wa.link/pgl949"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-primary-foreground/40 px-10 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  )
}
