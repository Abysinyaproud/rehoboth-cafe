import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EditorialCardProps = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  text: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  imageFit?: "cover" | "contain";
  imagePositionClassName?: string;
};

export function EditorialCard({
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  meta,
  children,
  className,
  imageClassName,
  imageFit = "cover",
  imagePositionClassName = "object-center"
}: EditorialCardProps) {
  const fitClassName = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <article
      className={cn(
        "luxury-card group overflow-hidden border border-gold/20 bg-[#fbf7ef] shadow-subtle transition duration-300 ease-luxury hover:border-gold/55 hover:shadow-[0_30px_95px_rgba(8,20,18,0.15)]",
        className
      )}
    >
      <div className={cn("relative aspect-[4/3] overflow-hidden bg-stone", imageClassName)}>
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={`media-breathe ${fitClassName} ${imagePositionClassName} saturate-[0.86] contrast-[1.02]`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/32 via-transparent to-transparent opacity-75" />
        <div className="absolute left-5 top-5 h-10 w-px bg-gold/70" aria-hidden="true" />
      </div>
      <div className="p-7 sm:p-8">
        {eyebrow ? (
          <p className="mb-5 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-display text-[2rem] uppercase leading-[1] tracking-[0.035em] text-espresso">{title}</h3>
        {meta ? <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-accent">{meta}</p> : null}
        <p className="mt-5 leading-7 text-ink/68">{text}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </article>
  );
}
