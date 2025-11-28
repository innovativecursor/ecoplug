import { Metadata } from 'next'
import { HomeData } from './components/home/HomeData'

export const metadata: Metadata = {
  title: 'ECO Plug',
  description:
    'Eco Plug Solution is a trusted electrical service provider specializing in safe, reliable, and eco-friendly EV charging installations. Our trained technicians follow proper safety standards, ensuring every setup matches your needs and your property’s power capacity.',
}

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">
      <HomeData />
    </div>
  )
}
