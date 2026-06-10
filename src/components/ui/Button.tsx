import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text";

const variants: Record<Variant, string> = {
  primary:
    "border border-gold bg-forest text-gold shadow-[inset_0_0_0_1px_rgba(244,233,216,0.08)] hover:bg-gold hover:text-espresso focus-visible:outline-gold",
  secondary:
    "border border-gold/70 text-gold hover:border-gold hover:bg-gold hover:text-espresso focus-visible:outline-gold",
  text:
    "min-h-0 px-0 py-1 text-espresso underline decoration-gold/65 decoration-1 underline-offset-8 hover:text-forest focus-visible:outline-gold"
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-none px-7 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition duration-300 ease-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50";

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
