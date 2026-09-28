import Link from "next/link";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { SupportContact } from "@/components/support-contact";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

const proseClass =
  "space-y-4 text-sm leading-relaxed text-mist [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_h2:first-child]:mt-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-silver [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-2";

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div id="top">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">Legal</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">{title}</h1>
        <article className={`glass mt-10 rounded-3xl p-6 sm:p-8 ${proseClass}`}>{children}</article>
        <div className="mt-10">
          <SupportContact />
        </div>
        <p className="mt-8 text-sm text-mist">
          <Link href="/" className="text-silver underline decoration-white/30 underline-offset-2">
            Back to home
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
