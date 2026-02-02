"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building, Car, Store, Lightbulb } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "3D Signage",
    description: "Eye-catching 3D cutout letters and illuminated signboards that make your brand stand out.",
    icon: Lightbulb,
    image: "/images/billboard-day.jpg",
  },
  {
    title: "Building Branding",
    description: "Transform entire buildings into powerful brand statements with wraps and graphics.",
    icon: Building,
    image: "/images/billboard-urban.jpg",
  },
  {
    title: "Vehicle Branding",
    description: "Turn your fleet into mobile billboards with professional vehicle wraps and graphics.",
    icon: Car,
    image: "/images/bus-stop.jpg",
  },
  {
    title: "Shop Signage",
    description: "Professional retail signage that attracts customers and reinforces brand identity.",
    icon: Store,
    image: "/images/billboard-night.jpg",
  },
]

const signageTypes = [
  "3D Cutout Letters",
  "2D Flat Signs",
  "Illuminated Signboards",
  "Pylon Signs",
  "Monument Signs",
  "Directory Signs",
  "Wayfinding Signs",
  "Reception Signs",
]

export default function CorporateBrandingPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/billboard-day.jpg"
            alt="Corporate Branding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kalax-black via-kalax-black/80 to-kalax-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-kalax-red/20 border border-kalax-red/40 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-6">
              Corporate Branding
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              ELEVATE YOUR{" "}
              <span className="text-kalax-red">BRAND</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed mb-8">
              From stunning 3D signage to complete vehicle branding, we transform your business 
              identity into powerful visual experiences that capture attention.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-kalax-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-kalax-white mb-4"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              BRANDING SOLUTIONS
            </h2>
            <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
              Comprehensive corporate branding services to establish your presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-kalax-black rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kalax-black to-transparent" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-kalax-red/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-kalax-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-kalax-white mb-3 group-hover:text-kalax-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-kalax-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signage Types */}
      <section className="py-24 bg-kalax-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-kalax-white mb-6"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                SIGNAGE{" "}
                <span className="text-kalax-red">TYPES</span>
              </h2>
              <p className="text-kalax-gray text-lg mb-8 leading-relaxed">
                We offer a comprehensive range of signage solutions to meet every business need. 
                From small retail signs to large corporate installations.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {signageTypes.map((type, index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-kalax-charcoal rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-kalax-red" />
                    <span className="text-kalax-white">{type}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/images/billboard-golden.jpg"
                alt="KALAX Branding Network"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-kalax-red">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              TRANSFORM YOUR BRAND IDENTITY
            </h2>
            <p className="text-kalax-white/80 text-xl max-w-2xl mx-auto mb-10">
              Let&apos;s create signage and branding that makes your business unforgettable.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-white hover:bg-kalax-white/90 text-kalax-red font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
