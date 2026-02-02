"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Eye } from "lucide-react"
import { useState } from "react"

const categories = ["All", "Static Billboards", "Digital Screens", "Branding", "Print"]

const projects = [
  {
    id: 1,
    title: "Halotel 5G Network Campaign",
    category: "Static Billboards",
    client: "Halotel Tanzania",
    image: "/images/billboard-halotel-5g.jpg",
    description: "High-visibility 5G network launch campaign on premium billboard locations across Dar es Salaam",
  },
  {
    id: 2,
    title: "Whitedent Toothpaste - Ultra Fresh",
    category: "Static Billboards",
    client: "Whitedent",
    image: "/images/billboard-whitedent-1.jpg",
    description: "Eye-catching billboard campaign promoting dental care products with vibrant visuals",
  },
  {
    id: 3,
    title: "Whitedent Couple Campaign",
    category: "Static Billboards",
    client: "Whitedent",
    image: "/images/billboard-whitedent-2.jpg",
    description: "Lifestyle-focused billboard showcasing product benefits through relatable imagery",
  },
  {
    id: 4,
    title: "Chery Auto 10-Year Warranty",
    category: "Static Billboards",
    client: "Chery Tanzania",
    image: "/images/billboard-chery-auto.jpg",
    description: "Premium automotive billboard highlighting industry-leading warranty offer",
  },
  {
    id: 5,
    title: "Halotel 10 Years Anniversary",
    category: "Static Billboards",
    client: "Halotel Tanzania",
    image: "/images/billboard-halotel-anniversary.jpg",
    description: "Celebratory campaign marking a decade of telecommunications excellence in Tanzania",
  },
  {
    id: 6,
    title: "Singleton Whisky - Spirit of the Season",
    category: "Static Billboards",
    client: "Diageo",
    image: "/images/billboard-singleton-whisky.jpg",
    description: "Premium spirits billboard campaign with sophisticated seasonal messaging",
  },
  {
    id: 7,
    title: "Serengeti Lemon - Squeeze Every Moment",
    category: "Static Billboards",
    client: "Serengeti Breweries",
    image: "/images/billboard-serengeti.jpg",
    description: "Refreshing beverage campaign targeting young professionals with lifestyle messaging",
  },
  {
    id: 8,
    title: "Tanzania Commercial Bank - Popote Visa",
    category: "Static Billboards",
    client: "TCB Bank",
    image: "/images/billboard-tcb-bank.jpg",
    description: "Financial services campaign promoting digital payment solutions across Tanzania",
  },
  {
    id: 9,
    title: "Emirates - Share Magical Moments",
    category: "Static Billboards",
    client: "Emirates Airlines",
    image: "/images/billboard-emirates-travel.jpg",
    description: "Premium travel billboard promoting Dubai tourism and flight experiences",
  },
  {
    id: 10,
    title: "SkyHome Ocean View Apartments",
    category: "Static Billboards",
    client: "SkyHome Real Estate",
    image: "/images/billboard-skyhome-realestate.jpg",
    description: "Luxury real estate billboard campaign for premium oceanfront properties",
  },
  {
    id: 11,
    title: "Dongfang Steel - Build Your Future",
    category: "Static Billboards",
    client: "Dongfang Steel",
    image: "/images/billboard-dongfang.jpg",
    description: "Industrial construction materials campaign targeting builders and contractors",
  },
  {
    id: 12,
    title: "Serengeti Lemon - Traffic Campaign",
    category: "Static Billboards",
    client: "Serengeti Breweries",
    image: "/images/billboard-serengeti-2.jpg",
    description: "High-traffic location billboard maximizing brand exposure during peak hours",
  },
  {
    id: 13,
    title: "Vodacom Family Connection",
    category: "Static Billboards",
    client: "Vodacom Tanzania",
    image: "/images/billboard-vodacom.jpg",
    description: "Telecommunications campaign emphasizing family connectivity and network reliability",
  },
  {
    id: 14,
    title: "BangBet Jackpot Campaign",
    category: "Static Billboards",
    client: "BangBet",
    image: "/images/billboard-bangbet.jpg",
    description: "Gaming and entertainment billboard with bold visuals and prize messaging",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/billboard-golden.jpg"
            alt="Portfolio"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful campaigns that have helped brands stand out across Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Client: <span className="text-foreground">{project.client}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let{"'"}s create a campaign that puts your brand in the spotlight.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
