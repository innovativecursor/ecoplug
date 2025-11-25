import { useEffect } from 'react'
import { useHero } from '../../contexts/HeroContext'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function SocialIcons() {
  const { fetchSocialLinks, social } = useHero()

  useEffect(() => {
    fetchSocialLinks()
  }, [])

  return (
    <div>
      <div className="flex items-center gap-2">
        {social?.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <div className="xl:w-7 xl:h-7 w-6 h-6 rounded-full bg-[#0d5b27] flex justify-center items-center">
              <Facebook className="md:w-4 md:h-4 w-3 h-3 text-white" />
            </div>
          </a>
        )}

        {social?.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <div className="xl:w-7 xl:h-7 w-6 h-6 rounded-full bg-[#0d5b27] flex justify-center items-center">
              <Instagram className="md:w-4 md:h-4 w-3 h-3 text-white" />
            </div>
          </a>
        )}

        {social?.whatsapp && (
          <a href={social.whatsapp} target="_blank" rel="noopener noreferrer">
            <div className="xl:w-7 xl:h-7 w-6 h-6 rounded-full bg-[#0d5b27] flex justify-center items-center">
              <svg className="md:w-4 md:h-4 w-3 h-3 text-white fill-white" viewBox="0 0 32 32">
                <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.63.85 5.06 2.28 7.06L4 29l7.14-2.2c1.93 1.06 4.15 1.66 6.5 1.66 6.63 0 12.04-5.41 12.04-12.04S22.67 3 16.04 3zm0 22.1c-2.21 0-4.26-.72-5.92-1.93l-.42-.3-4.24 1.31 1.36-4.13-.28-.43a9.89 9.89 0 01-1.62-5.48c0-5.54 4.5-10.04 10.04-10.04s10.04 4.5 10.04 10.04-4.5 10.04-10.04 10.04zm5.54-7.52c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.6-.5-.5-.68-.5-.17 0-.37-.03-.57-.03-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.47 0 1.45 1.08 2.85 1.23 3.05.15.2 2.13 3.25 5.18 4.55 3.05 1.3 3.05.87 3.6.82.55-.05 1.76-.72 2-1.42.25-.7.25-1.32.17-1.47-.07-.15-.27-.22-.57-.37z" />
              </svg>
            </div>
          </a>
        )}

        {social?.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <div className="xl:w-7 xl:h-7 w-6 h-6 rounded-full bg-[#0d5b27] flex justify-center items-center">
              <Youtube className="md:w-4 md:h-4 w-3 h-3 text-white" />
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
