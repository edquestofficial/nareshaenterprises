import ProductGallery from "@/components/Product/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo";
import NutritionFacts from "@/components/Product/NutritionFacts";
import RelatedProducts from "@/components/Product/RelatedProducts";

export default function ProductPage() {
  return (
    <main className="bg-[#FAF9F7]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <ProductGallery />
        <ProductInfo />
        {/* Related */}
        <RelatedProducts />
      </div>
    </main>
  );
}
