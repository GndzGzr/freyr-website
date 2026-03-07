"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  bullets: string[];
}

const services: Service[] = [
  {
    id: "01",
    title: "Congress & Summit Organisations",
    description:
      "FREYR professionally manages all aspects of national and international conferences. We deliver academic and sectoral events with high participation and flawless execution.",
    iconSrc: "/Vector(2).svg",
    bullets: [
      "Scientific program coordination",
      "Speaker & guest management",
      "Online registration systems",
      "Exhibition space planning",
      "Scientific program coordination",
      "Speaker & guest management",
      "Online registration systems",
      "Exhibition space planning",
    ],
  },
  {
    id: "02",
    title: "Corporate Events & Meetings",
    description:
      "From board meetings to large-scale corporate summits, FREYR handles every detail with precision. We create professional environments that enhance collaboration and brand presence.",
    iconSrc: "/Vector(3).svg",
    bullets: [
      "Venue selection & setup",
      "Audio/visual production",
      "Delegate coordination",
      "Corporate branding integration",
      "Live streaming & hybrid events",
      "Post-event reporting",
      "Catering & hospitality management",
      "Real-time on-site support",
    ],
  },
  {
    id: "03",
    title: "Exhibition & Fair Management",
    description:
      "FREYR designs and manages trade shows, exhibitions, and fairs that attract industry leaders and maximise participant engagement through creative booth design and logistics.",
    iconSrc: "/Vector(4).svg",
    bullets: [
      "Booth design & construction",
      "Exhibitor coordination",
      "Visitor flow management",
      "Promotional material production",
      "Sponsorship management",
      "Lead generation systems",
      "Post-show analytics",
      "International exhibitor support",
    ],
  },
  {
    id: "04",
    title: "Social & Gala Events",
    description:
      "We craft elegant and memorable social gatherings—from gala dinners to award ceremonies—ensuring every moment reflects prestige, style, and seamless execution.",
    iconSrc: "/Vector(5).svg",
    bullets: [
      "Thematic concept & décor",
      "Entertainment & performers",
      "Luxury catering management",
      "Award ceremony production",
      "Red carpet & photography",
      "VIP guest management",
      "Lighting & ambience design",
      "Event timeline management",
    ],
  },
  {
    id: "05",
    title: "Cultural & Sporting Events",
    description:
      "FREYR brings cultural festivals, sports tournaments, and community events to life with energy and precision, ensuring remarkable experiences for participants and audiences.",
    iconSrc: "/Vector(6).svg",
    bullets: [
      "Event concept development",
      "Ticketing & accreditation",
      "Athlete & artist coordination",
      "Crowd & safety management",
      "Media & press relations",
      "Sponsorship activation",
      "Logistics & transport",
      "Post-event evaluation",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Helper: pad number string
───────────────────────────────────────────────────────────────────────────── */
const pad = (n: number) => String(n).padStart(2, "0");

/* ─────────────────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────────────────── */
const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  const goNext = () => setActiveIndex((p) => (p + 1) % services.length);
  const goPrev = () => setActiveIndex((p) => (p - 1 + services.length) % services.length);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* ── DESKTOP layout ─────────────────────────────────────── */}
      <div className="hidden md:flex flex-row gap-8 lg:gap-12 items-start">
        {/* LEFT — borderless 2-column staggered list */}
        <DesktopServiceList
          services={services}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        {/* RIGHT — detail card */}
        <div className="flex-1 flex flex-col items-center">
          <DetailCard
            service={active}
            index={activeIndex}
            total={services.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>

      {/* ── MOBILE layout ──────────────────────────────────────── */}
      <div className="flex flex-col gap-6 md:hidden">
        <MobileServiceList
          services={services}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
        <div className="flex flex-col items-center">
          <DetailCard
            service={active}
            index={activeIndex}
            total={services.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   Desktop service list — 2-column staggered, no borders
   Layout: col-0 → items 0,1,2   col-1 → items 3,4
   Visually rows alternate so col-0 row0=item0, col-1 row0=item3, etc.
   We reproduce the exact reference: col1(01,02,03) col2(04,05)
───────────────────────────────────────────────────────────────────────────── */
const DesktopServiceList = ({
  services,
  activeIndex,
  onSelect,
}: {
  services: Service[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) => {
  // split into two columns: left gets 0,1,2  right gets 3,4
  const col1 = [0, 1, 2];
  const col2 = [3, 4];

  return (
    <div
      className="shrink-0 w-[44%] lg:w-[40%] border-l border-[#292828]"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      {/* Column 1 */}
      <div className="flex flex-col">
        {col1.map((i) => (
          <DesktopServiceItem
            key={services[i].id}
            service={services[i]}
            isActive={activeIndex === i}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>

      {/* Column 2 — offset down by roughly one item height so rows interleave */}
      <div className="flex flex-col" style={{ paddingTop: "calc(33.3333% + 2rem)" }}>
        {col2.map((i) => (
          <DesktopServiceItem
            key={services[i].id}
            service={services[i]}
            isActive={activeIndex === i}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>
    </div>
  );
};

const DesktopServiceItem = ({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="group text-left px-6 py-8 lg:py-10 transition-all duration-300"
  >
    {/* Large italic number */}
    <span
      className={`block font-serif-italic text-4xl lg:text-5xl leading-none mb-3 transition-colors duration-300 ${
        isActive ? "text-[#D2AD7A]" : "text-[#D2AD7A]/40 group-hover:text-[#D2AD7A]/70"
      }`}
      style={{ fontStyle: "italic" }}
    >
      {service.id}
    </span>

    {/* Title */}
    <span
      className={`block font-semibold text-sm lg:text-base leading-snug transition-colors duration-300 ${
        isActive
          ? "text-white"
          : "text-[#666666] group-hover:text-[#999]"
      }`}
    >
      {service.title}
    </span>
  </button>
);

/* ─────────────────────────────────────────────────────────────────────────────
   Mobile service list — simple 2-col grid no padding offset
───────────────────────────────────────────────────────────────────────────── */
const MobileServiceList = ({
  services,
  activeIndex,
  onSelect,
}: {
  services: Service[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) => (
  <div className="border-l border-[#292828] grid grid-cols-2">
    {services.map((svc, i) => (
      <button
        key={svc.id}
        onClick={() => onSelect(i)}
        className="group text-left px-4 py-5 transition-all duration-300"
      >
        <span
          className={`block font-serif-italic text-3xl leading-none mb-2 transition-colors duration-300 ${
            activeIndex === i ? "text-[#D2AD7A]" : "text-[#D2AD7A]/40"
          }`}
          style={{ fontStyle: "italic" }}
        >
          {svc.id}
        </span>
        <span
          className={`block font-semibold text-xs leading-snug transition-colors duration-300 ${
            activeIndex === i ? "text-white" : "text-[#666]"
          }`}
        >
          {svc.title}
        </span>
      </button>
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────────
   Detail card — icon floats above card in a golden circle
───────────────────────────────────────────────────────────────────────────── */
const DetailCard = ({
  service,
  index,
  total,
  onPrev,
  onNext,
}: {
  service: Service;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Icon circle — sits half outside the card top */}
      <div
        className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0"
        style={{
          marginBottom: "-28px",
          background: "radial-gradient(circle at 40% 30%, #1e1810, #0e0c09)",
          border: "1.5px solid rgba(210,173,122,0.45)",
          boxShadow: "0 0 12px rgba(210,173,122,0.12)",
        }}
      >
        <Image
          src={service.iconSrc}
          alt={service.title}
          width={32}
          height={32}
          className="w-7 h-7 lg:w-8 lg:h-8 object-contain"
        />
      </div>

      {/* Card body */}
      <div
        className="relative w-full rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: "#0f0e0b",
          border: "1px solid #222018",
          paddingTop: "calc(1.5rem + 28px)",
        }}
      >
        {/* Warm golden light beam — bottom-right radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0"
          style={{
            width: "65%",
            height: "55%",
            background:
              "radial-gradient(ellipse at 80% 100%, rgba(180,130,60,0.28) 0%, rgba(140,95,30,0.14) 35%, transparent 70%)",
          }}
        />

        {/* Content sits above the glow */}
        <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
          {/* Title */}
          <h3 className="font-bold text-base lg:text-lg text-white mb-4 mt-1">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm lg:text-base text-[#b8b8b8] leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Bullet list */}
          <ul className="flex flex-col gap-2.5 mb-6">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#e8e8e8]">
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "#D2AD7A",
                  }}
                />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Navigation footer — < 02 (left)   03 > (right) */}
          <div
            className="flex items-center justify-between mt-auto pt-4"
            style={{ borderTop: "1px solid #1e1c17" }}
          >
            {/* Left: arrow + prev number */}
            <button
              onClick={onPrev}
              aria-label="Previous service"
              className="flex items-center gap-2 text-[#D2AD7A] hover:text-white transition-colors"
            >
              <FiChevronLeft size={16} />
              <span className="text-sm font-medium">{pad(prevIndex + 1)}</span>
            </button>

            {/* Right: next number + arrow */}
            <button
              onClick={onNext}
              aria-label="Next service"
              className="flex items-center gap-2 text-[#D2AD7A] hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">{pad(nextIndex + 1)}</span>
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
