"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Printer, FileText, ImageIcon, Package } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
// import Image from "@/components/image-icon" // Declare the Image

const categories = [
  {
    title: "Digital Printing",
    description: "High-quality digital prints for short runs and quick turnaround projects.",
    icon: Printer,
    items: ["Business Cards", "Flyers", "Brochures", "Posters"],
  },
  {
    title: "Offset Printing",
    description: "Cost-effective solution for large volume printing with consistent quality.",
    icon: FileText,
    items: ["Books", "Magazines", "Catalogs", "Letterheads"],
  },
  {
    title: "Large Format",
    description: "Eye-catching large format prints for outdoor and indoor displays.",
    icon: ImageIcon,
    items: ["Banners", "Roll-ups", "Teardrops", "Backdrops"],
  },
  {
    title: "Promotional Items",
    description: "Branded merchandise and promotional materials for your campaigns.",
    icon: Package,
    items: ["T-shirts", "Caps", "Mugs", "Calendars"],
  },
]

const products = [
  "Brochures & Flyers",
  "Business Cards",
  "Books & Magazines",
  "Folders & Envelopes",
  "Posters & Wall Graphics",
  "Calendars & Diaries",
  "Banners & Stickers",
  "Teardrops & Flags",
  "Roll-up Banners",
  "Wheel Covers",
  "Labels & Tags",
  "Packaging Materials",
]

export default function PrintingServicesPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/printing services.jpg"
            alt="Printing Services"
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
              Printing Services
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              PRINT WITH{" "}
              <span className="text-kalax-red">PRECISION</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed mb-8">
              From business cards to large format banners, we deliver exceptional print quality 
              that makes your brand materials stand out.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              PRINTING CATEGORIES
            </h2>
            <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
              Comprehensive printing solutions for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-kalax-black rounded-2xl p-8 border border-kalax-charcoal hover:border-kalax-red/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-kalax-red/10 flex items-center justify-center mb-6 group-hover:bg-kalax-red/20 transition-colors">
                  <category.icon className="w-8 h-8 text-kalax-red" />
                </div>
                <h3 className="text-2xl font-bold text-kalax-white mb-3 group-hover:text-kalax-red transition-colors">
                  {category.title}
                </h3>
                <p className="text-kalax-gray mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-kalax-charcoal rounded-full text-sm text-kalax-gray"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products List */}
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
                FULL PRODUCT{" "}
                <span className="text-kalax-red">RANGE</span>
              </h2>
              <p className="text-kalax-gray text-lg mb-8 leading-relaxed">
                Whatever your printing needs, we have the equipment, expertise, and materials 
                to deliver exceptional results every time.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {products.map((product, index) => (
                  <motion.div
                    key={product}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="flex items-center gap-3 p-3 bg-kalax-charcoal rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-kalax-red flex-shrink-0" />
                    <span className="text-kalax-white text-sm">{product}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/billboard-singleton-whisky.jpg"
                    alt="Print samples"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/billboard-pepsi-chuba.jpg"
                    alt="Print samples"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/billboard-emirates-dubai.jpg"
                    alt="Print samples"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/billboard-guinness.jpg"
                    alt="Print samples"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
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
              READY TO PRINT?
            </h2>
            <p className="text-kalax-white/80 text-xl max-w-2xl mx-auto mb-10">
              Get a quote for your printing project today. Quality prints, competitive prices.
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
