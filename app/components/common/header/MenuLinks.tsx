"use client";

import { usePathname } from "next/navigation";
import CFAButton from "../CFAButton";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/services", label: "Hizmetler" },
  { href: "/contact", label: "İletişim" },
];

const MenuLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6 lg:gap-16">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <a
            key={href}
            href={href}
            className="menu-link"
            style={isActive ? { color: "#D2AD7A" } : undefined}
          >
            {label}
          </a>
        );
      })}
      <CFAButton />
    </div>
  );
};

export default MenuLinks;
