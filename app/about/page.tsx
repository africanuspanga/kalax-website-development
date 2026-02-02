"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

const timeline = [
  { year: "2015", title: "Founded", description: "KALAX was established in Dar es Salaam with a vision to dominate outdoor advertising in Tanzania." },
  { year: "2017", title: "First Billboard Network", description: "Launched our first static billboard network across Dar es Salaam's high-traffic locations." },
  { year: "2019", title: "Nationwide Expansion", description: "Expanded billboard presence to major cities including Arusha, Mwanza, and Dodoma." },
  { year: "2021", title: "Digital Screens Launch", description: "Introduced digital billboard technology at premium locations across Tanzania." },
  { year: "2023", title: "Market Leader", description: "Became Tanzania's most trusted outdoor advertising company with 200+ billboard locations." },
  { year: "2026", title: "Vision Achieved", description: "The largest and most trusted outdoor advertising firm in Tanzania with static and digital coverage nationwide." },
]

const values = [
  { icon: Target, title: "Excellence", description: "We deliver nothing but the best in everything we do." },
  { icon: Eye, title: "Innovation", description: "Constantly pushing boundaries to find creative solutions." },
  { icon: Heart, title: "Integrity", description: "Building trust through transparency and honest partnerships." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/billboard-golden.jpg"
            alt="KALAX Network"
            fill
            className="object-cover opacity-30"
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
              About Us
            </span>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-6"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              WE ARE{" "}
              <span className="text-kalax-red">KALAX</span>
            </h1>
            <p className="text-xl text-kalax-gray leading-relaxed">
              Tanzania&apos;s leading outdoor advertising company. For over 10 years, we&apos;ve been 
              creating visibility, captivating audiences, and building legacies across the nation.
              By 2026, we are the largest and most trusted outdoor advertising firm in Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-kalax-charcoal">
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
                OUR{" "}
                <span className="text-kalax-red">STORY</span>
              </h2>
              <div className="space-y-4 text-kalax-gray text-lg leading-relaxed">
                <p>
                  Founded in 2015, KALAX emerged from a simple yet powerful vision: to revolutionize 
                  advertising in Tanzania. We believed that every brand deserves to be seen, heard, 
                  and remembered.
                </p>
                <p>
                  Today, we&apos;re Tanzania&apos;s leading outdoor advertising company. We&apos;re visibility creators, 
                  creative managers, designers, and marketing experts who build long-term relationships between 
                  brands and consumers through strategic outdoor placements.
                </p>
                <p>
                  Our philosophy is simple:{" "}
                  <span className="text-kalax-red font-semibold">
                    &quot;If you don&apos;t give the market the story to talk about, they&apos;ll define your 
                    brand&apos;s story for you.&quot;
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/images/billboard-donjulio-spirits.jpg"
                alt="KALAX billboard campaign"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              OUR JOURNEY
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-kalax-red via-kalax-red/50 to-kalax-charcoal hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-kalax-charcoal rounded-2xl p-6 inline-block">
                      <span className="text-kalax-red text-4xl font-bold" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-kalax-white mt-2">{item.title}</h3>
                      <p className="text-kalax-gray mt-2">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="w-4 h-4 rounded-full bg-kalax-red relative z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-kalax-red animate-ping opacity-50" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-kalax-black rounded-2xl"
              >
                <div className="w-20 h-20 rounded-2xl bg-kalax-red/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-kalax-red" />
                </div>
                <h3 className="text-2xl font-bold text-kalax-white mb-3">{value.title}</h3>
                <p className="text-kalax-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
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
              WHY PARTNER WITH <span className="text-kalax-red">KALAX</span>
            </h2>
            <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
              What sets us apart in Tanzania&apos;s advertising landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-kalax-charcoal rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-kalax-red mb-4" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>100+</div>
              <h3 className="text-xl font-bold text-kalax-white mb-2">Billboard Locations</h3>
              <p className="text-kalax-gray">Strategic placements across Tanzania&apos;s busiest roads and cities</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-kalax-charcoal rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-kalax-red mb-4" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>10+</div>
              <h3 className="text-xl font-bold text-kalax-white mb-2">Years Experience</h3>
              <p className="text-kalax-gray">A decade of expertise in outdoor advertising and brand visibility</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-kalax-charcoal rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-kalax-red mb-4" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>50+</div>
              <h3 className="text-xl font-bold text-kalax-white mb-2">Brand Partners</h3>
              <p className="text-kalax-gray">Trusted by leading local and international brands</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-kalax-charcoal rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-kalax-red mb-4" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>24/7</div>
              <h3 className="text-xl font-bold text-kalax-white mb-2">Support & Monitoring</h3>
              <p className="text-kalax-gray">Round-the-clock campaign monitoring and client support</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-kalax-charcoal rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-kalax-red mb-4" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>3</div>
              <h3 className="text-xl font-bold text-kalax-white mb-2">Digital Screens</h3>
              <p className="text-kalax-gray">Premium digital billboard locations with dynamic content capabilities</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-kalax-charcoal rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-kalax-red mb-4" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>100%</div>
              <h3 className="text-xl font-bold text-kalax-white mb-2">Client Satisfaction</h3>
              <p className="text-kalax-gray">Committed to delivering results that exceed expectations</p>
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
              READY TO WORK WITH US?
            </h2>
            <p className="text-kalax-white/80 text-xl max-w-2xl mx-auto mb-10">
              Let&apos;s create something amazing together. Reach out and start your journey with KALAX.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-kalax-white hover:bg-kalax-white/90 text-kalax-red font-semibold px-8 py-6 text-lg rounded-full"
            >
              <Link href="/contact">
                Get in Touch
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
