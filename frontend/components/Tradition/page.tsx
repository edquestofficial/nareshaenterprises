export default function Tradition() {
  return (
    <section className="bg-[#EE9D2B1A] w-full">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-orange-500 text-sm font-medium">
              Our Story
            </span>
            <h2 className="text-2xl font-semibold mt-2">
              Rooted in Tradition,
              <br />
              Roasted for Today.
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Our makhanas are carefully sourced from trusted farmers and
              roasted using traditional methods to preserve their natural crunch
              and nutrition. Every bite delivers wholesome goodness with bold
              flavors.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded">
              Read Our Story
            </button>
          </div>

          <div>
            <img
              src="/farmer.png"
              alt=""
              className="w-full h-[320px] object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
