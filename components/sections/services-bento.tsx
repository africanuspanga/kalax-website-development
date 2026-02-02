"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Megaphone, Printer, Users, Palette } from "lucide-react"

const services = [
  {
    title: "Outdoor Advertising",
    description: "Static billboards & digital screens strategically placed across Tanzania. Dominate high-traffic locations with our premium billboard network.",
    icon: Megaphone,
    href: "/services/outdoor-advertising",
    image: "/images/billboard-night.jpg",
    size: "large",
  },
  {
    title: "Marketing",
    description: "Strategic marketing campaigns, brand activations, events, and media buying",
    icon: Users,
    href: "/services/marketing",
    image: "/images/bus-stop.jpg",
    size: "medium",
  },
  {
    title: "Creative",
    description: "Brand design, animation, app development, and brand manuals",
    icon: Palette,
    href: "/services/creative",
    image: "/images/billboard-golden.jpg",
    size: "medium",
  },
  {
    title: "Printing Services",
    description: "Digital, offset, and large format printing for all your business needs",
    icon: Printer,
    href: "/services/printing",
    image: "/images/billboard-urban.jpg",
    size: "large",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function ServicesBentoSection() {
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
            What We Do
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-kalax-white mb-4"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            OUR SERVICES
          </h2>
          <p className="text-kalax-gray max-w-2xl mx-auto text-lg">
            Comprehensive advertising and marketing solutions tailored for the Tanzanian market
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl ${
                service.size === "large" ? "lg:col-span-2" : ""
              } ${index === 0 ? "md:row-span-2 min-h-[400px] md:min-h-[500px]" : "min-h-[280px]"}`}
            >
              <Link href={service.href} className="block h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kalax-black via-kalax-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-kalax-red/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-kalax-red/30"
                  >
                    <service.icon className="w-7 h-7 text-kalax-red" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold text-kalax-white mb-2 group-hover:text-kalax-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-kalax-gray mb-4 max-w-md">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-kalax-red font-medium">
                    <span className="group-hover:underline">Learn More</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-kalax-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
