"use client"

import React from "react"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hello KALAX, I would like to inquire about your services.%0A%0A` +
      `*Name:* ${formState.name}%0A` +
      `*Email:* ${formState.email}%0A` +
      `*Phone:* ${formState.phone || 'N/A'}%0A` +
      `*Company:* ${formState.company || 'N/A'}%0A` +
      `*Service:* ${formState.service}%0A` +
      `*Message:* ${formState.message}`
    
    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/255769811511?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/billboard-night.jpg"
            alt="Contact KALAX"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kalax-black via-kalax-black/90 to-kalax-black" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-kalax-red/10 text-kalax-red text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-kalax-white mb-6">
              Let{"'"}s Create Something{" "}
              <span className="text-kalax-red">Extraordinary</span>
            </h1>
            <p className="text-xl text-kalax-gray">
              Ready to amplify your brand? We{"'"}re here to transform your vision into impactful advertising campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-kalax-white mb-2">Send Us a Message</h2>
              <p className="text-kalax-gray mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-kalax-white">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="bg-kalax-charcoal border-kalax-charcoal text-kalax-white placeholder:text-kalax-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-kalax-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="bg-kalax-charcoal border-kalax-charcoal text-kalax-white placeholder:text-kalax-gray"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-kalax-white">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+255 XXX XXX XXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="bg-kalax-charcoal border-kalax-charcoal text-kalax-white placeholder:text-kalax-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-kalax-white">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="bg-kalax-charcoal border-kalax-charcoal text-kalax-white placeholder:text-kalax-gray"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-kalax-white">Service Interested In</Label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full h-10 px-3 rounded-md bg-kalax-charcoal border border-kalax-charcoal text-kalax-white"
                  >
                    <option value="">Select a service</option>
                    <option value="outdoor">Outdoor Advertising</option>
                    <option value="marketing">Marketing</option>
                    <option value="creative">Creative</option>
                    <option value="printing">Printing Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-kalax-white">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-kalax-charcoal border-kalax-charcoal text-kalax-white placeholder:text-kalax-gray resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-kalax-red hover:bg-kalax-red/90 text-kalax-white">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-kalax-white mb-2">Contact Information</h2>
                <p className="text-kalax-gray mb-8">
                  Visit our office or reach out through any of the channels below.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-kalax-charcoal border border-kalax-charcoal hover:border-kalax-red/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kalax-red/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-kalax-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kalax-white mb-1">Office Address</h3>
                      <p className="text-kalax-gray">
                        P.O BOX 31942, PLOT NO 119, WHITE SAND ROAD JANGWANI STREET, MBEZI BEACH DAR ES SALAAM, TANZANIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-kalax-charcoal border border-kalax-charcoal hover:border-kalax-red/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kalax-red/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-kalax-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kalax-white mb-1">Phone Number</h3>
                      <a href="tel:+255769811511" className="text-kalax-gray hover:text-kalax-red transition-colors">
                        +255 769 811 511
                      </a>
                      <br />
                      <a href="tel:+255713328271" className="text-kalax-gray hover:text-kalax-red transition-colors">
                        +255 713 328 271
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-kalax-charcoal border border-kalax-charcoal hover:border-kalax-red/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kalax-red/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-kalax-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kalax-white mb-1">Email Address</h3>
                      <a href="mailto:info@kalax.co.tz" className="text-kalax-gray hover:text-kalax-red transition-colors">
                        info@kalax.co.tz
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-kalax-charcoal border border-kalax-charcoal hover:border-kalax-red/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kalax-red/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-kalax-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kalax-white mb-1">Business Hours</h3>
                      <p className="text-kalax-gray">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/30">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-kalax-white mb-1">Chat on WhatsApp</h3>
                    <p className="text-kalax-gray text-sm">Get instant response from our team</p>
                  </div>
                  <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                    <a href="https://wa.me/255769811511?text=I%20am%20coming%20from%20KALAX%20website%20requisition%20some%20of%20your%20services" target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-kalax-charcoal">
                <Image
                  src="/images/billboard-sprite.jpg"
                  alt="KALAX Billboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kalax-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-kalax-white font-medium">Premium Billboard Locations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-12 bg-kalax-red">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <motion.a
              href="tel:+255769811511"
              className="flex items-center gap-3 text-kalax-white hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-6 h-6" />
              <span className="font-medium">+255 769 811 511</span>
            </motion.a>
            <motion.a
              href="tel:+255713328271"
              className="flex items-center gap-3 text-kalax-white hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-6 h-6" />
              <span className="font-medium">+255 713 328 271</span>
            </motion.a>
            <motion.a
              href="mailto:info@kalax.co.tz"
              className="flex items-center gap-3 text-kalax-white hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">info@kalax.co.tz</span>
            </motion.a>
            <motion.a
              href="https://wa.me/255753630841"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-kalax-white hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">WhatsApp Us</span>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
