"use client"

import { motion } from "framer-motion"

// Placeholder client names - replace with actual logos
const clients = [
  "VODACOM",
  "AZAM",
  "NBC BANK",
  "CRDB",
  "TIGO",
  "COCA-COLA",
  "PEPSI",
  "TOYOTA",
  "AIRTEL",
  "DSTV",
  "STARTIMES",
  "SAFARICOM",
]

export function ClientsMarquee() {
  return (
    <section className="py-16 bg-kalax-black border-y border-kalax-charcoal overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-kalax-gray uppercase tracking-widest text-sm">
            Trusted by Leading Brands
          </span>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-kalax-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-kalax-black to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 pr-16"
          >
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-kalax-gray/30 hover:text-kalax-red transition-colors duration-300 cursor-default whitespace-nowrap"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                {client}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-kalax-gray/30 hover:text-kalax-red transition-colors duration-300 cursor-default whitespace-nowrap"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
