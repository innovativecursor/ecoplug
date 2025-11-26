import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d5b27] text-white md:py-12 pt-8 pb-2 ">
      <div className="responsive">
        <div className="flex justify-between sm:flex-row flex-col lg:gap-0 gap-6 md:items-start items-center">
          <div className="flex w-full justify-between md:items-start lg:gap-32 md:gap-4 gap-12">
            <div className="">
              <h3 className="text-base font-semibold mb-3">Services</h3>
              <ul className="space-y-2 md:text-sm text-xs opacity-90">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-end md:items-start text-right md:text-left float-right">
              <h3 className="text-base font-semibold mb-3">Contact Us</h3>

              <ul className="md:space-y-3 space-y-4 md:text-sm text-[11px] opacity-90 flex flex-col items-end md:items-start">
                <li className="flex items-center md:gap-3 gap-1 justify-end md:justify-start">
                  <Phone size={14} className="text-white" />
                  +63 931 791 5640
                </li>

                <li className="flex items-center  md:gap-3 gap-1 justify-end md:justify-start break-words">
                  <Mail size={14} className="text-white" />
                  mendozaejhaykhiell@gmail.com
                </li>

                <li className="flex items-center  md:gap-3 gap-1 justify-end md:justify-start break-words">
                  <MapPin size={14} className="text-white" />
                  PATIIS RD, San Mateo, Philippines, 1850
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full lg:justify-end">
            <iframe
              src="https://www.google.com/maps?q=San+Mateo%2C+Rizal%2C+San+Mateo%2C+1850%2C+Philippines&output=embed"
              className="rounded-lg w-full h-48 md:h-40 lg:w-[400px] border border-white"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="md:my-10 my-3 border-t border-white/30"></div>

        <div className="flex items-center mx-2 md:mx-0 justify-between md:text-xs text-[7px] opacity-90 gap-4">
          <p>© 2025 Eco PLUG solution. All Rights Reserved</p>
          <p>Designed and Developed by Innovative Cursor</p>
        </div>
      </div>
    </footer>
  )
}
