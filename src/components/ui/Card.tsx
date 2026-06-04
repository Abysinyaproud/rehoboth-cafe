import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EditorialCardProps = {
  image: string;
  eyebrow?: string;
  title: string;
  text: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
};

export function EditorialCard({
  image,
  eyebrow,
  title,
  text,
  meta,
  children,
  className,
  imageClassName
}: EditorialCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-rehoboth border border-espresso/10 bg-white shadow-subtle transition duration-500 ease-luxury hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(20,17,15,0.12)]",
        className
      )}
    >
      <div className={cn("relative aspect-[4/3] overflow-hidden bg-stone", imageClassName)}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 ease-luxury group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 sm:p-7">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-display text-3xl leading-[1.02] text-espresso">{title}</h3>
        {meta ? <p className="mt-3 text-sm font-medium text-forest">{meta}</p> : null}
        <p className="mt-5 leading-7 text-ink/68">{text}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </article>
  );
}
