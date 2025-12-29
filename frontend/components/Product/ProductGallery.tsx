"use client";

import { useState } from "react";
import Image from "next/image";
// import { ShoppingCart } from "lucide-react";

const images = [
  "/productmain.svg",
  "/product1.svg",
  "/product2.svg",
  "/product3.svg",
];

const sizes = [
  { id: "100g", label: "Pack of 1 (100g)" },
  { id: "300g", label: "Pack of 3 (Save 10%)" },
  { id: "500g", label: "Family Pack (500g)" },
];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0].id);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <p className="mb-6 text-sm text-gray-500">
        Home <span className="mx-1">›</span> Product{" "}
        <span className="mx-1">›</span>{" "}
        <span className="text-gray-800 font-medium">
          Roasted Fox Nuts – Peri Peri
        </span>
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* LEFT: Images */}
        <div>
          <div className="relative overflow-hidden rounded-2xl">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-amber-900 px-4 py-1 text-xs font-semibold text-white">
              BEST SELLER
            </span>

            <Image
              src={selectedImage}
              alt="Product image"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`overflow-hidden rounded-xl border transition ${
                  selectedImage === img
                    ? "border-amber-800"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-800">
            MAKHANA
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Premium Roasted Fox Nuts
            <br />– Peri Peri Flavor
          </h1>

          {/* Price */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">₹299</span>
            <span className="text-lg text-gray-400 line-through">₹599</span>
            <span className="text-sm font-semibold text-red-500">-18%</span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-gray-600 leading-relaxed">
            Experience the ultimate guilt-free crunch. Our hand-picked Makhana
            (Fox Nuts) are slow-roasted to perfection and dusted with a fiery
            blend of Peri Peri spices. Low in calories, and packed with flavor.
          </p>

          {/* Size */}
          <div className="mt-8">
            <p className="mb-3 font-medium text-gray-800">Size</p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                    selectedSize === size.id
                      ? "border-amber-800 bg-amber-50 text-amber-900"
                      : "border-gray-200 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center rounded-xl border">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-lg"
              >
                −
              </button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="flex items-center gap-3 rounded-xl bg-amber-900 px-8 py-4 text-white font-semibold transition hover:bg-amber-800">
              {/* <ShoppingCart size={20} /> */}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
