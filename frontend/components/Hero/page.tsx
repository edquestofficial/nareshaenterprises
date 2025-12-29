export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="/banner.png"
          className="w-full h-[560px] object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="text-white px-6 md:px-10 max-w-2xl">
            <h1 className="text-2xl md:text-6xl font-bold">
              Crunchy, Healthy,
              <br />
              Guilt-Free Snacking
            </h1>
            <p className="mt-4 text-sm">
              Premium roasted makhanas packed with protein & fiber.
            </p>
            <button className="mt-6 bg-orange-500 px-6 py-2 rounded-md">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
