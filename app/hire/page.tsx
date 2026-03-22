'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function HirePage() {
  const services = [
    { icon: '✦', title: 'UI/UX Design', desc: 'Research, wireframes, prototypes, and pixel-perfect interfaces that solve real problems.', tag: 'Design Systems' },
    { icon: '⌘', title: 'Frontend Systems', desc: 'React, Next.js, and GSAP — building logic that feels like magic and scales like crazy.', tag: 'Performance First' },
    { icon: '◈', title: 'Brand Aesthetic', desc: 'Crafting the full visual language from logos to type systems that define your niche.', tag: 'Unique Identities' }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/devkumar004me-max' },
    { name: 'YouTube', url: 'https://www.youtube.com/@devbuildsonly' },
    { name: 'Instagram', url: 'https://www.instagram.com/deve.loperdev' },
    { name: 'WhatsApp', url: 'https://wa.me/918825384415' }
  ]

  return (
    <main className="w-full min-h-screen bg-[#050505] text-white pt-[12rem] pb-24 selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <section className="pb-[10rem] px-8 max-w-[1200px] mx-auto text-center md:text-left">
        <ScrollReveal>
          <span className="font-glonto text-white/30 text-[0.75rem] uppercase tracking-[0.5em] block mb-8">
            01 // COLLABORATION
          </span>
        </ScrollReveal>
        
        <div className="mb-12">
          <ScrollReveal className="font-display text-[4.5rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] text-white uppercase tracking-tighter">
            Build <br /> Something <br /><span className="text-white/20">Rare.</span>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <p className="font-body text-[1.2rem] text-white/50 leading-[1.8] max-w-2xl">
            I don&apos;t just ship code — I craft experiences that make people stop scrolling. 
            Whether it&apos;s a product that needs a soul or a brand that needs a face — 
            I design the system, I write the code, and I obsess over the 
            details that define the top 1%.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Section */}
      <section className="max-w-[1300px] mx-auto px-8 pb-[10rem]">
        <div className="flex items-center justify-between mb-20">
           <div className="flex items-center gap-6">
                <span className="w-12 h-[1px] bg-white/20"></span>
                <ScrollReveal className="font-glonto text-[0.8rem] text-white/40 uppercase tracking-[0.4em]">
                    CAPABILITIES
                </ScrollReveal>
           </div>
           <span className="font-glonto text-[0.7rem] text-white/10 uppercase tracking-[0.4em]">EST. 2026 // IND</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={0.2 + i * 0.1}>
              <div 
                className="bg-black/40 border border-white/5 rounded-[40px] p-12 transition-all duration-700 hover:border-white/20 hover:bg-black group flex flex-col h-full shadow-2xl backdrop-blur-sm"
              >
                <div className="text-white/40 group-hover:text-white transition-colors duration-500 text-[3rem] mb-10">{svc.icon}</div>
                <h3 className="font-display text-[2.5rem] mb-6 text-white leading-none uppercase tracking-tight">
                  {svc.title}
                </h3>
                <p className="font-body text-[1rem] text-white/40 leading-relaxed flex-1">
                  {svc.desc}
                </p>
                <div className="font-glonto text-[0.7rem] text-white/20 mt-12 pt-8 border-t border-white/5 uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">
                  {svc.tag}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Dynamic Availability Ticker */}
      <section className="w-full bg-black py-8 overflow-hidden rotate-[-1.5deg] scale-[1.05] my-24 border-y border-white/5">
        <div className="flex w-fit animate-[ticker_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="flex-shrink-0 flex items-center whitespace-nowrap px-10 font-display text-[2rem] uppercase tracking-[-0.02em] text-white">
              <span className="text-white/20 mr-10 scale-150">✦</span> AVAILABLE FOR NEW PROJECTS <span className="text-white/20 mx-10 scale-150">✦</span> FREELANCE PARTNERSHIPS&nbsp;
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-[1200px] mx-auto py-[10rem] px-8 bg-black/20 rounded-[80px] border border-white/5 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <span className="font-glonto text-[0.7rem] text-white/30 uppercase tracking-[0.5em] block mb-6">READY TO SCALE?</span>
            <ScrollReveal className="font-display text-[4rem] md:text-[6.5rem] mb-8 leading-[0.85] text-white uppercase tracking-tighter">
              Let&apos;s talk <br /><span className="text-white/20">results.</span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-white/40 text-[1.1rem] max-w-sm mx-auto lg:mx-0">I specialize in visual authority and technical excellence. Ping me directly or via socials.</p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-20">
            <div className="relative group">
                <ScrollReveal delay={0.4}>
                  <MagneticButton strength={50}>
                    <a 
                        href="https://wa.me/918825384415" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-white text-black py-10 px-20 font-glonto text-[0.8rem] tracking-[0.3em] uppercase transition-all duration-700 font-bold shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_100px_rgba(255,255,255,0.4)]"
                    >
                        Start Conversation
                    </a>
                  </MagneticButton>
                </ScrollReveal>
            </div>

            <div className="lg:text-right">
                <span className="font-glonto text-white/20 text-[0.75rem] uppercase tracking-[0.4em] mb-10 block">FIND ME ON</span>
                <div className="flex flex-wrap items-center gap-10 justify-center lg:justify-end">
                  {socialLinks.map((social, i) => (
                    <MagneticButton key={social.name} strength={20}>
                        <a 
                            href={social.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-[1.2rem] text-white/40 hover:text-white transition-all uppercase tracking-tight relative group py-2"
                        >
                        {social.name}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                        </a>
                    </MagneticButton>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-footer */}
      <footer className="text-center pb-24 opacity-20 hover:opacity-100 transition-opacity duration-1000">
         <span className="font-glonto text-[0.6rem] uppercase tracking-[0.5em] text-white">© 2026 Dev Portfolio — Global Access Only</span>
      </footer>
      
    </main>
  )
}
