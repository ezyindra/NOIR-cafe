import React, { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function LenisProvider({ children }: { children: ReactNode }) {
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
      orientation: 'vertical',
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

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context.lenis) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context.lenis;
}
