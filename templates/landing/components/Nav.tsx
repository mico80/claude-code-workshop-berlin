"use client";

import { useLanguage } from "../context/LanguageContext";

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  return (
    <header className="border-b border-ink/10 bg-paper/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold text-lg tracking-tight">
          {t.business.shortName}
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {t.nav.links.map((l, i) => (
            <a key={i} href={l.href} className="text-ink/70 hover:text-ink transition">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded transition ${lang === "en" ? "font-semibold text-ink" : "text-ink/35 hover:text-ink/70"}`}
            >
              EN
            </button>
            <span className="text-ink/20">|</span>
            <button
              onClick={() => setLang("it")}
              className={`px-2 py-1 rounded transition ${lang === "it" ? "font-semibold text-ink" : "text-ink/35 hover:text-ink/70"}`}
            >
              IT
            </button>
          </div>
          <a
            href={t.nav.ctaHref}
            className="px-4 py-2 rounded-full bg-ink text-paper text-sm font-medium hover:opacity-90 transition"
          >
            {t.nav.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
