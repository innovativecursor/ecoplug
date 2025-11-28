const baseURLLive = 'https://ecoplugsolution.com/api'
const baseURLDev = 'https://ecoplugsolution.com/api'

const isLive = false
const baseUrl = isLive ? baseURLLive : baseURLDev

const endpoints = {
  hero: {
    getAll: `${baseUrl}/globals/hero`,
  },
  services: {
    getAll: `${baseUrl}/services`,
  },
  testimonials: {
    getAll: `${baseUrl}/testimonials`,
  },
  projects: {
    getAll: `${baseUrl}/projects`,
  },
  sociallinks: {
    getAll: `${baseUrl}/globals/social-links`,
  },
  achievements: {
    getAll: `${baseUrl}/globals/achievements`,
  },
  contactSubmissions: {
    create: `${baseUrl}/contact`,
  },
}

export default endpoints
