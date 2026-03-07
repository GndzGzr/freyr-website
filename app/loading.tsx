// app/loading.tsx
// Next.js automatically renders this while page segments are loading

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "var(--background)" }}
    >
      {/* Logo mark — pulsing golden ring */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            border: "2px solid transparent",
            borderTopColor: "#D2AD7A",
            borderRightColor: "rgba(210,173,122,0.3)",
            animation: "spin 1.1s linear infinite",
          }}
        />
        {/* Inner glow dot */}
        <div
          className="absolute"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(210,173,122,0.18) 0%, transparent 70%)",
            border: "1px solid rgba(210,173,122,0.25)",
            animation: "pulse-glow 1.8s ease-in-out infinite",
          }}
        />
        {/* F letter mark */}
        <span
          className="absolute font-serif-italic"
          style={{
            fontFamily: "var(--font-eb-garamond-italic)",
            fontStyle: "italic",
            fontSize: "1.75rem",
            color: "#D2AD7A",
            animation: "pulse-glow 1.8s ease-in-out infinite",
          }}
        >
          F
        </span>
      </div>

      {/* Brand name */}
      <p
        style={{
          fontFamily: "var(--font-montserrat-sans)",
          fontWeight: 700,
          fontSize: "1.25rem",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        FREYR
      </p>
      <p
        style={{
          fontFamily: "var(--font-eb-garamond-italic)",
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: "rgba(210,173,122,0.7)",
          marginTop: "4px",
          letterSpacing: "0.1em",
        }}
      >
        Event &amp; Congress
      </p>

      {/* Bottom progress bar */}
      <div
        className="fixed bottom-0 left-0 h-[2px] w-full"
        style={{ background: "rgba(210,173,122,0.1)" }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(to right, transparent, #D2AD7A, transparent)",
            animation: "loading-bar 1.6s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
        @keyframes loading-bar {
          0%   { width: 0%;   margin-left: 0%; }
          50%  { width: 60%;  margin-left: 20%; }
          100% { width: 0%;   margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
