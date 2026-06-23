"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type MobileDetailsMenuProps = {
  items: ReadonlyArray<readonly [string, string]>;
  className?: string;
  navClassName?: string;
  linkClassName?: string;
};

export function MobileDetailsMenu({
  items,
  className = "",
  navClassName = "",
  linkClassName = ""
}: MobileDetailsMenuProps) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const menu = detailsRef.current;

      if (!menu?.open || !(event.target instanceof Node) || menu.contains(event.target)) {
        return;
      }

      menu.open = false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <details ref={detailsRef} className={className}>
      <summary className="cursor-pointer list-none text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
        Menu
      </summary>
      <nav aria-label="Mobile navigation" className={navClassName}>
        {items.map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenu} className={linkClassName}>
            {label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
