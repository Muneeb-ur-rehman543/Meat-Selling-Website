import { Link } from "react-router-dom";

import beef from "../assets/images/beef.jpg";
import chicken from "../assets/images/chicken.jpg";
import mutton from "../assets/images/mutton.jpg";
import seafood from "../assets/images/seafood.jpg";

function Categories() {
  const categories = [
    {
      name: "Beef",
      slug: "beef",
      image: beef,
      description: "Premium quality fresh beef",
    },
    {
      name: "Chicken",
      slug: "chicken",
      image: chicken,
      description: "Fresh and hygienic chicken",
    },
    {
      name: "Mutton",
      slug: "mutton",
      image: mutton,
      description: "Tender and fresh mutton",
    },
    {
      name: "Seafood",
      slug: "seafood",
      image: seafood,
      description: "Fresh fish and seafood",
    },
  ];

  return (
    <section
      id="categories"
      className="relative py-24 bg-[#0b0b0b] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-900/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full border border-red-600/50 text-red-500 text-sm font-bold uppercase tracking-[4px] mb-6">
            Our Categories
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Choose Your{" "}
            <span className="text-red-600">
              Favorite
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Premium quality meat, carefully selected and freshly
            prepared for your table.
          </p>

        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {categories.map((category) => (
            <div
              key={category.slug}
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

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
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

                {/* Dark Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    group-hover:from-red-950/50
                    transition-all
                    duration-500
                  "
                ></div>

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

              {/* Content */}
              <div className="p-6">

                <h3
                  className="
                    text-2xl
                    font-extrabold
                    text-white

                    group-hover:text-red-500

                    transition-colors
                    duration-300
                  "
                >
                  {category.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-gray-400
                    leading-relaxed

                    group-hover:text-gray-200

                    transition-colors
                    duration-300
                  "
                >
                  {category.description}
                </p>

                {/* Explore Button */}
                <Link
                  to={`/category/${category.slug}`}
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    w-full

                    bg-red-600
                    hover:bg-red-500

                    text-white
                    px-5
                    py-3

                    rounded-xl
                    font-bold

                    group-hover:shadow-lg
                    group-hover:shadow-red-600/30

                    transition-all
                    duration-300
                  "
                >
                  <span>
                    Explore {category.name}
                  </span>

                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;