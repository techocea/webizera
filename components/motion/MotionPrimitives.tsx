'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export function SmoothScroll() {
    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const lenis = new Lenis({
            lerp: 0.085,
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.95,
        });

        let rafId = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
}

export function ScrollProgressHairline() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 32,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#C4B5FD] pointer-events-none"
        />
    );
}

export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!finePointer || reduced) return;

        setEnabled(true);
        document.body.classList.add('custom-cursor-active');

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let isExpanded = false;
        let isVisible = false;
        let rafId = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isVisible = true;
            const target = e.target as HTMLElement | null;
            isExpanded = Boolean(
                target?.closest('a, button, input, select, textarea, [data-cursor="expand"]')
            );
        };

        const onLeave = () => {
            isVisible = false;
        };

        const loop = () => {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;

            if (dotRef.current) {
                dotRef.current.style.opacity = isVisible ? '1' : '0';
                dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
            }

            if (ringRef.current) {
                ringRef.current.style.opacity = isVisible ? '1' : '0';
                const scale = isExpanded ? 1.9 : 1;
                ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${scale})`;
                ringRef.current.style.borderColor = isExpanded
                    ? 'rgba(167, 139, 250, 0.82)'
                    : 'rgba(242, 242, 246, 0.28)';
                ringRef.current.style.backgroundColor = isExpanded
                    ? 'rgba(139, 92, 246, 0.12)'
                    : 'transparent';
            }

            rafId = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        rafId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    if (!enabled) return null;

    return (
        <>
            <div
                ref={dotRef}
                aria-hidden="true"
                className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[#F2F2F6] opacity-0 transition-opacity duration-150"
            />
            <div
                ref={ringRef}
                aria-hidden="true"
                className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-[#F2F2F6]/30 opacity-0 transition-[opacity,border-color,background-color] duration-150"
            />
        </>
    );
}

export function MagneticWrap({
                                 children,
                                 className = '',
                             }: {
    children: React.ReactNode;
    className?: string;
}) {
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (!window.matchMedia('(pointer: fine)').matches) return;
        const node = wrapRef.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const relY = (e.clientY - rect.top - rect.height / 2) * 0.22;
        node.style.transform = `translate3d(${relX}px, ${relY}px, 0)`;
    };

    const handleMouseLeave = () => {
        const node = wrapRef.current;
        if (!node) return;
        node.style.transform = 'translate3d(0px, 0px, 0)';
    };

    return (
        <div
            ref={wrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
        >
            {children}
        </div>
    );
}

export function SplitLineReveal({
                                    lines,
                                    className = '',
                                    baseDelay = 0.16,
                                }: {
    lines: string[];
    className?: string;
    baseDelay?: number;
}) {
    return (
        <span className={className}>
      {lines.map((line, index) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
          <motion.span
              initial={{ y: '105%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                  duration: 0.7,
                  delay: baseDelay + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
    );
}

export function ParallaxDrift({
                                  children,
                                  offset = 32,
                                  horizontalOffset = 0,
                                  className = '',
                              }: {
    children: React.ReactNode;
    offset?: number;
    horizontalOffset?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    const x = useTransform(scrollYProgress, [0, 1], [-horizontalOffset, horizontalOffset]);

    return (
        <motion.div ref={ref} style={{ y, x }} className={className}>
            {children}
        </motion.div>
    );
}