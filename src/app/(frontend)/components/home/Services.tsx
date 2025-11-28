import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useHero } from '../../contexts/HeroContext'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'

export const Services: React.FC = () => {
  const { services, fetchServices } = useHero()

  useEffect(() => {
    fetchServices()
  }, [])

  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })

  const wrapper: Variants = {
    hidden: { opacity: 0, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const heading: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
  }

  const cardParent: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  const card: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)', scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  // if (!services || services.length === 0) return null

  return (
    <motion.div
      id="services"
      ref={ref}
      variants={wrapper}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="bg-[#eefff3] xl:max-w-7xl md:mx-[4vw] mx-0 sm:mx-5 xl:mx-auto md:py-16 py-7 md:mt-28 mt-12 text-black"
    >
      {/* HEADING */}
      <motion.div
        variants={heading}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="flex justify-center items-center flex-col"
      >
        <h2 className="text-xl text-black md:text-2xl font-semibold tracking-wide md:mb-4 mb-2">
          OUR SERVICES
        </h2>
        <div className="w-24 sm:h-[2px] h-[1px] bg-[#0d5b27] mb-5"></div>
      </motion.div>

      {/* STAGGERED CARDS */}
      <motion.div
        variants={cardParent}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="md:mt-10 mt-3 md:px-8 overflow-hidden"
      >
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services?.map((service) => (
            <SwiperSlide key={service?.id}>
              <motion.div variants={card}>
                <img
                  src={service?.image.url}
                  alt={service?.title}
                  className="w-full h-60 object-cover rounded-md"
                />
                <p className="text-center md:text-lg py-4 font-medium italic">{service?.title}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  )
}
