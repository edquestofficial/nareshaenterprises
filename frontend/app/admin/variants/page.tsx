"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function VariantsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productIdFilter = searchParams.get("productId");

  const [variants, setVariants] = useState<any[]>([]);
  const [form, setForm] = useState({
    productId: productIdFilter ? Number(productIdFilter) : 1,
    name: "",
    description: "",
    price: "",
    image: "",
    tag: "",
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
      if (file) {
        formData.append("image", file);
      }

      const res = await fetch("/api/admin/variants", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Variant added successfully!");
        setForm({
          productId: productIdFilter ? Number(productIdFilter) : 1,
          name: "",
          description: "",
          price: "",
          image: "",
          tag: "",
        });
        setFile(null);
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

  useEffect(() => {
    loadVariants();
  }, []);

  const deleteVariant = async (id: number) => {
    await fetch(`/api/admin/variants/${id}`, {
      method: "DELETE",
    });
    loadVariants();
  };

  const filteredVariants = productIdFilter
    ? variants.filter((v) => v.product_id === Number(productIdFilter))
    : variants;

 return (
  <div className="max-w-7xl mx-auto px-10 py-8">
    <div className="flex gap-8 h-[85vh]">

      {/* ================= LEFT : VARIANTS LIST ================= */}
      <div className="w-2/3 border rounded-xl p-6 overflow-y-auto">
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
                  <p className="text-sm text-gray-500">₹ {v.price}</p>
                  {v.tag && (
                    <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      {v.tag}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => deleteVariant(v.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT : ADD VARIANT FORM ================= */}
      <div className="w-1/3 sticky top-10 h-fit">
        <h2 className="text-xl font-bold mb-4">Add New Variant</h2>

        <div className="bg-gray-50 border rounded-xl p-6">
          <input
            placeholder="Variant Name"
            className="border rounded p-2 w-full mb-3"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
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
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
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
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
            />
          </div>

          <input
            placeholder="Tag (optional)"
            className="border rounded p-2 w-full mb-4"
            value={form.tag}
            onChange={(e) =>
              setForm({ ...form, tag: e.target.value })
            }
          />

          <button
            onClick={submit}
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:opacity-90"
          >
            Save Variant
          </button>
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
