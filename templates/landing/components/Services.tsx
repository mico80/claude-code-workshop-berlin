"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="bg-muted px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{t.services.heading}</h2>
        <p className="mt-3 text-lg text-ink/65">{t.services.intro}</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl bg-paper border border-ink/10 hover:border-ink/30 transition"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{s.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.services.photos.map((photo, i) => (
            <figure key={i} className="overflow-hidden rounded-xl">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={600}
                height={400}
                className="w-full h-52 object-cover hover:scale-105 transition duration-300"
              />
              <figcaption className="mt-2 text-sm text-ink/60 text-center">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
