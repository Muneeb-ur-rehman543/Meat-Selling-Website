import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    // Password match
    if (password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Get existing users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check existing email
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === email
    );

    if (existingUser) {
      alert("An account with this email already exists!");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    // Save user
    const updatedUsers = [
      ...users,
      newUser,
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("Account created successfully!");

    // Go to Login
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-md">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-950/60 mb-5">
            <span className="text-3xl">🥩</span>
          </div>

          <p className="text-red-500 uppercase tracking-[4px] text-sm font-bold mb-3">
            Fresh Meat
          </p>

          <h1 className="text-4xl font-extrabold text-white">
            Create <span className="text-red-600">Account</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Create an account to start shopping.
          </p>

        </div>

        {/* ================= REGISTER CARD ================= */}

        <form
          onSubmit={handleRegister}
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

          {/* NAME */}

          <div className="mb-5">

            <label className="block text-gray-300 font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="
                w-full
                bg-[#0b0b0b]
                border border-white/10
                text-white
                px-4
                py-3
                rounded-xl
                outline-none
                focus:border-red-600
                focus:ring-1
                focus:ring-red-600
                transition
              "
            />

          </div>

          {/* EMAIL */}

          <div className="mb-5">

            <label className="block text-gray-300 font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="
                w-full
                bg-[#0b0b0b]
                border border-white/10
                text-white
                px-4
                py-3
                rounded-xl
                outline-none
                focus:border-red-600
                focus:ring-1
                focus:ring-red-600
                transition
              "
            />

          </div>

          {/* PASSWORD */}

          <div className="mb-5">

            <label className="block text-gray-300 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
              required
              className="
                w-full
                bg-[#0b0b0b]
                border border-white/10
                text-white
                px-4
                py-3
                rounded-xl
                outline-none
                focus:border-red-600
                focus:ring-1
                focus:ring-red-600
                transition
              "
            />

          </div>

          {/* CONFIRM PASSWORD */}

          <div className="mb-7">

            <label className="block text-gray-300 font-semibold mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              className="
                w-full
                bg-[#0b0b0b]
                border border-white/10
                text-white
                px-4
                py-3
                rounded-xl
                outline-none
                focus:border-red-600
                focus:ring-1
                focus:ring-red-600
                transition
              "
            />

          </div>

          {/* REGISTER BUTTON */}

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
            Create Account
          </button>

          {/* LOGIN LINK */}

          <div className="text-center mt-6">

            <p className="text-gray-500 text-sm">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="
                inline-block
                text-red-500
                hover:text-red-400
                font-bold
                mt-2
                transition
              "
            >
              Login →
            </Link>

          </div>

          {/* BACK HOME */}

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

      </div>

    </section>
  );
}

export default Register;