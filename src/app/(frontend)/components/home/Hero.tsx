// import { useEffect } from 'react'
// import Image from 'next/image'
// import { useHero } from '../../contexts/HeroContext'

// export default function Hero() {
//   const { hero, fetchHero } = useHero()

//   useEffect(() => {
//     fetchHero()
//   }, [])

//   if (!hero) return null

//   const imageUrl = hero?.backgroundImage?.url || '/placeholder.png'

//   return (
//     <section
//       id="home"
//       className="xl:mt-20 md:mt-16 mt-12 text-center relative flex justify-center items-center"
//     >
//       <Image
//         src={imageUrl}
//         alt="Hero Image"
//         width={1920}
//         height={765}
//         className="shadow-lg max-w-full w-full h-auto"
//       />

//       <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 ">
//         <h2 className="lg:text-6xl md:text-4xl text-xs md:tracking-wide md:mb-1 capitalize font-semibold">
//           {hero.heading}
//         </h2>

//         <h2 className="lg:text-6xl md:text-4xl xl:mt-2 md:mt-1 text-xs md:tracking-wider capitalize font-semibold">
//           {hero.subheading}
//         </h2>

//         <p className="text-center xl:mt-11 md:mt-7 mt-2 text-white tracking-wide xl:text-base md:text-sm sm:text-xs text-[7px] md:max-w-xl max-w-64">
//           Eco PLUG Solution specializes in high-quality EV charger installations for homes,
//           businesses, and commercial properties.
//         </p>
//         <a href="#contact">
//           <button
//             className="bg-[#0d5b27] border border-[#0d5b27] rounded-sm xl:w-52 xl:mt-8 mt-2 md:mt-5 text-white xl:h-12 md:w-48 w-36
//          h-6 font-medium xl:text-base md:text-sm text-[11px] hover:bg-black hover:text-white transition-all"
//           >
//             Install my EV Charger
//           </button>
//         </a>
//       </div>
//     </section>
//   )
// }













import { useEffect } from 'react'
import Image from 'next/image'
import { useHero } from '../../contexts/HeroContext'
import { motion } from "framer-motion"

export default function Hero() {
  const { hero, fetchHero } = useHero()

  useEffect(() => {
    fetchHero()
  }, [])

  if (!hero) return null

  const imageUrl = hero?.backgroundImage?.url || '/placeholder.png'

  return (
    <section
      id="home"
      className="xl:mt-20 md:mt-16 mt-12 text-center relative flex justify-center items-center"
    >
      {/* Background Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} // Animate every time this section is visible
        className="w-full"
      >
        <Image
          src={imageUrl}
          alt="Hero Image"
          width={1920}
          height={765}
          className="shadow-lg max-w-full w-full h-auto"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 ">
        
        {/* Wrapper for stagger animations */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }} // retrigger on scroll
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.25 }
            }
          }}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="lg:text-6xl md:text-4xl text-xs md:tracking-wide md:mb-1 capitalize font-semibold"
          >
            {hero.heading}
          </motion.h2>

          {/* Subheading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.9 }}
            className="lg:text-6xl md:text-4xl xl:mt-2 md:mt-1 text-xs md:tracking-wider capitalize font-semibold"
          >
            {hero.subheading}
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1 }}
            className="text-center xl:mt-11 md:mt-7 mt-2 text-white tracking-wide xl:text-base md:text-sm sm:text-xs text-[7px] md:max-w-xl max-w-64"
          >
            Eco PLUG Solution specializes in high-quality EV charger installations for homes,
            businesses, and commercial properties.
          </motion.p>

          {/* Button */}
          <a href="#contact">
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 1.1 }}
              className="bg-[#0d5b27] border border-[#0d5b27] rounded-sm xl:w-52 xl:mt-8 mt-2 md:mt-5 text-white xl:h-12 md:w-48 w-36
           h-6 font-medium xl:text-base md:text-sm text-[11px] hover:bg-black hover:text-white transition-all"
            >
              Install my EV Charger
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
