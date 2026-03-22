'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function HirePage() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/devkumar004me-max' },
    { name: 'YouTube', url: 'https://www.youtube.com/@devbuildsonly' },
    { name: 'Instagram', url: 'https://www.instagram.com/deve.loperdev' },
    { name: 'WhatsApp', url: 'https://wa.me/918825384415' }
  ]

  return (
    <main className="w-full min-h-screen bg-[#050505] text-white pt-[12rem] pb-24 selection:bg-white selection:text-black overflow-hidden">
      
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1a1a1a] rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pb-[10rem] px-8 max-w-[1200px] mx-auto text-center md:text-left">
        <ScrollReveal>
          <span className="font-glonto text-white/30 text-[clamp(0.7rem,1vw,0.8rem)] uppercase tracking-[0.6em] block mb-10">
            01 // COLLABORATION
          </span>
        </ScrollReveal>
        
        <div className="mb-14">
          <ScrollReveal className="font-display text-[clamp(4rem,12vw,12rem)] leading-[0.85] text-white uppercase tracking-[-0.04em]">
            Build <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">Something</span> <br />
            <span className="text-white/10 italic">Rare.</span>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <p className="font-body text-[clamp(1rem,2vw,1.25rem)] text-white/40 leading-[1.8] max-w-2xl font-light">
            I don&apos;t just ship code — I craft experiences that make people stop scrolling. 
            Designing systems that breathe and code that performs at scale.
          </p>
        </ScrollReveal>
      </section>

      {/* Bento Grid Services */}
      <section className="relative z-10 max-w-[1300px] mx-auto px-8 pb-[10rem]">
        <div className="flex items-center justify-between mb-24">
           <div className="flex items-center gap-8">
                <span className="w-16 h-[1px] bg-white/10"></span>
                <ScrollReveal className="font-glonto text-[0.85rem] text-white/30 uppercase tracking-[0.5em]">
                    CAPABILITIES
                </ScrollReveal>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[800px]">
          
          {/* Card 1: UI/UX (Large) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 bg-[#0a0a0a] border-[0.5px] border-white/5 rounded-[40px] p-12 flex flex-col justify-between group overflow-hidden relative shadow-2xl transition-colors hover:border-white/20"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
                <span className="font-display text-[15rem] leading-none uppercase">UI</span>
             </div>
             <div>
                <span className="font-glonto text-[0.7rem] text-white/20 tracking-[0.4em] uppercase mb-4 block">DESIGN AUTHORITY</span>
                <h3 className="font-display text-[3.5rem] text-white leading-none uppercase tracking-tighter mb-6">User <br/> Experience</h3>
             </div>
             <p className="font-body text-white/40 text-[1rem] max-w-sm">From research to pixel-perfect prototypes. I obsess over the micro-interactions that define premium digital products.</p>
          </motion.div>

          {/* Card 2: Branding (Tall/Side) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-3xl border-[0.5px] border-white/10 rounded-[40px] p-12 flex flex-col justify-between group shadow-xl hover:bg-white hover:text-black transition-all duration-700"
          >
             <div>
                <span className="font-glonto text-[0.7rem] opacity-30 tracking-[0.4em] uppercase mb-4 block">AESTHETIC</span>
                <h3 className="font-display text-[3.5rem] leading-[0.9] uppercase tracking-tighter mb-8">Brand <br/> Identity</h3>
             </div>
             <div className="space-y-6">
                 <p className="font-body opacity-50 text-[1rem] leading-relaxed">Full visual systems, color theory, and type architecture. Shaping how your brand feels in the hands of the user.</p>
                 <div className="w-full aspect-square bg-white/10 rounded-full flex items-center justify-center font-display text-4xl group-hover:bg-black/5">◈</div>
             </div>
          </motion.div>

          {/* Card 3: Development (Bottom Left) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-1 bg-black border-[0.5px] border-white/10 rounded-[40px] p-12 flex flex-col md:flex-row items-end justify-between group transition-all duration-700"
          >
             <div className="max-w-md">
                <span className="font-glonto text-[0.7rem] text-white/20 tracking-[0.4em] uppercase mb-4 block">ENGINEERING</span>
                <h3 className="font-display text-[3.5rem] text-white leading-none uppercase tracking-tighter mb-6">Frontend <br/> Systems</h3>
                <p className="font-body text-white/40 text-[0.9rem]">Next.js, TypeScript, and high-performance GSAP animations. Clean code that looks as good as it runs.</p>
             </div>
             <div className="flex gap-2">
                 {['React', 'Next', 'GSAP'].map(tech => (
                     <span key={tech} className="px-4 py-1.5 rounded-full border border-white/5 text-[0.6rem] font-glonto text-white/30 uppercase tracking-widest">{tech}</span>
                 ))}
             </div>
          </motion.div>

        </div>
      </section>

      {/* Ticker Section */}
      <section className="relative z-10 w-full bg-black py-10 overflow-hidden skew-y-[-1deg] border-y border-white/5 my-32">
        <div className="flex w-fit animate-[ticker_50s_linear_infinite]">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="flex-shrink-0 flex items-center whitespace-nowrap px-12 font-display text-[2.5rem] uppercase tracking-[-0.03em] text-white">
              <span className="text-white/10 mx-10 rotate-45 scale-150">✦</span> WORLDWIDE ACCESS <span className="text-white/10 mx-10 rotate-45 scale-150">✦</span> TAKING NEW CLIENTS&nbsp;
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 max-w-[1200px] mx-auto py-[12rem] px-8 bg-white/[0.02] backdrop-blur-2xl rounded-[100px] border-[0.5px] border-white/10 mb-24 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <span className="font-glonto text-[0.7rem] text-white/30 uppercase tracking-[0.6em] block mb-8 underline decoration-white/10 underline-offset-8">COMMUNICATION</span>
            <ScrollReveal className="font-display text-[clamp(4rem,8vw,8rem)] mb-10 leading-[0.85] text-white uppercase tracking-tighter">
              Let&apos;s talk <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/20 italic">Design.</span>
            </ScrollReveal>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-20">
            <div className="relative group">
                <ScrollReveal delay={0.4}>
                  <MagneticButton strength={60}>
                    <a 
                        href="https://wa.me/918825384415" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-white text-black py-12 px-24 font-glonto text-[0.85rem] tracking-[0.4em] uppercase transition-all duration-700 font-black shadow-[0_30px_100px_rgba(255,255,255,0.15)] hover:shadow-[0_40px_120px_rgba(255,255,255,0.3)] hover:scale-[1.05]"
                    >
                        Start Conversation
                    </a>
                  </MagneticButton>
                </ScrollReveal>
            </div>

            <div className="lg:text-right">
                <span className="font-glonto text-white/10 text-[0.7rem] uppercase tracking-[0.5em] mb-12 block underline decoration-white/5 underline-offset-8">DIGITAL FOOTPRINT</span>
                <div className="flex flex-wrap items-center gap-12 justify-center lg:justify-end">
                  {socialLinks.map((social, i) => (
                    <MagneticButton key={social.name} strength={25}>
                        <a 
                            href={social.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-[1.4rem] text-white/40 hover:text-white transition-all uppercase tracking-tight relative group pb-1"
                        >
                        {social.name}
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-in-out"></span>
                        </a>
                    </MagneticButton>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-24 opacity-20 pointer-events-none">
         <div className="w-16 h-[1px] bg-white mx-auto mb-10"></div>
         <span className="font-glonto text-[0.6rem] uppercase tracking-[0.6em] text-white">EST. 2026 // VISUAL AUTHORITY</span>
      </footer>
      
    </main>
  )
}
