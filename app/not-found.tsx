// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Radial glow behind the number */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          background:
            "radial-gradient(ellipse at center, rgba(210,173,122,0.12) 0%, transparent 70%)",
        }}
      />

      {/* 404 */}
      <h1
        className="relative z-10"
        style={{
          fontFamily: "var(--font-eb-garamond-italic)",
          fontStyle: "italic",
          fontSize: "clamp(7rem, 20vw, 14rem)",
          fontWeight: 700,
          color: "#D2AD7A",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        404
      </h1>

      {/* Divider */}
      <div
        className="relative z-10 my-6"
        style={{
          width: "60px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(210,173,122,0.6), transparent)",
        }}
      />

      {/* Heading */}
      <h2
        className="relative z-10 mb-3"
        style={{
          fontFamily: "var(--font-montserrat-sans)",
          fontWeight: 700,
          fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
          color: "var(--foreground)",
          letterSpacing: "0.05em",
        }}
      >
        Sayfa Bulunamadı
      </h2>

      {/* Sub-text */}
      <p
        className="relative z-10 mb-10 max-w-md"
        style={{
          color: "var(--light-gray)",
          fontSize: "1rem",
          lineHeight: 1.7,
        }}
      >
        Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
        Ana sayfaya dönerek devam edebilirsiniz.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90"
          style={{
            background: "#D2AD7A",
            color: "#101010",
            fontFamily: "var(--font-montserrat-sans)",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
          }}
        >
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:border-[#D2AD7A] hover:text-[#D2AD7A]"
          style={{
            border: "1px solid rgba(210,173,122,0.4)",
            color: "var(--foreground)",
            fontFamily: "var(--font-montserrat-sans)",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
          }}
        >
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
