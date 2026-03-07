import img1 from "@/app/assets/products/category1/detailsimage1.jpg";
import p1 from "@/app/assets/products/category1/p1.jpg";
import p2 from "@/app/assets/products/category1/p2.jpg";
import p3 from "@/app/assets/products/category1/p3.jpg";
import p4 from "@/app/assets/products/category1/p4.jpg";
import p5 from "@/app/assets/products/category1/p5.jpg";
import p6 from "@/app/assets/products/category1/p6.jpg";

import app1 from "@/app/assets/products/appearel/app1.jpg";
import app2 from "@/app/assets/products/appearel/app2.jpg";
import app3 from "@/app/assets/products/appearel/app3.jpg";
import app4 from "@/app/assets/products/appearel/app4.jpg";
import app5 from "@/app/assets/products/appearel/app5.jpg";
import app6 from "@/app/assets/products/appearel/app6.jpg";
import appSideImage2 from "@/app/assets/products/appearel/side2.jpg";

import a1 from "@/app/assets/products/activeware/a1.jpg";
import a2 from "@/app/assets/products/activeware/a2.jpg";
import a3 from "@/app/assets/products/activeware/a3.jpg";
import a4 from "@/app/assets/products/activeware/a4.jpg";
import a5 from "@/app/assets/products/activeware/a5.jpg";
import a6 from "@/app/assets/products/activeware/a6.jpg";
import activewareSideImage from "@/app/assets/products/activeware/side2.jpg";

import y1 from "@/app/assets/products/yarns/y.jpg";
import y2 from "@/app/assets/products/yarns/y2.jpg";
import y3 from "@/app/assets/products/yarns/y3.jpg";
import y4 from "@/app/assets/products/yarns/y4.jpg";
import y5 from "@/app/assets/products/yarns/y5.jpg";
import y6 from "@/app/assets/products/yarns/y6.jpg";
import yarnSideImage2 from "@/app/assets/products/yarns/side2.jpg";
import yarnSideImage3 from "@/app/assets/products/yarns/side3.jpg";

import { ProductType } from "@/components/types/item.type";

