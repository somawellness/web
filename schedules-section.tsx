"use client"

import { useEffect, useRef, useState } from "react"
import { SectionLabel } from "@/components/section-label"
import { Clock } from "lucide-react"

interface DisciplineSchedule {
  name: string
  weekdays: string
  saturday?: string
}

interface LocationSchedule {
  location: string
  disciplines: DisciplineSchedule[]
}

const scheduleData: LocationSchedule[] = [
  {
    location: "Amarras",
    disciplines: [
      {
        name: "Pilates Reformer",
        weekdays: "Lunes a Viernes: 6:00 - 7:00 - 8:00 - 9:00 - 10:00 - 14:00 - 15:00 - 16:00 - 17:00 - 18:00 - 19:00 - 20:00",
        saturday: "Sábados: 9:00 - 10:00 - 11:00",
      },
    ],
  },
  {
    location: "Centro",
    disciplines: [
      {
        name: "Pilates Reformer",
        weekdays: "Lunes a Viernes: 6:00 - 7:00 - 8:00 - 9:00 - 16:00 - 17:00 - 18:00 - 19:00",
        saturday: "Sábados: 9:00 - 10:00 - 11:00",
      },
      {
        name: "Yoga",
        weekdays: "Lunes y Miércoles: 14:00 - 20:00 | Viernes: 14:00",
      },
      {
        name: "Stretching",
        weekdays: "Martes y Jueves: 20:00",
      },
    ],
  },
  {
    location: "Faro",
    disciplines: [
      {
        name: "Pilates Reformer",
        weekdays: "Lunes a Viernes: 8:00 - 9:00 - 10:00 - 16:00 - 17:00 - 18:00 - 19:00",
      },
      {
        name: "Yoga",
        weekdays: "Lunes, Miércoles y Viernes: 8:00",
      },
      {
        name: "Actividad Física Adaptada",
        weekdays: "Lunes, Miércoles y Viernes: 16:00",
      },
      {
        name: "Movimiento Activo",
        weekdays: "Lunes, Miércoles y Viernes: 17:30",
      },
    ],
  },
]

export function SchedulesSection() {
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
    <section id="horarios" ref={ref} className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel>Horarios</SectionLabel>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Encontrá tu clase ideal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Clases disponibles de lunes a sábado en nuestros estudios boutique.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {scheduleData.map((schedule, index) => (
            <div
              key={schedule.location}
              className={`rounded-2xl border border-border bg-background p-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(index + 1) * 150}ms` : "0ms",
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {schedule.location}
                </h3>
              </div>

              <div className="space-y-5">
                {schedule.disciplines.map((discipline) => (
                  <div key={discipline.name} className="border-t border-border pt-4 first:border-0 first:pt-0">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      {discipline.name}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {discipline.weekdays}
                    </p>
                    {discipline.saturday && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {discipline.saturday}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
