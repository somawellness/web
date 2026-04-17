import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { LocationsSection } from "@/components/locations-section"
import { SchedulesSection } from "@/components/schedules-section"
import { PlansSection } from "@/components/plans-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <LocationsSection />
      <SchedulesSection />
      <PlansSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
