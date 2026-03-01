"use client";

import { useEffect, useRef } from "react";

const steps = [
  { id: "step1", label: "İhtiyaç Analizi & Hedef Belirleme", icon: (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" />
      <line x1="12" y1="3" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="21" />
      <line x1="3" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="21" y2="12" />
      <line x1="17" y1="3" x2="21" y2="3" /><line x1="21" y1="3" x2="21" y2="7" /><line x1="21" y1="3" x2="16" y2="8" />
    </svg>
  )},
  { id: "step2", label: "Konsept Tasarım", icon: (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 15 11 17 15 13" />
    </svg>
  )},
  { id: "step3", label: "Detaylı Planlama", icon: (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="13" x2="21" y2="13" /><line x1="3" y1="18" x2="21" y2="18" />
      <line x1="8" y1="3" x2="8" y2="21" /><line x1="13" y1="3" x2="13" y2="21" /><line x1="18" y1="3" x2="18" y2="21" />
    </svg>
  )},
  { id: "step4", label: "Operasyon Yönetimi", icon: (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )},
  { id: "step5", label: "Etkinliğin Uygulanması", icon: (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
      <rect x="5" y="6" width="14" height="14" rx="2" />
      <polygon points="12 9 13.5 12 17 12.5 14.5 14.5 15 18 12 16.5 9 18 9.5 14.5 7 12.5 10.5 12" />
    </svg>
  )},
  { id: "step6", label: "Raporlama & Değerlendirme", icon: (
    <svg viewBox="0 0 24 24" className="w-[46px] h-[46px]">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="9" y1="6" x2="15" y2="6" /><line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="15" y2="14" /><line x1="9" y1="18" x2="13" y2="18" />
    </svg>
  )},
];

const StepCircle = ({ icon }: { icon: React.ReactNode }) => (
  <div className="step-circle w-[80px] h-[80px] md:w-[111px] md:h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center mb-3 flex-shrink-0">
    {icon}
  </div>
);

/* ===== MOBILE: simple vertical list with line connectors ===== */
const MobileProcess = () => (
  <div className="flex flex-col items-center gap-0 py-8 px-4">
    {steps.map((step, i) => (
      <div key={step.id} className="flex flex-col items-center">
        <StepCircle icon={step.icon} />
        <span className="text-sm text-white leading-[1.45] max-w-[200px] text-center mb-2">
          {step.label}
        </span>
        {i < steps.length - 1 && (
          <div className="w-[2px] h-8 bg-[#D2AD7A] my-1" />
        )}
      </div>
    ))}
  </div>
);

/* ===== DESKTOP: 3-col grid with SVG connectors ===== */
const DesktopProcess = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const drawConnectors = () => {
      if (!wrapperRef.current || !svgRef.current) return;
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const w = wrapperRect.width;
      const h = wrapperRect.height;
      svgRef.current.setAttribute("viewBox", `0 0 ${w} ${h}`);

      const getCircle = (id: string) => {
        const el = document.getElementById(id)?.querySelector(".step-circle") as HTMLElement;
        if (!el) return { cx: 0, cy: 0, r: 0 };
        const r = el.getBoundingClientRect();
        return { cx: r.left + r.width / 2 - wrapperRect.left, cy: r.top + r.height / 2 - wrapperRect.top, r: r.width / 2 };
      };

      const s1 = getCircle("step1"), s2 = getCircle("step2"), s3 = getCircle("step3");
      const s4 = getCircle("step4"), s5 = getCircle("step5"), s6 = getCircle("step6");
      let d = "";

      d += `<line x1="${s1.cx + s1.r}" y1="${s1.cy}" x2="${s2.cx - s2.r}" y2="${s2.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;
      d += `<line x1="${s2.cx + s2.r}" y1="${s2.cy}" x2="${s3.cx - s3.r}" y2="${s3.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;

      const arcR = (s4.cy - s3.cy) / 4;
      d += `<path d="M ${s3.cx + s3.r} ${s3.cy} A ${arcR} ${arcR} 0 0 1 ${s3.cx + s3.r} ${s3.cy + 2 * arcR} L ${s4.cx - s4.r} ${s4.cy - 2 * arcR} A ${arcR} ${arcR} 0 0 0 ${s4.cx - s4.r} ${s4.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;

      d += `<line x1="${s4.cx + s4.r}" y1="${s4.cy}" x2="${s5.cx - s5.r}" y2="${s5.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;
      d += `<line x1="${s5.cx + s5.r}" y1="${s5.cy}" x2="${s6.cx - s6.r}" y2="${s6.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;

      svgRef.current.innerHTML = d;
    };

    const rafId = requestAnimationFrame(() => setTimeout(drawConnectors, 100));
    window.addEventListener("resize", drawConnectors);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", drawConnectors); };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-[1125px] mx-auto overflow-visible">
      <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }} />
      <div className="relative grid grid-cols-3 justify-between gap-y-[130px]" style={{ zIndex: 1 }}>
        {steps.map((step) => (
          <div key={step.id} id={step.id} className="process-step flex flex-col items-center text-center py-2">
            <StepCircle icon={step.icon} />
            <span className="text-lg text-white leading-[1.45] max-w-[220px]">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProcessScheme = () => (
  <section className="w-full max-w-[1200px] mx-auto px-4 md:px-5 py-6 md:py-12">
    {/* Mobile */}
    <div className="md:hidden">
      <MobileProcess />
    </div>
    {/* Desktop */}
    <div className="hidden md:block">
      <DesktopProcess />
    </div>

    <style jsx>{`
      .step-circle svg path,
      .step-circle svg line,
      .step-circle svg circle,
      .step-circle svg rect,
      .step-circle svg polyline,
      .step-circle svg polygon {
        stroke: #d2ad7a;
        fill: none;
        stroke-width: 1.3;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    `}</style>
  </section>
);

export default ProcessScheme;
