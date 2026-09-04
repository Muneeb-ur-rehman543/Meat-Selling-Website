import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    } catch (error) {
      console.error("Cart loading error:", error);
      setCart([]);
    }
  }, []);

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/cart");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customer: formData,
      items: cart,
      total: total,
      status: "Pending",
      date: new Date().toLocaleString(),
    };

    try {
      const existingOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      const updatedOrders = [
        ...existingOrders,
        newOrder,
      ];

      localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
      );

      localStorage.removeItem("cart");

      window.dispatchEvent(new Event("cartUpdated"));

      alert("Order placed successfully!");

      navigate("/");
    } catch (error) {
      console.error("Order saving error:", error);
      alert("Something went wrong while placing your order.");
    }
  };

  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6 py-24">
        <div className="text-center">
          <div className="text-7xl mb-6">
            🛒
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 mb-8">
            Add some fresh meat products before checkout.
          </p>

          <Link
            to="/"
            className="
              inline-block
              bg-red-600
              hover:bg-red-500
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              transition
            "
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-[4px] text-sm font-bold mb-4">
            Delivery Information
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold">
            Fresh Meat{" "}
            <span className="text-red-600">
              Checkout
            </span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Enter your delivery information to complete your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <form
              onSubmit={placeOrder}
              className="
                bg-[#151515]
                border
                border-white/10
                rounded-3xl
                p-7
                md:p-9
                shadow-2xl
              "
            >
              <h2 className="text-2xl font-extrabold mb-8">
                Delivery Information
              </h2>

              <div className="mb-6">
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
                    border
                    border-white/10
                    text-white
                    px-4
                    py-4
                    rounded-xl
                    outline-none
                    focus:border-red-600
                    transition
                  "
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                  required
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border
                    border-white/10
                    text-white
                    px-4
                    py-4
                    rounded-xl
                    outline-none
                    focus:border-red-600
                    transition
                  "
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-2">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border
                    border-white/10
                    text-white
                    px-4
                    py-4
                    rounded-xl
                    outline-none
                    focus:border-red-600
                    transition
                  "
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-300 font-semibold mb-2">
                  Complete Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House No, Street, Area..."
                  rows="5"
                  required
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border
                    border-white/10
                    text-white
                    px-4
                    py-4
                    rounded-xl
                    outline-none
                    focus:border-red-600
                    transition
                    resize-none
                  "
                ></textarea>
              </div>

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
                🛒 Place Order
              </button>
            </form>
          </div>

          <div>
            <div
              className="
                bg-[#151515]
                border
                border-white/10
                rounded-3xl
                p-7
                shadow-2xl
                lg:sticky
                lg:top-28
              "
            >
              <h2 className="text-2xl font-extrabold mb-7">
                Order Summary
              </h2>

              <div className="space-y-5 mb-7">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex
                      justify-between
                      gap-4
                      border-b
                      border-white/10
                      pb-5
                    "
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-16
                          h-16
                          object-cover
                          rounded-lg
                        "
                      />

                      <div>
                        <p className="text-white font-bold">
                          {item.name}
                        </p>

                        <p className="text-gray-500 text-sm mt-1">
                          Qty: {item.quantity || 1}
                        </p>
                      </div>
                    </div>

                    <p className="text-red-500 font-bold whitespace-nowrap">
                      Rs.{" "}
                      {Number(item.price) *
                        (item.quantity || 1)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-gray-400 mb-4">
                <span>
                  Total Items
                </span>

                <span className="text-white font-bold">
                  {cart.reduce(
                    (sum, item) =>
                      sum + (item.quantity || 1),
                    0
                  )}
                </span>
              </div>

              <div className="flex justify-between text-gray-400 mb-5">
                <span>
                  Delivery
                </span>

                <span className="text-green-500 font-bold">
                  FREE
                </span>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">
                    Total
                  </span>

                  <span className="text-3xl font-extrabold text-red-500">
                    Rs. {total}
                  </span>
                </div>
              </div>

              <Link
                to="/cart"
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
                ← Back to Cart
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;