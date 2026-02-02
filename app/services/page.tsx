"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Megaphone, Printer, Users, Palette } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const services = [
  {
    title: "Outdoor Advertising",
    description: "Dominate Tanzania's streets with our premium billboard network featuring both static and digital screens. Strategic placements in high-traffic locations across Dar es Salaam and beyond.",
    icon: Megaphone,
    href: "/services/outdoor-advertising",
    image: "/images/billboard-night.jpg",
    features: ["Static Billboards", "Digital Screens", "Lamp Poles", "Transit Ads"],
  },
  {
    title: "Marketing",
    description: "Strategic marketing campaigns that connect your brand with your target audience. From brand activations to media buying, we deliver results that matter.",
    icon: Users,
    href: "/services/marketing",
    image: "/images/bus-stop.jpg",
    features: ["Brand Activations", "Event Marketing", "Field Marketing", "Media Buying"],
  },
  {
    title: "Creative",
    description: "Bring your brand to life with stunning designs, animations, and digital solutions. Our creative team transforms ideas into powerful visual stories.",
    icon: Palette,
    href: "/services/creative",
    image: "/images/billboard-golden.jpg",
    features: ["Brand Design", "Animation", "App Development", "Brand Manuals"],
  },
  {
    title: "Printing Services",
    description: "High-quality printing solutions from business cards to large format banners. Professional printing that brings your brand materials to life.",
    icon: Printer,
    href: "/services/printing",
    image: "/images/billboard-urban.jpg",
    features: ["Digital Printing", "Offset Printing", "Large Format", "Promotional Items"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/billboard-golden.jpg"
            alt="KALAX Network"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kalax-black via-kalax-black/90 to-kalax-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-kalax-red/20 border border-kalax-red/40 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-6">
              Our Services
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              COMPREHENSIVE ADVERTISING{" "}
              <span className="text-kalax-red">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed">
              From billboards to brand activations, we offer end-to-end advertising and marketing services 
              tailored for the Tanzanian market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block group">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative aspect-[16/10] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-kalax-black/60 to-transparent" />
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 rounded-2xl bg-kalax-red/20 backdrop-blur-sm flex items-center justify-center border border-kalax-red/30">
                          <service.icon className="w-8 h-8 text-kalax-red" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 p-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-kalax-white mb-4 group-hover:text-kalax-red transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-kalax-gray text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-4 py-2 bg-kalax-charcoal rounded-full text-sm text-kalax-gray"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-kalax-red font-semibold group-hover:gap-4 transition-all">
                        <span>Explore Service</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-kalax-charcoal to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
