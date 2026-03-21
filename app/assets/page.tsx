'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Image from 'next/image'

export default function AssetsPage() {
  const fonts = [
    { name: 'Kordix', sample: 'Kx', usage: 'Major Headings & Impact' },
    { name: 'Vilane', sample: 'Vl', usage: 'Body Copy & Global UI' },
    { name: 'Glonto', sample: 'Gl', usage: 'Signature Labels' },
    { name: 'Polymath', sample: 'Pm', usage: 'Sub-Labels & Details' }
  ]

  const images = [
    '/images/ecom.webp',
    '/images/clinic.webp',
    '/images/watch.webp',
    '/images/profile.png'
  ]

  return (
    <main className="w-full min-h-screen bg-black text-white pt-[10rem] pb-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <span className="font-glonto text-[0.75rem] uppercase tracking-[0.25em] text-white/40 block mb-2">
            Library
          </span>
        </ScrollReveal>
        
        <div className="mb-24">
          <ScrollReveal className="font-display text-[4rem] md:text-[6rem] leading-none text-white">
            Assets & Media
          </ScrollReveal>
        </div>

        {/* Section A - Product-Style Font Showcase */}
        <section className="mb-32">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-16">
              <ScrollReveal className="font-glonto text-[1.5rem] md:text-[2rem] text-[#ffffff] uppercase tracking-[0.3em] whitespace-nowrap">
                01 — Typography
              </ScrollReveal>
              <div className="h-[1px] w-full bg-white/10"></div>
            </div>
          </ScrollReveal>
          
          <div className="space-y-24">
            {fonts.map((f) => (
              <div key={f.name} className="flex flex-col md:flex-row gap-12 items-start md:items-center py-12 border-b border-gray-mid/30">
                <ScrollReveal delay={0.2} className="flex-1">
                  <div className={`text-[8rem] lg:text-[12rem] leading-none ${
                    f.name === 'Kordix' ? 'font-display' : 
                    f.name === 'Vilane' ? 'font-body' : 
                    f.name === 'Glonto' ? 'font-glonto' : 'font-polymath'
                  }`}>
                    {f.sample}
                  </div>
                </ScrollReveal>
                <div className="flex-1">
                  <ScrollReveal className="font-display text-[2.5rem] mb-4 text-white">
                    {f.name}
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <div className="font-glonto text-[0.8rem] uppercase tracking-[0.2em] text-white/50 mb-6">
                      Role: {f.usage}
                    </div>
                    <p className={`text-[1.2rem] leading-relaxed text-white/60 ${
                      f.name === 'Kordix' ? 'font-display text-white' : 
                      f.name === 'Vilane' ? 'font-body' : 
                      f.name === 'Glonto' ? 'font-glonto text-[#ffffff]' : 'font-polymath'
                    }`}>
                      The quick brown fox jumps over the lazy dog. A meticulous study of form, counter-form, and the rhythm of digital reading.
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B - Motion & Video */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <ScrollReveal className="font-glonto text-[1.5rem] md:text-[2rem] text-white uppercase tracking-[0.3em] whitespace-nowrap">
                02 — Motion
              </ScrollReveal>
              <div className="h-[1px] w-full bg-white/10"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((v) => (
              <ScrollReveal key={v} delay={v * 0.1}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 group border border-white/10">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 text-sm font-glonto">
                    <span className="text-2xl mb-2 text-[#ffffff]">▶</span>
                    <span>Video Content #{v}</span>
                  </div>
                  {/* <video loop muted playsInline className="w-full h-full object-cover">
                    <source src={`/assets/videos/video${v}.mp4`} type="video/mp4" />
                  </video> */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Section C - Gallery */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <ScrollReveal className="font-glonto text-[1.5rem] md:text-[2rem] text-white uppercase tracking-[0.3em] whitespace-nowrap">
                03 — Visuals
              </ScrollReveal>
              <div className="h-[1px] w-full bg-white/10"></div>
            </div>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {images.map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative group rounded-3xl overflow-hidden cursor-crosshair bg-white/5 border border-white/10">
                  <Image 
                    src={src} 
                    alt={`Asset ${i}`} 
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-cover transition-all duration-700" 
                  />
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full font-glonto text-[0.7rem] uppercase tracking-widest text-black shadow-xl">
                      View Detail
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
