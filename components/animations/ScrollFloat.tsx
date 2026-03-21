'use client'

import { motion } from 'framer-motion'

interface ScrollFloatProps {
  children: string
  className?: string
}

export function ScrollFloat({ children, className = 'font-display' }: ScrollFloatProps) {
  const words = children.split(' ')

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="overflow-visible inline-block mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2, // Staggering the sine float
                ease: "easeInOut"
              }}
            >
              {word}
            </motion.span>
          </motion.span>
        </span>
      ))}
    </span>
  )
}
