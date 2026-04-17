"use client"

import { useEffect, useRef, useState } from "react"
import { SectionLabel } from "@/components/section-label"
import { Leaf, Eye, Scale, Heart } from "lucide-react"

const pillars = [
  {
    icon: Leaf,
    title: "Calma Activa",
    description: "Entrenamos desde la inteligencia, sin exigencia excesiva.",
  },
  {
    icon: Eye,
    title: "Presencia y Conciencia",
    description:
      "Te invitamos a habitar el movimiento con atencion plena.",
  },
  {
    icon: Scale,
    title: "Equilibrio Integral",
    description: "Armonizamos cuerpo y mente en cada sesion.",
  },
  {
    icon: Heart,
    title: "Cuidado Corporal",
    description:
      "Fortalecemos y restauramos el cuerpo de manera segura.",
  },
]

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="propuesta" ref={ref} className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel>Propuesta de valor</SectionLabel>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Bienestar y conciencia corporal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            En Soma trabajamos sobre estos pilares que se integran en cada
            sesion.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group rounded-2xl border border-border bg-background p-8 transition-all duration-700 hover:shadow-md hover:border-primary/30 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
