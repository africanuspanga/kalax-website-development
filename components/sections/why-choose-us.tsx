"use client"

import { motion } from "framer-motion"
import { Target, Zap, Users, Award, MapPin, Clock } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies that maximize your ROI and reach your target audience effectively.",
  },
  {
    icon: Zap,
    title: "Creative Excellence",
    description: "Award-worthy designs and campaigns that capture attention and drive engagement.",
  },
  {
    icon: MapPin,
    title: "Nationwide Reach",
    description: "Strategic placements across all major cities in Tanzania for maximum visibility.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced professionals committed to your brand's success and growth.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient execution without compromising on quality or attention to detail.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "10+ years of successful campaigns and satisfied clients across diverse industries.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-kalax-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-kalax-red/10 border border-kalax-red/20 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-4">
            Why KALAX
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-kalax-white mb-4"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            WHY CHOOSE US
          </h2>
          <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
            We&apos;re your strategic partners in outdoor advertising, creating visibility that builds lasting brand legacies.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-kalax-charcoal border border-kalax-charcoal hover:border-kalax-red/30 transition-all duration-500"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-kalax-red/10 flex items-center justify-center mb-6 group-hover:bg-kalax-red/20 transition-colors"
              >
                <reason.icon className="w-8 h-8 text-kalax-red" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-kalax-white mb-3 group-hover:text-kalax-red transition-colors">
                {reason.title}
              </h3>
              <p className="text-kalax-gray leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-kalax-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
