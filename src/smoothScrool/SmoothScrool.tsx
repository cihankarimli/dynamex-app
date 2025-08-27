"use client";
import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.33,
        duration: 3.5,

        touchMultiplier: 1.5,
        wheelMultiplier: 0.6,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
