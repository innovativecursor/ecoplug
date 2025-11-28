'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { useEffect } from 'react'
import { useHero } from '../../contexts/HeroContext'
import { fetchDataPost } from '../../utils/fetchData'

import toast, { Toaster } from 'react-hot-toast'
import endpoints from '../../config/endpoints'

export default function ContactSection() {
  const { fetchSocialLinks, social } = useHero()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await fetchDataPost(endpoints.contactSubmissions.create, form)
      setForm({ fullName: '', email: '', phone: '', message: '' })
      toast.success('Message sent successfully!')
    } catch (err) {
      console.error(err)
      toast.error('Failed to send message.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSocialLinks()
  }, [])
  return (
    <>
      <Toaster position="top-right" />
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]">
          <div className="w-20 h-20 relative">
            <span className="absolute inset-0 bg-[#0d5b27] rounded-full animate-ping opacity-50"></span>
            <span className="absolute inset-4 bg-[#c7eacf] rounded-full animate-pulse"></span>
          </div>
        </div>
      )}
      <section id="contact" className="w-full md:py-20 py-4 pb-12 text-black ">
        <div className="responsive grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-start">
          <div className="relative w-full md:h-[600px] h-[400px] overflow-hidden">
            <Image src="/contact.png" alt="Contact Image" fill />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-widest xl:mb-4 mb-2">
              CONTACT US
            </h2>

            <div className="w-20 h-[3px] bg-[#0d5b27] xl:mb-10 mb-6"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="md:text-base text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg mt-1 px-4 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="font-medium md:text-base text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full border border-gray-300 mt-1 rounded-lg px-4 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="md:text-base text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 mt-1 rounded-lg px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="md:text-base text-sm font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg mt-1 px-4 py-2 text-sm resize-none"
                ></textarea>
              </div>

              <div className="mt-5 flex justify-between sm:flex-row flex-col items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#0d5b27] text-white px-12 py-4  rounded-md text-sm font-medium hover:bg-black transition"
                >
                  Send Message
                </button>

                <div className="sm:flex hidden gap-5 mt-6">
                  {social?.facebook && (
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="text-[#0d5b27] hover:opacity-80 w-8 h-8" />
                    </a>
                  )}
                  {social?.instagram && (
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="text-[#0d5b27] hover:opacity-80 w-8 h-8" />
                    </a>
                  )}

                  {social?.whatsapp && (
                    <a href={social.whatsapp} target="_blank" rel="noopener noreferrer">
                      <div className="text-[#0d5b27] hover:opacity-80 w-8 h-8">
                        <svg
                          className="text-[#0d5b27] hover:opacity-80 w-8 h-8"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.63.85 5.06 2.28 7.06L4 29l7.14-2.2c1.93 1.06 4.15 1.66 6.5 1.66 6.63 0 12.04-5.41 12.04-12.04S22.67 3 16.04 3zm0 22.1c-2.21 0-4.26-.72-5.92-1.93l-.42-.3-4.24 1.31 1.36-4.13-.28-.43a9.89 9.89 0 01-1.62-5.48c0-5.54 4.5-10.04 10.04-10.04s10.04 4.5 10.04 10.04-4.5 10.04-10.04 10.04zm5.54-7.52c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.6-.5-.5-.68-.5-.17 0-.37-.03-.57-.03-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.47 0 1.45 1.08 2.85 1.23 3.05.15.2 2.13 3.25 5.18 4.55 3.05 1.3 3.05.87 3.6.82.55-.05 1.76-.72 2-1.42.25-.7.25-1.32.17-1.47-.07-.15-.27-.22-.57-.37z" />
                        </svg>
                      </div>
                    </a>
                  )}
                  {social?.youtube && (
                    <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="text-[#0d5b27] hover:opacity-80 w-8 h-8" />
                    </a>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
