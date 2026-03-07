"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactEmail, ContactFormState } from "./actions";
import ServicesHero from "../components/common/hero/ServicesHero";
import SectionHeader from "../components/common/SectionHeader";
import SectionDescription from "../components/common/SectionDescription";

const initial: ContactFormState = { success: false, message: "" };

// ── Input style helpers ────────────────────────────────────────────────────
const inputClass =
  "w-full bg-[#161616] text-white rounded-xl px-5 py-3.5 text-sm outline-none border border-[#2a2a2a] focus:border-[#D2AD7A] transition-colors duration-200 placeholder:text-[#555]";

// ── Contact info items ─────────────────────────────────────────────────────
const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
    ),
    label: "Adres",
    value: "1131 Cad. No:7-9, Huzur Mah., Cevizlidere – Çankaya, Ankara 06204",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.1a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.35 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    label: "Telefon",
    value: "+90 542 247 3635",
    href: "tel:+905422473635",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "E-posta",
    value: "ufuk@freyreventcongress.com.tr",
    href: "mailto:ufuk@freyreventcongress.com.tr",
  },
];

export default function ContactPage() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <div className="min-h-screen font-sans">
      <ServicesHero spanFirst="İletişime" spanSecond="Geçin" />

      <div className="mt-16 md:mt-24 lg:mt-36">
        <SectionHeader
          titleSpanFirst="Bize"
          titleSpanSecond="Ulaşın"
          order={true}
        />
        <SectionDescription description="Her sorunuz, her projeniz için buradayız. Formu doldurun, en kısa sürede size dönelim." />
      </div>

      {/* Two-column layout */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mt-12 md:mt-20 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        {/* LEFT — contact info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">
              FREYR Event &amp;{" "}
              <span
                style={{
                  fontFamily: "var(--font-eb-garamond-italic)",
                  fontStyle: "italic",
                  color: "#D2AD7A",
                }}
              >
                Congress
              </span>
            </h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Uluslararası kongrelerden kurumsal lansmanllara, her ölçekte
              etkinliğiniz için profesyonel çözümler sunuyoruz.
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-12 h-px"
            style={{ background: "rgba(210,173,122,0.4)" }}
          />

          {/* Info items */}
          <div className="flex flex-col gap-6">
            {info.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(210,173,122,0.08)",
                    border: "1px solid rgba(210,173,122,0.25)",
                    color: "#D2AD7A",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-[#555] uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-[#c4c4c4] hover:text-[#D2AD7A] transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#c4c4c4]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form card */}
        <div
          className="lg:col-span-3 rounded-2xl p-8 md:p-10"
          style={{
            background: "#0f0e0b",
            border: "1px solid #222018",
          }}
        >
          <form ref={formRef} action={action} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-[#555] uppercase tracking-wider mb-2">
                  Ad Soyad
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-[#555] uppercase tracking-wider mb-2">
                  E-posta
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="ornek@email.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#555] uppercase tracking-wider mb-2">
                Konu
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Mesajınızın konusu"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-xs text-[#555] uppercase tracking-wider mb-2">
                Mesaj
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Mesajınızı buraya yazın..."
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            {/* Feedback */}
            {state.message && (
              <div
                className="rounded-xl px-5 py-3 text-sm"
                style={{
                  background: state.success
                    ? "rgba(210,173,122,0.08)"
                    : "rgba(220,50,50,0.08)",
                  border: `1px solid ${state.success ? "rgba(210,173,122,0.3)" : "rgba(220,50,50,0.3)"}`,
                  color: state.success ? "#D2AD7A" : "#f87171",
                }}
              >
                {state.message}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full py-4 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "#D2AD7A",
                color: "#101010",
                fontFamily: "var(--font-montserrat-sans)",
                letterSpacing: "0.05em",
              }}
            >
              {pending ? "Gönderiliyor…" : "Mesaj Gönder"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}