"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type MobileHeroDissolveProps = {
  children: React.ReactNode;
};

export function MobileHeroDissolve({ children }: MobileHeroDissolveProps) {
  const [isDimmed, setIsDimmed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearFadeTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleFade = useCallback(() => {
    clearFadeTimer();

    if (typeof window === "undefined") {
      return;
    }

    const isCompact = window.matchMedia("(max-width: 1023px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isCompact || prefersReducedMotion) {
      setIsDimmed(false);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIsDimmed(true);
    }, 3600);
  }, [clearFadeTimer]);

  const revealCopy = useCallback(() => {
    setIsDimmed(false);
    scheduleFade();
  }, [scheduleFade]);

  useEffect(() => {
    scheduleFade();

    window.addEventListener("scroll", revealCopy, { passive: true });
    window.addEventListener("resize", revealCopy);
    window.addEventListener("hero-video-interaction", revealCopy);

    return () => {
      clearFadeTimer();
      window.removeEventListener("scroll", revealCopy);
      window.removeEventListener("resize", revealCopy);
      window.removeEventListener("hero-video-interaction", revealCopy);
    };
  }, [clearFadeTimer, revealCopy, scheduleFade]);

  return (
    <div
      className="hero-copy-dissolve transition-opacity duration-700 ease-[var(--ease-luxury)] lg:opacity-100"
      data-dimmed={isDimmed ? "true" : "false"}
      onFocus={revealCopy}
      onPointerDown={revealCopy}
    >
      {children}
    </div>
  );
}
