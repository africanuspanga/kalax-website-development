import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { BrandStatementSection } from "@/components/sections/brand-statement"
import { StatsSection } from "@/components/sections/stats"
import { ServicesBentoSection } from "@/components/sections/services-bento"
import { DigitalScreensSection } from "@/components/sections/digital-screens"
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { ClientsMarquee } from "@/components/sections/clients-marquee"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      <HeroSection />
      <BrandStatementSection />
      <StatsSection />
      <ServicesBentoSection />
      <DigitalScreensSection />
      <PortfolioPreviewSection />
      <WhyChooseUsSection />
      <ClientsMarquee />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
