"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/255769811511?text=I%20am%20coming%20from%20KALAX%20website%20requisition%20some%20of%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
      
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  )
}
