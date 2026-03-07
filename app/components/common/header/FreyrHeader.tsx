"use client";

import { useState, useEffect, useRef } from "react";
import FreyrLogo from "./FreyrLogo";
import MenuLinks from "./MenuLinks";
import CFAButton from "../CFAButton";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const FreyerHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false); // past first ~10px?
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      // Hide when scrolling down past 80px, show when scrolling up
      if (y > 80) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        // Frosted glass — only kicks in once user scrolled past hero
        backdropFilter: scrolled ? "blur(16px) saturate(1.6)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.6)" : "none",
        background: scrolled
          ? "linear-gradient(to bottom, rgba(16,16,16,0.82) 0%, rgba(16,16,16,0.65) 100%)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(210,173,122,0.1)" : "1px solid transparent",
        transition: "transform 0.35s ease, background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Main nav bar */}
      <div className="flex justify-between items-center font-sans w-full py-4 px-4 md:px-12 lg:px-24">
        <FreyrLogo />

        {/* Desktop nav */}
        <div className="hidden md:block">
          <MenuLinks />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden w-full border-t"
          style={{
            borderColor: "rgba(210,173,122,0.1)",
            background: "rgba(16,16,16,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            <a href="/" className="menu-link text-lg" onClick={() => setMenuOpen(false)}>Ana Sayfa</a>
            <a href="/about" className="menu-link text-lg" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
            <a href="/services" className="menu-link text-lg" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="/contact" className="menu-link text-lg" onClick={() => setMenuOpen(false)}>İletişim</a>
            <CFAButton />
          </nav>
        </div>
      )}
    </div>
  );
};

export default FreyerHeader;
