"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "/Vector(2).svg",
    label: "Needs Analysis & Goal Setting",
    row: 0,
    col: 0,
  },
  {
    icon: "/Vector(3).svg",
    label: "Concept Design",
    row: 0,
    col: 1,
  },
  {
    icon: "/Vector(4).svg",
    label: "Detailed Planning",
    row: 0,
    col: 2,
  },
  {
    icon: "/Vector(5).svg",
    label: "Operations Management",
    row: 1,
    col: 2,
  },
  {
    icon: "/Vector(6).svg",
    label: "Implementation of the Event",
    row: 1,
    col: 1,
  },
  {
    icon: "/Vector(7).svg",
    label: "Reporting & Evaluation",
    row: 1,
    col: 0,
  },
];

// The horizontal lines end at the circle centres: 52px from each edge.
// The connector arcs have their flat edge at that same x position and
// bulge outward (right arc bulges right, left arc bulges left).
const CIRCLE_HALF = 52; // px — half of the 104px circle = circle centre offset from edge
const ARC_WIDTH = 88; // px — natural width of process-scheme1/2 arcs

// SVG paths extracted from process-scheme1.svg and process-scheme2.svg.
// Both use viewBox "0 0 88 176". We render them inline with preserveAspectRatio="none"
// so they scale smoothly to any height while keeping the correct arc shape.
const RIGHT_ARC_PATH = "M0 175C48.0488 175 87 136.049 87 88C87 39.9512 48.0488 1 0 1";
const LEFT_ARC_PATH =
  "M88 1C39.9512 0.999996 1.00001 39.9512 1.00001 88C1 136.049 39.9512 175 88 175";

const ProcessScheme = () => {
  const row0Ref = useRef<HTMLDivElement>(null);
  // connectorHeight = height of row-0 div.
  // The arcs are absolutely positioned starting at top: CIRCLE_HALF (the row-0 circle
  // centre) and spanning exactly connectorHeight px downward, which lands precisely on
  // the row-1 circle centre (row-1 starts right after row-0, circle centre = +52px).
  const [connectorHeight, setConnectorHeight] = useState(176);

  useEffect(() => {
    const update = () => {
      if (row0Ref.current) {
        setConnectorHeight(row0Ref.current.offsetHeight);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const row0 = steps.filter((s) => s.row === 0).sort((a, b) => a.col - b.col);
  const row1 = steps.filter((s) => s.row === 1).sort((a, b) => b.col - a.col);

  // The arc SVG is 88px wide. Its flat edge sits at x=0 (right arc) or x=88 (left arc).
  // We want that flat edge aligned with the horizontal line endpoint (CIRCLE_HALF from each side).
  // right arc  → right: -(ARC_WIDTH - CIRCLE_HALF) = -36  (bulges 36px into the padding)
  // left arc   → left:  -(ARC_WIDTH - CIRCLE_HALF) = -36  (bulges 36px into the padding)
  const arcOffset = -(ARC_WIDTH - CIRCLE_HALF); // -36px

  const arcStyle = (side: "right" | "left"): React.CSSProperties => ({
    position: "absolute",
    top: CIRCLE_HALF,
    [side]: arcOffset,
    width: ARC_WIDTH,
    height: connectorHeight,
    zIndex: 0,
    overflow: "visible",
  });

  return (
    <div className="w-full px-24 py-16">
      <div className="relative">
        {/* Row 1: left → right */}
        <div
          ref={row0Ref}
          className="relative flex items-start justify-between"
        >
          {/* Horizontal connector line — 2px to match the SVG stroke-width */}
          <div className="absolute top-[52px] left-[52px] right-[52px] h-[2px] bg-[#D2AD7A]" />
          {row0.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center gap-4 z-10"
            >
              <div className="w-[104px] h-[104px] rounded-full bg-[#1a1a1a] border border-[#D2AD7A]/30 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-sm text-white text-center max-w-[140px]">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: right → left (reversed visually) */}
        <div className="relative flex items-start justify-between">
          {/* Horizontal connector line */}
          <div className="absolute top-[52px] left-[52px] right-[52px] h-[2px] bg-[#D2AD7A]" />
          {row1.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center gap-4 z-10"
            >
              <div className="w-[104px] h-[104px] rounded-full bg-[#1a1a1a] border border-[#D2AD7A]/30 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-sm text-white text-center max-w-[140px]">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/*
          Right arc connector (process-scheme1 path):
            - Flat edge at x=0, arc bulges right
            - Positioned so flat edge aligns with the right end of the horizontal lines
        */}
        <svg
          viewBox="0 0 88 176"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={arcStyle("right")}
        >
          <path d={RIGHT_ARC_PATH} stroke="#D2AD7A" strokeWidth="2" />
        </svg>

        {/*
          Left arc connector (process-scheme2 path):
            - Flat edge at x=88, arc bulges left
            - Positioned so flat edge aligns with the left end of the horizontal lines
        */}
        <svg
          viewBox="0 0 88 176"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={arcStyle("left")}
        >
          <path d={LEFT_ARC_PATH} stroke="#D2AD7A" strokeWidth="2" />
        </svg>

        {/*
          Middle straight line:
          The path flows as a "story": row-0 line → right arc down → middle line left
          → left arc up → row-1 line.
          The right arc's bottom-most tip (where it transitions direction) is at y=88/176
          = 50% of the arc height = top: CIRCLE_HALF + connectorHeight/2.
          The left arc's top-most tip is at the same y.
          Both tips are at the outermost horizontal extent of each arc (x = ARC_WIDTH from
          each edge), so the line runs between them at that exact vertical midpoint.
        */}
        <div
          style={{
            position: "absolute",
            top: CIRCLE_HALF  + connectorHeight,
            left: arcOffset,
            right: arcOffset,
            height: 2,
            backgroundColor: "#D2AD7A",
          }}
        />
      </div>
    </div>
  );
};

export default ProcessScheme;
