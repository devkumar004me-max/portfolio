'use client'

import Image from 'next/image'
import { FlowingMenu } from '@/components/FlowingMenu'
import { BounceCards } from '@/components/BounceCards'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { KineticHero } from '@/components/animations/KineticHero'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-white selection:text-black">
      
      {/* ── Hero ── */}
      <KineticHero />

      {/* ── Social Links (Flowing Menu) ── */}
      <section className="bg-black/50 py-32 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-8 mb-12">
          <span className="font-glonto text-[0.7rem] text-white/30 uppercase tracking-[0.3em]">Network // Connectivity</span>
        </div>
        <FlowingMenu />
      </section>

      {/* ── Projects Showcase ── */}
      <section className="py-24 bg-black">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 mb-32 text-left flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <ScrollReveal className="font-display text-[4rem] md:text-[7rem] mb-6 text-white uppercase tracking-tighter leading-none">
              Selected <br /> Work
            </ScrollReveal>
            <div className="w-24 h-[1px] bg-white/20 mb-8" />
            <p className="font-body text-[1.1rem] text-white/40 max-w-sm leading-relaxed">
              Elevating modern businesses through high-fidelity visual storytelling and architecture.
            </p>
          </div>
          <div className="mb-8">
            <MagneticButton>
              <a href="/projects" className="font-glonto text-[0.7rem] text-white uppercase tracking-[0.3em] hover:text-white/60 transition-all border-b border-white/20 pb-2">View All Index →</a>
            </MagneticButton>
          </div>
        </div>
        <ProjectShowcase />
      </section>

      {/* ── Horizontal Asset Gallery ── */}
      <section className="py-40 bg-[#050505] overflow-hidden">
        <div className="px-12 lg:px-24 mb-20 flex justify-between items-end">
          <div>
            <span className="font-glonto text-[0.7rem] text-white/30 uppercase tracking-[0.3em] mb-4 block">03 // Library</span>
            <h2 className="font-display text-[3.5rem] md:text-[5rem] text-white uppercase leading-none">The <br /> Assets</h2>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-sm">←</div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-sm">→</div>
          </div>
        </div>
        <div className="flex gap-10 px-12 lg:px-24 overflow-x-auto pb-20 no-scrollbar cursor-grab active:cursor-grabbing">
          {['E-Com UI', 'Watch Visuals', 'Clinic Layout', 'Code Base', 'Design System'].map((title, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] h-[550px] relative rounded-[40px] overflow-hidden border border-white/5 group bg-black transition-all duration-700 hover:border-white/20">
              <Image src={`/images/v${(i % 4) + 1}.png`} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-12 left-12 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                <span className="font-glonto text-[0.7rem] text-white/30 uppercase tracking-[0.4em] block mb-4">ARCHIVE // 0{i + 1}</span>
                <h4 className="font-display text-[2rem] text-white uppercase leading-none">{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Font Showcase (Bounce Cards) ── */}
      <section className="max-w-[1200px] mx-auto py-40 px-8 lg:px-12 border-t border-white/5">
        <div className="mb-24 text-center">
          <span className="font-glonto text-[0.75rem] text-white/30 uppercase tracking-[0.4em] mb-4 block">04 // Typography</span>
          <ScrollReveal className="font-display text-[4rem] text-white leading-none">
            Design Language
          </ScrollReveal>
        </div>
        <BounceCards />
      </section>

      {/* ── Footer ── */}
      <footer className="w-full py-24 px-8 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-black opacity-60 hover:opacity-100 transition-opacity duration-1000">
        <div className="flex flex-col gap-6">
          <span className="font-display text-[2rem] text-white">Dev.</span>
          <span className="font-glonto text-[0.7rem] uppercase tracking-[0.3em] text-white/30 max-w-xs">Building functional aesthetics for the modern web environment.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <span className="font-glonto text-[0.8rem] text-white mb-2">Socials</span>
            <a href="https://github.com/devkumar004me-max" target="_blank" rel="noreferrer" className="font-glonto text-[0.7rem] text-white/40 uppercase hover:text-white transition-colors">GitHub</a>
            <a href="https://www.youtube.com/@devbuildsonly" target="_blank" rel="noreferrer" className="font-glonto text-[0.7rem] text-white/40 uppercase hover:text-white transition-colors">YouTube</a>
            <a href="https://www.instagram.com/deve.loperdev" target="_blank" rel="noreferrer" className="font-glonto text-[0.7rem] text-white/40 uppercase hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/918825384415" target="_blank" rel="noreferrer" className="font-glonto text-[0.7rem] text-white/40 uppercase hover:text-white transition-colors">WhatsApp</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-glonto text-[0.8rem] text-white mb-2">Inquiry</span>
            <a href="mailto:hello@dev.com" className="font-glonto text-[0.7rem] text-white underline underline-offset-4">hello@dev.com</a>
            <span className="font-glonto text-[0.7rem] text-white/40 uppercase mt-4">Indore, India</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
