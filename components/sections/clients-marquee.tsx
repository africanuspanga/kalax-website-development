"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const clientLogos = [
  { name: "Vodacom", logo: "/images/VOD.JO_BIG-fbad7eb2.png" },
  { name: "Azam", logo: "/images/azam-logo-png_seeklogo-631037-removebg-preview.png" },
  { name: "NBC Bank", logo: "/images/bank-nbc.png" },
  { name: "CRDB Bank", logo: "/images/Logo-crdb-bank-tanzania-clipart-PNG.png" },
  { name: "Coca-Cola", logo: "/images/Coca-Cola-logo.png" },
  { name: "Pepsi", logo: "/images/Pepsi-Logo-PNG-Pic-Background.png" },
  { name: "Toyota", logo: "/images/toyota-logo-png-15-removebg-preview.png" },
  { name: "Airtel", logo: "/images/1680513237airtel-logo-png.png" },
  { name: "DSTV", logo: "/images/57-579840_dstv-logo-removebg-preview.png" },
  { name: "Guinness", logo: "/images/926-9261090_project-description-guinness-logo-png-white.png" },
  { name: "Serengeti", logo: "/images/diageo-serengeti-logo-white-new.png" },
  { name: "Sportpesa", logo: "/images/f78ab-cropped-sportpesa-logo-white.webp" },
  { name: "Yas Tanzania", logo: "/images/Yas_Tanzania.svg.png" },
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
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-16 pr-16"
          >
            {/* First set */}
            {clientLogos.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
