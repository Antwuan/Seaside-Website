import Link from "next/link";
import { legalName, policyLinks, studioName } from "@/lib/site";
import { SupportContact } from "@/components/support-contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-lg text-ink">{studioName}</p>
          <p className="mt-1 text-sm text-mist">{legalName}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
            Websites for small businesses — branded sites, admin tools, and Stripe checkout for
            your customers on your domain.
          </p>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Policies">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver underline decoration-white/30 underline-offset-2 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/policies"
              className="text-silver underline decoration-white/30 underline-offset-2 hover:text-ink"
            >
              All policies
            </Link>
          </nav>
        </div>
        <SupportContact />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-4 text-xs text-mist sm:px-8">
          © {new Date().getFullYear()} {legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
