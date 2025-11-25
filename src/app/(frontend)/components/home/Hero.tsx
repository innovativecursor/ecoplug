import { useEffect } from 'react'
import Image from 'next/image'
import { useHero } from '../../contexts/HeroContext'

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
      <Image
        src={imageUrl}
        alt="Hero Image"
        width={1920}
        height={765}
        className="shadow-lg max-w-full w-full h-auto"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 ">
        <h2 className="lg:text-6xl md:text-4xl text-xs md:tracking-wide md:mb-1 capitalize font-semibold">
          {hero.heading}
        </h2>

        <h2 className="lg:text-6xl md:text-4xl xl:mt-2 md:mt-1 text-xs md:tracking-wider capitalize font-semibold">
          {hero.subheading}
        </h2>

        <p className="text-center xl:mt-11 md:mt-7 mt-2 text-white tracking-wide xl:text-base md:text-sm sm:text-xs text-[7px] md:max-w-xl max-w-64">
          Eco PLUG Solution specializes in high-quality EV charger installations for homes,
          businesses, and commercial properties.
        </p>
        <button
          className="bg-[#0d5b27] border border-[#0d5b27] rounded-sm xl:w-52 xl:mt-8 mt-2 md:mt-5 text-white xl:h-12 md:w-48 w-36
         h-6 font-medium xl:text-base md:text-sm text-[11px] hover:bg-black hover:text-white transition-all"
        >
          <a href="tel:+63 9317915640">Install my EV Charger</a>
        </button>
      </div>
    </section>
  )
}