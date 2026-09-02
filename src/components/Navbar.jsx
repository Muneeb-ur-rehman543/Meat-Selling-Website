import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setUserName(localStorage.getItem("userName") || "");
    };

    window.addEventListener("storage", checkLogin);
    window.addEventListener("loginUpdated", checkLogin);

    checkLogin();

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("loginUpdated", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("pendingCartProduct");

    setIsLoggedIn(false);
    setUserName("");

    window.dispatchEvent(new Event("loginUpdated"));

    alert("Logged out successfully!");

    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#18090C] border-b border-[#4A111B] shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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

        <div className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Home
          </Link>

          <a
            href="/#categories"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Categories
          </a>

          <a
            href="/#products"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Products
          </a>

          <a
            href="/#about"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            About
          </a>

          <a
            href="/#contact"
            className="text-[#E8C7C7] font-semibold hover:text-red-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 border border-red-600/60 text-red-400 hover:bg-red-600 hover:text-white px-5 py-3 rounded-xl font-bold transition-all duration-300"
            >
              👤 Login
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-2 border border-red-600/40 text-white px-4 py-3 rounded-xl font-bold bg-red-600/10">
              👤
              <span className="text-red-400">{userName}</span>
            </div>
          )}

          <Link
            to="/admin"
            className="hidden md:flex items-center gap-2 border border-red-600/60 text-red-400 hover:bg-red-600 hover:text-white px-5 py-3 rounded-xl font-bold transition-all duration-300"
          >
            ⚙️ Admin
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 border border-red-600/60 text-white hover:bg-red-600 px-5 py-3 rounded-xl font-bold transition-all duration-300"
          >
            🛒 Cart
          </Link>

          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3 rounded-xl font-bold shadow-lg shadow-red-950/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              🚪 Logout
            </button>
          )}
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#DC2626] to-transparent"></div>
    </nav>
  );
}

export default Navbar;

