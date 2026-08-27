import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo login
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");

      alert("Login successful!");

      navigate("/admin");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-950/60 mb-5">
            <span className="text-3xl">🥩</span>
          </div>

          <p className="text-red-500 uppercase tracking-[4px] text-sm font-bold mb-3">
            Welcome Back
          </p>

          <h1 className="text-4xl font-extrabold text-white">
            Admin <span className="text-red-600">Login</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Login to manage your Fresh Meat website.
          </p>

        </div>

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="
            bg-[#151515]
            border border-white/10
            rounded-3xl
            p-8
            shadow-2xl

            hover:border-red-600/50
            transition-all
            duration-300
          "
        >

          {/* Email */}
          <div className="mb-5">

            <label className="block text-gray-300 font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@gmail.com"
              required
              className="
                w-full
                bg-[#0b0b0b]
                border border-white/10
                text-white
                px-4 py-3
                rounded-xl
                outline-none

                focus:border-red-600
                focus:ring-1
                focus:ring-red-600

                transition
              "
            />

          </div>

          {/* Password */}
          <div className="mb-7">

            <label className="block text-gray-300 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="
                w-full
                bg-[#0b0b0b]
                border border-white/10
                text-white
                px-4 py-3
                rounded-xl
                outline-none

                focus:border-red-600
                focus:ring-1
                focus:ring-red-600

                transition
              "
            />

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full
              bg-red-600
              hover:bg-red-500
              text-white
              py-4
              rounded-xl
              font-extrabold
              text-lg

              hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            Login
          </button>

          {/* Back */}
          <Link
            to="/"
            className="
              block
              text-center
              text-gray-400
              hover:text-red-500
              mt-6
              font-semibold
              transition
            "
          >
            ← Back to Home
          </Link>

        </form>

        {/* Demo Credentials */}
        <div className="mt-5 text-center">

          <p className="text-gray-500 text-sm">
            Demo Login
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Email:{" "}
            <span className="text-red-500">
              admin@gmail.com
            </span>
          </p>

          <p className="text-gray-400 text-sm">
            Password:{" "}
            <span className="text-red-500">
              admin123
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;