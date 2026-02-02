"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Grid3X3, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-kalax-black">
      <Navigation />

      {/* 404 Content */}
      <section className="pt-32 pb-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Large 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <span 
                className="text-[120px] md:text-[180px] font-bold text-kalax-red leading-none"
                style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
              >
                404
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-kalax-white mb-6"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-kalax-gray text-lg mb-10 max-w-md mx-auto"
            >
              Oops! The page you&apos;re looking for seems to have vanished into thin air. 
              Let&apos;s get you back on track.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-kalax-red hover:bg-kalax-red/90 text-kalax-white font-semibold px-8 py-6 text-lg rounded-full"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-kalax-white text-kalax-white hover:bg-kalax-white hover:text-kalax-black font-semibold px-8 py-6 text-lg rounded-full bg-transparent"
              >
                <Link href="/portfolio">
                  <Grid3X3 className="w-5 h-5 mr-2" />
                  View Portfolio
                </Link>
              </Button>
            </motion.div>

            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center text-kalax-gray hover:text-kalax-red transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
