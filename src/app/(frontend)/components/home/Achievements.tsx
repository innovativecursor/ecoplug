// import { useEffect, useState } from 'react'
// import { useHero } from '../../contexts/HeroContext'
// import { useInView } from 'react-intersection-observer'

// interface CounterProps {
//   end: number
//   suffix?: string
// }

// const Counter: React.FC<CounterProps> = ({ end, suffix = '' }) => {
//   const [count, setCount] = useState(0)
//   const { ref, inView } = useInView({ threshold: 0.5 })

//   useEffect(() => {
//     let counter: ReturnType<typeof setInterval> | undefined

//     if (inView) {
//       let start = 0
//       const duration = 1500
//       const increment = end / (duration / 30)

//       counter = setInterval(() => {
//         start += increment
//         if (start >= end) {
//           start = end
//           if (counter) clearInterval(counter)
//         }
//         setCount(Math.floor(start))
//       }, 30)
//     } else {
//       setCount(0)
//     }

//     return () => {
//       if (counter) clearInterval(counter)
//     }
//   }, [inView, end])

//   return (
//     <h3 ref={ref} className="text-4xl md:text-7xl font-bold">
//       {count}
//       {suffix}
//     </h3>
//   )
// }

// export default function Achievements() {
//   const { achievements, fetchAchievements } = useHero()

//   useEffect(() => {
//     fetchAchievements()
//   }, [])

//   if (!achievements) return null

//   const stats = achievements

//   return (
//     <section className="bg-primary text-white md:py-16 py-9">
//       <div className="responsive grid md:grid-cols-2 items-start">
//         <div>
//           <h2 className="text-3xl md:text-4xl font-medium tracking-wide">OUR ACHIEVEMENTS </h2>
//           <h2 className="text-3xl md:text-4xl font-medium tracking-wide md:mt-3 mt-1 md:mb-5 mb-2">
//             IN NUMBERS
//           </h2>
//           <div className="w-24 md:h-[3px] h-[1px] bg-yellow-400 md:mt-7 mt-2"></div>
//         </div>

//         <div>
//           <p className="text-xs md:mt-0 mt-5 md:text-base tracking-wide md:leading-6 leading-4 w-full max-w-xl">
//             Since our beginning, Eco PLUG Solution has been committed to delivering safe, reliable,
//             and high-quality EV charger installations across residential, commercial, and business
//             spaces. With expert technicians, proven service quality, and a customer-first approach,
//             we ensure smooth execution and complete satisfaction in every project. We believe in
//             transparency, clear communication, and long-term support at every step.
//           </p>

//           <div className="flex items-start md:gap-32 md:justify-normal justify-between md:mt-16 mt-7">
//             <div className="flex flex-col items-start gap-2">
//               <Counter end={stats.evChargersInstalled} suffix="+" />
//               <div className="md:w-12 md:h-[3px] w-8 h-[1px] bg-yellow-400 md:my-2"></div>
//               <p className="text-[10px] md:text-base font-medium">EV Chargers Installed</p>
//             </div>

//             <div className="flex  flex-col md:items-start items-end gap-2">
//               <Counter end={stats.industryExperienceYears} suffix="+" />
//               <div className="md:w-12 md:h-[3px] w-8 h-[1px] bg-yellow-400 md:my-2"></div>
//               <p className="text-[10px] md:text-base font-medium">Years of Industry Experience</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


























import { useEffect, useState } from "react"
import { useHero } from "../../contexts/HeroContext"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface CounterProps {
  end: number
  suffix?: string
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.4 })

  useEffect(() => {
    let interval: any
    if (inView) {
      let start = 0
      const duration = 1300
      const inc = end / (duration / 20)

      interval = setInterval(() => {
        start += inc
        if (start >= end) {
          start = end
          clearInterval(interval)
        }
        setCount(Math.floor(start))
      }, 20)
    } else {
      setCount(0)
    }
    return () => clearInterval(interval)
  }, [inView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={
        inView
          ? { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
          : {}
      }
      className="relative overflow-hidden"
    >
      {/* Swipe mask */}
      <motion.div
        animate={
          inView
            ? { x: ["-120%", "120%"] }
            : {}
        }
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"
      />

      <h3 className="text-4xl md:text-7xl font-bold relative z-10">
        {count}
        {suffix}
      </h3>
    </motion.div>
  )
}

export default function Achievements() {
  const { achievements, fetchAchievements } = useHero()
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) controls.start("show")
  }, [inView])

  useEffect(() => {
    fetchAchievements()
  }, [])

  if (!achievements) return null

  const stats = achievements

  // Modern depth entry animation
  const sectionReveal = {
    hidden: { opacity: 0, scale: 0.96, rotateX: 8 },
    show: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Clean mask slide for headings
  const headingMask = {
    hidden: { x: "100%" },
    show: {
      x: "0%",
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.section
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      animate={controls}
      className="bg-primary text-white md:py-16 py-9"
    >
      <div className="responsive grid md:grid-cols-2 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <motion.h2
            variants={headingMask}
            className="text-3xl md:text-4xl font-medium overflow-hidden"
          >
            OUR ACHIEVEMENTS
          </motion.h2>

          <motion.h2
            variants={headingMask}
            className="text-3xl md:text-4xl font-medium md:mt-3 mt-1 md:mb-5 mb-2 overflow-hidden"
          >
            IN NUMBERS
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-24 md:h-[3px] h-[1px] bg-yellow-400 md:mt-7 mt-2"
          ></motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div variants={fadeUp}>
          <p className="text-xs md:mt-0 mt-5 md:text-base max-w-xl tracking-wide leading-5 md:leading-6">
            Eco PLUG Solution has been focused on delivering reliable EV charger installations with
            expert technicians, smooth execution, and a customer-first approach.
          </p>

          <div className="flex items-start md:gap-32 justify-between md:mt-16 mt-7">

            {/* Counter 1 */}
            <div className="flex flex-col items-start gap-3">
              <Counter end={stats.evChargersInstalled} suffix="+" />
              <div className="md:w-12 md:h-[3px] w-8 h-[1px] bg-yellow-400"></div>
              <p className="text-[10px] md:text-base font-medium">EV Chargers Installed</p>
            </div>

            {/* Counter 2 */}
            <div className="flex flex-col md:items-start items-end gap-3">
              <Counter end={stats.industryExperienceYears} suffix="+" />
              <div className="md:w-12 md:h-[3px] w-8 h-[1px] bg-yellow-400"></div>
              <p className="text-[10px] md:text-base font-medium">Years of Industry Experience</p>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
