import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { ProductExample } from "@/components/product-example";
import { contactEmail, included, steps, studioName } from "@/lib/site";

export default function Page() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-silver focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="mx-auto grid max-w-6xl items-start gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-28">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
              For small businesses
            </p>
            <h1 className="mt-4 max-w-xl font-display text-[clamp(3.1rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.035em] text-ink">
              A website that{" "}
              <em className="font-light italic text-silver">takes the work.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
              {studioName} builds one site for one business. Customers order or book on your
              domain. The money goes to you. Shops, restaurants, and appointment desks all
              run the day from the same kind of dashboard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-sm font-medium text-ink hover:bg-white/22"
              >
                Start with an email
              </a>
              <a
                href="#included"
                className="glass rounded-full px-5 py-2.5 text-sm font-medium text-ink hover:bg-white/15"
              >
                See what&apos;s included
              </a>
            </div>
          </div>
          <ProductExample />
        </section>

        <section id="included" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">Included</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
              What the website comes with.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mist">
              One business, one domain, and the tools to take an order or a booking, message
              customers, and run the day from an admin page.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((feature) => (
                <li key={feature.title} className="glass rounded-3xl p-6">
                  <h3 className="font-display text-2xl text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{feature.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">Process</p>
            <h2 className="mt-3 max-w-lg font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
              How a site goes live.
            </h2>
            <ol className="mt-12 grid gap-4 lg:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number} className="glass rounded-3xl p-6">
                  <p className="font-display text-3xl text-silver">{step.number}</p>
                  <h3 className="mt-3 text-xl font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">Contact</p>
              <h2 className="mt-3 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
                Tell us about the business.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-mist">
                A name, the business, and what the first version should do is enough. We
                reply by email.
              </p>
              <p className="mt-6 text-sm text-mist">
                Or write directly to{" "}
                <a
                  className="text-silver underline decoration-white/30 underline-offset-2"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
                .
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-lg text-ink">{studioName}</p>
          <p>Websites for small businesses.</p>
        </div>
      </footer>
    </div>
  );
}
