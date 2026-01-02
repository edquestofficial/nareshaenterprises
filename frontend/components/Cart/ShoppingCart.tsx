"use client";
import { useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

// const items = [
//   {
//     id: 1,
//     name: "Roasted Fox Nuts – Peri Peri",
//     description: "Spicy & Tangy Flavor",
//     image: "/cart1.svg",
//     weight: "250g",
//     quantity: 1,
//     price: 250,
//   },
//   {
//     id: 2,
//     name: "Raw Makhana Premium",
//     description: "100% Organic & Natural",
//     image: "/cart2.svg",
//     weight: "500g",
//     quantity: 2,
//     price: 900,
//   },
//   {
//     id: 3,
//     name: "Caramel Fox Nuts",
//     description: "Sweet & Crunchy",
//     image: "/cart3.svg",
//     weight: "100g",
//     quantity: 1,
//     price: 150,
//   },
// ];

export default function ShoppingCart() {
  const { cart } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
      <p className="mt-1 text-gray-500">
        You have{" "}
        <span className="font-semibold text-[#4a2612]">
          {cart.length} items
        </span>{" "}
        in your cart ready for checkout.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => <CartItem key={item.id + item.size} {...item} />)
          )}

          <Link
            href="/"
            className="text-sm font-medium text-brown-700 hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>

        <OrderSummary cart={cart} />
      </div>
    </div>
  );
}
