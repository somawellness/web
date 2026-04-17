import Image from "next/image"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-studio.jpg"
        alt="Interior de estudio Soma Wellness con reformers de Pilates"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Image
          src="/images/soma-logo.png"
          alt=""
          width={280}
          height={112}
          className="mb-8 h-16 w-auto opacity-0 animate-fade-in-up md:h-24 lg:h-28"
          aria-hidden="true"
        />

        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-primary-foreground opacity-0 animate-fade-in-up animation-delay-200 md:text-6xl lg:text-7xl text-balance">
          Movimiento inteligente.
          <br />
          Bienestar que se siente.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 opacity-0 animate-fade-in-up animation-delay-400 md:text-lg">
          Un ambiente boutique diseñado para transformar tu cuerpo desde la
          conciencia.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 opacity-0 animate-fade-in-up animation-delay-600 sm:flex-row">
          <a
            href="https://somawellness.github.io/socios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02]"
          >
            Inscribite
          </a>
          <a
            href="https://wa.link/pgl949"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-primary-foreground/40 px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
          >
            Contactanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/40 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  )
}
