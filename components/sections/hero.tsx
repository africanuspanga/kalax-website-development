"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const words = ["Legacies", "Stories", "Brands", "Impact"]

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/kalax-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-kalax-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-kalax-black/60 via-kalax-black/40 to-kalax-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-kalax-black/60 via-transparent to-kalax-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-kalax-red/20 border border-kalax-red/40 rounded-full text-kalax-red text-xs md:text-sm font-medium tracking-wider uppercase">
            10+ Years of Excellence
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-kalax-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
        >
          <span className="block">WE DON&apos;T JUST</span>
          <span className="block">ADVERTISE.</span>
          <span className="block">
            WE BUILD{" "}
            <span className="relative inline-block">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="text-kalax-red"
              >
                {words[currentWordIndex]}
              </motion.span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-kalax-red" />
            </span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-kalax-gray max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="md:hidden">Tanzania&apos;s leading outdoor advertising company.</span>
          <span className="hidden md:inline">Tanzania&apos;s leading outdoor advertising company. We create visibility, 
          captivate audiences, and deliver campaigns that dominate the streets across the nation.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(227,24,55,0.5)] group"
          >
            <Link href="/contact">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-kalax-white text-kalax-white hover:bg-kalax-white hover:text-kalax-black font-semibold px-8 py-6 text-lg rounded-full transition-all bg-transparent"
          >
            <Link href="/portfolio">
              View Our Work
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-kalax-white/60"
        >
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-kalax-red/30 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-2 h-32 bg-kalax-red/30 hidden lg:block" />
    </section>
  )
}
