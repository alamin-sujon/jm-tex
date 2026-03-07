"use client";

import { ArrowUp } from "lucide-react";
import React from "react";

type Faq = {
  q: string;
  a: string;
};

const faqs: Faq[] = [
  {
    q: "What services does JM Tex Design provide?",
    a: "JM Tex Design is a sourcing-based company specializing in fancy yarn and apparel solutions. We connect global buyers with compliant manufacturing partners in Bangladesh, offering product development support, quality coordination, and supply chain management to ensure international standards and reliable delivery.",
  },
  {
    q: "How can I partner with JM Tex Design for yarn and apparel sourcing?",
    a: "You can contact us via info@jmtexdesign.com with your sourcing requirements. Our team will evaluate your needs and provide tailored sourcing solutions in fancy yarns, apparel categories, and vendor coordination through our Bangladesh and Hong Kong sourcing network.",
  },
  {
    q: "Does JM Tex Design manufacture products?",
    a: "No. JM Tex Design operates as a sourcing and supply chain management company. We collaborate with trusted manufacturing partners to ensure product quality, compliance, and efficient execution while focusing on product development and coordination.",
  },
  {
    q: "What types of products do you source?",
    a: "We specialize in sourcing fancy yarn, hosiery, sweaters, knitted apparel, and seamless activewear across multiple categories. Our sourcing solutions include product development, quality control, and vendor coordination for global apparel markets.",
  },
  {
    q: "How do you ensure quality and compliance?",
    a: "Quality and compliance are maintained through structured vendor selection, production oversight, and standardized quality control processes. We work with compliant manufacturing partners to ensure international standards and buyer specifications are consistently met.",
  },
  {
    q: "Which markets does JM Tex Design serve?",
    a: "JM Tex Design serves global markets by connecting international brands and retailers with sourcing solutions from Bangladesh and strategic Hong Kong partnerships. Our operations focus on delivering export-ready solutions aligned with global buyer requirements.",
  },
  {
    q: "How does the sourcing process work?",
    a: "Our sourcing process includes requirement analysis, vendor selection, product development, sampling, quality monitoring, and logistics coordination. We act as a sourcing partner to simplify execution and ensure structured delivery for global buyers.",
  },
  {
    q: "What makes JM Tex Design different from other sourcing companies?",
    a: "Our strength lies in combining Bangladesh's manufacturing capabilities with Hong Kong's global trade expertise. We focus on responsible sourcing, quality coordination, and transparent operations to deliver reliable and scalable solutions for international buyers.",
  },
  {
    q: "How can business partners collaborate with JM Tex Design?",
    a: "Business partners can collaborate with JM Tex Design by contacting us with partnership proposals or sourcing requirements. We evaluate opportunities based on compliance, mutual value, and long-term business alignment to build meaningful global partnerships.",
  },
];

function DashedLine({ active }: { active?: boolean }) {
  return (
    <div className="mt-6">
      <div
        className={[
          "h-0.5 w-full border-t-2 border-dashed transition-colors duration-300",
          active ? "border-orange-600" : "border-zinc-200",
        ].join(" ")}
      />
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="w-full bg-white">
      <div className=" w-full  px-5 py-14 md:py-20">
        {/* top label */}
        <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-black">
          SUPPORTING INFO
        </div>

        {/* heading */}
        <div className="mt-8 max-w-2xl">
          <h2 className="text-2xl font-normal uppercase text-zinc-900 md:text-5xl">
            Frequently <br /> Asked Questions
          </h2>
        </div>

        {/* grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-14 md:grid-cols-3">
          {faqs.map((item, idx) => {
            const open = idx === openIndex;
            const hasAnswer = !!item.a?.trim();

            return (
              <div key={item.q} className="flex flex-col">
                {/* ✅ fixed header height so rows align */}
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full  items-start justify-between gap-6 text-left"
                  aria-expanded={open}
                >
                  <span className="min-h-16 text-[18px] font-medium leading-snug text-zinc-900">
                    {item.q}
                  </span>

                  <span className="mt-1 shrink-0 cursor-pointer rounded-full border border-black/80 bg-transparent p-1 transition-colors duration-300 hover:bg-black hover:text-white">
                    <ArrowUp
                      size={20}
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* ✅ animated answer */}
                <div
                  className={[
                    "grid transition-all duration-500 ease-in-out",
                    open && hasAnswer
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-7 text-zinc-600">
                      {item.a}
                    </p>
                  </div>
                </div>

                {/* divider */}
                <DashedLine active={open && hasAnswer} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
