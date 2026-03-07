"use client";

import { useState } from "react";
import FreyrLogo from "./FreyrLogo";
import MenuLinks from "./MenuLinks";
import CFAButton from "../CFAButton";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const FreyerHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="h-fit flex justify-between items-center font-sans border-2 border-solid border-gray border-b-2 w-full py-4 px-4 md:px-12 lg:px-24">
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

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-b-2 border-[var(--border-gray)] z-50">
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
