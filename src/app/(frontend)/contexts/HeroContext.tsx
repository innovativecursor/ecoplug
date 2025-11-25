'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import {
  Achievement,
  AchievementsResponse,
  HeroData,
  Service,
  ServicesResponse,
  SocialLinksData,
} from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface HeroContextType {
  hero: HeroData | null
  fetchHero: () => Promise<void>
  social: SocialLinksData | null
  fetchSocialLinks: () => Promise<void>
  services: Service[] | null
  fetchServices: () => Promise<void>

  achievements: Achievement | null
  fetchAchievements: () => Promise<void>
}

const HeroContext = createContext<HeroContextType>({
  hero: null,
  fetchHero: async () => {},
  social: null,
  fetchSocialLinks: async () => {},
  services: null,
  fetchServices: async () => {},
  achievements: null,
  fetchAchievements: async () => {},
})

export const useHero = () => useContext(HeroContext)

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [hero, setHero] = useState<HeroData | null>(null)
  const [social, setSocial] = useState<SocialLinksData | null>(null)
  const [services, setServices] = useState<Service[] | null>(null)
const [achievements, setAchievements] = useState<Achievement | null>(null)

  const fetchHero = async () => {
    try {
      const data = await fetchDataGet<HeroData>(endpoints.hero.getAll)
      setHero(data)
    } catch (error) {
      console.error('Failed to fetch Hero:', error)
    }
  }

  const fetchSocialLinks = async () => {
    try {
      const data = await fetchDataGet<SocialLinksData>(endpoints.sociallinks.getAll)
      setSocial(data)
    } catch (error) {
      console.error('Failed to fetch Hero:', error)
    }
  }

  const fetchServices = async () => {
    try {
      const data = await fetchDataGet<ServicesResponse>(endpoints.services.getAll)
      setServices(data.docs)
    } catch (error) {
      console.error('Failed to fetch Hero:', error)
    }
  }

  const fetchAchievements = async () => {
    try {
      const data = await fetchDataGet<AchievementsResponse>(endpoints.achievements.getAll)
      setAchievements(data)
    } catch (error) {
      console.error('Failed to fetch Achievements:', error)
    }
  }

  return (
    <HeroContext.Provider
      value={{
        hero,
        fetchHero,
        fetchSocialLinks,
        social,
        services,
        fetchServices,
        achievements,
        fetchAchievements,
      }}
    >
      {children}
    </HeroContext.Provider>
  )
}
