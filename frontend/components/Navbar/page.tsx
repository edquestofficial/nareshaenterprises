"use client";
import { useState } from "react";

export default function BhaktiNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#fffaf5] border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="w-10 h-10" alt="Bhakti Organic" />
          <span className="font-semibold text-lg text-[#4a2612]">
            Bhakti <span className="font-bold">Organic</span>
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-[320px]">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="ml-2 text-sm outline-none w-full bg-transparent"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4a2612]">
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button className="bg-[#4a2612] text-white px-5 py-2 rounded-md">
            View Cart
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#4a2612]"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="text-sm outline-none w-full bg-transparent"
              />
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-3 text-sm font-medium text-[#4a2612]">
              <a href="#" onClick={() => setOpen(false)}>
                Products
              </a>
              <a href="#" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="#" onClick={() => setOpen(false)}>
                Contact
              </a>
              <button className="bg-[#4a2612] text-white py-2 rounded-md">
                View Cart
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
