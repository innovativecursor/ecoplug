'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { ProjectData } from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface PaginatedResponse<T> {
  docs: T[]
}

interface ProjectsContextType {
  projects: ProjectData[]
  fetchProjects: () => Promise<void>
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  fetchProjects: async () => {},
})

export const useProjects = () => useContext(ProjectsContext)

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectData[]>([])

  const fetchProjects = async () => {
    try {
      const data = await fetchDataGet<PaginatedResponse<ProjectData>>(endpoints.projects.getAll)
      setProjects(data?.docs || [])
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <ProjectsContext.Provider value={{ projects, fetchProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
