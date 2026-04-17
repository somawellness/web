"use client"

import { useEffect, useRef, useState } from "react"
import { SectionLabel } from "@/components/section-label"
import { Check, Star } from "lucide-react"

const weeklyPlans = [
  { name: "Clase suelta", price: "15.000", frequency: null },
  { name: "1 vez/semana", price: "40.000", frequency: "semanal" },
  { name: "2 veces/semana", price: "70.000", frequency: "semanal" },
  { name: "3 veces/semana", price: "80.000", frequency: "semanal", recommended: true },
  { name: "4 veces/semana", price: "100.000", frequency: "semanal" },
  { name: "5 veces/semana", price: "120.000", frequency: "semanal" },
]

const longTermPlans = [
  { name: "3 meses", price: "240.000", savings: "Ideal para comenzar" },
  { name: "6 meses", price: "480.000", savings: "Mejor compromiso" },
  { name: "12 meses", price: "960.000", savings: "Máximo ahorro" },
]

export function PlansSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="planes" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel>Planes</SectionLabel>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Elegí tu plan ideal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Planes flexibles que se adaptan a tu ritmo de vida.
          </p>
        </div>

        {/* Weekly Plans */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weeklyPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-6 transition-all duration-700 ${
                plan.recommended
                  ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-md"
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  Recomendado
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-primary">${plan.price}</span>
                </div>
                <a
                  href="https://somawellness.github.io/socios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    plan.recommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Elegir plan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Long Term Plans */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {longTermPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-md ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(index + 7) * 100}ms` : "0ms",
              }}
            >
              <div className="text-center">
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                <p className="mt-1 text-xs text-primary">{plan.savings}</p>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-primary">${plan.price}</span>
                </div>
                <a
                  href="https://somawellness.github.io/socios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:bg-secondary/80"
                >
                  Elegir plan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Multisede Option */}
        <div
          className={`mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: visible ? "1000ms" : "0ms" }}
        >
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Opción + Multisede</span>
            </div>
            <span className="text-2xl font-bold text-primary">+$15.000</span>
            <span className="text-sm text-muted-foreground">Accedé a todas nuestras sedes con tu plan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
