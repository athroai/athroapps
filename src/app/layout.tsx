import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://athroapps.com"),
  title: {
    default: "Athro Apps — Your AI-Powered Learning & Career Ecosystem",
    template: "%s | Athro Apps",
  },
  description:
    "Discover Athro AI, Athro Careers, and Athro Goals. AI-powered tutoring, career pathfinding, and goal planning — personalised pathways to your dreams.",
  keywords: [
    "Athro",
    "Athro AI",
    "Athro Careers",
    "Athro Goals",
    "AI tutoring",
    "career pathfinder",
    "goal planning",
    "learning",
    "education",
  ],
  authors: [{ name: "Athro" }],
  creator: "Athro",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://athroapps.com",
    siteName: "Athro Apps",
    title: "Athro Apps — Your AI-Powered Learning & Career Ecosystem",
    description:
      "Discover Athro AI, Athro Careers, and Athro Goals. AI-powered tutoring, career pathfinding, and goal planning.",
    images: [{ url: "/icons/athro.png", width: 512, height: 512, alt: "Athro Apps" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athro Apps — Your AI-Powered Learning & Career Ecosystem",
    description: "Discover Athro AI, Athro Careers, and Athro Goals.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://athroapps.com",
  },
  verification: {
    // Add when you have them: google: "your-google-verification",
    // yandex: "your-yandex-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/icons/athro.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/athro.png" />
      </head>
      <body className="min-h-screen bg-[var(--dark-bg)] font-sans text-[var(--light)] antialiased">
        {children}
        <ServiceWorkerRegister />
        <Analytics />
      </body>
    </html>
  );
}
