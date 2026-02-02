"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Film } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Billboard Design",
    description: "Eye-catching billboard artwork designed for maximum impact and visibility from a distance.",
    icon: Palette,
    features: ["Static Billboard Design", "Large Format Graphics", "Brand Adaptation", "Print-Ready Files"],
  },
  {
    title: "Digital Screen Content",
    description: "Dynamic video content and animations optimized for LED digital screens.",
    icon: Film,
    features: ["Motion Graphics", "Video Ads", "Animated Campaigns", "Screen-Optimized Content"],
  },
  {
    title: "Campaign Artwork",
    description: "Complete campaign visual design from concept to final production-ready artwork.",
    icon: Palette,
    features: ["Concept Development", "Visual Design", "Multi-Format Adaptation", "Brand Consistency"],
  },
  {
    title: "Video Production",
    description: "Professional video production for digital screens and promotional content.",
    icon: Film,
    features: ["Commercial Production", "Product Videos", "Brand Stories", "Social Media Content"],
  },
]

export default function CreativeWorkPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/creative services.jpg"
            alt="Creative Work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kalax-black via-kalax-black/90 to-kalax-black/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-kalax-red/20 border border-kalax-red/40 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-6">
              Creative Services
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              BILLBOARD & SCREEN{" "}
              <span className="text-kalax-red">DESIGN</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed mb-8">
              Professional billboard artwork and digital screen content that captures attention 
              and delivers your message with maximum impact.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Start a Project
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
              CREATIVE SERVICES
            </h2>
            <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
              Full-spectrum creative solutions for your brand
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
                className="group bg-kalax-black rounded-2xl p-8 border border-kalax-charcoal hover:border-kalax-red/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-kalax-red/10 flex items-center justify-center mb-6 group-hover:bg-kalax-red/20 transition-colors">
                  <service.icon className="w-8 h-8 text-kalax-red" />
                </div>
                <h3 className="text-2xl font-bold text-kalax-white mb-3 group-hover:text-kalax-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-kalax-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-kalax-charcoal rounded-full text-sm text-kalax-gray"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-kalax-black">
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
              CREATIVE PORTFOLIO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/images/billboard-singleton-whisky.jpg", title: "Singleton Whisky", category: "Billboard Design" },
              { image: "/images/billboard-pepsi-chuba.jpg", title: "Pepsi Chupa ni Mwamba", category: "Billboard Design" },
              { image: "/images/billboard-emirates-dubai.jpg", title: "Emirates Dubai", category: "Billboard Design" },
              { image: "/images/billboard-serengeti.jpg", title: "Serengeti Lemon", category: "Billboard Design" },
              { image: "/images/billboard-tcb-bank.jpg", title: "TCB Bank", category: "Billboard Design" },
              { image: "/images/billboard-guinness.jpg", title: "Guinness Campaign", category: "Billboard Design" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kalax-black via-kalax-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-kalax-red text-sm font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-kalax-white mt-2 group-hover:text-kalax-red transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-kalax-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-kalax-red text-kalax-red hover:bg-kalax-red hover:text-kalax-white rounded-full px-8 bg-transparent"
            >
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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
              LET&apos;S CREATE SOMETHING AMAZING
            </h2>
            <p className="text-kalax-white/80 text-xl max-w-2xl mx-auto mb-10">
              Ready to bring your creative vision to life? Let&apos;s talk about your project.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-white hover:bg-kalax-white/90 text-kalax-red font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Start Your Project
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
