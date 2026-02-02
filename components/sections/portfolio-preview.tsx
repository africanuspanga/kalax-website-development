"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Emirates Dubai Tourism",
    category: "Static Billboard",
    image: "/images/billboard-emirates-dubai.jpg",
  },
  {
    title: "Serengeti Lemon Campaign",
    category: "Static Billboard",
    image: "/images/billboard-serengeti.jpg",
  },
  {
    title: "Guinness Bold Campaign",
    category: "Static Billboard",
    image: "/images/billboard-guinness.jpg",
  },
  {
    title: "Singleton Whisky - Spirit of the Season",
    category: "Static Billboard",
    image: "/images/billboard-singleton-whisky.jpg",
  },
  {
    title: "Tanzania Commercial Bank - Popote Visa",
    category: "Static Billboard",
    image: "/images/billboard-tcb-bank.jpg",
  },
  {
    title: "Pepsi Chupa ni Mwamba Campaign",
    category: "Static Billboard",
    image: "/images/billboard-pepsi-chuba.jpg",
  },
]

export function PortfolioPreviewSection() {
  return (
    <section className="py-24 bg-kalax-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-kalax-red/10 border border-kalax-red/20 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-4">
              Our Work
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-kalax-white"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              FEATURED PROJECTS
            </h2>
            <p className="text-kalax-gray max-w-xl text-lg mt-4">
              A glimpse into our portfolio of successful campaigns and brand transformations across Tanzania.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-kalax-red text-kalax-red hover:bg-kalax-red hover:text-kalax-white rounded-full px-6 group bg-transparent"
          >
            <Link href="/portfolio">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-kalax-black via-kalax-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-kalax-red text-sm font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-kalax-white mt-2 group-hover:text-kalax-red transition-colors">
                    {project.title}
                  </h3>
                </motion.div>

                {/* View Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-kalax-red flex items-center justify-center">
                    <Eye className="w-7 h-7 text-kalax-white" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-kalax-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
