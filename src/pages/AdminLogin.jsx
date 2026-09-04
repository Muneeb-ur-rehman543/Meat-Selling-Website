import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin");
    } else {
      setError("Invalid admin email or password");
    }
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#151515] border border-white/10 rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-white text-center mb-2">
          Admin Login
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to access Admin Dashboard
        </p>

        {error && (
          <p className="bg-red-900/30 border border-red-600 text-red-400 p-3 rounded-lg mb-5 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="w-full bg-[#0b0b0b] border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-red-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full bg-[#0b0b0b] border border-white/10 text-white px-4 py-3 rounded-xl outline-none focus:border-red-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-bold transition"
          >
            Login as Admin
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition"
          >
            Back to Home
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;