"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Users, Calendar, Megaphone, ShoppingBag } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Brand Activations",
    description: "Create memorable brand experiences that engage and convert your target audience.",
    icon: Users,
  },
  {
    title: "Event Marketing",
    description: "End-to-end event planning and execution that amplifies your brand message.",
    icon: Calendar,
  },
  {
    title: "Field Marketing",
    description: "On-ground teams delivering brand experiences, sampling, and data collection.",
    icon: ShoppingBag,
  },
  {
    title: "Media Buying",
    description: "Strategic ATL & BTL media planning and buying for maximum reach.",
    icon: Megaphone,
  },
]

const capabilities = [
  "Brand Experiences",
  "Home Trials & Sampling",
  "Mystery Shopping",
  "Retail Activations",
  "Trade Shows & Exhibitions",
  "Product Launches",
  "Roadshows",
  "Influencer Marketing",
  "Digital Campaigns",
  "Media Planning",
  "ATL Advertising",
  "BTL Campaigns",
]

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bus-stop.jpg"
            alt="Marketing & Activations"
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
              Marketing & Activations
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              ENGAGE YOUR{" "}
              <span className="text-kalax-red">AUDIENCE</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed mb-8">
              From brand activations to media buying, we create integrated marketing campaigns 
              that connect with your audience and drive measurable results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Plan Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TTL Approach */}
      <section className="py-24 bg-kalax-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-kalax-red/10 border border-kalax-red/20 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-6">
                Our Approach
              </span>
              <h2 
                className="text-4xl md:text-5xl font-bold text-kalax-white mb-6"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                THROUGH THE LINE{" "}
                <span className="text-kalax-red">(TTL)</span>
              </h2>
              <p className="text-kalax-gray text-lg mb-6 leading-relaxed">
                We believe in integrated marketing that combines the best of above-the-line and 
                below-the-line strategies. Our TTL approach ensures your message reaches your 
                audience through multiple touchpoints for maximum impact.
              </p>
              <p className="text-kalax-gray text-lg leading-relaxed">
                Whether it&apos;s mass media advertising or direct consumer engagement, 
                we craft campaigns that work together seamlessly to achieve your business objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/images/billboard-golden.jpg"
                alt="Marketing Network"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              MARKETING SERVICES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-kalax-charcoal rounded-2xl p-8 border border-kalax-charcoal hover:border-kalax-red/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-kalax-red/10 flex items-center justify-center mb-6 group-hover:bg-kalax-red/20 transition-colors">
                  <service.icon className="w-8 h-8 text-kalax-red" />
                </div>
                <h3 className="text-2xl font-bold text-kalax-white mb-3 group-hover:text-kalax-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-kalax-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
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
              OUR CAPABILITIES
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="p-4 bg-kalax-black rounded-xl text-center hover:bg-kalax-red/10 transition-colors group"
              >
                <span className="text-kalax-white group-hover:text-kalax-red transition-colors">
                  {capability}
                </span>
              </motion.div>
            ))}
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
              READY TO ACTIVATE YOUR BRAND?
            </h2>
            <p className="text-kalax-white/80 text-xl max-w-2xl mx-auto mb-10">
              Let&apos;s create marketing campaigns that deliver real results for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-white hover:bg-kalax-white/90 text-kalax-red font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Start Planning
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
