"use client";

import Image from "next/image";
import { useRef } from "react";
import ChevronLeft from "@/public/ChevronLeft.svg";
import ChevronRight from "@/public/ChevronRight.svg";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Sea Salt & Cracked Pepper",
    subtitle: "Original Series",
    price: 12.99,
    image: "/otherproducts1.svg",
  },
  {
    id: 2,
    title: "Cheesy Jalapeño",
    subtitle: "Cheese Series",
    price: 13.99,
    image: "/otherproducts2.svg",
  },
  {
    id: 3,
    title: "Himalayan Pink Salt",
    subtitle: "Pure Series",
    price: 11.99,
    image: "/otherproducts3.svg",
  },
  {
    id: 4,
    title: "Creamy Caramel",
    subtitle: "Sweet Series",
    price: 13.99,
    image: "/otherproducts4.svg",
  },
  {
    id: 5,
    title: "Creamy Caramel 1",
    subtitle: "Sweet Series",
    price: 13.99,
    image: "/otherproducts4.svg",
  },
  {
    id: 6,
    title: "Creamy Caramel 2",
    subtitle: "Sweet Series",
    price: 13.99,
    image: "/otherproducts4.svg",
  },
];

export default function RelatedProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold">You might also like</h2>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image src={ChevronLeft} alt={"ChevronLeft"} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Image src={ChevronRight} alt={"ChevronRight"} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
      >
        {products.map((item) => (
          <div key={item.id} className="min-w-[280px]">
            <div className="relative h-[420px] w-full rounded-3xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-between items-start mt-5">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
              </div>
              <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
