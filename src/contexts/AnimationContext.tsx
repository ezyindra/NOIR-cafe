import { createContext, useContext, useEffect, useRef, ReactNode, useCallback } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';

interface AnimationContextType {
  animateIn: (element: HTMLElement, animationType?: 'fade' | 'slide' | 'scale' | 'float') => void;
  animateOut: (element: HTMLElement) => void;
  animateText: (textElement: HTMLElement) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  animateIn: () => {},
  animateOut: () => {},
  animateText: () => {},
});

export function AnimationProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
      wheelMultiplier: 1,
      syncTouch: true,
      syncTouchLerp: 0.1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const animateIn = useCallback((element: HTMLElement, animationType: 'fade' | 'slide' | 'scale' | 'float' = 'fade') => {
    if (!element || !lenisRef.current) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      element.style.opacity = '1';
      return;
    }

    const tl = gsap.timeline();

    switch (animationType) {
      case 'slide':
        tl.fromTo(element, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' });
        break;
      case 'scale':
        tl.fromTo(element, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' });
        break;
      case 'float':
        tl.fromTo(element, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        gsap.to(element, {
          y: '-10px',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
        break;
      case 'fade':
      default:
        tl.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' });
        break;
    }
  }, []);

  const animateOut = useCallback((element: HTMLElement) => {
    if (!lenisRef.current) return;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      element.style.opacity = '0';
      return;
    }
    gsap.to(element, { opacity: 0, duration: 0.5 });
  }, []);

  const animateText = useCallback((textElement: HTMLElement) => {
    if (!lenisRef.current) return;
    const text = textElement.textContent || '';
    textElement.innerHTML = text.split(' ').map(word => `<span class="inline-block mr-[0.25em]">${word}</span>`).join(' ');

    const spans = textElement.querySelectorAll('span');
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion) {
      spans.forEach(span => span.style.opacity = '1');
      return;
    }

    gsap.fromTo(spans,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <AnimationContext.Provider value={{ animateIn, animateOut, animateText }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}
