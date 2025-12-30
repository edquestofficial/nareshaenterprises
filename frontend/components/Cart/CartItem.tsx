import Image from "next/image";
// import { Trash2 } from "lucide-react";

export interface CartItemProps {
  id: number;
  name: string;
  description: string;
  image: string;
  weight: string;
  quantity: number;
  price: number;
}

export default function CartItem({
  name,
  description,
  image,
  weight,
  quantity,
  price,
}: CartItemProps) {
  return (
    <div className="flex gap-6 rounded-xl bg-white p-6 shadow-sm">
      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>

          <div className="mt-3 flex items-center gap-3">
            <span className="rounded-md border px-3 py-1 text-sm">
              {weight}
            </span>

            <div className="flex items-center rounded-md border">
              <button className="px-3 py-1 text-gray-600">−</button>
              <span className="px-3 py-1">{quantity}</span>
              <button className="px-3 py-1 text-gray-600">+</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <button className="text-gray-400 hover:text-red-500">
            {/* <Trash2 size={18} /> */}
          </button>
          <span className="font-semibold text-brown-700">₹{price}</span>
        </div>
      </div>
    </div>
  );
}
