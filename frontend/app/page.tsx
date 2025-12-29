import Image from "next/image";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Products from "@/components/Products/page";
import Testimonials from "@/components/Testimonials/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import Tradition from "@/components/Tradition/page";
import Features from "@/components/Features/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Tradition />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
