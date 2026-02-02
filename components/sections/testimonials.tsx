"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote: "KALAX transformed our brand visibility across Dar es Salaam. Their billboard campaigns generated a 300% increase in brand awareness within just three months.",
    role: "Brand Manager",
    company: "Vodacom",
    rating: 5,
  },
  {
    quote: "Professional, creative, and results-driven. KALAX understood our vision and delivered beyond expectations. They are truly the best outdoor advertising company in Tanzania.",
    role: "Head of Marketing",
    company: "Airtel",
    rating: 5,
  },
  {
    quote: "From concept to execution, KALAX handled our nationwide campaign flawlessly. Their strategic placements and creative designs made all the difference.",
    role: "Operations Director",
    company: "NMB Bank",
    rating: 5,
  },
  {
    quote: "Working with KALAX was a game-changer for our business. Their team's dedication and expertise in outdoor advertising is unmatched in East Africa.",
    role: "Marketing Manager",
    company: "CRDB Bank",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-24 bg-kalax-black relative overflow-hidden">
      {/* Background Quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Quote className="w-96 h-96 text-kalax-red" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-kalax-red/10 border border-kalax-red/20 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-kalax-white"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            WHAT OUR CLIENTS SAY
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="bg-kalax-charcoal rounded-3xl p-8 md:p-12 relative">
                  {/* Quote Icon */}
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-kalax-red/30" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-kalax-red fill-kalax-red" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl text-kalax-white leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-kalax-red/20 flex items-center justify-center text-kalax-red font-bold text-xl">
                      {testimonials[currentIndex].company.charAt(0)}
                    </div>
                    <div>
                      <div className="text-kalax-white font-semibold text-lg">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-kalax-gray">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 -translate-x-full md:-translate-x-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-kalax-charcoal hover:bg-kalax-red transition-colors flex items-center justify-center text-kalax-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 translate-x-full md:translate-x-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-kalax-charcoal hover:bg-kalax-red transition-colors flex items-center justify-center text-kalax-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-kalax-red w-8" 
                    : "bg-kalax-charcoal hover:bg-kalax-gray"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
