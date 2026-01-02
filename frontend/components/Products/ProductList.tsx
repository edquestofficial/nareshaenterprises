"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["All Products", "Roasted", "Raw (Cooking)", "Gift Packs"];
const flavors = [
  "Classic Salted",
  "Peri Peri",
  "Cream & Onion",
  "Cheese",
  "Caramel",
];
export type Product = {
  id: number;
  name: string;
  flavor: string;
  category: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 2,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 3,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 4,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 5,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 6,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 7,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 8,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 9,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 10,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 11,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
  {
    id: 12,
    name: "Classic Salted",
    flavor: "Classic Salted",
    category: "Roasted",
    price: 150,
    image: "/makhana1.png",
  },
];
const ITEMS_PER_PAGE = 9;

export default function ProductListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All Products",
  ]);
  const [selectedFlavor, setSelectedFlavor] = useState("Classic Salted");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = (cat: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedFlavor("");
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("All Products") ||
      selectedCategories.includes(p.category);

    const matchFlavor = !selectedFlavor || p.flavor === selectedFlavor;

    return matchCategory && matchFlavor;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-center justify-between border-b pb-6 mb-10">
        <div>
          <h1 className="text-4xl font-black">Our Collection</h1>
          <p className="text-[#896F61] mt-1">
            Premium Fox Nuts for healthy, guilt-free snacking.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">Sort by:</span>
          <select className="border rounded-lg px-4 py-2 text-sm">
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="flex gap-10 py-12">
        {/* Sidebar */}
        <aside className="w-72 shrink-0">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map((item) => (
              <label key={item} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(item)}
                  onChange={() => toggleCategory(item)}
                  className="accent-amber-900 w-4 h-4"
                />
                {item}
              </label>
            ))}
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">Flavors</h3>
          <div className="flex flex-wrap gap-3">
            {flavors.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelectedFlavor(item);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full border ${
                  selectedFlavor === item
                    ? "bg-orange-50 border-orange-500 text-orange-700"
                    : "text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <h3 className="text-lg font-semibold mt-8 mb-4">Price Range</h3>
          <input type="range" className="w-full accent-amber-900" />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>₹100</span>
            <span>₹1000+</span>
          </div>
        </aside>

        {/* Products Section */}
        <div className="w-full">
          {/* Selected Filters Bar */}
          {(selectedCategories.length > 0 || selectedFlavor) && (
            <div className="flex items-center gap-4 mb-8">
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="bg-black text-white px-4 py-1 rounded-full flex items-center gap-2"
                >
                  {cat}
                  <button onClick={() => toggleCategory(cat)}>✕</button>
                </span>
              ))}

              {selectedFlavor && (
                <span className="bg-black text-white px-4 py-1 rounded-full flex items-center gap-2">
                  {selectedFlavor}
                  <button onClick={() => setSelectedFlavor("")}>✕</button>
                </span>
              )}

              <button
                onClick={clearAll}
                className="ml-4 text-gray-500 underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-8">
            {paginatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border overflow-hidden"
              >
                <div className="relative h-64">
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    The original crunch, simply salted.
                  </p>

                  <div className="flex gap-3 mt-4">
                    <select className="border rounded-lg px-3 py-2">
                      <option>100g</option>
                      <option>250g</option>
                      <option>500g</option>
                    </select>

                    <div className="flex items-center border rounded-lg px-3">
                      <button>-</button>
                      <span className="px-2">1</span>
                      <button>+</button>
                    </div>
                  </div>

                  <p className="mt-2">
                    <span className="text-xl font-semibold">₹{item.price}</span>{" "}
                    <span className="text-sm text-[#896F61]">/ 100g</span>
                  </p>

                  <button className="mt-4 w-full bg-amber-900 text-white py-3 rounded-xl">
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full border ${
                    currentPage === i + 1
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
