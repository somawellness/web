"use client"

import { useEffect, useRef, useState } from "react"
import { SectionLabel } from "@/components/section-label"

export function AboutSection() {
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
    <section
      id="nosotros"
      ref={ref}
      className="py-24 md:py-32 bg-card"
    >
      <div
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionLabel>Quienes somos</SectionLabel>

        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
          Un refugio contemporaneo
        </h2>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Soma Wellness es un estudio donde el movimiento deja de ser exigencia y
          se convierte en experiencia consciente. Un espacio donde cada detalle
          esta pensado para que conectes cuerpo y mente.
        </p>

        <p className="mt-6 font-serif text-xl italic text-primary md:text-2xl">
          Entrenar es conectar.
        </p>
      </div>
    </section>
  )
}
