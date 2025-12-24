export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Build Digital Experiences
      </h1>

      <p className="text-gray-400 max-w-xl mb-6">
        We design and develop modern websites using Next.js and React.
      </p>

      <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
        Book a Call
      </button>
    </section>
  );
}
