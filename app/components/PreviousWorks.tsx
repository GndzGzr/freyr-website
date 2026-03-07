"use client";

import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Work {
  id: number;
  label: string;
  imageUrl: string;
}

const works: Work[] = [
  {
    id: 1,
    label: "Congress & Summit Organisations",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: 2,
    label: "Corporate Events & Meetings",
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&q=80",
  },
  {
    id: 3,
    label: "Exhibition & Fair Management",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80",
  },
  {
    id: 4,
    label: "Social & Gala Events",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  },
  {
    id: 5,
    label: "Cultural & Sporting Events",
    imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&q=80",
  },
  {
    id: 6,
    label: "Award Ceremonies",
    imageUrl: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&q=80",
  },
  {
    id: 7,
    label: "International Conference",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
  },
  {
    id: 8,
    label: "Medical & Academic Summit",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    id: 9,
    label: "Technology Forum",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
  },
  {
    id: 10,
    label: "Product Launch Event",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
  },
  {
    id: 11,
    label: "Concert & Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
  },
  {
    id: 12,
    label: "Fashion & Design Show",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 13,
    label: "Charity & Fundraiser Gala",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  },
  {
    id: 14,
    label: "Sports Tournament",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  },
  {
    id: 15,
    label: "Workshop & Training",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    id: 16,
    label: "Outdoor Festival",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  },
];

const PreviousWorks = () => {
  const [active, setActive] = useState(2);
  const trackRef = useRef<HTMLDivElement>(null);
  const N = works.length;

  // Circular nav — always wraps
  const goNext = () => setActive((p) => (p + 1) % N);
  const goPrev = () => setActive((p) => (p - 1 + N) % N);

  // Normalise raw offset into (-N/2, N/2] so items wrap visually
  const normaliseOffset = (raw: number) => {
    let o = raw % N;
    if (o > N / 2) o -= N;
    if (o < -N / 2) o += N;
    return o;
  };

  const getScale = (offset: number) => {
    const d = Math.abs(offset);
    if (d === 0) return 1;
    if (d === 1) return 0.88;
    return 0.76;
  };

  const getOpacity = (offset: number) => {
    const d = Math.abs(offset);
    if (d === 0) return 1;
    if (d === 1) return 0.7;
    return 0.45;
  };

  const getZIndex = (offset: number) => 10 - Math.abs(offset);

  return (
    <section className="w-full py-4 md:py-8 overflow-hidden">
      {/* Carousel track */}
      <div
        ref={trackRef}
        className="relative flex items-center justify-center"
        style={{ height: "560px" }}
      >
        {works.map((work, i) => {
          const offset = normaliseOffset(i - active);
          const translateX = offset * 280; // px gap between items
          const scale = getScale(offset);
          const opacity = getOpacity(offset);
          const zIndex = getZIndex(offset);
          const isActive = i === active;

          // Items more than 2 slots away are invisible — they teleport
          // instantly to their new position without animating across the screen.
          const isVisible = Math.abs(offset) <= 2;

          return (
            <div
              key={work.id}
              onClick={() => isVisible && setActive(i)}
              className="absolute rounded-2xl overflow-hidden"
              style={{
                width: "400px",
                height: isActive ? "520px" : "460px",
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity: isVisible ? opacity : 0,
                zIndex,
                // Only transition visible items — far ones teleport silently
                transition: isVisible
                  ? "all 0.5s cubic-bezier(0.4,0,0.2,1)"
                  : "none",
                cursor: isVisible ? "pointer" : "default",
                pointerEvents: isVisible ? "auto" : "none",
                flexShrink: 0,
              }}
            >
              {/* Image */}
              <img
                src={work.imageUrl}
                alt={work.label}
                className="w-full h-full object-cover"
                draggable={false}
              />

              {/* Gradient overlay always present, stronger on active */}
              <div
                className="absolute inset-0"
                style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent 70%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.45) 20%, transparent 80%)",
                }}
              />

              {/* Label — only on active card */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <p className="text-white font-semibold text-sm leading-snug">
                    {work.label}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={goPrev}
          aria-label="Previous work"
          className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#D2AD7A] hover:border-[#D2AD7A] hover:text-white transition-all duration-200"
        >
          <FiChevronLeft size={16} />
        </button>
        <button
          onClick={goNext}
          aria-label="Next work"
          className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#D2AD7A] hover:border-[#D2AD7A] hover:text-white transition-all duration-200"
        >
          <FiChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default PreviousWorks;
