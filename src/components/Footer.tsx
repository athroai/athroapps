import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(228,201,126,0.15)] px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--muted)]">
          <Link
            href="https://athrocareers.co.uk/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--gold)]"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="https://athrocareers.co.uk/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--gold)]"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://athrocareers.co.uk/help"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--gold)]"
          >
            Help
          </Link>
        </div>
        <div className="mt-6 border-t border-[rgba(228,201,126,0.1)] pt-6 text-center text-xs text-[var(--muted)]">
          <p className="mb-2 font-medium text-[var(--muted)]">Sources</p>
          <p>
            * Athro Careers: UCAS, professional bodies, UK &amp; Wales qualification frameworks
          </p>
          <p>
            ** Athro Goals: gov.uk, MoneyHelper, and other trusted sources
          </p>
        </div>
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          Athro Apps — part of the Athro AI ecosystem
        </p>
      </div>
    </footer>
  );
}
