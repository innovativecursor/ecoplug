import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { useProjects } from '../../contexts/ProjectsContext'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const { projects } = useProjects()
  const [active, setActive] = useState(0)

  const images = projects?.map((p) => p.image?.url).filter(Boolean) || []
  const isEmpty = images.length === 0

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  if (isEmpty) {
    return (
      <section
        id="projects"
        ref={ref}
        className="md:py-20 py-8 md:mt-28 mt-8 bg-[#0d0d0d] text-white"
      >
        <div className="responsive">
          <h2 className="text-xl md:text-3xl font-medium tracking-wide mb-3">
            OUR RECENT PROJECTS
          </h2>
          <div className="w-24 h-[2px] bg-yellow-500 mt-3 mb-5"></div>
          <p className="tracking-wide opacity-40">No projects available</p>
        </div>
      </section>
    )
  }

  const circle = (index: number) => {
    const len = images.length
    return ((index % len) + len) % len
  }

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="md:py-20 py-8 md:mt-28 mt-8 bg-[#0d0d0d] text-white"
    >
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

 
      <div
        className="relative w-full flex justify-center items-center lg:h-[420px] md:h-96 h-60 
        lg:px-0 md:px-8 px-4 overflow-hidden md:mt-14 mt-3"
      >
        {[-2, -1, 0, 1, 2].map((offset) => {
          const index = circle(active + offset)

          let translateX = 0,
            scale = 1,
            opacity = 1,
            zIndex = 10

          if (offset === 0) {
            translateX = 0
            scale = 1.12
            opacity = 1
            zIndex = 100
          } else if (offset === 1) {
            translateX = 210
            scale = 0.9
            opacity = 0.55
            zIndex = 80
          } else if (offset === -1) {
            translateX = -210
            scale = 0.9
            opacity = 0.55
            zIndex = 80
          } else if (offset === 2) {
            translateX = 360
            scale = 0.75
            opacity = 0.18
            zIndex = 20
          } else if (offset === -2) {
            translateX = -360
            scale = 0.75
            opacity = 0.18
            zIndex = 20
          }

          return (
            <div
              key={offset}
              onClick={() => setActive(index)}
              className="absolute cursor-pointer rounded-xl overflow-hidden shadow-xl project-img"
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
    </motion.section>
  )
}
