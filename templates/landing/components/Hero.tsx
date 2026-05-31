"use client";

import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          {t.hero.eyebrow}
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
          {t.hero.heading}
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-ink/70 max-w-2xl leading-relaxed">
          {t.hero.subheading}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={t.hero.ctaPrimary.href}
            className="inline-block px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
          >
            {t.hero.ctaPrimary.label}
          </a>
          <a
            href={t.hero.ctaSecondary.href}
            className="inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
          >
            {t.hero.ctaSecondary.label}
          </a>
        </div>
        <div className="mt-12">
          <img
            src="/playa-honda-hero.jpg"
            alt="Playa Honda beach, Lanzarote"
            className="w-full rounded-2xl object-cover shadow-lg"
            style={{ maxHeight: "480px" }}
          />
          <p className="mt-2 text-xs text-ink/40 text-right">
            Photo: Lanzarote · <a href="https://unsplash.com" className="underline hover:text-ink/60" target="_blank" rel="noopener noreferrer">Unsplash</a>
          </p>
        </div>
      </div>
    </section>
  );
}
