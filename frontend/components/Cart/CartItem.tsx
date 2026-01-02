"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
// import { Trash2 } from "lucide-react";

export interface CartItemProps {
  id: string | number;
  name: string;
  description?: string;
  image: string;
  size: string;
  quantity: number;
  price: number;
}

export default function CartItem({
  id,
  name,
  description,
  image,
  size,
  quantity,
  price,
}: CartItemProps) {
  const { removeFromCart } = useCart();
  return (
    <div className="flex gap-6 rounded-xl bg-white p-6 shadow-sm">
      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>

          <div className="mt-3 flex items-center gap-3">
            <span className="rounded-md border px-3 py-1 text-sm">{size}</span>

            <div className="flex items-center rounded-md border">
              {/* <button className="px-3 py-1 text-gray-600">−</button> */}
              <span className="px-3 py-1">Qty: {quantity}</span>
              {/* <button className="px-3 py-1 text-gray-600">+</button> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <button
            className="text-gray-400 hover:text-red-500 border rounded-md px-3 py-1 "
            onClick={() => removeFromCart(id, size)}
          >
            Remove
          </button>
          <span className="font-semibold text-brown-700">
            ₹{(price = price * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
