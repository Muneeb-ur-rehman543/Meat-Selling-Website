import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#18090C] border-b border-[#4A111B] shadow-2xl">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-3"
        >

          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-950/60">
            <span className="text-2xl">🥩</span>
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-[#FFF5F5] tracking-tight">
              Fresh <span className="text-red-500">Meat</span>
            </h1>

            <p className="text-xs text-[#B98F8F]">
              Freshness You Can Trust
            </p>
          </div>

        </Link>

        {/* ================= NAVIGATION ================= */}

        <div className="hidden md:flex items-center gap-7">

          {/* HOME */}

          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Home
          </Link>

          {/* CATEGORIES */}

          <a
            href="/#categories"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Categories
          </a>

          {/* PRODUCTS */}

          <a
            href="/#products"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Products
          </a>

          {/* ABOUT */}

          <a
            href="/#about"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            About
          </a>

          {/* CONTACT */}

          <a
            href="/#contact"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* ================= RIGHT BUTTONS ================= */}

        <div className="flex items-center gap-3">

          {/* ADMIN BUTTON */}

          <Link
            to="/admin"
            className="
              hidden
              md:flex
              items-center
              gap-2
              border
              border-red-600/60
              text-red-400
              hover:bg-red-600
              hover:text-white
              px-5
              py-3
              rounded-xl
              font-bold
              transition-all
              duration-300
            "
          >
            ⚙️ Admin
          </Link>

          {/* CART BUTTON */}

          <Link
            to="/cart"
            className="
              flex
              items-center
              gap-2
              border
              border-red-600/60
              text-white
              hover:bg-red-600
              px-5
              py-3
              rounded-xl
              font-bold
              transition-all
              duration-300
            "
          >
            🛒 Cart
          </Link>

          {/* SHOP NOW */}

          <a
            href="/#products"
            className="
              hidden
              md:block
              bg-[#DC2626]
              hover:bg-[#B91C1C]
              text-white
              px-7
              py-3
              rounded-xl
              font-bold
              shadow-lg
              shadow-red-950/60
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Shop Now
          </a>

        </div>

      </div>

      {/* Red Accent */}

      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#DC2626] to-transparent"></div>

    </nav>
  );
}

export default Navbar;