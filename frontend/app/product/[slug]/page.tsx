"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductGallery from "@/components/Product/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo";
import NutritionFacts from "@/components/Product/NutritionFacts";
import RelatedProducts from "@/components/Product/RelatedProducts";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/admin/variants/${slug}`);
        const data = await res.json();
        console.log("Product data is =", data);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <main className="bg-[#FAF9F7]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <ProductGallery
          id={product?.id}
          image={product?.image}
          images={product?.image ? [product.image] : []}
          tag={product?.tag}
          name={product?.name}
          size={product?.size}
          price={product?.price}
          discount={product?.discount}
          description={product?.description}
          description2={product?.description2}
        />
        <ProductInfo
          description3={product?.description3}
          ingredients={product?.ingredients}
          nutrition={product?.nutrition}
          saturatedFat={product?.saturatedFat}
          servingSize={product?.servingSize}
          servingsPerContainer={product?.servingsPerContainer}
          totalCarbohydrate={product?.totalCarbohydrate}
          totalFat={product?.totalFat}
          protein={product?.protein}
          sodium={product?.sodium}
          calories={product?.calories}
          dietaryFiber={product?.dietaryFiber}
        />
        {/* Related */}
        <RelatedProducts />
      </div>
    </main>
  );
}
