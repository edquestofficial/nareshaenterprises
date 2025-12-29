export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1814] to-[#0f0e0c] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">
              Bhakati Organic
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              Delicious, nutritious, and ethically sourced. We are bringing the
              superfood power of Makhana to the world, one crunch at a time.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-white">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bundles
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Makhana. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
