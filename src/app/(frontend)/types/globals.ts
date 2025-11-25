export interface Media {
  id: string
  url: string
  filename: string
  mimeType: string
  filesize: number
  createdAt: string
  updatedAt: string
}

export interface Service {
  id: string
  title: string
  image: Media
  createdAt: string
  updatedAt: string
}

export interface Achievement {
  id: string
  evChargersInstalled: number
  industryExperienceYears: number
  createdAt: string
  updatedAt: string
}
export type AchievementsResponse = Achievement


export interface ServicesResponse {
  docs: Service[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export interface HeroData {
  heading: string
  subheading: string
  backgroundImage: { url: string }
  yearsOfExperience?: number
  projectsCompleted?: number
  clientSatisfaction?: number
}
export interface TestimonialData {
  id: number
  name: string
  role: string
  feedback: string
  rating: number
  image: {
    id: string
    url: string
    filename: string
    mimeType: string
  }
  createdAt: string
  updatedAt: string
}

export interface ProjectImage {
  image: {
    id: string
    url: string
    filename: string
    mimeType: string
  }
}


export interface ProjectData {
  id: string
  image: {
    url: string
  }
  createdAt: string
  updatedAt: string
}

export interface SocialLinksData {
  facebook?: string
  instagram?: string
  youtube?: string
  whatsapp?: string
}
