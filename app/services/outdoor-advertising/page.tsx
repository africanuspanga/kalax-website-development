"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Eye, Zap, Target, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Super Billboards",
    description: "Large format billboards in high-traffic locations for maximum brand visibility.",
    image: "/images/billboard-day.jpg",
  },
  {
    title: "Lamp Poles",
    description: "Strategic lamp pole advertising along major roads and highways.",
    image: "/images/billboard-urban.jpg",
  },
  {
    title: "Transit Advertising",
    description: "Bus wraps, taxi branding, and vehicle advertising solutions.",
    image: "/images/bus-stop.jpg",
  },
  {
    title: "Street Furniture",
    description: "Bus shelters, benches, and kiosks in prime urban locations.",
    image: "/images/bus-stop.jpg",
  },
]

const locations = [
  "Kariakoo",
  "Posta",
  "Magomeni",
  "Airport Road",
  "Mwenge",
  "Kinondoni",
  "Msasani",
  "Kawe",
  "Mikocheni",
  "Ubungo",
]

const benefits = [
  { icon: Eye, title: "High Visibility", description: "24/7 exposure to thousands of daily viewers" },
  { icon: Target, title: "Targeted Reach", description: "Strategic placements for your target audience" },
  { icon: Zap, title: "Brand Impact", description: "Bold visuals that leave lasting impressions" },
  { icon: MapPin, title: "Prime Locations", description: "Access to the best spots across Tanzania" },
]

export default function OutdoorAdvertisingPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/billboard-night.jpg"
            alt="Billboard at night"
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
              Outdoor Advertising
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              DOMINATE THE{" "}
              <span className="text-kalax-red">STREETS</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed mb-8">
              From super billboards to transit advertising, we put your brand where it matters most. 
              Our extensive network covers all major cities and highways across Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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
              OUR OUTDOOR PRODUCTS
            </h2>
            <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
              Choose from our wide range of outdoor advertising solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[16/10]"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kalax-black via-kalax-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-kalax-white mb-2 group-hover:text-kalax-red transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-kalax-gray">
                    {product.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-kalax-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-kalax-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-kalax-charcoal border border-kalax-charcoal hover:border-kalax-red/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-kalax-red/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-kalax-red" />
                </div>
                <h3 className="text-xl font-bold text-kalax-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-kalax-gray">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-kalax-charcoal relative overflow-hidden">
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
                NATIONWIDE{" "}
                <span className="text-kalax-red">COVERAGE</span>
              </h2>
              <p className="text-kalax-gray text-lg mb-8 leading-relaxed">
                Our strategic billboard network spans across all major cities and highways in Tanzania. 
                We&apos;ve positioned our advertising assets where they&apos;ll generate the most impact for your brand.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-kalax-white mb-4">Key Locations in Dar es Salaam:</h3>
                <div className="flex flex-wrap gap-3">
                  {locations.map((location) => (
                    <span
                      key={location}
                      className="flex items-center gap-2 px-4 py-2 bg-kalax-black rounded-full text-kalax-gray"
                    >
                      <CheckCircle className="w-4 h-4 text-kalax-red" />
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-4 rounded-full"
              >
                <Link href="/contact">
                  Request Location Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/images/billboard-golden.jpg"
                alt="KALAX presence across Tanzania"
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
              READY TO OWN THE STREETS?
            </h2>
            <p className="text-kalax-white/80 text-xl max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how outdoor advertising can transform your brand&apos;s visibility across Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-kalax-white hover:bg-kalax-white/90 text-kalax-red font-semibold px-8 py-6 text-lg rounded-full"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-kalax-white text-kalax-white hover:bg-kalax-white hover:text-kalax-red font-semibold px-8 py-6 text-lg rounded-full bg-transparent"
              >
                <a href="tel:+255713328271">
                  Call +255 713 328 271
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
