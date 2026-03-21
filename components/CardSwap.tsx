'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  url: string
  imageSrc: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    url: 'https://full-e-com.vercel.app/',
    imageSrc: '/images/ecom.webp',
  },
  {
    id: 2,
    title: 'Dental Clinic',
    url: 'https://dental-clinic-demo-lime.vercel.app/',
    imageSrc: '/images/clinic.webp',
  },
  {
    id: 3,
    title: 'Luxury Watches',
    url: 'https://watch-one-lac.vercel.app/',
    imageSrc: '/images/watch.webp',
  },
]

export function CardSwap() {
  const [cards, setCards] = useState(projects)

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const next = [...prev]
        const first = next.shift()
        if (first) next.push(first)
        return next
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleCardClick = (clickedId: number, isFront: boolean) => {
    if (isFront) {
      const p = cards.find(c => c.id === clickedId)
      if (p) window.open(p.url, '_blank')
    } else {
      setCards((prev) => {
        const next = [...prev]
        const index = next.findIndex(c => c.id === clickedId)
        if (index > 0) {
          const removed = next.splice(index, 1)[0]
          next.unshift(removed)
        }
        return next
      })
    }
  }

  const handleDotClick = (id: number) => {
    setCards((prev) => {
      const next = [...prev]
      const index = next.findIndex(c => c.id === id)
      if (index > 0) {
        const removed = next.splice(index, 1)[0]
        next.unshift(removed)
      }
      return next
    })
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-2xl h-[420px]" style={{ perspective: '1200px' }}>
        <AnimatePresence>
          {cards.map((card, index) => {
            const isFront = index === 0
            const isMiddle = index === 1
            const isBack = index === 2

            let y = 0
            let scale = 1
            let opacity = 1
            let zIndex = 3

            if (isMiddle) {
              y = 20
              scale = 0.96
              opacity = 0.85
              zIndex = 2
            } else if (isBack) {
              y = 40
              scale = 0.92
              opacity = 0.60
              zIndex = 1
            }

            return (
              <motion.div
                key={card.id}
                layout
                initial={false}
                animate={{
                  y,
                  scale,
                  opacity,
                  zIndex,
                  boxShadow: isFront ? '0 30px 80px rgba(0,0,0,0.14)' : 'none',
                }}
                exit={{ x: 120, opacity: 0.3, scale: 0.85 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 rounded-[20px] overflow-hidden cursor-pointer bg-white"
                onClick={() => handleCardClick(card.id, isFront)}
              >
                <div className="relative w-full h-[280px]">
                  <Image 
                    src={card.imageSrc} 
                    alt={card.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="p-6 bg-white flex flex-col justify-center h-[140px]">
                  <h3 className="font-display text-[1.4rem] font-normal">{card.title}</h3>
                  <p className="font-glonto text-[0.75rem] text-gray-muted tracking-[0.1em] mt-1">
                    {card.url}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="flex gap-[0.6rem] mt-6">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => handleDotClick(p.id)}
            className={`w-2 h-2 rounded-full transition-colors ${
              cards[0].id === p.id ? 'bg-white' : 'bg-gray-mid'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
