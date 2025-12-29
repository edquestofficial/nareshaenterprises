export default function Contact() {
  return (
    <section className="bg-[#faf7f4] py-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg px-10 py-14 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#2b1b12] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-md mb-8">
            Have questions about bulk orders, shipping, or just want to say hi?
            We&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#f2ebe6] p-3 rounded-full">✉️</div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600">hello@foxnutco.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#f2ebe6] p-3 rounded-full">📞</div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#f2ebe6] p-3 rounded-full">📍</div>
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-gray-600">
                  123 Healthy Snack Blvd,
                  <br /> Austin, TX 78701
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          <button className="bg-[#4b2613] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a1e0f] transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
