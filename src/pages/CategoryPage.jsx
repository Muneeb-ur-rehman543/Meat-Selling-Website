import { useParams } from "react-router-dom";

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
      },
      {
        id: 2,
        name: "Beef Mince",
        price: 1200,
        description: "Freshly prepared beef mince",
      },
      {
        id: 3,
        name: "Beef Ribs",
        price: 1600,
        description: "Fresh and juicy beef ribs",
      },
      {
        id: 4,
        name: "Beef Boneless",
        price: 1900,
        description: "Premium boneless beef",
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
      },
      {
        id: 6,
        name: "Chicken Wings",
        price: 850,
        description: "Fresh chicken wings",
      },
      {
        id: 7,
        name: "Chicken Legs",
        price: 800,
        description: "Fresh chicken leg pieces",
      },
      {
        id: 8,
        name: "Chicken Boneless",
        price: 1000,
        description: "Premium boneless chicken",
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
      },
      {
        id: 10,
        name: "Mutton Leg",
        price: 2400,
        description: "Fresh premium mutton leg",
      },
      {
        id: 11,
        name: "Mutton Ribs",
        price: 2300,
        description: "Fresh mutton ribs",
      },
      {
        id: 12,
        name: "Mutton Karahi Cut",
        price: 2200,
        description: "Perfectly cut mutton for karahi",
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
      },
      {
        id: 14,
        name: "Fish Fillet",
        price: 1800,
        description: "Fresh boneless fish fillet",
      },
      {
        id: 15,
        name: "Fresh Prawns",
        price: 2800,
        description: "Premium fresh prawns",
      },
      {
        id: 16,
        name: "Shrimp",
        price: 2600,
        description: "Fresh quality shrimp",
      },
    ],
  },
};

function CategoryPage() {
  const { category } = useParams();

  const data = categoryData[category];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">
          Category Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b0b0b] py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-red-950/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">

          <p className="inline-block text-red-500 uppercase tracking-[5px] font-bold text-sm mb-5 border border-red-600/40 px-5 py-2 rounded-full">
            Fresh Selection
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            {data.name}
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            {data.description}
          </p>

        </div>

        {/* ================= PRODUCTS ================= */}
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

              {/* ================= IMAGE AREA ================= */}
              <div
                className="
                  h-52
                  bg-[#202020]
                  flex
                  items-center
                  justify-center
                  relative
                  overflow-hidden

                  group-hover:bg-[#3a1118]

                  transition-all
                  duration-500
                "
              >

                {/* Meat Emoji */}
                <span
                  className="
                    text-7xl
                    transition-all
                    duration-500

                    group-hover:scale-125
                    group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]
                  "
                >
                  🥩
                </span>

                {/* Fresh Badge */}
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

                    group-hover:bg-red-600
                    group-hover:border-red-500

                    transition-all
                    duration-300
                  "
                >
                  FRESH
                </span>

              </div>

              {/* ================= PRODUCT INFO ================= */}
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

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-6 gap-3">

                  <span
                    className="
                      text-xl
                      font-extrabold
                      text-red-500
                    "
                  >
                    Rs. {product.price}
                  </span>

                  <button
                    className="
                      bg-red-600
                      text-white
                      px-4
                      py-3
                      rounded-xl
                      font-bold
                      whitespace-nowrap

                      hover:bg-red-500

                      group-hover:shadow-lg
                      group-hover:shadow-red-600/40

                      transition-all
                      duration-300
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

export default CategoryPage;