import { useParams, useNavigate } from "react-router-dom";

import beefSteak from "../assets/images/beef.jpg";
import beefMince from "../assets/images/beef-mince.jpg";
import beefRibs from "../assets/images/beef-ribs.jpg";
import beefBoneless from "../assets/images/beef-boneless.jpg";

import chickenBreast from "../assets/images/chicken-breast.jpg";
import chickenWings from "../assets/images/chicken-wings.jpg";
import chickenLeg from "../assets/images/chicken-leg.jpg";
import chickenBoneless from "../assets/images/boneless-chicken.jpg";

import muttonChops from "../assets/images/mutton-chops.jpg";
import muttonLeg from "../assets/images/mutton-legs.jpg";
import muttonRibs from "../assets/images/mutton-ribs.jpg";
import muttonKarahi from "../assets/images/mutton-karahicut.jpg";

import freshFish from "../assets/images/fresh fish.jpg";
import fishFillet from "../assets/images/fish fillet.jpg";
import freshPrawns from "../assets/images/fresh-prawns.jpg";
import shrimp from "../assets/images/shrimp.jpg";

const categoryData = {
  beef: {
    name: "Beef",
    description: "Fresh and premium quality beef cuts",
    products: [
      {
        id: 1,
        name: "Beef Steak",
        price: 1800,
        description: "Tender beef steak cuts",
        image: beefSteak,
      },
      {
        id: 2,
        name: "Beef Mince",
        price: 1200,
        description: "Freshly prepared beef mince",
        image: beefMince,
      },
      {
        id: 3,
        name: "Beef Ribs",
        price: 1600,
        description: "Fresh and juicy beef ribs",
        image: beefRibs,
      },
      {
        id: 4,
        name: "Beef Boneless",
        price: 1900,
        description: "Premium boneless beef",
        image: beefBoneless,
      },
    ],
  },

  chicken: {
    name: "Chicken",
    description: "Fresh and hygienic chicken products",
    products: [
      {
        id: 5,
        name: "Chicken Breast",
        price: 950,
        description: "Fresh boneless chicken breast",
        image: chickenBreast,
      },
      {
        id: 6,
        name: "Chicken Wings",
        price: 850,
        description: "Fresh chicken wings",
        image: chickenWings,
      },
      {
        id: 7,
        name: "Chicken Legs",
        price: 800,
        description: "Fresh chicken leg pieces",
        image: chickenLeg,
      },
      {
        id: 8,
        name: "Chicken Boneless",
        price: 1000,
        description: "Premium boneless chicken",
        image: chickenBoneless,
      },
    ],
  },

  mutton: {
    name: "Mutton",
    description: "Tender and fresh premium mutton",
    products: [
      {
        id: 9,
        name: "Mutton Chops",
        price: 2500,
        description: "Tender mutton chops",
        image: muttonChops,
      },
      {
        id: 10,
        name: "Mutton Leg",
        price: 2400,
        description: "Fresh premium mutton leg",
        image: muttonLeg,
      },
      {
        id: 11,
        name: "Mutton Ribs",
        price: 2300,
        description: "Fresh mutton ribs",
        image: muttonRibs,
      },
      {
        id: 12,
        name: "Mutton Karahi Cut",
        price: 2200,
        description: "Perfectly cut mutton for karahi",
        image: muttonKarahi,
      },
    ],
  },

  seafood: {
    name: "Seafood",
    description: "Fresh fish and premium seafood",
    products: [
      {
        id: 13,
        name: "Fresh Fish",
        price: 1600,
        description: "Fresh quality fish",
        image: freshFish,
      },
      {
        id: 14,
        name: "Fish Fillet",
        price: 1800,
        description: "Fresh boneless fish fillet",
        image: fishFillet,
      },
      {
        id: 15,
        name: "Fresh Prawns",
        price: 2800,
        description: "Premium fresh prawns",
        image: freshPrawns,
      },
      {
        id: 16,
        name: "Shrimp",
        price: 2600,
        description: "Fresh quality shrimp",
        image: shrimp,
      },
    ],
  },
};

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const data = categoryData[category];

  if (!data) {
    return (
      <section className="min-h-screen bg-[#090909] flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-red-500">
          Category Not Found
        </h1>
      </section>
    );
  }

  const addToCart = (product) => {
    const loggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn) {
      alert("Please login first to add products to cart.");
      navigate("/login");
      return;
    }

    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
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
    <section className="min-h-screen bg-[#090909] py-24 relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-[4px] font-bold text-sm mb-3">
            Fresh Selection
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            {data.name}
          </h1>

          <p className="text-gray-400 text-lg mt-4">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {data.products.map((product) => (
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
                hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="relative h-52 overflow-hidden bg-[#111111]">
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

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    bg-black/80
                    border
                    border-white/20
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                    uppercase
                  "
                >
                  Fresh
                </span>
              </div>

              <div className="p-6">
                <h2
                  className="
                    text-xl
                    font-extrabold
                    text-white
                    group-hover:text-red-500
                    transition-colors
                    duration-300
                  "
                >
                  {product.name}
                </h2>

                <p
                  className="
                    text-gray-400
                    text-sm
                    mt-2
                    min-h-[40px]
                    group-hover:text-gray-200
                    transition-colors
                    duration-300
                  "
                >
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-3 mt-6">
                  <div>
                    <p className="text-xl font-extrabold text-red-500">
                      Rs. {product.price}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      1 KG
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={!isLoggedIn}
                    className={`
                      text-white
                      px-4
                      py-3
                      rounded-xl
                      font-bold
                      whitespace-nowrap
                      transition-all
                      duration-300
                      ${
                        isLoggedIn
                          ? "bg-red-600 hover:bg-red-500 cursor-pointer group-hover:shadow-lg group-hover:shadow-red-600/40"
                          : "bg-gray-600 opacity-50 cursor-not-allowed"
                      }
                    `}
                  >
                    {isLoggedIn ? "Add to Cart" : "Login to Add"}
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

export default CategoryPage;

