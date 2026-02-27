export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-4 py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="font-display text-3xl font-bold text-[var(--gold)] md:text-4xl"
      >
        About Athro
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
        Athro is an ecosystem of AI-powered apps designed to help you achieve
        your goals — whether that&apos;s landing your dream job, acing your
        exams, or reaching a personal milestone. Each app uses real data and
        verified information to build you personalised, step-by-step pathways
        with definite dates and costs. No generic advice. No hallucination.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
        We believe everyone deserves a clear path forward. Athro AI, Athro
        Careers, and Athro Goals work together to support you through learning,
        career planning, and life goals — all in one place.
      </p>
    </section>
  );
}
