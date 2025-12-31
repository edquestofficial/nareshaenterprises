"use client";
import { useState, useEffect } from "react";

// const items = [
//   {
//     name: "Classic Salted",
//     desc: "The original crunch, simply salted.",
//     price: 299,
//     img: "/makhana1.png",
//     tag: "Bestseller",
//   },
//   {
//     name: "Peri Peri Punch",
//     desc: "Spicy kick for the bold snacker.",
//     price: 299,
//     img: "/makhana2.png",
//   },
//   {
//     name: "Cream & Onion",
//     desc: "Savory delight with herbs.",
//     price: 299,
//     img: "/makhana3.png",
//   },
//   {
//     name: "Turmeric Gold",
//     desc: "Immunity booster blend.",
//     price: 299,
//     img: "/makhana4.png",
//   },
// ];

interface ProductItem {
  name: string;
  desc: string;
  price: number;
  img: string;
  tag: string | null;
  size: string;
  discount: number | null;
}

export default function Products({
  category = "Makhana",
}: {
  category?: string;
}) {
  const [itemss, setItems] = useState<ProductItem[]>([]);
  const [qty, setQty] = useState<number[]>([]);

  useEffect(() => {
    const fetchVariantById = async () => {
      try {
        const res = await fetch("/api/admin/variants/2");

        if (!res.ok) {
          throw new Error("Failed to fetch variant");
        }

        const data = await res.json();
        console.log("Variant by ID:", data);
      } catch (error) {
        console.error("Error fetching variant:", error);
      }
    };

    fetchVariantById();
  }, []);

  // Fetch data from API
  useEffect(() => {
    fetch(`/api/admin/variants?productName=${category}`)
      .then((res) => res.json())
      .then((data) => {
        // Convert API data to UI format
        const formatted = data.map((item: any) => ({
          name: item.name,
          desc: item.description,
          price: item.price,
          img: item.image,
          tag: item.tag || null,
          size: item.size || null,
          description2: item.description2 || null,
          description3: item.description3 || null,
          discount: item.discount || null,
          servingSize: item.servingSize || null,
          servingsPerContainer: item.servingsPerContainer || null,
          calories: item.calories || null,
          totalFat: item.totalFat || null,
          saturatedFat: item.saturatedFat || null,
          sodium: item.sodium || null,
          totalCarbohydrate: item.totalCarbohydrate || null,
          dietaryFiber: item.dietaryFiber || null,
          protein: item.protein || null,
          ingredients: item.ingredients || null,
        }));

        setItems(formatted);
        setQty(formatted.map(() => 1));
      });
  }, [category]);
  console.log("itemss", itemss);

  const changeQty = (i, val) => {
    setQty((q) => q.map((x, idx) => (idx === i ? Math.max(1, x + val) : x)));
  };

  const getFinalPrice = (price: number, discount: number | null) => {
    if (!discount || discount <= 0) return price;
    return Math.round(price - (price * discount) / 100);
  };
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Our Best Selling {category}</h2>
        <a href="#" className="text-sm text-[#4a2612] font-medium">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {itemss.slice(0, 4).map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img src={p.img} className="h-56 w-full object-cover" />
              {p.tag && (
                <span className="absolute top-3 right-3 bg-white text-xs px-3 py-1 rounded-full shadow">
                  {p.tag}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>

              {/* Weight + Quantity */}
              <div className="flex items-center gap-3 mt-4">
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>{p.size}</option>
                  {/* <option>250g</option>
                  <option>500g</option> */}
                </select>

                <div className="flex items-center border rounded-md px-2">
                  <button onClick={() => changeQty(i, -1)} className="px-2">
                    -
                  </button>
                  <span className="px-2">{qty[i]}</span>
                  <button onClick={() => changeQty(i, 1)} className="px-2">
                    +
                  </button>
                </div>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-4">
                {p.discount ? (
                  <div className="flex gap-2 items-center">
                    <span className="text-sm text-gray-400 line-through">
                      ₹ {p.price}
                    </span>

                    <span className="text-lg font-semibold text-green-600">
                      ₹ {getFinalPrice(p.price, p.discount)}
                    </span>

                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {p.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-semibold">₹ {p.price}</span>
                )}

                <button className="bg-[#4a2612] text-white px-4 py-2 rounded-md text-sm">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
