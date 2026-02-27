import { APPS } from "@/lib/apps";
import { AppCard } from "@/components/AppCard";
import { AboutNewsletterBanner } from "@/components/AboutNewsletterBanner";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const orderedApps = [
    APPS.find((a) => a.id === "careers"),
    APPS.find((a) => a.id === "athro"),
    APPS.find((a) => a.id === "goals"),
  ].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Athro Apps",
    url: "https://athroapps.com",
    description:
      "Athro is an ecosystem of AI-powered apps for learning, career planning, and goal achievement.",
    sameAs: [
      "https://athro.ai",
      "https://athrocareers.co.uk",
      "https://athrogoals.co.uk",
    ],
  };

  return (
    <div className="bg-[var(--dark-bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="flex items-center justify-between border-b border-[rgba(228,201,126,0.15)] px-4 py-4 md:px-8 md:py-5">
        <span className="font-display text-lg font-bold text-[var(--gold)] md:text-xl">
          Athro Apps
        </span>
        <nav className="flex items-center gap-4">
          <a
            href="#about"
            className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--gold)]"
          >
            About & Newsletter
          </a>
        </nav>
      </header>

      <main>
        <section
          className="mx-auto max-w-6xl px-4 py-12 md:py-20"
          aria-labelledby="apps-heading"
        >
          <h1
            id="apps-heading"
            className="font-display text-4xl font-black tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="gradient-text-hero">Your apps.</span>
            <br />
            <span className="text-[var(--light)]">Your path.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            AI-powered learning, career pathfinding, and goal planning —
            personalised pathways to your dreams.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {orderedApps.map((app) => (
              <AppCard key={app!.id} app={app!} />
            ))}
          </div>
        </section>

        <AboutNewsletterBanner />
      </main>

      <Footer />
    </div>
  );
}
