"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", description: "Building visibility since 2015" },
  { value: 500, suffix: "+", label: "Campaigns", description: "Successfully delivered" },
  { value: 200, suffix: "+", label: "Brands Served", description: "Across Tanzania" },
  { value: 4, suffix: "", label: "Core Services", description: "Outdoor, Marketing, Creative, Printing" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-kalax-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(227, 24, 55, 0.1) 10px,
            rgba(227, 24, 55, 0.1) 20px
          )`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Divider (not on first item) */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-kalax-red/50 to-transparent" />
              )}
              
              <motion.div
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-kalax-white mb-2"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-kalax-red font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-kalax-gray text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
