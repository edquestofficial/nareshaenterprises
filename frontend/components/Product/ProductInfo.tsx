// import { FileText, FlaskConical } from "lucide-react";

export default function ProductInfo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          {/* Product Description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              {/* <FileText className="h-5 w-5 text-[#5a3a28]" /> */}
              <h2 className="text-xl font-semibold text-gray-900">
                Product Description
              </h2>
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Discover the ancient superfood of India, reimagined for the
                modern snacker. Our Fox Nuts (also known as Makhana or Lotus
                Seeds) are harvested from the stagnant water of wetlands in
                Eastern India.
              </p>

              <p>
                Unlike traditional chips that are fried in unhealthy oils, our
                Fox Nuts are air-roasted to preserve their natural nutrients and
                incredible crunch. We then toss them in our signature Peri Peri
                seasoning blend—a mix of chili, garlic, onion, and herbs that
                delivers a tangy, spicy kick without overwhelming the palate.
              </p>

              <p>
                Perfect for pre-workout energy, office snacking, or movie
                nights. It’s time to snack smarter.
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mt-14">
            <div className="mb-4 flex items-center gap-2">
              {/* <FlaskConical className="h-5 w-5 text-[#5a3a28]" /> */}
              <h2 className="text-xl font-semibold text-gray-900">
                Ingredients
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Fox Nuts (Makhana) (78%), Olive Oil, Peri Peri Seasoning (12%)
              [Red Chili, Garlic Powder, Onion Powder, Dried Oregano, Lemon
              Juice Powder, Black Salt, Tamarind Powder], Natural Antioxidant
              (Rosemary Extract).
            </p>

            <p className="mt-3 text-sm italic text-gray-500">
              May contain traces of peanuts and tree nuts due to shared
              processing equipment.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — NUTRITION FACTS */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Nutrition Facts
          </h3>

          <div className="divide-y">
            {/* Serving Info */}
            <div className="space-y-3 pb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Serving Size</span>
                <span className="font-medium text-gray-900">1 Cup (30g)</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Servings Per Container</span>
                <span className="font-medium text-gray-900">About 3</span>
              </div>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between py-6">
              <span className="text-lg font-semibold text-gray-900">
                Calories
              </span>
              <span className="text-2xl font-bold text-[#5a3a28]">140</span>
            </div>

            {/* Nutrients */}
            <div className="space-y-4 py-6 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Total Fat</span>
                <span className="font-medium">5g</span>
              </div>
              <div className="flex justify-between pl-4 text-gray-600">
                <span>Saturated Fat</span>
                <span>1g</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Sodium</span>
                <span className="font-medium">180mg</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Total Carbohydrate</span>
                <span className="font-medium">20g</span>
              </div>
              <div className="flex justify-between pl-4 text-gray-600">
                <span>Dietary Fiber</span>
                <span>3g</span>
              </div>

              <div className="flex justify-between text-base font-semibold">
                <span>Protein</span>
                <span className="text-[#5a3a28]">5g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
