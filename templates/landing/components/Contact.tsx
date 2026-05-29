"use client";

import { useState } from "react";
import { contact } from "../content";

// Sign up free at formspree.io, create a form, and paste your endpoint here:
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvzzozq";

export function Contact() {
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
          {contact.heading}
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed mb-10">
          {contact.body}
        </p>

        {status === "sent" ? (
          <div className="rounded-2xl bg-accent/10 border border-accent/20 px-8 py-10 text-center max-w-xl">
            <p className="text-2xl font-semibold mb-2">Request sent!</p>
            <p className="text-ink/70">Thanks — we'll get back to you within a few hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-2">
                Arrival date <span className="text-sunset">*</span>
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
                Your email address <span className="text-sunset">*</span>
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
                Your request
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us how many guests, how many weeks you need, any questions…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-paper focus:outline-none focus:border-accent transition text-ink resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sunset text-sm">Something went wrong — please try emailing us directly at {contact.email}.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send booking request"}
            </button>
          </form>
        )}

        <div className="mt-16 pt-10 border-t border-ink/10 grid md:grid-cols-2 gap-8 text-sm text-ink/60">
          <div className="space-y-1">
            <p className="font-medium uppercase tracking-wider">Phone</p>
            <p>{contact.phone}</p>
            <p className="pt-3 font-medium uppercase tracking-wider">Availability</p>
            <p>{contact.hours}</p>
          </div>
          <div className="space-y-1">
            <p className="font-medium uppercase tracking-wider">Address</p>
            <p>{contact.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
