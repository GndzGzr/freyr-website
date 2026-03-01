"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const steps = [
  { id: "step1", label: "İhtiyaç Analizi & Hedef Belirleme", iconSrc: "/Vector(2).svg" },
  { id: "step2", label: "Konsept Tasarım", iconSrc: "/Vector(3).svg" },
  { id: "step3", label: "Detaylı Planlama", iconSrc: "/Vector(4).svg" },
  { id: "step4", label: "Operasyon Yönetimi", iconSrc: "/Vector(5).svg" },
  { id: "step5", label: "Etkinliğin Uygulanması", iconSrc: "/Vector(6).svg" },
  { id: "step6", label: "Raporlama & Değerlendirme", iconSrc: "/Vector(7).svg" },
];

const StepCircle = ({ iconSrc, alt }: { iconSrc: string; alt: string }) => (
  <div className="step-circle w-[80px] h-[80px] md:w-[111px] md:h-[111px] rounded-full border-2 border-[#282828] bg-[#161616] flex items-center justify-center flex-shrink-0">
    <Image src={iconSrc} alt={alt} width={46} height={46} className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />
  </div>
);

/* ===== MOBILE: vertical list with golden div connectors ===== */
const MobileProcess = () => (
  <div className="flex flex-col items-center gap-0 py-8 px-4">
    {steps.map((step, i) => (
      <div key={step.id} className="flex flex-col items-center">
        <StepCircle iconSrc={step.iconSrc} alt={step.label} />
        <span className="text-sm text-white leading-[1.45] max-w-[200px] text-center mt-3 mb-2">
          {step.label}
        </span>
        {i < steps.length - 1 && (
          <div className="w-[2px] h-8 bg-[#D2AD7A] my-1" />
        )}
      </div>
    ))}
  </div>
);

/* ===== DESKTOP: 3-col grid with static SVG connector images ===== */
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

      // Row 1 connectors
      d += `<line x1="${s1.cx + s1.r}" y1="${s1.cy}" x2="${s2.cx - s2.r}" y2="${s2.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;
      d += `<line x1="${s2.cx + s2.r}" y1="${s2.cy}" x2="${s3.cx - s3.r}" y2="${s3.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;

      // S-Curve connector
      const arcR = (s4.cy - s3.cy) / 4;
      d += `<path d="M ${s3.cx + s3.r} ${s3.cy} A ${arcR} ${arcR} 0 0 1 ${s3.cx + s3.r} ${s3.cy + 2 * arcR} L ${s4.cx - s4.r} ${s4.cy - 2 * arcR} A ${arcR} ${arcR} 0 0 0 ${s4.cx - s4.r} ${s4.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;

      // Row 2 connectors
      d += `<line x1="${s4.cx + s4.r}" y1="${s4.cy}" x2="${s5.cx - s5.r}" y2="${s5.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;
      d += `<line x1="${s5.cx + s5.r}" y1="${s5.cy}" x2="${s6.cx - s6.r}" y2="${s6.cy}" stroke="#D2AD7A" stroke-width="2" fill="none"/>`;

      svgRef.current.innerHTML = d;
    };

    const rafId = requestAnimationFrame(() => setTimeout(drawConnectors, 150));
    window.addEventListener("resize", drawConnectors);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", drawConnectors); };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-[1125px] mx-auto overflow-visible">
      <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }} />
      <div className="relative grid grid-cols-3 justify-between gap-y-[130px]" style={{ zIndex: 1 }}>
        {steps.map((step) => (
          <div key={step.id} id={step.id} className="process-step flex flex-col items-center text-center py-2">
            <StepCircle iconSrc={step.iconSrc} alt={step.label} />
            <span className="text-lg text-white leading-[1.45] max-w-[220px] mt-3">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProcessScheme = () => (
  <section className="w-full max-w-[1200px] mx-auto px-4 md:px-5 py-6 md:py-12">
    <div className="md:hidden">
      <MobileProcess />
    </div>
    <div className="hidden md:block">
      <DesktopProcess />
    </div>
  </section>
);

export default ProcessScheme;
