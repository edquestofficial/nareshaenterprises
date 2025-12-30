export default function OrderSummary() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹1,300</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping Estimate</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="flex justify-between">
          <span>Tax (5% GST)</span>
          <span>₹65</span>
        </div>
      </div>

      <div className="my-5">
        <label className="mb-2 block text-xs font-semibold text-gray-500">
          DISCOUNT CODE
        </label>
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-md border px-3 py-2 text-sm outline-none"
            placeholder="FOXNUT10"
          />
          <button className="rounded-md bg-gray-100 px-4 text-sm font-medium">
            Apply
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <span className="font-semibold">Total Amount</span>
        <span className="text-2xl font-bold text-brown-700">₹1,365</span>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#4a2612] py-3 font-semibold text-white hover:bg-brown-900">
        Place Order →
      </button>
    </div>
  );
}
