"use client";

import { useEffect, useState } from "react";

/**
 * Shows a branded intro overlay for ~2.2s on the very first page load.
 * Fades out smoothly, then unmounts so it doesn't interfere with routing.
 */
export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s, unmount after the 0.5s transition
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#101010",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Spinning ring */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px" }}>
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            border: "2px solid transparent",
            borderTopColor: "#D2AD7A",
            borderRightColor: "rgba(210,173,122,0.25)",
            animation: "freyr-spin 1.1s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(210,173,122,0.15) 0%, transparent 70%)",
            border: "1px solid rgba(210,173,122,0.2)",
            animation: "freyr-pulse 1.8s ease-in-out infinite",
          }}
        />
        <span
          style={{
            position: "absolute",
            fontFamily: "var(--font-eb-garamond-italic)",
            fontStyle: "italic",
            fontSize: "1.75rem",
            color: "#D2AD7A",
            animation: "freyr-pulse 1.8s ease-in-out infinite",
          }}
        >
          F
        </span>
      </div>

      {/* Brand text */}
      <p style={{ fontFamily: "var(--font-montserrat-sans)", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.85)" }}>
        FREYR
      </p>
      <p style={{ fontFamily: "var(--font-eb-garamond-italic)", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(210,173,122,0.65)", marginTop: "4px", letterSpacing: "0.1em" }}>
        Event &amp; Congress
      </p>

      {/* Progress bar */}
      <div style={{ position: "fixed", bottom: 0, left: 0, height: "2px", width: "100%", background: "rgba(210,173,122,0.08)" }}>
        <div style={{ height: "100%", background: "linear-gradient(to right, transparent, #D2AD7A, transparent)", animation: "freyr-bar 1.6s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes freyr-spin  { to { transform: rotate(360deg); } }
        @keyframes freyr-pulse { 0%,100% { opacity:1; } 50% { opacity:0.45; } }
        @keyframes freyr-bar   { 0% { width:0%; margin-left:0%; } 50% { width:60%; margin-left:20%; } 100% { width:0%; margin-left:100%; } }
      `}</style>
    </div>
  );
}
