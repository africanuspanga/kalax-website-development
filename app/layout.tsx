import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KALAX - Tanzania\'s Leading Outdoor Advertising Company | Building Legacies Since 2015',
  description: 'KALAX is Tanzania\'s leading outdoor advertising company based in Dar es Salaam. We don\'t just advertise - we create visibility. Static billboards, digital screens, marketing, creative, and printing services.',
  keywords: ['outdoor advertising Tanzania', 'billboards Dar es Salaam', 'digital screens Tanzania', 'static billboards', 'KALAX', 'marketing Tanzania', 'printing services'],
  authors: [{ name: 'KALAX' }],
  creator: 'KALAX',
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    url: 'https://kalax.co.tz',
    siteName: 'KALAX',
    title: 'KALAX - Tanzania\'s Leading Outdoor Advertising Company',
    description: 'We don\'t just advertise - we create visibility. 10+ years of excellence in outdoor advertising, marketing, creative, and printing.',
    images: [
      {
        url: '/images/billboard-golden.jpg',
        width: 1200,
        height: 630,
        alt: 'KALAX - Present All Over Tanzania',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KALAX - Tanzania\'s Leading Outdoor Advertising Company',
    description: 'We don\'t just advertise - we create visibility.',
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#E31837',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased bg-kalax-black text-kalax-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
