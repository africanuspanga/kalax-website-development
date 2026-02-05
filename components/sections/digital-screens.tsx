"use client"

import { motion } from "framer-motion"
import { Play, MapPin, Monitor, Zap, Eye, Clock, DollarSign, Maximize, CheckCircle } from "lucide-react"
import { useRef, useState } from "react"

const digitalLocations = [
  {
    id: 1,
    name: "Mlimani City Roundabout",
    road: "Sam Nujoma Road",
    video: "/videos/digital-screen-mlimani-city.mp4",
    size: "768px x 1104px",
    status: "Available",
    visibility: "Traffic along Sam Nujoma",
    spotsPerDay: 650,
    pricing: {
      main: "$1,500",
      period: "per month",
      options: null,
    },
  },
  {
    id: 2,
    name: "Salender Bridge",
    road: "Ali Hassan Mwinyi Road",
    video: "/videos/New Salendar Bridge Screen.mp4",
    size: "1200px x 1440px",
    status: "Available",
    visibility: "Traffic from Town",
    spotsPerDay: 650,
    pricing: {
      main: "$2,500",
      period: "all day",
      options: [
        { time: "3:00pm - 11:59pm", price: "$2,000" },
        { time: "6:30am - 3:00pm", price: "$1,000" },
      ],
    },
  },
  {
    id: 3,
    name: "Mwai Kibaki Road",
    road: "Near Heineken House",
    video: "/videos/digital-screen-gsm-mall.mp4",
    size: "1200px x 1440px",
    status: "Available",
    visibility: "Traffic to Mbezi Beach",
    spotsPerDay: 650,
    pricing: {
      main: "$2,500",
      period: "all day",
      options: null,
    },
  },
]

const advantages = [
  { icon: Monitor, title: "Dynamic Content", description: "Change your ads in real-time" },
  { icon: Zap, title: "High Impact", description: "Motion captures attention" },
  { icon: MapPin, title: "Prime Locations", description: "Strategically positioned screens" },
]

export function DigitalScreensSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const handleVideoHover = (id: number, isHovering: boolean) => {
    const video = videoRefs.current[id]
    if (video) {
      if (isHovering) {
        video.play()
        setActiveVideo(id)
      } else {
        video.pause()
        setActiveVideo(null)
      }
    }
  }

  const handleVideoTouch = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      if (activeVideo === id) {
        video.pause()
        setActiveVideo(null)
      } else {
        // Pause all other videos
        Object.keys(videoRefs.current).forEach((key) => {
          const v = videoRefs.current[Number(key)]
          if (v) v.pause()
        })
        video.play()
        setActiveVideo(id)
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-kalax-charcoal relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-kalax-black/50 via-transparent to-kalax-black/50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-kalax-red/20 border border-kalax-red/40 rounded-full text-kalax-red text-sm font-medium tracking-wider uppercase mb-4 md:mb-6">
            Digital Advertising
          </span>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-kalax-white mb-4"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            DIGITAL{" "}
            <span className="text-kalax-red">SCREENS</span>
          </h2>
          <p className="text-kalax-gray max-w-2xl mx-auto text-base md:text-lg px-4">
            Captivate audiences with our premium digital billboard network. Dynamic content, 
            real-time updates, and maximum visibility at Tanzania&apos;s busiest locations.
          </p>
        </motion.div>

        {/* Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-kalax-black/50 rounded-xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-kalax-red/10 flex items-center justify-center flex-shrink-0">
                <advantage.icon className="w-5 h-5 md:w-6 md:h-6 text-kalax-red" />
              </div>
              <div>
                <h3 className="text-kalax-white font-semibold text-sm md:text-base">{advantage.title}</h3>
                <p className="text-kalax-gray text-xs md:text-sm">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Screen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {digitalLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-kalax-black rounded-2xl overflow-hidden border border-kalax-charcoal hover:border-kalax-red/30 transition-all duration-300"
            >
              {/* Video Container */}
              <div 
                className="relative aspect-video bg-kalax-charcoal cursor-pointer"
                onMouseEnter={() => handleVideoHover(location.id, true)}
                onMouseLeave={() => handleVideoHover(location.id, false)}
                onClick={() => handleVideoTouch(location.id)}
              >
                <video
                  ref={(el) => { videoRefs.current[location.id] = el }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={location.video} type="video/mp4" />
                </video>
                
                {/* Play indicator overlay */}
                <div className={`absolute inset-0 bg-kalax-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  activeVideo === location.id ? "opacity-0" : "opacity-100"
                }`}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-kalax-red/90 flex items-center justify-center shadow-lg shadow-kalax-red/30">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-kalax-white fill-kalax-white ml-1" />
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
                  <CheckCircle className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">{location.status}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 md:p-6">
                {/* Location Name */}
                <h3 className="text-xl md:text-2xl font-bold text-kalax-white mb-1">
                  {location.name}
                </h3>
                <div className="flex items-center gap-2 text-kalax-gray mb-4">
                  <MapPin className="w-4 h-4 text-kalax-red flex-shrink-0" />
                  <span className="text-sm">{location.road}</span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-kalax-charcoal/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-kalax-gray mb-1">
                      <Maximize className="w-3.5 h-3.5" />
                      <span className="text-xs uppercase tracking-wider">Size</span>
                    </div>
                    <p className="text-kalax-white text-sm font-medium">{location.size}</p>
                  </div>
                  <div className="bg-kalax-charcoal/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-kalax-gray mb-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-xs uppercase tracking-wider">Visibility</span>
                    </div>
                    <p className="text-kalax-white text-sm font-medium">{location.visibility}</p>
                  </div>
                </div>

                {/* Spots per day */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-kalax-red/10 rounded-lg">
                  <Clock className="w-4 h-4 text-kalax-red" />
                  <span className="text-kalax-white text-sm">
                    <span className="font-bold">{location.spotsPerDay}</span> spots per day
                  </span>
                </div>

                {/* Pricing */}
                <div className="border-t border-kalax-charcoal pt-4">
                  <div className="flex items-center gap-2 text-kalax-gray mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">Rental Pricing</span>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-kalax-red">{location.pricing.main}</span>
                    <span className="text-kalax-gray text-sm">/ {location.pricing.period}</span>
                  </div>

                  {location.pricing.options && (
                    <div className="space-y-1.5 mt-3">
                      {location.pricing.options.map((option) => (
                        <div key={option.time} className="flex items-center justify-between text-sm">
                          <span className="text-kalax-gray">{option.time}</span>
                          <span className="text-kalax-white font-medium">{option.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a 
                  href="/contact"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-kalax-red hover:bg-kalax-red/90 text-kalax-white font-semibold rounded-lg transition-colors text-sm md:text-base"
                >
                  Book This Screen
                  <span>&#8594;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-kalax-gray mb-4 text-sm md:text-base">
            Need a custom package or multiple screens?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-kalax-red text-kalax-red hover:bg-kalax-red hover:text-kalax-white font-semibold rounded-full transition-all"
          >
            Contact Us for Custom Rates
            <span className="ml-1">&#8594;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
