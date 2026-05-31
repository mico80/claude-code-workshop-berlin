"use client";

import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          {t.howItWorks.heading}
        </h2>
        <ol className="grid md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, i) => (
            <li key={i} className="relative">
              <span className="text-4xl font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-semibold text-lg">{step.title}</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
