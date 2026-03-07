import Image from "next/image";
import React from "react";
import img1 from "@/app/assets/products/category1//p1.jpg";
import img2 from "@/app/assets/products/category1//p1.jpg";
import img3 from "@/app/assets/products/category1//p1.jpg";
import img4 from "@/app/assets/products/category1//p1.jpg";
import img5 from "@/app/assets/products/category1//p1.jpg";
import img6 from "@/app/assets/products/category1//p1.jpg";

export default function Services() {
  const serviceData = [
    {
      title: "Integrated Sourcing Solutions for Fancy Yarns & Apparel",
      description:
        "We provide end-to-end sourcing support for fancy yarns and apparel categories, connecting global buyers with compliant manufacturing partners in Bangladesh, supported by our Hong Kong collaboration. From product development and vendor coordination to quality control and logistics management, we ensure efficient, transparent, and responsible supply chain execution.",
      imageSrc: img1,
      imageAlt: "Fancy yarn sourcing and apparel production",
    },
    {
      title: "Product Development, Compliance & Ethical Sourcing",
      description:
        "As a trusted Fancy Yarn Sourcing Bangladesh specialist, JM Tex Design works closely with global buyers to deliver structured product development and responsible supply chain solutions. As an experienced Ethical Apparel Sourcing Partner, we ensure compliant vendor selection and maintain a transparent compliant garment supply chain that meets international quality and sustainability standards.",
      imageSrc: img2,
      imageAlt: "Product development and ethical sourcing",
    },
    {
      title: "Design & Development Support",
      description:
        "Our team provides complete Apparel Product Development Bangladesh support, from concept alignment to sample approval and technical refinement. Through structured knitwear sampling coordination and focused private label yarn development, we ensure every product meets buyer specifications and global market expectations.",
      imageSrc: img3,
      imageAlt: "Design sketches and product development process",
    },
    {
      title: "Supplier Coordination & Quality Management",
      description:
        "As a professional Bangladesh garment sourcing company, we manage supplier communication, production oversight, and structured quality control apparel Bangladesh systems. Our strategic vendor management textile industry approach ensures accountability, consistency, and smooth execution.",
      imageSrc: img4,
      imageAlt: "Supplier coordination and quality inspection",
    },
    {
      title: "Cost Optimization",
      description:
        "Through a lean sourcing model, we deliver cost-effective apparel sourcing solutions without compromising compliance or quality. Our expertise in yarn price optimization and structured negotiation ensures competitive textile supply solutions for international buyers.",
      imageSrc: img5,
      imageAlt: "Cost optimization and textile sourcing strategy",
    },
    {
      title: "On-Time Delivery & Logistics Management",
      description:
        "We implement detailed apparel production monitoring systems to guarantee on-time garment export Bangladesh performance. From documentation to final dispatch, our structured textile shipping coordination ensures smooth global movement and dependable garment supply chain support.",
      imageSrc: img6,
      imageAlt: "Logistics and global apparel shipping",
    },
  ];
  return (
    <div className="min-h-screen  py-8 lg:py-20 bg-white">
      {serviceData.map((service, index) => (
        <section
          key={index}
          className={`py-16 px-6 lg:px-12 ${index % 2 !== 0 ? "bg-gray-50" : ""}`}
        >
          <div className="max-w-7xl  mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div
                className={`space-y-6 ${index % 2 === 0 ? "" : "lg:order-2"}`}
              >
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
              <div
                className={`relative ${index % 2 === 0 ? "" : "lg:order-1"}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden cursor-pointer">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
