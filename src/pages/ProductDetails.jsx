import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [quantity, setQuantity] = useState(1);

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (!product) {
    return (
      <section className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Product Not Found
          </h1>

          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const addToCart = () => {
    const loggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn) {
      alert("Please login first to add products to cart.");
      navigate("/login");
      return;
    }

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + quantity,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: quantity,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="min-h-screen bg-[#0b0b0b] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-red-950/20 blur-[130px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 font-semibold mb-10 transition"
        >
          ← Back to Products
        </Link>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            bg-[#151515]
            border
            border-white/10
            rounded-3xl
            overflow-hidden
            shadow-2xl
            hover:border-red-600/60
            transition-all
            duration-500
          "
        >

          <div className="relative h-[450px] lg:h-[600px] overflow-hidden">

            <img
              src={product.image}
              alt={product.name}
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-transform
                duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <span
              className="
                absolute
                top-6
                left-6
                bg-red-600
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
                uppercase
              "
            >
              {product.category}
            </span>

          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">

            <p className="text-red-500 uppercase tracking-[4px] text-sm font-bold mb-4">
              Fresh Selection
            </p>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
              {product.name}
            </h1>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">

              <p className="text-gray-500 text-sm">
                Price per KG
              </p>

              <p className="text-4xl font-extrabold text-red-500 mt-1">
                Rs. {product.price}
              </p>

            </div>

            <div className="mt-8">

              <p className="text-white font-bold mb-3">
                Quantity
              </p>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#222]
                    border
                    border-white/10
                    text-white
                    text-2xl
                    font-bold
                    hover:bg-red-600
                    hover:border-red-600
                    transition
                  "
                >
                  -
                </button>

                <span className="text-white text-xl font-bold w-8 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#222]
                    border
                    border-white/10
                    text-white
                    text-2xl
                    font-bold
                    hover:bg-red-600
                    hover:border-red-600
                    transition
                  "
                >
                  +
                </button>

                <span className="text-gray-500">
                  KG
                </span>

              </div>

            </div>

            <div className="mt-7 flex items-center justify-between">

              <span className="text-gray-400">
                Total
              </span>

              <span className="text-2xl font-extrabold text-white">
                Rs. {product.price * quantity}
              </span>

            </div>

            <button
              onClick={addToCart}
              disabled={!isLoggedIn}
              className={`
                mt-8
                w-full
                text-white
                py-4
                rounded-xl
                font-extrabold
                text-lg
                transition-all
                duration-300
                ${
                  isLoggedIn
                    ? "bg-red-600 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)] hover:-translate-y-1 cursor-pointer"
                    : "bg-gray-600 opacity-50 cursor-not-allowed"
                }
              `}
            >
              {isLoggedIn
                ? "🛒 Add to Cart"
                : "🔒 Login First"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetails;