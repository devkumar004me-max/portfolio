'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Store',
    desc: 'Next.js · Stripe · Tailwind',
    img: '/images/ecom.webp'
  },
  {
    id: 2,
    title: 'Dental Clinic',
    desc: 'React · Framer Motion · GSAP',
    img: '/images/clinic.webp'
  },
  {
    id: 3,
    title: 'Luxury Watches',
    desc: 'Next.js · Spline · 3D',
    img: '/images/watch.webp'
  }
];

export function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinHeight = 300; // % of viewport
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${pinHeight}%`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const index = Math.floor(self.progress * projects.length);
            if (index >= 0 && index < projects.length) {
              setActiveIndex(index);
            }
          }
        }
      });

      // Prepare images for swap animation
      projects.forEach((_, i) => {
        if (i < projects.length - 1) {
          const mainImg = `.img-wrapper-${i}`;
          const nextImg = `.img-wrapper-${i+1}`;
          const mainText = `.text-${i}`;
          const nextText = `.text-${i+1}`;

          // Swap Animation
          tl.to(mainImg, {
            scale: 0.1,
            x: '-35%',
            y: '-35%',
            opacity: 0,
            duration: 1,
            borderRadius: '20px',
            ease: 'power2.inOut'
          }, i)
          .fromTo(nextImg, 
            { 
              scale: 0.15, 
              x: '35%', 
              y: '35%',
              opacity: 0.4,
              borderRadius: '20px'
            },
            { 
              scale: 1, 
              x: '0%', 
              y: '0%', 
              opacity: 1,
              zIndex: 10 + i,
              borderRadius: '40px',
              duration: 1,
              ease: 'power2.inOut'
            }, 
            i
          )
          .to(mainText, { opacity: 0, y: -20, duration: 0.5 }, i)
          .fromTo(nextText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, i + 0.5);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black min-h-screen overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-[1400px] h-[80vh] flex flex-col md:flex-row items-center gap-12 px-12 lg:px-24">
        
        {/* Images Container */}
        <div className="relative flex-1 h-full flex items-center justify-center">
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              className={`img-wrapper-${i} absolute w-full h-[60vh] md:h-[70vh] rounded-[40px] overflow-hidden border border-white/5 transition-all duration-300 shadow-2xl`}
              style={{ 
                zIndex: i === 0 ? 10 : 0,
                opacity: i === 0 ? 1 : 0
              }}
            >
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

        {/* Text Container */}
        <div className="w-full md:w-[400px] relative h-[200px] md:h-auto">
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              className={`text-${i} absolute inset-0 flex flex-col justify-center text-left transition-opacity duration-300`}
              style={{ 
                opacity: i === 0 ? 1 : 0,
                pointerEvents: i === activeIndex ? 'auto' : 'none'
              }}
            >
              <span className="font-glonto text-[0.8rem] text-white/40 uppercase tracking-[0.4em] mb-4 block">0{project.id} — PROJECT</span>
              <h2 className="font-display text-[3.5rem] md:text-[5rem] leading-none mb-6 text-white uppercase">{project.title}</h2>
              <p className="font-body text-white/50 text-[1rem] leading-relaxed max-w-sm">{project.desc}</p>
              <div className="mt-10 flex">
                <button className="px-10 py-4 rounded-full border border-white/10 font-glonto text-[0.7rem] uppercase tracking-widest hover:bg-white hover:text-black transition-all group overflow-hidden relative">
                   <span className="relative z-10 transition-colors duration-300">Explore Experience</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
