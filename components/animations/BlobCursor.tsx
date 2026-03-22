'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function BlobCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference transition-transform duration-300 ease-out hidden md:block ${
        isHovering ? 'scale-[2.5] bg-white' : 'scale-100 bg-transparent'
      }`}
    />
  );
}
