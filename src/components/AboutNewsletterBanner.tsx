"use client";

import { useState } from "react";

export function AboutNewsletterBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xaqdkdzw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || data.message || "Submit failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="about"
      className="w-full bg-[#94c684] py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex-1">
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold text-[var(--dark-bg)] md:text-4xl"
            >
              About Athro
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--darker-bg)]/90">
              Athro is an ecosystem of AI-powered apps designed to help you
              achieve your goals — whether that&apos;s landing your dream job,
              acing your exams, or reaching a personal milestone. Each app uses
              real data and verified information to build you personalised,
              step-by-step pathways with definite dates and costs. No generic
              advice. No hallucination.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--darker-bg)]/90">
              We believe everyone deserves a clear path forward. Athro AI, Athro
              Careers, and Athro Goals work together to support you through
              learning, career planning, and life goals — all in one place.
            </p>
          </div>

          <div className="shrink-0 lg:w-96">
            <h3
              id="newsletter-heading"
              className="font-display text-2xl font-bold text-[var(--dark-bg)] md:text-3xl"
            >
              Stay updated
            </h3>
            <p className="mt-2 text-[var(--darker-bg)]/80">
              Get notified when we launch new apps or add major features.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "loading"}
                className="flex-1 rounded-xl border border-[var(--dark-bg)]/20 bg-white/90 px-4 py-3 text-[var(--dark-bg)] placeholder:text-[var(--dark-bg)]/50 focus:border-[var(--dark-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--dark-bg)]/30"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 rounded-[50px] bg-[var(--dark-bg)] px-6 py-3 font-bold text-[var(--gold)] shadow-lg transition hover:bg-[var(--darker-bg)] hover:scale-[1.02] disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-3 text-sm font-medium text-[var(--dark-green)]">
                Thanks! We&apos;ll be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm font-medium text-red-700">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
