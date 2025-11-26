import { useEffect, useState } from 'react'
import { useHero } from '../../contexts/HeroContext'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  suffix?: string
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    let counter: ReturnType<typeof setInterval> | undefined

    if (inView) {
      let start = 0
      const duration = 1500
      const increment = end / (duration / 30)

      counter = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          if (counter) clearInterval(counter)
        }
        setCount(Math.floor(start))
      }, 30)
    } else {
      setCount(0)
    }

    return () => {
      if (counter) clearInterval(counter)
    }
  }, [inView, end])

  return (
    <h3 ref={ref} className="text-4xl md:text-7xl font-bold">
      {count}
      {suffix}
    </h3>
  )
}

export default function Achievements() {
  const { achievements, fetchAchievements } = useHero()

  useEffect(() => {
    fetchAchievements()
  }, [])

  if (!achievements) return null

  const stats = achievements

  return (
    <section className="bg-primary text-white md:py-16 py-9">
      <div className="responsive grid md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-wide">OUR ACHIEVEMENTS </h2>
          <h2 className="text-3xl md:text-4xl font-medium tracking-wide md:mt-3 mt-1 md:mb-5 mb-2">
            IN NUMBERS
          </h2>
          <div className="w-24 md:h-[3px] h-[1px] bg-yellow-400 md:mt-7 mt-2"></div>
        </div>

        <div>
          <p className="text-xs md:mt-0 mt-5 md:text-base tracking-wide md:leading-6 leading-4 w-full max-w-xl">
            Since our beginning, Eco PLUG Solution has been committed to delivering safe, reliable,
            and high-quality EV charger installations across residential, commercial, and business
            spaces. With expert technicians, proven service quality, and a customer-first approach,
            we ensure smooth execution and complete satisfaction in every project. We believe in
            transparency, clear communication, and long-term support at every step.
          </p>

          <div className="flex items-start md:gap-32 md:justify-normal justify-between md:mt-16 mt-7">
            <div className="flex flex-col items-start gap-2">
              <Counter end={stats.evChargersInstalled} suffix="+" />
              <div className="md:w-12 md:h-[3px] w-8 h-[1px] bg-yellow-400 md:my-2"></div>
              <p className="text-[10px] md:text-base font-medium">EV Chargers Installed</p>
            </div>

            <div className="flex  flex-col md:items-start items-end gap-2">
              <Counter end={stats.industryExperienceYears} suffix="+" />
              <div className="md:w-12 md:h-[3px] w-8 h-[1px] bg-yellow-400 md:my-2"></div>
              <p className="text-[10px] md:text-base font-medium">Years of Industry Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
