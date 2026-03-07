import Image from "next/image";
import img from "@/app/assets/about.png";
import HowWeDoItSection from "@/components/about/HowWeDoIt";
import GlobalFootprintImageMap from "@/components/about/GlobalFootprintImageMap";
import CertificationsModern from "@/components/about/Certificate";
export default function AdbotPage() {
  return (
    <section className="w-full mx-auto max-w-7xl my-20 bg-white">
      <div className=" px-4 py-10 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* LEFT: IMAGE */}
          <div className="w-full lg:flex-1">
            <div className="relative w-full overflow-hidden bg-zinc-100 aspect-4/3 sm:aspect-16/10 md:aspect-3/4 lg:aspect-3/3">
              <Image
                src={img}
                alt="Legacy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:flex-1 lg:pl-6">
            <h2 className="text-2xl uppercase font-medium leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-relaxed">
              Our Commitment to
              <br className="hidden sm:block" />
              Responsible Sourcing
              <br className="hidden sm:block" />
              CONTINUES
            </h2>

            <div className="mt-6 space-y-5 text-[14px] leading-6 text-zinc-800 sm:text-[15px] sm:leading-7 md:text-[16px] md:leading-7">
              <p>
                Bangladesh-based sourcing company with strategic Hong Kong
                partnership support, delivering integrated Fancy Yarn and
                apparel solutions to global brands and retailers
              </p>

              <p>
                Our journey began in 2010, working on behalf of a Taiwanese
                company, where we developed strong expertise in sourcing
                coordination, product development, and international trade
                management. In 2025, we established JM Tex Design as an
                independent, full-scale sourcing company; carrying forward the
                same dedication, integrity, and industry knowledge.
              </p>

              <p>
                We specialize in fancy yarn for sweaters, hosiery, sweaters,
                knitted apparel, and seamless activewear, serving international
                buyers through carefully selected and compliant manufacturing
                partners. Rather than manufacturing directly, we manage
                development, production oversight, quality assurance, and supply
                chain coordination to ensure consistent standards and
                responsible practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HowWeDoItSection />
      <GlobalFootprintImageMap />

      <section className="w-full  py-10">
        <div className="w-full px-6">
          <div className="relative w-full aspect-video overflow-hidden shadow-lg">
            <Image
              src={img} // replace with your image path
              alt="Factory Manufacturing"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <CertificationsModern />
    </section>
  );
}
