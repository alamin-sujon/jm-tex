const items = [
  {
    title: "People",
    desc: "We are a team of diverse industry professionals united by one purpose to deliver responsible sourcing solutions and create long-term value for our partners. Our combined expertise in fancy yarns and apparel sourcing allows us to manage complexity with precision and integrity. ",
  },
  {
    title: "Digitalised operations",
    desc: "We enhance operational efficiency through structured processes, digital coordination, and a lean sourcing approach. From development to shipment, our systems ensure accuracy, speed, and controlled execution across the supply chain. ",
  },
  {
    title: "Sustainability at scale",
    desc: "We collaborate with compliant manufacturing partners who prioritize responsible production, resource efficiency, and continuous improvement. Sustainability is embedded in our vendor selection and sourcing strategy. ",
  },
  {
    title: "Transparency",
    desc: "Through a data-driven and compliance-focused approach, we maintain clear communication and full supply chain visibility; building trust and positioning JM Tex Design as a reliable global sourcing partner.",
  },
];

export default function HowWeDoItSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          {/* LEFT */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold uppercase  text-black md:text-5xl">
              HOW WE DO IT
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-zinc-800">
              Driven by Purpose. Guided by Responsibility.
            </p>

            <p className="mt-6 text-[16px] leading-8 text-zinc-800">
              Everything we do at JM Tex Design is rooted in our mission to
              deliver responsible and transparent sourcing solutions.
            </p>
            <p className="mt-6 text-[16px] leading-8 text-zinc-800">
              As a Bangladesh-based sourcing company with strategic Hong Kong
              partnership support, we act as a bridge between global buyers and
              carefully selected manufacturing partners. Our approach is built
              on ethical business practices, compliance-driven vendor selection,
              and sustainable supply chain coordination. From product
              development in Fancy Yarns and Apparel to production monitoring
              and quality assurance, every step is managed with integrity,
              accountability, and long-term thinking
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-6  md:col-start-7">
            <h1 className="text-3xl mb-6 font-semibold uppercase  text-black md:text-5xl">
              OUR STRENGTH
            </h1>
            <div className="space-y-5">
              {items.map((it) => (
                <div key={it.title}>
                  <h3 className="text-[22px] font-semibold text-black md:text-[24px]">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[16px] leading-8 text-zinc-800">
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
