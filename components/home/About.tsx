import React from "react";
import { Globe, ShieldCheck, FileSearch } from "lucide-react";

type AboutItem = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: AboutItem[] = [
  { title: "Minimising Environmental\nImpact", Icon: Globe },
  { title: "Prioritising Worker\nWell-Being", Icon: ShieldCheck },
  { title: "Maintaining Global\nStandards", Icon: FileSearch },
];

export default function About() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        {/* TOP */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[0.15em] text-black md:text-5xl">
            ABOUT US
          </h2>

          <p className="mt-6  text-black">
            JM Tex Design, we specialize in responsible sourcing and ethical
            supply chain management. Based in Bangladesh with Hong Kong
            partnership support, we connect global buyers with reliable
            manufacturing partners. Our expertise in fancy yarns and apparel
            sourcing ensures quality development, production oversight, and
            international compliance delivering value with responsibility.
          </p>

          {/* <p className="mx-auto mt-6 max-w-4xl text-[16px] leading-8 tracking-[0.08em] text-black/80">
            With strong expertise in Fancy Yarns and apparel sourcing, we
            coordinate development, production oversight, and quality assurance
            to ensure every product meets international standards. Our focus is
            not just on delivering garments and yarn solutions but on delivering
            them responsibly, efficiently, and with long-term value.
          </p> */}
        </div>

        {/* ICON GRID */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 md:mt-20 md:grid-cols-3">
          {items.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              {/* Icon circle wrapper */}
              <div className="flex h-20 w-20 items-center justify-center">
                <Icon className="h-16 w-16 text-black/70" strokeWidth={1.2} />
              </div>

              <h3 className="mt-6 whitespace-pre-line text-xl font-semibold tracking-[0.08em] text-black">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
