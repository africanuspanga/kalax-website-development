"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/billboard-homebase-appliances.jpg"
          alt="KALAX presence across Tanzania"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-kalax-black/85" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-kalax-red/20 border border-kalax-red/40 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-6">
              Ready to Stand Out?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-kalax-white mb-6"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            LET&apos;S BUILD YOUR{" "}
            <span className="text-kalax-red">LEGACY</span>{" "}
            TOGETHER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-kalax-gray max-w-2xl mx-auto mb-10"
          >
            From billboards to brand activations, we have the expertise and reach to make 
            your brand unmissable across Tanzania. Let&apos;s start a conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(227,24,55,0.5)] group"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-kalax-white text-kalax-white hover:bg-kalax-white hover:text-kalax-black font-semibold px-8 py-6 text-lg rounded-full transition-all group bg-transparent"
            >
              <a href="tel:+255713328271">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-kalax-gray"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-kalax-red" />
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-kalax-red" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-kalax-red" />
              <span>Nationwide Coverage</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
