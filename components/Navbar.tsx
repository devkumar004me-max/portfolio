'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from './ui/MagneticButton'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { name: 'Home', href: '/', delay: 0.1 },
    { name: 'Projects', href: '/projects', delay: 0.2 },
    { name: 'Assets', href: '/assets', delay: 0.3 },
    { name: 'Hire Me', href: '/hire', delay: 0.4 },
  ]

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/devkumar004me-max' },
    { label: 'YouTube', link: 'https://www.youtube.com/@devbuildsonly' },
    { label: 'Instagram', link: 'https://www.instagram.com/deve.loperdev' },
    { label: 'WhatsApp', link: 'https://wa.me/918825384415' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Logo */}
          <Link href="/" className="font-display text-2xl tracking-tighter text-white hover:opacity-70 transition-opacity">
            DEV
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <MagneticButton key={link.name} strength={20}>
                  <Link 
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className={`font-glonto text-[0.75rem] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/40 group-hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      />
                    )}
                  </Link>
                </MagneticButton>
              )
            })}
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-1.5 p-2 group relative z-[210]"
            aria-label="Open Menu"
          >
            <div className={`w-7 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 self-end ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-7 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Staggered Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] flex flex-row overflow-hidden"
          >
            {/* Split Screen Panels (ReactBits Style) */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="hidden lg:block lg:flex-1 bg-white"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 bg-black flex flex-col justify-center p-12 md:p-24 relative"
            >
              {/* Close Label */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-12 right-12 text-white/40 font-glonto text-[0.7rem] uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-3"
              >
                <span>Close</span>
                <span className="text-xl">×</span>
              </button>

              {/* Staggered Navigation */}
              <div className="flex flex-col gap-6 md:gap-10">
                {links.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '110%' }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + (i * 0.1),
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="flex items-baseline gap-6 group"
                    >
                      <span className="font-display text-[1rem] text-white/20 font-bold">
                        0{i + 1}
                      </span>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-[4rem] md:text-[6rem] lg:text-[7rem] text-white leading-none uppercase font-black tracking-[-0.04em] transition-all duration-500 hover:translate-x-4"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12">
                <div className="space-y-6">
                  <span className="font-glonto text-[0.6rem] text-white/30 uppercase tracking-[0.3em] block">Follow</span>
                  <div className="flex gap-8">
                    {socialItems.map((social) => (
                      <a 
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-[0.9rem] uppercase text-white/60 hover:text-white transition-all transform hover:-translate-y-1"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="font-glonto text-[0.6rem] text-white/30 uppercase tracking-[0.3em] block mb-2">Based In</span>
                  <span className="font-display text-[1rem] uppercase text-white">Indore, India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


