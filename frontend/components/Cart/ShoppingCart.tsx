"use client";
import { useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

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

        <OrderSummary />
      </div>
    </div>
  );
}
