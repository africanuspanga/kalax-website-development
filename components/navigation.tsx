"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Outdoor Advertising", href: "/services/outdoor-advertising", description: "Static billboards & digital screens" },
  { name: "Marketing", href: "/services/marketing", description: "Activations, events & campaigns" },
  { name: "Creative", href: "/services/creative", description: "Design, animation & development" },
  { name: "Printing Services", href: "/services/printing", description: "Digital, offset & large format" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar - hidden on scroll */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:block fixed top-0 left-0 right-0 z-40 bg-kalax-red text-kalax-white py-2"
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+255769811511" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              +255 769 811 511
            </a>
            <a href="tel:+255713328271" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              +255 713 328 271
            </a>
            <a href="mailto:info@kalax.co.tz" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              info@kalax.co.tz
            </a>
          </div>
          <div className="font-medium tracking-wide">
            Tanzania&apos;s Leading Outdoor Advertising Company
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-kalax-black/95 backdrop-blur-md shadow-2xl lg:top-0" 
            : "bg-transparent lg:top-10"
        } top-0`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="KALAX Logo"
                  width={180}
                  height={50}
                  className="h-14 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-kalax-white hover:text-kalax-red transition-colors font-medium">
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-kalax-charcoal rounded-xl shadow-2xl overflow-hidden border border-kalax-red/20"
                          >
                            <div className="p-4">
                              {services.map((service, index) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={service.href}
                                    className="block p-3 rounded-lg hover:bg-kalax-red/10 transition-colors group"
                                  >
                                    <div className="font-semibold text-kalax-white group-hover:text-kalax-red transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-sm text-kalax-gray">
                                      {service.description}
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-kalax-white hover:text-kalax-red transition-colors font-medium relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kalax-red transition-all group-hover:w-full" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                asChild
                className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold px-6 py-2 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(227,24,55,0.4)]"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-kalax-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-kalax-black shadow-2xl"
            >
              <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.hasDropdown ? (
                        <div>
                          <div className="text-2xl font-bold text-kalax-white mb-3">
                            {link.name}
                          </div>
                          <div className="pl-4 space-y-2 border-l-2 border-kalax-red">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-kalax-gray hover:text-kalax-red transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-2xl font-bold text-kalax-white hover:text-kalax-red transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10"
                >
                  <Button 
                    asChild
                    className="w-full bg-kalax-red hover:bg-kalax-red-dark text-kalax-white font-semibold py-4 rounded-full"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>

                  <div className="mt-8 space-y-3 text-kalax-gray">
                    <a href="tel:+255769811511" className="flex items-center gap-3 hover:text-kalax-red transition-colors">
                      <Phone className="w-5 h-5" />
                      +255 769 811 511
                    </a>
                    <a href="tel:+255713328271" className="flex items-center gap-3 hover:text-kalax-red transition-colors">
                      <Phone className="w-5 h-5" />
                      +255 713 328 271
                    </a>
                    <a href="mailto:info@kalax.co.tz" className="flex items-center gap-3 hover:text-kalax-red transition-colors">
                      <Mail className="w-5 h-5" />
                      info@kalax.co.tz
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
