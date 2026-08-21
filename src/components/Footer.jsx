function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🥩</span>
              </div>

              <h2 className="text-2xl font-extrabold text-red-500">
                Fresh Meat
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Fresh, hygienic and premium quality meat delivered
              with care to your doorstep.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">
                Beef
              </li>

              <li className="hover:text-white transition">
                Chicken
              </li>

              <li className="hover:text-white transition">
                Mutton
              </li>

              <li className="hover:text-white transition">
                Seafood
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>
                📞 +92 300 1234567
              </p>

              <p>
                ✉ info@freshmeat.com
              </p>

              <p>
                📍 Pakistan
              </p>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Fresh Meat. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;