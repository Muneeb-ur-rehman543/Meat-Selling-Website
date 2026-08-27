import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";

function Products() {

  const [allProducts, setAllProducts] = useState([]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // =========================
  // LOAD ALL PRODUCTS
  // =========================

  const loadProducts = () => {

    const adminProducts =
      JSON.parse(
        localStorage.getItem("adminProducts")
      ) || [];

    setAllProducts([
      ...products,
      ...adminProducts,
    ]);
  };

  useEffect(() => {

    loadProducts();

    // Update when Admin adds product
    const handleProductsUpdated = () => {
      loadProducts();
    };

    window.addEventListener(
      "productsUpdated",
      handleProductsUpdated
    );

    return () => {
      window.removeEventListener(
        "productsUpdated",
        handleProductsUpdated
      );
    };

  }, []);

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {

      updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );

    } else {

      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];

    }

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert(`${product.name} added to cart!`);
  };

  return (

    <section
      id="products"
      className="
        relative
        py-24
        bg-[#0b0b0b]
        overflow-hidden
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[300px]
          bg-red-900/10
          blur-[120px]
          rounded-full
        "
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              border
              border-red-600/50
              text-red-500
              text-sm
              font-bold
              uppercase
              tracking-[4px]
              mb-6
            "
          >
            Our Products
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">

            Fresh Meat{" "}

            <span className="text-red-600">
              Collection
            </span>

          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Choose from our selection of fresh and premium
            quality meat products.
          </p>

        </div>

        {/* ================= PRODUCTS ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-7
          "
        >

          {allProducts.map((product) => (

            <div
              key={product.id}
              className="
                group
                relative
                bg-[#151515]
                border
                border-white/10
                rounded-2xl
                overflow-hidden
                shadow-xl

                hover:bg-[#2a0d12]
                hover:border-red-600
                hover:shadow-[0_0_35px_rgba(220,38,38,0.30)]
                hover:-translate-y-2

                transition-all
                duration-500
              "
            >

              {/* ================= IMAGE ================= */}

              <Link
                to={`/product/${product.id}`}
                className="relative h-64 overflow-hidden block"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover

                    group-hover:scale-110
                    group-hover:brightness-110

                    transition-all
                    duration-700
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent

                    group-hover:from-red-950/50

                    transition-all
                    duration-500
                  "
                ></div>

                {/* Category */}

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    bg-red-600
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                    uppercase
                  "
                >
                  {product.category}
                </span>

                {/* View Details */}

                <span
                  className="
                    absolute
                    bottom-4
                    right-4
                    bg-black/80
                    text-white
                    px-3
                    py-2
                    rounded-lg
                    text-xs
                    font-bold
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                  "
                >
                  View Details →
                </span>

              </Link>

              {/* ================= INFO ================= */}

              <div className="p-6">

                <Link
                  to={`/product/${product.id}`}
                  className="
                    text-xl
                    font-extrabold
                    text-white
                    hover:text-red-500
                    block
                    transition
                  "
                >
                  {product.name}
                </Link>

                <p
                  className="
                    mt-2
                    text-gray-400
                    text-sm
                    leading-relaxed
                    min-h-[48px]
                  "
                >
                  {product.description}
                </p>

                {/* Price + Cart */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >

                  <div>

                    <p className="text-2xl font-extrabold text-white">
                      Rs. {product.price}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {product.unit || "1 KG"}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="
                      bg-red-600
                      hover:bg-red-500
                      text-white
                      px-4
                      py-3
                      rounded-xl
                      font-bold
                      whitespace-nowrap
                      transition-all
                    "
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Products;