export const allProducts: ProductType[] = [
  {
    id: 1,
    hero: {
      title: "YARNS",
      description:
        "Leading material innovation with advanced technical and sustainable fibre blends including natural, recycled, man-made cellulosic, and synthetic fibres.",
      image: img1,
    },

    details: {
      title: "From fibre to Yarn",
      intro:
        "We weave together expertise, innovation, and precision to craft high quality yarns that fuel our product range and collaborate with weavers, knitters, and denim manufacturers worldwide. From sustainable sourcing to advanced spinning techniques, we are committed to delivering yarns of exceptional quality, versatility, and performance.",
      bullets: [
        {
          heading: "Spinning",
          text: "Producing 25 million kg of yarn using advanced Japanese and European technology and lab equipment every step of the process. Our yarn technology includes ring spun, plain, slub, multi-count, slub lycra, siro slub core, and air covering. We have 50,200 spindles dedicated sampling for continuous innovation.",
        },
        {
          heading: "Yarn Dyeing",
          text: "Highly automated dyeing operations with automatic dyestuff and chemical dispensing system. With dyeing capacity of 4 million kg, we offer an extensive range of colours in Spun and Filament yarns.",
        },
        {
          heading: "Air Covering",
          text: "We use advanced Italian Air Covering technology to produce 1 million kg annually. Covering in-house dyed, dope dyed, and raw yarns with stretch filaments like Lycra and Creora in custom blends.",
        },
      ],
      image1: {
        src: yarnSideImage2,
        name: "Crafting right image",
      },
      image2: {
        src: yarnSideImage3,
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "Slub Yarn (carded/combed)",
        description:
          "Current count: Ne 4/1 Slub – Ne 16/1 Slub End use: Denim | Apparel | Upholstery | Curtains",
        image: y1,
      },
      {
        id: "2",
        title: "Cotton Combed Plain Yarn",
        description:
          "Current count: Ne 3/1 Combed – Ne 24/1 Combed End use: Denim | Hosiery | Apparel | Towels",
        image: y2,
      },
      {
        id: "3",
        title: "Dope Dyed Polyester Yarn",
        description:
          "Current count: Ne 6/1 Carded/Combed – Ne 32/1 Carded/Combed End use: Hosiery | Apparel",
        image: y3,
      },
      {
        id: "4",
        title: "Stretched Yarn",
        description:
          "Current count: Ne 7/1 Stretch – Ne 20/1 Stretch End use: Denim | Apparel",
        image: y4,
      },
      {
        id: "5",
        title: "Ring & Simplex",
        description: "ZINSER Germany Spinning Facility",
        image: y5,
      },
      {
        id: "6",
        title: "Card Machine",
        description:
          "Trützschler, Germany and Rieter, Switzerland Spinning Facility",
        image: y6,
      },
    ],
  },

  {
    id: 2,
    hero: {
      title: "Apparel",
      description:
        "Elevate comfort-driven style with our expertly crafted knitted apparel, tailored to enhance movement in everyday experiences.",
      image: img1,
    },

    details: {
      title: "Functional Comfort Knits",
      intro:
        "Infused with the essence of leisure and performance, our knitted apparel manufacturing seamlessly blends comfort and functionality. Our modern knitting facility and dyeing house create versatile garments, offering value addition with our innovative knit fabrics and novelty finishes, where form meets function in every stitch.",
      bullets: [
        {
          heading: "Vertically Integrated",
          text: "Our vertically integrated supply chain, manufacturing control plan, and built-in quality checks ensure transparency, providing a seamless journey from sourcing to the final product.",
        },
        {
          heading: "Automated Operations",
          text: "Offering speed to market with advanced digital technology, automation, and data analytics. Enhanced efficiency and precision through digital tracking, integrated ERP, and virtual sampling.",
        },
        {
          heading: "Novelty Fabrics and Finishes",
          text: "A wide range of performance and cotton-rich to synthetic fabrics developed in-house. Value addition with special applications like embroidery, pigment dyeing, mineral washes, screen-printing, and performance finishes.",
        },
      ],
      image1: {
        src: appSideImage2,
        name: "Crafting right image",
      },
      image2: {
        src: appSideImage2,
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "Cotton Rich Sweatshirt",
        description:
          "Relaxed-fit sweatshirt with a high collar zipper. Distressed denim finish and ribbed shoulders.  The woven patch details on the shoulder and elbow add a touch of sophistication to the overall style, making the sweatshirt suitable for both relaxed and semi-casual occasions.",
        image: app1,
      },
      {
        id: "2",
        title: "Fleece Hoodie Set",
        description:
          "Super comfy fleece set in hoodie and shorts. Its a go-to garment for its comfort, warmth, and versatility. Combined with hoodie and shorts.",
        image: app2,
      },
      {
        id: "3",
        title: "Matching Separates",
        description:
          "Classic cotton velour, mother-daughter matching separates. Zipper hoodie with kangaroo pockets and track pants.",
        image: app3,
      },
      {
        id: "4",
        title: "Washed Tees",
        description:
          "Classic vintage wash jersey tees with super hand feel in composition. With a ribbed crop for a calm and sporty look all in one tee.",
        image: app4,
      },
      {
        id: "5",
        title: "Knit Polo",
        description:
          "Basic cotton-rich polo with collar and embroidery. The casual style, contrast collar and bold color create a more contemporary, chic look.",
        image: app5,
      },
      {
        id: "6",
        title: "Tie-Dye Sweatshirt",
        description:
          "Loose-fit sweatshirt in tie-dye wash and embroidery. The top is crafted from organic cotton and finished with tie-dye effects for a loose-fit silhouette.",
        image: app6,
      },
    ],
  },
  {
    id: 3,
    hero: {
      title: "HOSIERY",
      description:
        "Experience the spirit of innovation and seamless knit comfort in our meticulously crafted socks, designed for elevated performance.",
      image: img1,
    },

    details: {
      title: "CRAFTING EXCELLENCE",
      intro:
        "As a global leader in hosiery, we provide our customers with manufacturing excellence at a large industrial scale, driven by innovation and sustainability. Using the finest raw materials, advanced knitting techniques, and rigorous quality assurance, we have garnered trust as a responsible partner of choice.",
      bullets: [
        {
          heading: "Large Manufacturing Scale",
          text: "Our manufacturing footprint extends across five vertically integrated plants in Pakistan, alongside facilities in Sri Lanka and China.",
        },
        {
          heading: "Vertical Sampling Facility",
          text: "A dedicated product development and sampling facility with an extensive yarn library, enabling speed with R&I and digital design to foster customer collaboration.",
        },
        {
          heading: "ISO Certified Lab",
          text: "In-house ISO certified, quality assurance lab run by our expert technicians for product and raw material testing.",
        },
      ],
      image1: {
        src: img1,
        name: "Crafting right image",
      },
      image2: {
        src: img1,
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "COTTON RICH SOCKS",
        description:
          "Everyday essentials elevated with our basic cotton-rich socks, designed for ultimate softness, comfort, and breathability.",
        image: p1,
      },
      {
        id: "2",
        title: "Casual Socks",
        description:
          "Designed for all-day wear, our socks combine premium materials and innovative technology to deliver unparalleled softness and support.",
        image: p2,
      },
      {
        id: "3",
        title: "Sports Socks",
        description:
          "Athletic potential is unlocked with sports socks designed for maximum support, moisture-wicking performance, and comfort",
        image: p3,
      },
      {
        id: "4",
        title: "Technical Socks",
        description:
          "Technical fibres, construction techniques, and performance finishes offer antibacterial properties, breathability, odour, and moisture management features.",
        image: p4,
      },
      {
        id: "5",
        title: "Fashion Socks",
        description:
          "A diverse range featuring vibrant patterns, innovative textures, and playful prints in premium materials.",
        image: p5,
      },
      {
        id: "6",
        title: "TIGHTS & LEGGINGS",
        description:
          "Designed for children and adults, explore our durable tights and premium options, from timeless solid hues to fashionable textures in leggings.",
        image: p6,
      },
    ],
  },
  {
    id: 4,
    hero: {
      title: "Activewear",
      description:
        "Elevated performance with our seamless activewear, engineered to enhance flexibility, durability, and style. Designed to move with your body and built to last.",
      image: img1,
    },

    details: {
      title: "Seamless Performance",
      intro:
        "Harnessing our vertical integration and engineering expertise, we use advanced technology to enhance activewear functionality. Our innovative blends, construction techniques, and performance finishes ensure unparalleled comfort and performance. Seamlessly knitted with body mapping tech, our designs offer unrestricted 360-degree stretch.",
      bullets: [
        {
          heading: "Precision Engineering in Fabric Construction",
          text: "High-performance fibres in virgin and sustainable blends knitted with advanced Italian technology. We use polyamide, polyester, polypropylene, and spandex.With a vast diameter range covering all sizes, our in-house fabrics include mesh, jacquard pique, and rib and waffle construction.Body mapping construction with 4-way stretch for compression, moisture management and rejuvenation, all with no restricting seams.",
        },
        {
          heading: "Performance Finishes",
          text: "A wide range of performance finishes available including skin moisturising, cooling- ferren ice, temp-C technology, anti-microbial and anti-UV finish.",
        },
        {
          heading: "Design & Collaboration",
          text: "A dedicated product development facility for design collaboration and quick sample turnaround.We collaborate with customers to develop exclusive yarn for activewear collections. Using our proprietary dyeing techniques and digital printing for enhanced style.",
        },
      ],
      image1: {
        src: activewareSideImage,
        name: "Crafting right image",
      },
      image2: {
        src: activewareSideImage,
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "Pullover Top",
        description:
          "Ultra soft hand feel with a snug fit for an active lifestyle. Mesh panels and 4-way stretch provide ultimate freedom of movement. Includes a unique skin moisturising finish.",
        image: a1,
      },
      {
        id: "2",
        title: "Active Tee",
        description:
          "Relaxed fit tee with 4-way stretch and mesh panels for enhanced comfort. Anti odour finish to keep the garment fresh during long workouts.",
        image: a2,
      },
      {
        id: "3",
        title: "Yoga Set",
        description:
          "Engineered to life, sculpt, contour and smooth. Double layered high-waistband and 4-way stretch for high intensity and core workouts. Available in different knit constructions like waffle-knit and jacquard.",
        image: a3,
      },
      {
        id: "4",
        title: "Matrix Tank",
        description:
          "Classic vintage wash tank with wide straps and lightweight cups for all day wear. Engineered fabric with ribbed construction and 360-degree stretch for ultimate freedom of movement.",
        image: a4,
      },
      {
        id: "5",
        title: "Sports Bra",
        description:
          "Strategically placed mesh panels to enhance breathability and comfort. 360-degree stretch without any restricting seams for freedom of movement. Optimal support with removable cups.",
        image: a5,
      },
      {
        id: "6",
        title: "Biker Shorts",
        description:
          "Engineered to lift, sculpt, contour, and smooth. 4-way stretch with ultimate freedom of movement. Strategically placed mesh panels for moisture management. Double layer high waistband with compression supports the core during workout.",
        image: a6,
      },
    ],
  },
];
