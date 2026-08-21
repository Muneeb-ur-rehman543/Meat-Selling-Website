function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#160A0D] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="inline-block text-red-500 font-bold uppercase tracking-[4px] text-sm mb-5">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Freshness You Can{" "}
            <span className="text-red-500">
              Trust
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 text-lg leading-relaxed">
            We are committed to providing fresh, hygienic and premium
            quality meat for you and your family.
          </p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {/* Premium Quality */}
          <div className="group bg-[#211014] border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/60 hover:-translate-y-2 transition-all duration-500 shadow-xl">

            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/20 transition">
              <span className="text-4xl">
                🥩
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-4">
              Premium Quality
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We provide carefully selected and premium quality
              meat products.
            </p>

          </div>

          {/* Clean & Hygienic */}
          <div className="group bg-[#211014] border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/60 hover:-translate-y-2 transition-all duration-500 shadow-xl">

            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/20 transition">
              <span className="text-4xl">
                🧼
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-4">
              Clean & Hygienic
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Our meat is handled and prepared while maintaining
              proper hygiene standards.
            </p>

          </div>

          {/* Fast Delivery */}
          <div className="group bg-[#211014] border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/60 hover:-translate-y-2 transition-all duration-500 shadow-xl">

            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/20 transition">
              <span className="text-4xl">
                🚚
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-4">
              Fast Delivery
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Get your fresh meat delivered conveniently to
              your doorstep.
            </p>

          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 text-center">

          <div className="inline-flex items-center gap-3 bg-red-600/10 border border-red-600/30 px-6 py-3 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

            <span className="text-red-400 font-semibold">
              Fresh • Hygienic • Premium • Delivered
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;