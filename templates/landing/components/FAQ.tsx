"use client";

import { useLanguage } from "../context/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="bg-muted px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          {t.faq.heading}
        </h2>
        <dl className="space-y-6">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-paper border border-ink/10"
            >
              <dt className="font-semibold text-lg">{item.q}</dt>
              <dd className="mt-2 text-ink/70 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
