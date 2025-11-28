import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useTestimonial } from '../../contexts/TestimonialsContext'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Testimonial: React.FC = () => {
  const { testimonials, fetchTestimonials } = useTestimonial()
  const [activeIndex, setActiveIndex] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const trimWords = (text: string, limit: number) => {
    const words = text.trim().split(' ')
    if (words.length <= limit) return text
    return words.slice(0, limit).join(' ') + '...'
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  if (!testimonials || testimonials.length === 0) return null

  const textParent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  }

  const textChild = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  }

  return (
    <section ref={ref} className="md:py-20 py-12 text-black">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xl md:text-2xl font-medium tracking-wide md:mb-6 mb-4">
          WHAT OUR CLIENTS ARE SAYING
        </h2>

        <div className="w-32 sm:h-[3px] h-[2px] bg-[#0d5b27] mb-5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:h-80 h-[600px] items-center justify-center mt-3 md:flex-row gap-8 relative">
                <div className="flex flex-col items-center">
                  <div className="relative w-80 h-56 md:w-52 md:h-44 rounded-3xl overflow-hidden">
                    <Image
                      src={item.image.url}
                      alt={item.name}
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mt-4">{item.name}</h3>
                </div>

                <div className="flex-1 relative text-center items-center justify-center">
                  <img
                    src="/pngwing_1.png"
                    alt="quote"
                    className="absolute left-0 top-0 md:w-9 md:h-9 w-3 h-3"
                  />

                  <motion.p
                    variants={textParent}
                    initial="hidden"
                    animate={inView && activeIndex === index ? 'show' : 'hidden'}
                    className="text-black font-medium md:mt-10 mt-2 md:ml-12 ml-2 
                               text-sm md:text-base md:leading-7 leading-6 w-full max-w-2xl"
                  >
                    {trimWords(item.feedback, 50)
                      .split(' ')
                      .map((word, i) => (
                        <motion.span key={i} variants={textChild}>
                          {word}{' '}
                        </motion.span>
                      ))}
                  </motion.p>

                  <img
                    src="/pngwing_2.png"
                    alt="quote"
                    className="absolute right-0 md:bottom-5 bottom-16 md:w-9 md:h-9 w-3 h-3"
                  />

                  <div className="flex justify-center md:mt-6 mt-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-orange-500 md:text-4xl text-3xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:mt-14 mt-8">
          <img src="/line.png" alt="line" className="w-full" />
        </div>

        <div className="flex md:justify-center justify-between items-center md:gap-36 md:mt-10 mt-6 px-4">
          <button className="prev-btn text-green-800 text-4xl">❮</button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition ${
                  i === activeIndex ? 'bg-green-700 scale-125' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>

          <button className="next-btn text-green-800 text-4xl">❯</button>
        </div>
      </div>
    </section>
  )
}
