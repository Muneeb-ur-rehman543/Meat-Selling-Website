import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Total price
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  // Total items
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  // Proceed to checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/checkout");
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">

          <p className="text-red-500 uppercase tracking-[4px] font-bold text-sm mb-4">
            Your Shopping Cart
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Fresh Meat{" "}
            <span className="text-red-600">
              Cart
            </span>
          </h1>

          <p className="text-gray-400 mt-4">
            Review your selected meat products before checkout.
          </p>

        </div>

        {/* ================= EMPTY CART ================= */}
        {cart.length === 0 ? (

          <div className="text-center bg-[#151515] border border-white/10 rounded-3xl p-16">

            <div className="text-6xl mb-6">
              🛒
            </div>

            <h2 className="text-3xl font-bold text-white mb-3">
              Your Cart is Empty
            </h2>

            <p className="text-gray-400 mb-8">
              You haven't added any products yet.
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

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="
                    group
                    bg-[#151515]
                    border
                    border-white/10
                    rounded-2xl
                    p-5
                    flex
                    flex-col
                    sm:flex-row
                    gap-5
                    items-center

                    hover:bg-[#2a0d12]
                    hover:border-red-600/60

                    transition-all
                    duration-300
                  "
                >

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-32
                      h-32
                      object-cover
                      rounded-xl
                      border
                      border-white/10

                      group-hover:scale-105

                      transition
                      duration-300
                    "
                  />

                  {/* Product Information */}
                  <div className="flex-1 w-full">

                    <p className="text-red-500 text-xs uppercase font-bold tracking-wider">
                      {item.category}
                    </p>

                    <h2 className="text-2xl font-extrabold text-white mt-1">
                      {item.name}
                    </h2>

                    <p className="text-gray-400 text-sm mt-2">
                      {item.description}
                    </p>

                    <p className="text-red-500 font-extrabold text-xl mt-3">
                      Rs. {item.price}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      Price per KG
                    </p>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-[#222]
                        border
                        border-white/10
                        text-white
                        text-xl
                        font-bold

                        hover:bg-red-600
                        hover:border-red-600

                        transition
                      "
                    >
                      -
                    </button>

                    <span className="text-white font-bold text-lg w-6 text-center">
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-[#222]
                        border
                        border-white/10
                        text-white
                        text-xl
                        font-bold

                        hover:bg-red-600
                        hover:border-red-600

                        transition
                      "
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="
                      text-gray-500
                      hover:text-red-500
                      font-bold
                      transition
                    "
                  >
                    Remove
                  </button>

                </div>

              ))}

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="
                  text-red-500
                  hover:text-red-400
                  font-semibold
                  transition
                "
              >
                Clear Entire Cart
              </button>

            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="lg:col-span-1">

              <div
                className="
                  sticky
                  top-28
                  bg-[#151515]
                  border
                  border-white/10
                  rounded-3xl
                  p-7
                  shadow-2xl
                "
              >

                <h2 className="text-2xl font-extrabold text-white mb-6">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="flex justify-between text-gray-400 mb-4">
                  <span>Items</span>

                  <span>
                    {totalItems}
                  </span>
                </div>

                {/* Delivery */}
                <div className="flex justify-between text-gray-400 mb-4">
                  <span>Delivery</span>

                  <span className="text-green-500 font-semibold">
                    Free
                  </span>
                </div>

                {/* Divider */}
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

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="
                    w-full
                    mt-7
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
                  Proceed to Checkout
                </button>

                {/* Continue Shopping */}
                <Link
                  to="/"
                  className="
                    block
                    text-center
                    text-gray-400
                    hover:text-red-500
                    mt-5
                    font-semibold
                    transition
                  "
                >
                  ← Continue Shopping
                </Link>

              </div>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}

export default Cart;