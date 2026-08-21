import heroImage from "../assets/images/hero-meat.jpg";

function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Fresh Meat"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        <div className="max-w-2xl text-white">

          <p className="text-red-400 uppercase tracking-[4px] font-bold text-sm mb-5">
            Premium Quality Meat
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Fresh Meat,
            <br />
            Delivered Fresh
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Enjoy fresh, hygienic and premium quality meat delivered
            directly to your doorstep.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300">
              Shop Now
            </button>

            <a
              href="#categories"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition duration-300"
            >
              Explore Categories
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;