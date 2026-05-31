"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvzzozq";

export function Contact() {
  const { t } = useLanguage();
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _subject: `Booking request for ${date}`,
        _replyto: email,
        "Arrival date": date,
        "Contact email": email,
        "Message": message,
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {t.contact.heading}
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed mb-10">
          {t.contact.body}
        </p>

        {status === "sent" ? (
          <div className="rounded-2xl bg-accent/10 border border-accent/20 px-8 py-10 text-center max-w-xl">
            <p className="text-2xl font-semibold mb-2">{t.ui.requestSent}</p>
            <p className="text-ink/70">{t.ui.requestSentBody}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-2">
                {t.ui.arrivalDate} <span className="text-sunset">*</span>
              </label>
              <input
                id="date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-paper focus:outline-none focus:border-accent transition text-ink"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t.ui.yourEmail} <span className="text-sunset">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-paper focus:outline-none focus:border-accent transition text-ink"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t.ui.yourRequest}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={t.ui.requestPlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-paper focus:outline-none focus:border-accent transition text-ink resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sunset text-sm">{t.ui.errorMessage} {t.contact.email}.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "sending" ? t.ui.sending : t.ui.sendBooking}
            </button>
          </form>
        )}

        <div className="mt-16 pt-10 border-t border-ink/10 text-sm text-ink/60">
          <div className="space-y-1">
            <p className="font-medium uppercase tracking-wider">{t.ui.address}</p>
            <a href={t.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent underline underline-offset-2">{t.contact.address}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
