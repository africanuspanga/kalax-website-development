"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const services = [
  { name: "Outdoor Advertising", href: "/services/outdoor-advertising" },
  { name: "Marketing", href: "/services/marketing" },
  { name: "Creative", href: "/services/creative" },
  { name: "Printing Services", href: "/services/printing" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
  { name: "Get a Quote", href: "/contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-kalax-black relative overflow-hidden">
      {/* Red accent line */}
      <div className="h-1 bg-kalax-red" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="KALAX Logo"
                width={160}
                height={50}
                className="h-12 w-auto mb-6"
              />
            </Link>
            <p className="text-kalax-gray leading-relaxed mb-6">
              We don&apos;t just advertise. We create visibility. Tanzania&apos;s leading outdoor advertising company specializing in static billboards, digital screens, marketing, creative, and printing.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: "#E31837" }}
                  className="w-10 h-10 rounded-full bg-kalax-charcoal flex items-center justify-center text-kalax-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-kalax-white mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-kalax-red" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-kalax-gray hover:text-kalax-red transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-kalax-white mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-kalax-red" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-kalax-gray hover:text-kalax-red transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-kalax-white mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-kalax-red" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kalax-red flex-shrink-0 mt-1" />
                <span className="text-kalax-gray">
                  Plot 445, Golf Street, Opposite Lugalo Golf Course, Kawe, Dar es Salaam
                </span>
              </li>
              <li>
                <a href="tel:+255713328271" className="flex items-center gap-3 text-kalax-gray hover:text-kalax-red transition-colors">
                  <Phone className="w-5 h-5 text-kalax-red" />
                  +255 713 328 271
                </a>
              </li>
              <li>
                <a href="mailto:info@kalax.co.tz" className="flex items-center gap-3 text-kalax-gray hover:text-kalax-red transition-colors">
                  <Mail className="w-5 h-5 text-kalax-red" />
                  info@kalax.co.tz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-kalax-red" />
                <span className="text-kalax-gray">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-kalax-charcoal"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-xl font-bold text-kalax-white mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-kalax-gray">Get the latest updates on advertising trends and our services.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-kalax-charcoal border-kalax-charcoal text-kalax-white placeholder:text-kalax-gray focus:border-kalax-red min-w-[300px]"
              />
              <Button className="bg-kalax-red hover:bg-kalax-red-dark text-kalax-white px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-kalax-charcoal py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-kalax-gray">
            <p>&copy; {new Date().getFullYear()} KALAX. All rights reserved.</p>
            <p className="font-medium">Trusted Excellence. Proven Results.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
