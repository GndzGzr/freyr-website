"use client";

/* ── Client logo marquee ──────────────────────────────────────────────────────
   Top row: slides right (→)    Bottom row: slides left (←)
   Logos are duplicated to create a seamless infinite loop.
────────────────────────────────────────────────────────────────────────────── */

/* Simple white-fill SVG brand-like logos (inline for zero dependencies) */
const logos = [
  /* X / Twitter */
  <svg key="x" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>,
  /* N-style */
  <svg key="n" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8"><path d="M4 4v16l8-12v12M12 4l8 16V4"/></svg>,
  /* A serif */
  <svg key="a" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M12 3 2 21h4l2-4h8l2 4h4L12 3Zm0 5 3 6H9l3-6Z"/></svg>,
  /* G-circle */
  <svg key="g" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 14h-2v-6h2v6Zm0-8h-2V6h2v2Z"/></svg>,
  /* R-bold */
  <svg key="r" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M6 3h8a5 5 0 0 1 0 10l4 8h-3l-4-8H9v8H6V3Zm3 3v7h5a3 3 0 0 0 0-6H9Z"/></svg>,
  /* Mountain */
  <svg key="mnt" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M1 21 9 5l4 8 3-4 7 12H1Z"/></svg>,
  /* Leaf */
  <svg key="leaf" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 10 22 10 21 10 17 8 17 8Z"/></svg>,
  /* Circle-dot */
  <svg key="dot" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="#101010"/></svg>,
  /* Map-pin */
  <svg key="pin" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>,
  /* Bolt */
  <svg key="bolt" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>,
  /* Link */
  <svg key="link" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  /* Aperture */
  <svg key="apt" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>,
  /* Hexagon */
  <svg key="hex" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8"><path d="M12 2 21.5 7.5v9L12 22 2.5 16.5v-9Z"/></svg>,
  /* Wave */
  <svg key="wave" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8"><path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M2 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0" opacity=".5"/></svg>,
  /* Shield */
  <svg key="shield" viewBox="0 0 24 24" fill="white" className="w-8 h-8"><path d="M12 2 3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7L12 2Z"/></svg>,
  /* Infinity */
  <svg key="inf" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8"><path d="M12 12c-2 2-4 3-6 3a4 4 0 0 1 0-8c2 0 4 1 6 3 2-2 4-3 6-3a4 4 0 0 1 0 8c-2 0-4-1-6-3Z"/></svg>,
];

/* Duplicate for seamless loop */
const row1 = [...logos, ...logos];
const row2 = [...logos, ...logos];

const ClientMarquee = () => (
  <section className="w-full py-8 md:py-12 overflow-hidden">
    <style>{`
      @keyframes marquee-right {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-left {
        0%   { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .marquee-right {
        display: flex;
        width: max-content;
        animation: marquee-right 30s linear infinite;
      }
      .marquee-left {
        display: flex;
        width: max-content;
        animation: marquee-left 30s linear infinite;
      }
      .logo-item svg {
        width: 32px;
        height: 48px;
        transition: fill 0.25s, stroke 0.25s, color 0.25s;
      }
      @media (min-width: 768px) {
        .logo-item svg {
          width: 40px;
          height: 60px;
        }
      }
      .logo-item:hover svg {
        fill: #D2AD7A !important;
        stroke: #D2AD7A !important;
        color: #D2AD7A !important;
      }
    `}</style>

    {/* Row 1 — slides right */}
    <div className="overflow-hidden mb-6">
      <div className="marquee-right">
        {row1.map((logo, i) => (
          <div
            key={i}
            className="logo-item flex items-center justify-center mx-8 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 — slides left */}
    <div className="overflow-hidden">
      <div className="marquee-left">
        {row2.map((logo, i) => (
          <div
            key={i}
            className="logo-item flex items-center justify-center mx-8 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientMarquee;
