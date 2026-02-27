"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { AppConfig } from "@/lib/apps";
import { isMobile, isIOS, isAndroid } from "@/lib/device";

interface AppCardProps {
  app: AppConfig;
}

export function AppCard({ app }: AppCardProps) {
  const [isClient, setIsClient] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showAppStore = isClient && isMobile() && isIOS() && app.appStoreUrl;
  const showPlayStore = isClient && isMobile() && isAndroid() && app.playStoreUrl;
  const primaryCta = showAppStore || showPlayStore;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(228,201,126,0.15)] bg-[var(--card-bg)] transition-all duration-300 hover:border-[var(--gold)] hover:shadow-[0_20px_60px_rgba(228,201,126,0.3)] hover:-translate-y-2 ${
        app.isCenterpiece ? "ring-2 ring-[var(--gold)] ring-opacity-50 md:scale-105" : ""
      }`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={app.icon}
          alt={`${app.name} app icon`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="font-display text-2xl font-bold text-[var(--gold)] md:text-3xl">
            {app.name}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
            {app.description}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <ul className="space-y-2">
          {app.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-[var(--muted)]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {primaryCta && (showAppStore || showPlayStore) ? (
            <a
              href={showAppStore ? app.appStoreUrl : app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center justify-center text-center text-sm"
            >
              {showAppStore ? "Download on App Store" : "Get it on Google Play"}
            </a>
          ) : null}
          <a
            href={app.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center text-center text-sm ${
              primaryCta ? "btn-secondary" : "btn-cta"
            }`}
          >
            {primaryCta ? "Open in browser" : "Get started"}
          </a>
        </div>
      </div>
    </article>
  );
}
