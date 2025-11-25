import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { draftMode } from 'next/headers'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { HeroProvider } from './contexts/HeroContext'
import { TestimonialProvider } from './contexts/TestimonialsContext'
import { ProjectsProvider } from './contexts/ProjectsContext'
import RouteLoader from './loader/RouteLoader'
import ScrollToTop from './components/scrolltotop/ScrollToTop'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/logo.png" rel="icon" sizes="32x32" />
        <link href="/logo.png" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <>
          <RouteLoader />
          <ScrollToTop />
          <Providers>
            <ProjectsProvider>
              <TestimonialProvider>
                <HeroProvider>
                  <Toaster position="top-right" />
                  <Header />
                  {children}
                  <Footer />
                </HeroProvider>
              </TestimonialProvider>
            </ProjectsProvider>
          </Providers>
        </>
      </body>
    </html>
  )
}
export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),

  title: {
    default: 'Eco Plug Solution',
    template: '%s | Eco Plug Solution',
  },

  description:
    'Eco Plug Solution is a trusted electrical service provider specializing in safe, reliable, and eco-friendly EV charging installations. Our trained technicians follow proper safety standards, ensuring every setup matches your needs and your property’s power capacity.',

  keywords: [
    'Eco Plug Solution',
    'EV charging installation',
    'EV charger installer',
    'electric vehicle charging',
    'eco-friendly charging',
    'home EV charger',
    'commercial EV charger',
    'electrical services',
    'EV solutions',
  ],

  openGraph: {
    title: 'Eco Plug Solution',
    description:
      'Eco Plug Solution provides professional, safe, and eco-friendly EV charging installations for homes and businesses. Reliable service backed by trained technicians.',
    url: getServerSideURL(),
    siteName: 'Eco Plug Solution',
    images: [
      {
        url: `${getServerSideURL()}/banner.png`,
        width: 1200,
        height: 630,
        alt: 'Eco Plug Solution EV Charging Services',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Eco Plug Solution',
    description:
      'Safe and reliable EV charging installation services for residential and commercial properties.',
    images: [`${getServerSideURL()}/banner.png`],
    creator: '@ecoplugsolution',
  },

  authors: [{ name: 'Eco Plug Solution' }],
  creator: 'Eco Plug Solution Team',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: getServerSideURL(),
  },
}
