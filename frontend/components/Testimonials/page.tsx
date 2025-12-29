const reviews = [
  {
    name: "Ravi Kumar",
    text: "The makhanas are extremely crunchy and healthy. Perfect evening snack!",
  },
  {
    name: "Anita Sharma",
    text: "Loved the peri peri flavor. My whole family enjoys them.",
  },
  {
    name: "Suresh Mehta",
    text: "Great packaging and amazing taste. Will definitely order again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold mb-10">
          Loved by Snackers Everywhere
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#fafafa] p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-4">"{r.text}"</p>
              <h4 className="font-medium">{r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
