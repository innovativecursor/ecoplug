import Image from 'next/image'
import { Check } from 'lucide-react'

export const Aboutus = () => {
  return (
    <section id="about" className="w-full xl:pt-32 md:pt-28 pt-8 bg-white">
      <div className="responsive grid grid-cols-1 lg:grid-cols-2 sm:gap-16 gap-8 sm:items-start items-center">
        {/* IMAGE SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1 sm:col-span-2">
            {/* HOVER EFFECT WRAPPER */}
            <div className="group relative w-full h-[550px] overflow-hidden ">
              {/* Image only on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <Image
                  src="/about1.png"
                  alt="Hover Image"
                  fill
                  className="object-cover transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex items-center flex-col sm:items-star opacity-10 hover:opacity-100 transition-all duration-500">
          <h2 className="text-xl text-black md:text-3xl font-semibold tracking-wide md:mb-7 mb-3">
            ABOUT ECO PLUG SOLUTION
          </h2>

          <div className="w-48 sm:h-[2px] h-[2px] bg-[#0d5b27] mb-5"></div>

          <p className="text-black w-full md:mt-3 max-w-2xl md:text-start text-center font-medium tracking-wide leading-relaxed md:mb-9 mb-6 text-sm md:text-base">
            Eco PLUG Solution is a trusted electrical service provider delivering reliable and
            eco-friendly EV charging installations. Our trained technicians follow standard safety
            guidelines, ensuring every installation matches your requirements and the power capacity
            of your property.
          </p>

          <h3 className="font-semibold text-black text-base md:text-lg md:mt-9 md:mb-4 mb-2">
            What We Stand For:
          </h3>

          <div className="w-20 h-[2px] bg-[#0d5b27] md:mb-8 mb-6"></div>

          <div className="grid text-black grid-cols-2 gap-y-4 gap-x-6 md:mb-10 mb-7 text-[10px] md:text-sm">
            <div className="flex items-center gap-3">
              <div className="bg-[#0d5b27] md:w-5 md:h-5 w-4 h-4 rounded-full flex justify-center items-center">
                <Check className="text-white md:w-4 md:h-4 w-3 h-3" />
              </div>
              Safe & certified installations
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0d5b27] md:w-5 md:h-5 w-4 h-4 rounded-full flex justify-center items-center">
                <Check className="text-white md:w-4 md:h-4 w-3 h-3" />
              </div>
              Energy-efficient
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0d5b27] md:w-5 md:h-5 w-4 h-4 rounded-full flex justify-center items-center">
                <Check className="text-white md:w-4 md:h-4 w-3 h-3" />
              </div>
              Quick service with transparent pricing
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0d5b27] md:w-5 md:h-5 w-4 h-4 rounded-full flex justify-center items-center">
                <Check className="text-white md:w-4 md:h-4 w-3 h-3" />
              </div>
              Long-term support
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <button className="bg-[#0d5b27] text-white md:w-52 md:py-2.5 w-36 py-1.5 rounded-md text-xs md:text-base hover:bg-black transition">
              Company Profile
            </button>

            <button className="bg-[#0d5b27] text-white md:w-52 md:py-2.5 w-36 py-1.5 rounded-md text-xs md:text-base hover:bg-black transition">
              Product & Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
