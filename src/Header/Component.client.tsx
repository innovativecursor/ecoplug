'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SocialIcons from '@/app/(frontend)/components/ui/SocialIcons'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  return (
    <header className="w-full bg-[#c7eacf] fixed top-0 z-[999]">
      <div className="py-0.5 flex justify-between responsive-mx">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>

        <div className="hidden md:flex items-center xl:gap-10 md:gap-7">
          <HeaderNav />
        </div>
        <div className="hidden md:flex items-center justify-center gap-5">
          <p className="text-black font-medium xl:text-lg text-sm">+63 9317915640</p>
          <SocialIcons />
          <button className="bg-[#0d5b27] border border-[#0d5b27] rounded-sm xl:w-32 text-white xl:h-11 md:w-32 h-10 font-medium text-base hover:bg-black hover:text-white transition-all">
            <a href="tel:+63 9317915640">Contact Us</a>
          </button>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40  backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-xs bg-[#c7eacf] z-20 flex flex-col justify-between py-10 px-6 shadow-2xl rounded-r-3xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 70, damping: 16 }}
            >
              <div className="flex items-center justify-between mb-10">
                <Logo className="w-20 h-20" />
                <X size={26} onClick={() => setMenuOpen(false)} className="text-gray-600" />
              </div>

              <div className="flex flex-col gap-6">
                <HeaderNav setMenuOpen={setMenuOpen} />
              </div>

              <div className="mt-10 flex flex-col gap-4">
                <p className="text-gray-800 text-lg font-semibold tracking-wide">Need help?</p>

                <a href="tel:+63 9317915640">
                  <div className="w-full bg-[#0d5b27] text-white rounded-xl h-12 flex items-center justify-center font-semibold text-base shadow-lg hover:bg-black transition">
                    Call Us
                  </div>
                </a>

                <p className="text-gray-500 text-sm">+63 931 791 5640</p>
              </div>

              <div className="flex justify-center mt-8 pb-4">
                <SocialIcons />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
