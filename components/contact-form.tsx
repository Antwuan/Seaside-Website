"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/site";

const fieldClass =
  "rounded-2xl border border-white/15 bg-white/8 px-3.5 py-3 text-ink placeholder:text-mist/70 backdrop-blur-xl";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Website — ${business}`;
    const body = [`Name: ${name}`, `Business: ${business}`, `Email: ${email}`, "", message].join(
      "\n",
    );

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-3xl p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" />
        <Field label="Business" name="business" autoComplete="organization" />
      </div>
      <Field label="Your email" name="email" type="email" autoComplete="email" />
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink">What you want online</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`resize-y ${fieldClass}`}
          placeholder="Online booking, last-minute cancellation reminders, a menu — whatever the first version should do."
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-sm font-medium text-ink hover:bg-white/22"
        >
          Email Seaside
        </button>
        <p className="text-sm text-mist">
          Opens your email app, addressed to{" "}
          <a className="text-silver underline decoration-white/30 underline-offset-2" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          .
        </p>
      </div>
      {opened ? (
        <p className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-ink" role="status">
          If your email app did not open, copy the note and send it to {contactEmail}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}
