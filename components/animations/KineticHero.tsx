'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

// SplitText is a GSAP Club plugin — we'll do our own word split to avoid the dependency
function splitWords(text: string) {
  return text.split(' ').map((w, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="word-reveal inline-block">{w}&nbsp;</span>
    </span>
  ));
}

export function KineticHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  /* ── Particle Canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number; alpha: number; life: number; maxLife: number;
    }

    const particles: Particle[] = [];
    const MAX = 120;

    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      alpha: 0,
      life: 0,
      maxLife: 200 + Math.random() * 300,
    });

    for (let i = 0; i < MAX; i++) particles.push(spawn());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, idx) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const t = p.life / p.maxLife;
        p.alpha = t < 0.2 ? t / 0.2 : t > 0.8 ? (1 - t) / 0.2 : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha * 0.25})`;
        ctx.fill();
        if (p.life >= p.maxLife) particles[idx] = spawn();
      });

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 120) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ── GSAP Word Reveal on Mount ── */
  useEffect(() => {
    const words = heroRef.current?.querySelectorAll('.word-reveal');
    if (!words) return;
    gsap.fromTo(
      words,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        stagger: 0.06,
        ease: 'expo.out',
        delay: 0.3,
      }
    );
  }, []);

  /* ── Scramble text effect on hover for the lines ── */
  const scramble = (el: HTMLElement) => {
    const original = el.dataset.original || el.innerText;
    el.dataset.original = original;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%';
    let frame = 0;
    const interval = setInterval(() => {
      el.innerText = original
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' ';
          return i < frame ? original[i] : chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      frame++;
      if (frame > original.length) clearInterval(interval);
    }, 25);
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Thin horizontal scan line (cinematic bar) */}
      <div
        ref={lineRef}
        className="absolute left-0 right-0 h-[1px] bg-white/5 z-0 top-1/2 pointer-events-none"
      />

      {/* Soft center vignette glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* ── LEFT : Profile Card ── */}
      <div className="flex-1 hidden md:flex justify-start items-center z-10 px-8 lg:px-24">
        <ScrollReveal delay={0.8}>
          <div className="relative w-[280px] h-[380px] lg:w-[320px] lg:h-[440px] rounded-3xl overflow-hidden border-[0.5px] border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/profile.png"
              alt="Dev"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-1000"
              priority
            />
            {/* Glass overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-glonto text-[0.6rem] text-white/30 uppercase tracking-[0.4em]">Indore, India</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── RIGHT : Kinetic Type ── */}
      <div className="flex-1 z-10 px-8 lg:px-12 text-right flex flex-col justify-center items-end">

        {/* Top label */}
        <div className="overflow-hidden mb-8">
          <span
            className="word-reveal font-glonto text-[0.75rem] text-white/20 uppercase tracking-[0.6em] block"
            style={{ opacity: 0, transform: 'translateY(110%)' }}
          >
            Visual Designer & Dev
          </span>
        </div>

        {/* Giant DISPLAY NAME — word-by-word reveal */}
        <h1
          className="font-display text-right leading-[0.85] tracking-[-0.04em] mb-10 select-none"
          style={{ fontSize: 'clamp(5rem, 14vw, 16rem)' }}
        >
          <div
            className="block cursor-default"
            onMouseEnter={e => scramble(e.currentTarget)}
          >
            {splitWords('DEV')}
          </div>
          <div
            className="block text-white/10 italic cursor-default hover:text-white/20 transition-colors duration-700"
            onMouseEnter={e => scramble(e.currentTarget)}
          >
            {splitWords('KUMAR')}
          </div>
        </h1>

        {/* Role descriptor words — stagger in */}
        <div className="flex items-center gap-6 mb-12 justify-end">
          {['CODER', '✦', 'CREATOR', '✦', 'DESIGNER'].map((item, i) => (
            <span
              key={i}
              className="word-reveal font-glonto text-[0.65rem] text-white/30 uppercase tracking-[0.3em]"
              style={{ opacity: 0 }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-6 items-center justify-end">
          <MagneticButton strength={40}>
            <a
              href="https://wa.me/918825384415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-white text-black font-glonto text-[0.75rem] uppercase tracking-[0.2em] font-black hover:bg-white/80 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Contact Me
            </a>
          </MagneticButton>
          <MagneticButton strength={20}>
            <a
              href="/projects"
              className="font-glonto text-[0.7rem] text-white/30 uppercase tracking-[0.2em] hover:text-white pb-1 border-b border-white/10 hover:border-white transition-all"
            >
              See Work →
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Ghost name in background */}
      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none select-none z-0 overflow-hidden">
        <span
          className="font-display uppercase tracking-[-0.04em] text-white opacity-[0.025]"
          style={{ fontSize: 'clamp(8rem, 20vw, 28rem)', lineHeight: 1 }}
        >
          DEV
        </span>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="font-glonto text-[0.6rem] text-white/20 uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
