'use client'

import TiltedCard from '@/components/ui/TiltedCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export default function ProjectsPage() {
  const list = [
    {
      num: '01',
      title: 'E-Commerce Platform',
      desc: 'Full-stack React storefront with cart, auth, and payments.',
      tags: ['React', 'Next.js', 'Stripe'],
      url: 'https://full-e-com.vercel.app/'
    },
    {
      num: '02',
      title: 'Dental Clinic',
      desc: 'Healthcare landing page with booking system and animations.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      url: 'https://dental-clinic-demo-lime.vercel.app/'
    },
    {
      num: '03',
      title: 'Luxury Watches',
      desc: 'Premium product showcase with 3D interactions and parallax.',
      tags: ['Next.js', 'Spline', 'GSAP'],
      url: 'https://watch-one-lac.vercel.app/'
    }
  ]

  return (
    <main className="w-full min-h-screen bg-black text-white pt-[10rem] pb-24 px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto text-center md:text-left">
        <ScrollReveal>
          <span className="font-glonto text-[0.75rem] uppercase tracking-[0.25em] text-white/40 block mb-2">
            Portfolio
          </span>
        </ScrollReveal>
        
        <div className="mb-24">
          <ScrollReveal className="font-display text-[4rem] md:text-[6rem] leading-none text-white">
            Selected Work
          </ScrollReveal>
        </div>

        {/* Tilted Card Grid */}
        <section className="mb-[8rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {list.map((proj, i) => (
              <ScrollReveal key={proj.num} delay={i * 0.1}>
                <div className="flex flex-col">
                  <TiltedCard
                    imageSrc={i === 0 ? "/images/ecom.webp" : i === 1 ? "/images/clinic.webp" : "/images/watch.webp"}
                    altText={proj.title}
                    captionText={proj.title}
                    containerHeight="450px"
                    containerWidth="100%"
                    imageHeight="450px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                  <div className="mt-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-glonto text-white text-sm">{proj.num}</span>
                      <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    <ScrollReveal className="font-display text-[1.8rem] mb-2 text-white">
                        {proj.title}
                    </ScrollReveal>
                    <p className="font-body text-[0.9rem] text-white/60 mb-6 leading-relaxed">
                       {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map(tag => (
                        <span key={tag} className="border border-gray-mid py-1 px-3 rounded-full text-[0.7rem] font-glonto text-gray-muted uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Detail List (Alternate View) */}
        <section className="flex flex-col border-t border-white/10 pt-12">
            <ScrollReveal className="font-glonto text-[1.5rem] md:text-[2rem] text-white mb-12 uppercase tracking-widest">
                Full Index
            </ScrollReveal>
          {list.map((item) => (
            <a key={item.num} href={item.url} target="_blank" rel="noreferrer" className="group flex flex-col md:flex-row items-baseline gap-6 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4">
              <ScrollReveal delay={0.05} className="w-12">
                <span className="font-display text-[1rem] text-white block">
                  {item.num}
                </span>
              </ScrollReveal>
              
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-md">
                  <ScrollReveal className="font-display text-[2rem] font-normal leading-tight block mb-2 text-white">
                    {item.title}
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <p className="font-body text-[0.9rem] text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={0.2} className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[0.75rem] font-glonto text-gray-muted/50">
                      /{tag}
                    </span>
                  ))}
                </ScrollReveal>
              </div>

              <div className="text-gray-muted group-hover:translate-x-2 transition-transform duration-500 ml-auto hidden md:block text-2xl">
                →
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  )
}
