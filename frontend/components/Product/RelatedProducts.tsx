"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  series: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Sea Salt & Cracked Pepper",
    series: "Original Series",
    price: "$12.99",
    image: "/otherproducts1.svg",
  },
  {
    id: 2,
    name: "Cheesy Jalapeño",
    series: "Cheese Series",
    price: "$13.99",
    image: "/otherproducts2.svg",
  },
  {
    id: 3,
    name: "Himalayan Pink Salt",
    series: "Pure Series",
    price: "$11.99",
    image: "/otherproducts3.svg",
  },
  {
    id: 4,
    name: "Creamy Caramel",
    series: "Sweet Series",
    price: "$13.99",
    image: "/otherproducts4.svg",
  },
  {
    id: 5,
    name: "Creamy Caramele",
    series: "Sweet Series",
    price: "$13.99",
    image: "/otherproducts1.svg",
  },
];

export default function RelatedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          You might also like
        </h2>

        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gray-100">
            {/* <ChevronLeft /> */}
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gray-100">
            {/* <ChevronRight /> */}
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[260px] flex-shrink-0 lg:min-w-0"
          >
            {/* Image Card */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <span className="font-semibold text-gray-900">
                  {product.price}
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500">{product.series}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
