'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StaggeredMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const links = [
    { name: 'Home', href: '/', delay: 0.10 },
    { name: 'Projects', href: '/projects', delay: 0.18 },
    { name: 'Assets', href: '/assets', delay: 0.26 },
    { name: 'Hire Me', href: '/hire', delay: 0.34 },
  ]

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-black border border-white z-[150] flex flex-col items-center justify-center gap-[5px] group hover:bg-white transition-colors duration-300"
      >
        <div className="w-[20px] h-[1.5px] bg-white group-hover:bg-black transition-colors" />
        <div className="w-[20px] h-[1.5px] bg-white group-hover:bg-black transition-colors" />
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 z-[200] flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white font-body text-base uppercase tracking-widest hover:text-white transition-colors"
            >
              ✕ Close
            </button>

            {/* Links */}
            <nav className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{
                      duration: 0.5,
                      delay: link.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-7xl text-white hover:text-white transition-colors duration-300 font-normal inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
