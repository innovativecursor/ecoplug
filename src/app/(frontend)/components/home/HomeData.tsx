'use client'
import { Aboutus } from './Aboutus'
import Achievements from './Achievements'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import { Services } from './Services'
import { Testimonial } from './Testimonial'

export const HomeData = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Services />
      <Projects />
      <Achievements />
      <Testimonial />
      <Contact />
    </>
  )
}
