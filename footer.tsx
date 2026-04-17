import Image from "next/image"
import { Phone, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/soma-logo.png"
              alt="Soma Wellness"
              width={140}
              height={56}
              className="h-12 w-auto opacity-80"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
            <a
              href="tel:3424365458"
              className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              <span>342 - 4365458</span>
            </a>
            <a
              href="mailto:somawellnessarg@gmail.com"
              className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>somawellnessarg@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/somawellness.arg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
              <span>@somawellness.arg</span>
            </a>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            {'Soma Wellness \u00A9 2026. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
