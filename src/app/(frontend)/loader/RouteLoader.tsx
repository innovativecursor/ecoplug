'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]">
      <div className="w-20 h-20 relative">
        <span className="absolute inset-0 bg-[#0d5b27] rounded-full animate-ping opacity-50"></span>
        <span className="absolute inset-4 bg-[#c7eacf] rounded-full animate-pulse"></span>
      </div>
    </div>
  )
}
