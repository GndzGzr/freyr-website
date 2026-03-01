"use client";

import { useState } from "react";
import FAQ from "./FAQ";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid w-full items-center gap-6 md:gap-8">
      {items.map((item, index) => (
        <FAQ
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
