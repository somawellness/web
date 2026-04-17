"use client"

import { useEffect, useRef, useState } from "react"
import { SectionLabel } from "@/components/section-label"
import { MapPin } from "lucide-react"

const locations = [
  {
    name: "Amarras",
    address: "Sara Pinasco de Julierac 1759",
    description: "Nuestro primer hogar. Un espacio calido en el corazon del puerto.",
  },
  {
    name: "Faro",
    address: "Laprida 4603",
    description:
      "A metros de la costanera. Incluye clases de Yoga y Actividad Fisica Controlada.",
  },
  {
    name: "Centro",
    address: "Hipólito Yrigoyen 2916",
    description: "En el corazon de la ciudad. Accesible y estrategico.",
  },
]

export function LocationsSection() {
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
    <section id="sedes" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel>Nuestras sedes</SectionLabel>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Tres espacios, una sola filosofia.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {locations.map((loc, index) => (
            <div
              key={loc.name}
              className={`group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:shadow-md hover:border-primary/30 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {loc.name}
              </h3>
              <p className="mt-2 text-sm text-primary">{loc.address}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {loc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
