const features = [
  {
    title: "100% Organic Sourced",
    text: "We use only premium, farm-fresh makhanas.",
    icon: "🌱",
  },
  {
    title: "Gluten-Free & Vegan",
    text: "Perfect healthy snack for everyone.",
    icon: "🥗",
  },
  {
    title: "Non-GMO Verified",
    text: "Free from harmful chemicals and additives.",
    icon: "✔️",
  },
];

export default function Features() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold mb-10">Quality You Can Trust</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-medium mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
