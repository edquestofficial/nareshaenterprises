export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Makhana</h3>
          <p>
            Delicious, nutritious, and ethically sourced. We are bringing the
            superfood power of Makhana to the world, one crunch at a time.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Shop</h4>
          <p>All Products</p>
          <p>Best Sellers</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Support</h4>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <p className="text-center text-xs mt-8 text-gray-500">
        © 2025 Makhana Store. All rights reserved.
      </p>
    </footer>
  );
}
