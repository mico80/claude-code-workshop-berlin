"use client";

import { useLanguage } from "../context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          {t.testimonials.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.testimonials.quotes.map((q, i) => (
            <figure
              key={i}
              className="p-6 rounded-2xl bg-muted border border-ink/10"
            >
              <blockquote className="text-lg text-ink/85 leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-medium">{q.author}</span>
                <span className="text-ink/60"> · {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
