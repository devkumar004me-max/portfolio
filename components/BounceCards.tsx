'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FontCard {
  name: string;
  char: string;
  fontClass: string;
  desc: string;
  specimen: string;
}

interface BounceCardsProps {
  className?: string;
  fonts?: FontCard[];
  containerWidth?: number | string;
  containerHeight?: number | string;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export function BounceCards({
  className = '',
  fonts = [
    { name: 'Kordix', char: 'Kx', fontClass: 'font-display', desc: 'Primary Display', specimen: 'The rare quality of movement.' },
    { name: 'Vilane', char: 'Vl', fontClass: 'font-body', desc: 'Interface System', specimen: 'Clarity in every single pixel.' },
    { name: 'Glonto', char: 'Gl', fontClass: 'font-glonto', desc: 'Signature Labels', specimen: 'Modern aesthetics defined.' },
    { name: 'Polymath', char: 'Pm', fontClass: 'font-dev', desc: 'Developer Seal', specimen: 'Logic meets visual balance.' }
  ],
  containerWidth = '100%',
  containerHeight = 500,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = 'elastic.out(1.2, 0.75)',
  transformStyles = [
    'rotate(-12deg) translate(-250px, 20px)',
    'rotate(-6deg) translate(-85px, -10px)',
    'rotate(6deg) translate(85px, -10px)',
    'rotate(12deg) translate(250px, 20px)'
  ],
  enableHover = true
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    }
    return `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px,\s*([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const currentY = parseFloat(match[2]);
      return baseTransform.replace(translateRegex, `translate(${currentX + offsetX}px, ${currentY}px)`);
    }
    return `${baseTransform} translate(${offsetX}px, 0px)`;
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    fonts.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        gsap.to(selector, {
          transform: getNoRotationTransform(baseTransform) + ' scale(1.1)',
          zIndex: 50,
          duration: 0.5,
          ease: 'back.out(1.5)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -140 : 140;
        gsap.to(selector, {
          transform: getPushedTransform(baseTransform, offsetX),
          zIndex: 10 + i,
          duration: 0.5,
          ease: 'back.out(1.2)',
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    fonts.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);
      gsap.to(selector, {
        transform: transformStyles[i] || 'none',
        zIndex: 10 + i,
        duration: 0.5,
        ease: 'back.out(1.2)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-visible ${className}`}
      ref={containerRef}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {fonts.map((f, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute w-[220px] h-[300px] bg-white rounded-[32px] overflow-hidden flex flex-col p-8 shadow-2xl border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white`}
          style={{
            transform: transformStyles[idx] || 'none',
            zIndex: 10 + idx
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          {/* Watermark Background Character */}
          <div className={`absolute -top-10 -right-10 ${f.fontClass} text-[15rem] text-black/[0.03] select-none pointer-events-none`}>
            {f.char[0]}
          </div>

          <div className={`${f.fontClass} text-[4rem] text-black leading-none mb-6 z-10`}>
            {f.char}
          </div>

          <div className="z-10 mt-1">
             <p className={`text-black/60 text-[0.8rem] leading-relaxed mb-8 ${f.fontClass}`}>
                {f.specimen}
             </p>
          </div>

          <div className="mt-auto z-10 pt-4 border-t border-black/5">
            <div className="font-glonto text-[0.75rem] uppercase tracking-[0.2em] text-black font-bold mb-1">
              {f.name}
            </div>
            <div className="font-glonto text-[0.6rem] uppercase tracking-[0.1em] text-black/30">
              {f.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
