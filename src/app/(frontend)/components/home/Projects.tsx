'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Image from 'next/image'
import { useProjects } from '../../contexts/ProjectsContext'

export default function Projects() {
  const { projects } = useProjects()
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<any>(null)

  const images = projects?.map((p) => p.image?.url).filter(Boolean) || []

  if (!images.length) return null

  return (
    <section id="project" className="py-20 md:mt-28 mt-12 bg-[#0d0d0d] text-white">
      <div className="responsive">
        <h2 className="text-xl text-white md:text-3xl font-medium tracking-wide md:mb-6 mb-3">
          OUR RECENT PROJECTS
        </h2>

        <div className="w-24 h-[2px] bg-yellow-500 mt-3 mb-5"></div>
        <p className="tracking-wide md:text-sm text-xs">
          We’ve delivered EV charging solutions across: Residential societies, Bungalows &
          apartments, Office <br /> buildings, Commercial complexes, Retail & hospitality spaces,
          Parking stations, etc.
        </p>

        <div className="relative md:mt-14 mt-7">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            loop
            centeredSlides
            slidesPerView={'auto'}
            spaceBetween={-120}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.2,
              slideShadows: false,
            }}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="py-10"
          >
            {images.map((src, index) => {
              const isActive = index === activeIndex

              return (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center transition-all duration-700"
                  style={{
                    width: isActive ? 900 : 300,
                    height: isActive ? 520 : 220,
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl transition-all duration-700 ${
                      isActive
                        ? 'opacity-100 scale-100 z-50 shadow-2xl'
                        : 'opacity-50 scale-90 blur-[1px] z-20'
                    }`}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Image src={src} alt="project" fill className="object-cover" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-green-600 w-4 h-4' : 'bg-gray-500 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
