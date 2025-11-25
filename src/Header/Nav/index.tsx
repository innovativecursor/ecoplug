'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ setMenuOpen?: (open: boolean) => void }> = ({ setMenuOpen }) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'HOME', url: '#home' },
    { label: 'ABOUT', url: '#about' },
    { label: 'PROJECTS', url: '#projects' },
    { label: 'SERVICES', url: '#services' },
  ]

  return (
    <nav className="flex flex-col md:flex-row gap-5 xl:gap-8 xl:text-base text-sm items-center text-black">
      {navItems.map(({ label, url }, i) => (
        <Link
          key={i}
          href={url}
          onClick={() => setMenuOpen && setMenuOpen(false)}
          className="font-medium text-black "
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
