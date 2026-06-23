"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  mobileSrc?: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, mobileSrc, poster, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    const play = () => {
      void video.play().catch(() => {
        // The poster image remains visible if a browser blocks autoplay.
        setIsPaused(true);
      });
    };

    play();
    video.addEventListener("canplay", play, { once: true });

    return () => {
      video.removeEventListener("canplay", play);
    };
  }, []);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const video = videoRef.current;

      if (video?.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setIsPaused(video.paused);
      }

      frameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(frameId);
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

    window.dispatchEvent(new Event("hero-video-interaction"));
  };

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
        onEnded={() => window.dispatchEvent(new Event("hero-video-interaction"))}
      >
        {mobileSrc ? <source src={mobileSrc} media="(max-width: 767px)" type="video/mp4" /> : null}
        <source src={src} type="video/mp4" />
      </video>
      <div className="hero-video-ui pointer-events-none absolute bottom-6 right-5 z-20 grid w-[min(18rem,calc(100vw-2.5rem))] gap-3 text-ivory sm:bottom-8 sm:right-8">
        <div className="flex items-center justify-between gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold/90">
          <span>Ceremony Film</span>
          <span>{isPaused ? "Paused" : "Playing"}</span>
        </div>
        <div className="h-px overflow-hidden bg-ivory/22">
          <span
            className="block h-full bg-gold transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          type="button"
          onClick={togglePlayback}
          className="pointer-events-auto group inline-flex min-h-11 w-fit items-center gap-3 border border-gold/50 bg-forest/42 px-4 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-md transition duration-300 hover:border-gold hover:bg-gold hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label={isPaused ? "Play hero video" : "Pause hero video"}
        >
          <span className="grid size-5 place-items-center border border-current/50">
            <span
              className={
                isPaused
                  ? "ml-0.5 size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-current"
                  : "h-2.5 w-2.5 border-x-2 border-current"
              }
              aria-hidden="true"
            />
          </span>
          {isPaused ? "Play Film" : "Pause Film"}
        </button>
      </div>
    </>
  );
}
