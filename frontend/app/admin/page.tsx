"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
interface Product {
  id: number;
  name: string;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* PRODUCTS LIST */}
      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4"
          >
            <div className="flex justify-between items-center">
              <Link
                href={`/admin/variants?productId=${product.id}`}
                className="text-lg font-semibold hover:underline"
              >
                {product.name}
              </Link>

              {/* Add Variant Button */}
              <Link
                href={`/admin/variants?productId=${product.id}`}
                className="text-sm text-blue-600"
              >
                + Add Variant
              </Link>
            </div>

            {/* VARIANTS */}
            {/* <ul className="mt-3 space-y-2">
              {product.variants.length === 0 && (
                <li className="text-sm text-gray-500">
                  No variants added
                </li>
              )}

              {product.variants.map((v) => (
                <li
                  key={v.id}
                  className="flex justify-between text-sm border-b pb-1"
                >
                  <span>{v.name}</span>
                  <span>₹ {v.price}</span>
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>

      {/* ADD PRODUCT */}
      <div className="mt-8">
        <Link
          href="/admin/products/add"
          className="inline-block bg-black text-white px-4 py-2 rounded"
        >
          + Add Product
        </Link>
      </div>
    </div>
  );
}
