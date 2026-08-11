"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LuxuryVideoFrameProps = {
  src: string;
  poster: string;
  label: string;
  eyebrow: string;
  title: string;
  meta?: string;
  className?: string;
  videoClassName?: string;
  aspectClassName?: string;
};

export function LuxuryVideoFrame({
  src,
  poster,
  label,
  eyebrow,
  title,
  meta,
  className,
  videoClassName,
  aspectClassName = "aspect-[16/11]"
}: LuxuryVideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      setIsPaused(true);
    });
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <figure
      className={cn(
        "luxury-card group relative overflow-hidden border border-gold/24 bg-espresso shadow-[0_34px_100px_rgba(8,20,18,0.28)] transition duration-300 ease-luxury hover:border-gold/50",
        className
      )}
    >
      <div className={cn("relative overflow-hidden", aspectClassName)}>
        <video
          ref={videoRef}
          aria-label={label}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onPause={() => setIsPaused(true)}
          onPlay={() => setIsPaused(false)}
          className={cn(
            "media-breathe h-full w-full object-cover opacity-92 saturate-[0.9] contrast-[1.04]",
            videoClassName
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,16,13,0.02),rgba(21,16,13,0.72)),linear-gradient(90deg,rgba(21,16,13,0.5),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.1] mix-blend-soft-light texture" />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <div className="max-w-md border-l border-gold/70 pl-4">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-gold">
            {eyebrow}
          </p>
          <p className="mt-3 font-display text-3xl uppercase leading-[1.02] tracking-[0.035em] text-ivory sm:text-4xl">
            {title}
          </p>
          {meta ? <p className="mt-3 text-sm leading-6 text-ivory/70">{meta}</p> : null}
        </div>
      </figcaption>

      <button
        type="button"
        onClick={togglePlayback}
        className="absolute right-5 top-5 inline-flex min-h-10 items-center border border-gold/45 bg-forest/54 px-3 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur-md transition duration-300 hover:border-gold hover:bg-gold hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        aria-label={isPaused ? `Play ${title} video` : `Pause ${title} video`}
      >
        {isPaused ? "Play" : "Pause"}
      </button>
    </figure>
  );
}
