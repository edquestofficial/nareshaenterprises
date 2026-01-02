"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function VariantsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productIdFilter = searchParams.get("productId");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [variants, setVariants] = useState<any[]>([]);
  const [form, setForm] = useState({
    productId: productIdFilter ? Number(productIdFilter) : 1,
    name: "",
    description: "",
    price: "",
    image: "",
    tag: "",
    size: "",
    description2: "",
    description3: "",
    discount: "",
    serving_size: "",
    servingsPerContainer: "",
    calories: "",
    totalFat: "",
    saturatedFat: "",
    sodium: "",
    totalCarbohydrate: "",
    dietaryFiber: "",
    protein: "",
    ingredients: "",
  });

  const [file, setFile] = useState<File | null>(null);

  // Update form productId when URL changes
  useEffect(() => {
    if (productIdFilter) {
      setForm((prev) => ({ ...prev, productId: Number(productIdFilter) }));
    }
  }, [productIdFilter]);

  const submit = async () => {
    try {
      const formData = new FormData();
      formData.append("productId", String(form.productId));
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", String(form.price));
      formData.append("tag", form.tag);

      // Append new fields
      formData.append("size", form.size);
      formData.append("description2", form.description2);
      formData.append("description3", form.description3);
      formData.append("discount", form.discount);
      formData.append("servingSize", form.serving_size); // Map to servingSize
      formData.append("servingsPerContainer", form.servingsPerContainer);
      formData.append("calories", form.calories);
      formData.append("totalFat", form.totalFat);
      formData.append("saturatedFat", form.saturatedFat);
      formData.append("sodium", form.sodium);
      formData.append("totalCarbohydrate", form.totalCarbohydrate);
      formData.append("dietaryFiber", form.dietaryFiber);
      formData.append("protein", form.protein);
      formData.append("ingredients", form.ingredients);

      if (file) {
        formData.append("image", file);
      }
      const res = await fetch(
        editingId ? `/api/admin/variants/${editingId}` : "/api/admin/variants",
        {
          method: editingId ? "PUT" : "POST",
          body: formData,
        }
      );

      if (res.ok) {
        alert("Variant added successfully!");
        setForm({
          productId: productIdFilter ? Number(productIdFilter) : 1,
          name: "",
          description: "",
          price: "",
          image: "",
          tag: "",
          size: "",
          description2: "",
          description3: "",
          discount: "",
          serving_size: "",
          servingsPerContainer: "",
          calories: "",
          totalFat: "",
          saturatedFat: "",
          sodium: "",
          totalCarbohydrate: "",
          dietaryFiber: "",
          protein: "",
          ingredients: "",
        });
        setFile(null);
        setEditingId(null);

        loadVariants();
      } else {
        const errorData = await res.json();
        alert(`Failed to add variant: ${errorData.error || res.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const loadVariants = async () => {
    const res = await fetch("/api/admin/variants");
    const data = await res.json();
    setVariants(data);
  };
  console.log("variants", variants);

  useEffect(() => {
    loadVariants();
  }, []);

  const deleteVariant = async (id: number) => {
    await fetch(`/api/admin/variants/${id}`, {
      method: "DELETE",
    });
    loadVariants();
  };

  //edit vairenrts
  const startEdit = (variant: any) => {
    setEditingId(variant.id);

    setForm({
      productId: variant.product_id,
      name: variant.name || "",
      description: variant.description || "",
      price: variant.price || "",
      image: "",
      tag: variant.tag || "",
      size: variant.size || "",
      description2: variant.description2 || "",
      description3: variant.description3 || "",
      discount: variant.discount || "",
      serving_size: variant.serving_size || "",
      servingsPerContainer: variant.servings_per_container || "",
      calories: variant.calories || "",
      totalFat: variant.total_fat || "",
      saturatedFat: variant.saturated_fat || "",
      sodium: variant.sodium || "",
      totalCarbohydrate: variant.total_carbohydrate || "",
      dietaryFiber: variant.dietary_fiber || "",
      protein: variant.protein || "",
      ingredients: variant.ingredients || "",
    });

    setFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //discount logic
  const getFinalPrice = (price: number, discount: number) => {
    if (!discount || discount <= 0) return price;
    return Math.round(price - (price * discount) / 100);
  };

  const filteredVariants = productIdFilter
    ? variants.filter((v) => v.product_id === Number(productIdFilter))
    : variants;

  return (
    <div className="mx-auto px-10 py-8 bg-[#CBCBCB] md:mb-40 ">
      <div className="flex gap-8 h-[85vh]">
        {/* ================= RIGHT : ADD VARIANT FORM ================= */}
        <div className="w-2/3 sticky top-10 h-[80vh] flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-black">
            {editingId ? "Edit Variant" : "Add New Variant"}
          </h2>

          <div className="bg-gray-50 border rounded-xl p-6 flex-1 overflow-y-auto scrollbar">
            <input
              placeholder="Variant Name"
              className="border rounded p-2 w-full mb-3"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Description"
              className="border rounded p-2 w-full mb-3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <input
              placeholder="Price"
              type="number"
              className="border rounded p-2 w-full mb-3"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            {/* {!productIdFilter && (
            <input
              placeholder="Product ID"
              type="number"
              className="border rounded p-2 w-full mb-3"
              value={form.productId}
              onChange={(e) =>
                setForm({
                  ...form,
                  productId: Number(e.target.value),
                })
              }
            />
          )} */}

            <div className="mb-3">
              <label className="text-sm font-medium mb-1 block">
                Variant Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="border rounded p-2 w-full bg-white"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>

            <select
              className="border rounded p-2 w-full mb-4"
              value={form.tag}
              onChange={(e) => setForm({ ...form, tag: e.target.value })}
            >
              <option value="">Tag(optional)</option>
              <option value="Bestseller">BestSeller</option>
              <option value="Featured">Featured</option>
            </select>
            <input
              placeholder="Size (e.g. 250g)"
              className="border rounded p-2 w-full mb-3"
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
            />

            <textarea
              placeholder="Description Line 2"
              className="border rounded p-2 w-full mb-3"
              value={form.description2}
              onChange={(e) =>
                setForm({ ...form, description2: e.target.value })
              }
            />

            <textarea
              placeholder="Description Line 3"
              className="border rounded p-2 w-full mb-3"
              value={form.description3}
              onChange={(e) =>
                setForm({ ...form, description3: e.target.value })
              }
            />

            <input
              placeholder="Discount (%)"
              type="number"
              className="border rounded p-2 w-full mb-3"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
            />

            <input
              placeholder="Serving Size (e.g. 1–2 people)"
              className="border rounded p-2 w-full mb-3"
              value={form.serving_size}
              onChange={(e) =>
                setForm({ ...form, serving_size: e.target.value })
              }
            />
            <input
              placeholder="Servings Per Container"
              className="border rounded p-2 w-full mb-3"
              value={form.servingsPerContainer}
              onChange={(e) =>
                setForm({ ...form, servingsPerContainer: e.target.value })
              }
            />

            <input
              placeholder="Calories"
              className="border rounded p-2 w-full mb-3"
              value={form.calories}
              onChange={(e) => setForm({ ...form, calories: e.target.value })}
            />

            <input
              placeholder="Protein"
              className="border rounded p-2 w-full mb-3"
              value={form.protein}
              onChange={(e) => setForm({ ...form, protein: e.target.value })}
            />
            <input
              placeholder="Total Fat (e.g. 5g)"
              className="border rounded p-2 w-full mb-3"
              value={form.totalFat}
              onChange={(e) => setForm({ ...form, totalFat: e.target.value })}
            />

            <input
              placeholder="Saturated Fat (e.g. 1g)"
              className="border rounded p-2 w-full mb-3"
              value={form.saturatedFat}
              onChange={(e) =>
                setForm({ ...form, saturatedFat: e.target.value })
              }
            />

            <input
              placeholder="Sodium (e.g. 120mg)"
              className="border rounded p-2 w-full mb-3"
              value={form.sodium}
              onChange={(e) => setForm({ ...form, sodium: e.target.value })}
            />

            <input
              placeholder="Total Carbohydrate (e.g. 15g)"
              className="border rounded p-2 w-full mb-3"
              value={form.totalCarbohydrate}
              onChange={(e) =>
                setForm({ ...form, totalCarbohydrate: e.target.value })
              }
            />

            <input
              placeholder="Dietary Fiber (e.g. 3g)"
              className="border rounded p-2 w-full mb-3"
              value={form.dietaryFiber}
              onChange={(e) =>
                setForm({ ...form, dietaryFiber: e.target.value })
              }
            />

            <textarea
              placeholder="Ingredients"
              className="border rounded p-2 w-full mb-3"
              value={form.ingredients}
              onChange={(e) =>
                setForm({ ...form, ingredients: e.target.value })
              }
            />

            <button
              onClick={submit}
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:opacity-90 cursor-pointer"
            >
              {editingId ? "Update Variant" : "Save Variant"}
            </button>
          </div>
        </div>
        {/* ================= LEFT : VARIANTS LIST ================= */}
        <div className="w-1/3 border rounded-xl p-6 overflow-y-auto bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              {productIdFilter ? "Product Variants" : "All Variants"}
            </h1>

            {productIdFilter && (
              <button
                onClick={() => router.push("/admin/variants")}
                className="text-sm text-blue-600 hover:underline"
              >
                Show All
              </button>
            )}
          </div>

          {filteredVariants.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              No variants found.
            </p>
          )}

          <div className="space-y-4">
            {filteredVariants.map((v) => (
              <div
                key={v.id}
                className="flex justify-between items-center border rounded-lg p-4 hover:shadow-sm transition"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={v.image}
                    className="w-16 h-16 rounded object-cover bg-gray-100"
                  />

                  <div>
                    <p className="font-semibold">{v.name}</p>
                    <p className="font-semibold">{v.description}</p>
                    {v.discount ? (
                      <div className="flex gap-2 items-center">
                        <span className="text-sm text-gray-400 line-through">
                          ₹ {v.price}
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          ₹ {getFinalPrice(Number(v.price), Number(v.discount))}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 rounded">
                          {v.discount}% OFF
                        </span>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">₹ {v.price}</p>
                    )}

                    {v.tag && (
                      <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        {v.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => startEdit(v)}
                    className="text-sm text-blue-600   cursor-pointer border rounded p-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      const isConfirmed = window.confirm(
                        "Are you sure you want to delete this variant?"
                      );
                      if (isConfirmed) {
                        deleteVariant(v.id);
                      }
                    }}
                    className="text-sm text-red-600  cursor-pointer border rounded p-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VariantsContent />
    </Suspense>
  );
}
