"use client";

import { useEffect, useRef, useState } from "react";

const MIN_HORIZONTAL_WIDTH = 500;

const ProcessScheme = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current || !gridRef.current || !svgRef.current) return;

      const availableWidth = wrapperRef.current.clientWidth;

      if (availableWidth < MIN_HORIZONTAL_WIDTH) {
        setIsVertical(true);
        drawVerticalConnectors();
      } else {
        setIsVertical(false);
        drawHorizontalConnectors();
      }
    };

    const drawVerticalConnectors = () => {
      if (!gridRef.current || !svgRef.current) return;

      const wrapperRect = gridRef.current.getBoundingClientRect();
      svgRef.current.setAttribute(
        "viewBox",
        `0 0 ${wrapperRect.width} ${wrapperRect.height}`
      );

      const steps = gridRef.current.querySelectorAll(".process-step");
      let d = "";

      for (let i = 0; i < steps.length - 1; i++) {
        const step1 = steps[i] as HTMLElement;
        const step2 = steps[i + 1] as HTMLElement;
        const circle2 = step2.querySelector(".step-circle") as HTMLElement;

        const r1 = step1.getBoundingClientRect();
        const r2 = circle2.getBoundingClientRect();

        const x = r2.left + r2.width / 2 - wrapperRect.left;
        const y1 = r1.top + r1.height - wrapperRect.top;
        const y2 = r2.top - wrapperRect.top;

        d += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}"/>`;
      }

      svgRef.current.innerHTML = d;
    };

    const drawHorizontalConnectors = () => {
      if (!wrapperRef.current || !svgRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const w = wrapperRect.width;
      const h = wrapperRect.height;
      svgRef.current.setAttribute("viewBox", `0 0 ${w} ${h}`);

      const getCircle = (id: string) => {
        const el = document.getElementById(id)?.querySelector(".step-circle") as HTMLElement;
        if (!el) return { cx: 0, cy: 0, r: 0 };
        const r = el.getBoundingClientRect();
        return {
          cx: r.left + r.width / 2 - wrapperRect.left,
          cy: r.top + r.height / 2 - wrapperRect.top,
          r: r.width / 2,
        };
      };

      const s1 = getCircle("step1");
      const s2 = getCircle("step2");
      const s3 = getCircle("step3");
      const s4 = getCircle("step4");
      const s5 = getCircle("step5");
      const s6 = getCircle("step6");

      let d = "";

      // ROW 1: Step1 → Step2 → Step3
      d += `<line x1="${s1.cx + s1.r}" y1="${s1.cy}" x2="${s2.cx - s2.r}" y2="${s2.cy}"/>`;
      d += `<line x1="${s2.cx + s2.r}" y1="${s2.cy}" x2="${s3.cx - s3.r}" y2="${s3.cy}"/>`;

      // S-CONNECTOR: Step3 → Step4
      const arcR = (s4.cy - s3.cy) / 4;
      const startX = s3.cx + s3.r;
      const startY = s3.cy;
      const endX = s4.cx - s4.r;
      const endY = s4.cy;
      const arc1EndY = startY + 2 * arcR;
      const arc2StartY = endY - 2 * arcR;

      d += `<path d="M ${startX} ${startY} A ${arcR} ${arcR} 0 0 1 ${startX} ${arc1EndY} L ${endX} ${arc2StartY} A ${arcR} ${arcR} 0 0 0 ${endX} ${endY}"/>`;

      // ROW 2: Step4 → Step5 → Step6
      d += `<line x1="${s4.cx + s4.r}" y1="${s4.cy}" x2="${s5.cx - s5.r}" y2="${s5.cy}"/>`;
      d += `<line x1="${s5.cx + s5.r}" y1="${s5.cy}" x2="${s6.cx - s6.r}" y2="${s6.cy}"/>`;

      svgRef.current.innerHTML = d;
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-5 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-[2.4rem] font-bold mb-3.5 tracking-wide">
          Our Organization <em className="italic text-[#D2AD7A]">Process</em>
        </h1>
        <p className="text-sm text-[#888888] font-light tracking-wide">
          From initial concept to final reporting, we guide you through every
          stage with precision and care.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className="relative w-full max-w-[1125px] mx-auto overflow-visible"
      >
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          style={{ zIndex: 0 }}
        >
          <style>{`
            .process-svg path,
            .process-svg line {
              fill: none;
              stroke: #D2AD7A;
              stroke-width: 2;
            }
          `}</style>
        </svg>

        <div
          ref={gridRef}
          className={`relative ${
            isVertical
              ? "grid grid-cols-1 justify-center"
              : "grid grid-cols-3 justify-between gap-y-[130px]"
          }`}
          style={{ zIndex: 1 }}
        >
          {/* Step 1 */}
          <div
            id="step1"
            className={`process-step flex flex-col items-center text-center ${
              isVertical ? "py-4" : "py-2"
            }`}
          >
            <div className="step-circle w-[111px] h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" />
                <line x1="12" y1="3" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="21" />
                <line x1="3" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="21" y2="12" />
                <line x1="17" y1="3" x2="21" y2="3" />
                <line x1="21" y1="3" x2="21" y2="7" />
                <line x1="21" y1="3" x2="16" y2="8" />
              </svg>
            </div>
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">
              Needs Analysis & Goal Setting
            </span>
          </div>

          {/* Step 2 */}
          <div
            id="step2"
            className={`process-step flex flex-col items-center text-center ${
              isVertical ? "py-4" : "py-2"
            }`}
          >
            <div className="step-circle w-[111px] h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <polyline points="9 15 11 17 15 13" />
              </svg>
            </div>
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">
              Concept Design
            </span>
          </div>

          {/* Step 3 */}
          <div
            id="step3"
            className={`process-step flex flex-col items-center text-center ${
              isVertical ? "py-4" : "py-2"
            }`}
          >
            <div className="step-circle w-[111px] h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="13" x2="21" y2="13" />
                <line x1="3" y1="18" x2="21" y2="18" />
                <line x1="8" y1="3" x2="8" y2="21" />
                <line x1="13" y1="3" x2="13" y2="21" />
                <line x1="18" y1="3" x2="18" y2="21" />
              </svg>
            </div>
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">
              Detailed Planning
            </span>
          </div>

          {/* Step 4 */}
          <div
            id="step4"
            className={`process-step flex flex-col items-center text-center ${
              isVertical ? "py-4" : "py-2"
            }`}
          >
            <div className="step-circle w-[111px] h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">
              Operations Management
            </span>
          </div>

          {/* Step 5 */}
          <div
            id="step5"
            className={`process-step flex flex-col items-center text-center ${
              isVertical ? "py-4" : "py-2"
            }`}
          >
            <div className="step-circle w-[111px] h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
                <rect x="5" y="6" width="14" height="14" rx="2" />
                <polygon points="12 9 13.5 12 17 12.5 14.5 14.5 15 18 12 16.5 9 18 9.5 14.5 7 12.5 10.5 12" />
              </svg>
            </div>
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">
              Implementation of the Event
            </span>
          </div>

          {/* Step 6 */}
          <div
            id="step6"
            className={`process-step flex flex-col items-center text-center ${
              isVertical ? "py-4" : "py-2"
            }`}
          >
            <div className="step-circle w-[111px] h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="9" y1="6" x2="15" y2="6" />
                <line x1="9" y1="10" x2="15" y2="10" />
                <line x1="9" y1="14" x2="15" y2="14" />
                <line x1="9" y1="18" x2="13" y2="18" />
              </svg>
            </div>
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">
              Reporting & Evaluation
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        svg path,
        svg line,
        svg circle,
        svg rect,
        svg polyline,
        svg polygon {
          stroke: #d2ad7a;
          fill: none;
          stroke-width: 1.3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>
    </section>
  );
};

export default ProcessScheme;
