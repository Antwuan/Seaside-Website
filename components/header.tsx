"use client";

import { useState } from "react";
import { nav, studioName } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-charcoal/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="/" className="leading-none text-ink" aria-label={studioName}>
          <span className="block font-display text-xl tracking-tight">Seaside</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
            Web Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-mist md:flex" aria-label="Page">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="glass hidden rounded-full px-4 py-2 text-sm font-medium text-ink hover:bg-white/15 md:inline-flex"
        >
          Email us
        </a>

        <button
          type="button"
          className="glass inline-flex items-center rounded-full px-3 py-1.5 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-5 py-4 md:hidden"
          aria-label="Page"
        >
          <ul className="flex flex-col gap-3 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="glass mt-2 inline-flex rounded-full px-4 py-2 text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                Email us
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
