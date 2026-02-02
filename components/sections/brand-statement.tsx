"use client"

import { motion } from "framer-motion"

export function BrandStatementSection() {
  return (
    <section className="py-24 bg-kalax-black relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-kalax-red to-kalax-red/20" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Quote Mark */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-kalax-red text-9xl font-serif leading-none mb-8 opacity-30"
          >
            &ldquo;
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl text-kalax-white leading-relaxed font-light"
          >
            If you don&apos;t give the market the story to talk about,{" "}
            <span className="text-kalax-red font-semibold">
              they&apos;ll define your brand&apos;s story for you.
            </span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-px bg-kalax-red" />
              <span className="text-kalax-gray uppercase tracking-widest text-sm">
                KALAX Philosophy
              </span>
              <div className="w-16 h-px bg-kalax-red" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Line Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-kalax-red to-kalax-red/20" />
    </section>
  )
}
