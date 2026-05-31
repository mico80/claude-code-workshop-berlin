"use client";

import { useLanguage } from "../context/LanguageContext";

export function Benefits() {
  const { t } = useLanguage();
  return (
    <section className="bg-muted px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          {t.benefits.heading}
        </h2>
        <ul className="grid md:grid-cols-3 gap-8">
          {t.benefits.items.map((b, i) => (
            <li key={i}>
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">{b.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
