import Image from "next/image";
import ceo from "@/app/assets/logo.jpeg";
export default function CEOMessageSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: CIRCLE IMAGE */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full">
              <Image
                src={ceo} // replace with your image
                alt="CEO"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl  font-semibold tracking-wide uppercase">
              MESSAGE OF THE PRINCIPAL
            </h2>

            <div className="mt-8 space-y-6 text-[17px] leading-8 text-zinc-700">
              <p>
                Our purpose is to be a trusted sourcing partner that creates
                value for our customers and meaningful opportunities across the
                supply chain. We believe responsible sourcing, ethical
                partnerships, and operational excellence are essential to
                long-term success in the global textile and apparel industry.
              </p>

              <p>
                Guided by this vision, we work to connect international buyers
                with compliant and capable manufacturing partners, ensuring
                quality, transparency, and sustainable business practices. Our
                focus extends beyond transactions, we aim to build relationships
                that drive innovation, efficiency and mutual growth.
              </p>

              <p>
                With expertise in fancy yarn and apparel sourcing supported by
                our Bangladesh operations and Hong Kong partnership network, we
                strive to deliver solutions that meet global standards while
                fostering positive impact for our stakeholders and communities.
              </p>
            </div>

            {/* <div className="mt-10 text-xl font-semibold text-black">
              Navid Fazil, CEO
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
