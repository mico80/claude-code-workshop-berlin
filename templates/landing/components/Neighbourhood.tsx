import { neighbourhood } from "../content";

export function Neighbourhood() {
  return (
    <section id="neighbourhood" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {neighbourhood.heading}
        </h2>
        <p className="mt-3 text-lg text-ink/65">{neighbourhood.intro}</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {neighbourhood.items.map((place, i) => (
            <article
              key={i}
              className="rounded-2xl border border-ink/10 hover:border-ink/30 transition overflow-hidden"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-lg">{place.name}</h3>
                  <span className="shrink-0 text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {place.distance}
                  </span>
                </div>
                <p className="mt-3 text-ink/70 leading-relaxed">{place.summary}</p>
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-75 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
