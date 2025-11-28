import Image from 'next/image'
import { Check } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

export const Aboutus = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })

  const imageAnim: Variants = {
    hidden: { opacity: 0, x: -40, scale: 0.95, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const textParent: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const textItem: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" ref={ref} className="w-full xl:pt-32 md:pt-16 pt-10">
      <div className="responsive grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-8 items-center">
        <motion.div
          variants={imageAnim}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="col-span-1 sm:col-span-2">
            <div className="relative w-full md:h-[430px] lg:h-[500px] h-[300px] overflow-hidden">
              <Image src="/about1.png" alt="About image" fill className="object-contain" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={textParent}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex items-center flex-col "
        >
          <motion.h2
            variants={textItem}
            className="text-xl text-black md:text-3xl font-semibold tracking-wide lg:mb-7 mb-3"
          >
            ABOUT ECO PLUG SOLUTION
          </motion.h2>

          <motion.div
            variants={textItem}
            className="w-48 sm:h-[2px] h-[2px] bg-[#0d5b27] mb-5"
          ></motion.div>

          <motion.p
            variants={textItem}
            className="text-black w-full lg:mt-3 max-w-xl md:text-start text-center font-medium tracking-wide leading-7 lg:mb-9 mb-6 text-sm md:text-base"
          >
            Eco PLUG Solution is a trusted electrical service provider delivering reliable and
            eco-friendly EV charging installations. Our trained technicians follow standard safety
            guidelines, ensuring every installation matches your requirements and the power capacity
            of your property.
          </motion.p>

          <motion.h3
            variants={textItem}
            className="font-semibold text-black text-base md:text-lg lg:mt-9 md:mb-4 mb-2"
          >
            What We Stand For:
          </motion.h3>

          <motion.div
            variants={textItem}
            className="w-20 h-[2px] bg-[#0d5b27] lg:mb-8 mb-6"
          ></motion.div>

          <motion.div
            variants={textItem}
            className="grid text-black grid-cols-2 gap-y-4 gap-x-6 lg:mb-10 mb-7 text-[10px] md:text-sm"
          >
            {[
              'Safe & certified installations',
              'Energy-efficient',
              'Quick service with transparent pricing',
              'Long-term support',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-[#0d5b27] md:w-5 md:h-5 w-4 h-4 rounded-full flex justify-center items-center">
                  <Check className="text-white md:w-4 md:h-4 w-3 h-3" />
                </div>
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div variants={textItem} className="flex flex-wrap gap-5">
            <a
              href="https://www.facebook.com/p/Eco-PLUG-solution-61578759506951/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0d5b27] text-white md:w-52 lg:py-2.5 md:py-2 w-36 py-1.5 rounded-md text-xs md:text-sm lg:text-base hover:bg-black transition">
                Company Profile
              </button>
            </a>

            <a href="#services">
              <button className="bg-[#0d5b27] text-white md:w-52 lg:py-2.5 md:py-2 w-36 py-1.5 rounded-md text-xs md:text-sm lg:text-base hover:bg-black transition">
                Product & Services
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
