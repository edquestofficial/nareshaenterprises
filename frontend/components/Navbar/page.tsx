"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-500">Makhana</h1>
        <div className="flex gap-6 justify-between items-center">
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded text-sm">
            Buy Now
          </button>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-sm">
            <a href="#" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setOpen(false)}>
              Shop
            </a>
            <a href="#" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#" onClick={() => setOpen(false)}>
              Contact
            </a>
            <button className="bg-orange-500 text-white py-2 rounded">
              Buy Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
