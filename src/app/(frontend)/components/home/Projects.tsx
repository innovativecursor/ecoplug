import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { useProjects } from '../../contexts/ProjectsContext'

export default function Projects() {
  const { projects } = useProjects()
  const [active, setActive] = useState(0)

  const images = projects?.map((p) => p.image?.url).filter(Boolean) || []
  if (!images.length) return null

  const circle = (index: number) => {
    const len = images.length
    return ((index % len) + len) % len
  }

  return (
    <section id="project" className="md:py-20 py-8 md:mt-28 mt-8 bg-[#0d0d0d] text-white">
      <div className="responsive">
        <h2 className="text-xl text-white md:text-3xl font-medium tracking-wide md:mb-6 mb-3">
          OUR RECENT PROJECTS
        </h2>

        <div className="w-24 h-[2px] bg-yellow-500 mt-3 mb-5"></div>

        <p className="tracking-wide md:text-sm text-xs">
          We’ve delivered EV charging solutions across: Residential societies, Bungalows &
          apartments, Office buildings, Commercial complexes, Retail & hospitality spaces, Parking
          stations, etc.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={1}
        allowTouchMove={false}
        speed={700}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="absolute opacity-0 pointer-events-none"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="opacity-0">{img}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative w-full flex justify-center items-center lg:h-[420px] md:h-96 h-60 lg:px-0 md:px-8 px-4 overflow-hidden md:mt-14 mt-3">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = circle(active + offset)

          let translateX = 0
          let scale = 1
          let opacity = 1
          let zIndex = 10

          if (offset === 0) {
            // ACTIVE
            translateX = 0
            scale = 1.1
            opacity = 1
            zIndex = 100
          } else if (offset === 1) {
            // right 30%
            translateX = 220
            scale = 0.95
            opacity = 0.7
            zIndex = 90
          } else if (offset === -1) {
            // left 30%
            translateX = -220
            scale = 0.95
            opacity = 0.7
            zIndex = 90
          } else if (offset === 2) {
            // far right 10%
            translateX = 360
            scale = 0.8
            opacity = 0.2
            zIndex = 30
          } else if (offset === -2) {
            // far left 10%
            translateX = -360
            scale = 0.8
            opacity = 0.2
            zIndex = 30
          }

          return (
            <div
              key={offset}
              onClick={() => setActive(index)}
              className="
        absolute cursor-pointer rounded-xl overflow-hidden shadow-xl
        transition-all duration-[700ms] ease-in-out will-change-transform
      "
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <Image src={images[index]} alt="" width={650} height={400} className="rounded-xl" />
            </div>
          )
        })}
      </div>

      {/* dots */}
      <div className="flex justify-center mt-8 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition ${
              active === i ? 'bg-[#0d5b27]' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
