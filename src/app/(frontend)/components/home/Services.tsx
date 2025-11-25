import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useHero } from '../../contexts/HeroContext'

export const Services: React.FC = () => {
  const { services, fetchServices } = useHero()

  useEffect(() => {
    fetchServices()
  }, [])
  if (!services || services.length === 0) return null

  return (
    <div id="services" className="bg-[#eefff3] xl:max-w-7xl md:mx-[4vw] mx-0 sm:mx-5 xl:mx-auto md:py-16 py-7 md:mt-28 mt-12 text-black">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xl text-black md:text-2xl font-semibold tracking-wide md:mb-4 mb-2">
          OUR SERVICES
        </h2>
        <div className="w-24  sm:h-[2px] h-[1px] bg-[#0d5b27] mb-5"></div>
      </div>

      <div
        className="md:mt-10 mt-3 md:px-8 opacity-10 hover:opacity-100 transition-opacity 
              duration-300  overflow-hidden cursor-pointer"
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
              <div className="">
                <img
                  src={service?.image.url}
                  alt={service?.title}
                  className="w-full h-60 object-cover"
                />
                <p className="text-center py-4 font-medium italic">{service?.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
