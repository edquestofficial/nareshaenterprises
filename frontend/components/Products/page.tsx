const items = [
  { name: "Classic Salted", price: "₹299 / 100g", img: "/makhana1.png" },
  { name: "Peri Peri Punch", price: "₹349 / 100g", img: "/makhana2.png" },
  { name: "Cream & Onion", price: "₹349 / 100g", img: "/makhana3.png" },
  { name: "Turmeric Gold", price: "₹299 / 100g", img: "/makhana4.png" },
];

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold mb-6">Our Best Selling Makhanas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <img src={p.img} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-3 font-medium">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.price}</p>
            <button className="mt-3 w-full bg-orange-500 text-white py-1 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
