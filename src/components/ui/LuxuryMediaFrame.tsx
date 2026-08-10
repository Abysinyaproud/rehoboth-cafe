import Image from "next/image";
import { cn } from "@/lib/utils";

type LuxuryMediaFrameProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  meta?: string;
  className?: string;
  imageClassName?: string;
  imageFit?: "cover" | "contain";
  imagePositionClassName?: string;
  priority?: boolean;
};

export function LuxuryMediaFrame({
  src,
  alt,
  eyebrow,
  title,
  meta,
  className,
  imageClassName,
  imageFit = "cover",
  imagePositionClassName = "object-center",
  priority = false
}: LuxuryMediaFrameProps) {
  const fitClassName = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <figure
      className={cn(
        "luxury-card group relative overflow-hidden border border-gold/24 bg-espresso shadow-[0_34px_100px_rgba(8,20,18,0.28)] transition duration-300 ease-luxury hover:border-gold/50",
        className
      )}
    >
      <div className={cn("relative aspect-[16/11] overflow-hidden", imageClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 52vw, 100vw"
          className={`media-breathe ${fitClassName} ${imagePositionClassName} opacity-92 saturate-[0.9] contrast-[1.04]`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,16,13,0.04),rgba(21,16,13,0.72)),linear-gradient(90deg,rgba(21,16,13,0.46),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light texture" />
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
    </figure>
  );
}
