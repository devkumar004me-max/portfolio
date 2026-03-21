'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

export default function HirePage() {
  const services = [
    { icon: '✦', title: 'UI/UX Design', desc: 'Research, wireframes, prototypes, and pixel-perfect interfaces.', tag: 'Research to pixels' },
    { icon: '⌘', title: 'Frontend Development', desc: 'React, Next.js, TypeScript, Tailwind — clean and fast.', tag: 'React · Next.js · Web' },
    { icon: '◈', title: 'Brand Identity', desc: 'Logos, type systems, color, and the full visual language.', tag: 'Identity & systems' }
  ]

  return (
    <main className="w-full min-h-screen bg-black text-white pt-[10rem] pb-24 selection:bg-white selection:text-black">
      
      {/* Hero */}
      <section className="pb-[8rem] px-8 max-w-[1000px] mx-auto text-center md:text-left">
        <ScrollReveal>
          <span className="font-glonto text-white/40 text-[0.75rem] uppercase tracking-[0.3em] block mb-6">
            Collaboration
          </span>
        </ScrollReveal>
        
        <div className="mb-12">
          <ScrollReveal className="font-display text-[4rem] md:text-[6rem] leading-none text-white">
            Let&apos;s Build Something Rare.
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-[1.1rem] text-white/60 leading-[1.8] max-w-2xl">
            I don&apos;t just ship screens — I craft experiences that make people stop scrolling. 
            Whether it&apos;s a product that needs a soul, a brand that needs a face, or a codebase 
            that needs taste — I&apos;m your person. I design the system, I write the code, and I obsess over the 
            details most people skip.
          </p>
        </ScrollReveal>
      </section>

      {/* Services */}
      <section className="max-w-[1200px] mx-auto px-8 pb-[8rem]">
        <div className="flex items-center gap-4 mb-16">
          <ScrollReveal className="font-glonto text-[1.5rem] md:text-[2rem] text-white uppercase tracking-[0.3em] whitespace-nowrap">
            Capabilities
          </ScrollReveal>
          <div className="h-[1px] w-full bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={0.2 + i * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 hover:border-white transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
              >
                <div className="text-white text-[2.5rem] mb-6">{svc.icon}</div>
                <ScrollReveal className="font-display text-[1.8rem] mb-4 text-white">
                  {svc.title}
                </ScrollReveal>
                <p className="font-body text-[0.95rem] text-white/60 leading-relaxed flex-1">
                  {svc.desc}
                </p>
                <div className="font-glonto text-[0.7rem] text-white/20 mt-8 pt-6 border-t border-white/10 uppercase tracking-[0.2em]">
                  {svc.tag}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Marquee Availability Ticker */}
      <section className="w-full bg-black py-6 overflow-hidden rotate-[-1deg] scale-[1.02] my-24 border-y border-white/10">
        <div className="flex w-fit animate-[ticker_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[1,2,3,4].map((n) => (
            <div key={n} className="flex-shrink-0 flex whitespace-nowrap px-8 font-display text-[1.5rem] uppercase tracking-[0.1em] text-white">
              AVAILABLE FOR WORK ✦ OPEN TO FREELANCE ✦ TAKING NEW CLIENTS ✦ LET&apos;S COLLABORATE ✦&nbsp;
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-[1200px] mx-auto text-center md:text-left py-[8rem] px-8 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal className="font-display text-[3.5rem] md:text-[5rem] mb-6 leading-none text-white">
              Ready when you are.
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-white/40 text-[1.1rem]">Ping me directly. I reply within 24 hours.</p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <ScrollReveal delay={0.4}>
              <motion.a 
                href="mailto:contact@dev.com" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded-full bg-white text-black py-6 px-12 font-body text-[0.9rem] tracking-[0.2em] uppercase hover:bg-white/90 hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-xl mb-12"
              >
                Start a Conversation
              </motion.a>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="text-right">
                <span className="font-glonto text-white/20 text-[0.8rem] uppercase tracking-widest">or find me at</span>
                <div className="flex items-center gap-6 mt-6 justify-center md:justify-end">
                  {['GitHub', 'YouTube', 'Instagram', 'Facebook'].map((social) => (
                    <a key={social} href="#" className="font-display text-[1.2rem] text-white/60 hover:text-white transition-colors underline decoration-white/10 underline-offset-8">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
    </main>
  )
}
