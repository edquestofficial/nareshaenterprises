"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Products from "@/components/Products/page";
import Testimonials from "@/components/Testimonials/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import Tradition from "@/components/Tradition/page";
import Features from "@/components/Features/page";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Hero />
      {products.map((product) => (
        <Products key={product.id} category={product.name} />
      ))}
      <Tradition />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
}
