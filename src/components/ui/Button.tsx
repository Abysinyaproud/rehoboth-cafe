import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text";

const variants: Record<Variant, string> = {
  primary:
    "bg-espresso text-ivory shadow-[inset_0_0_0_1px_rgba(247,241,232,0.08)] hover:bg-forest focus-visible:outline-forest",
  secondary:
    "border border-espresso/30 text-espresso hover:border-espresso hover:bg-white focus-visible:outline-forest",
  text:
    "min-h-0 px-0 py-1 text-espresso underline decoration-gold decoration-1 underline-offset-8 hover:text-forest focus-visible:outline-forest"
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-rehoboth px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition duration-300 ease-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function ButtonLink({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
