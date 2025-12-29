export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-600">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded"
          />
          {/* <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border px-3 py-2 rounded"
          /> */}
          <button className="bg-orange-500 text-white px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
