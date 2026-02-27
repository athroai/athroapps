"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const formData = new URLSearchParams();
      formData.set("form-name", "newsletter");
      formData.set("email", email);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="newsletter"
      className="mx-auto max-w-xl px-4 py-16 md:py-24"
      aria-labelledby="newsletter-heading"
    >
      <h2
        id="newsletter-heading"
        className="font-display text-2xl font-bold text-[var(--gold)] md:text-3xl"
      >
        Stay updated
      </h2>
      <p className="mt-2 text-[var(--muted)]">
        Get notified when we launch new apps or add major features.
      </p>
      <form
        name="newsletter"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 rounded-xl border border-[rgba(228,201,126,0.3)] bg-[rgba(255,255,255,0.05)] px-4 py-3 text-[var(--light)] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-cta shrink-0 px-6 py-3 disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-[var(--bright-green)]">
          Thanks! We&apos;ll be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
