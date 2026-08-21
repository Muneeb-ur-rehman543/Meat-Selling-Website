function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-red-600"
    >
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        <p className="text-red-100 uppercase tracking-[3px] font-bold text-sm mb-3">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
          Need Fresh Meat?
        </h2>

        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
          Contact us today to learn more about our fresh meat
          products and place your order.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="tel:+923001234567"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            📞 Call Us
          </a>

          <a
            href="mailto:info@freshmeat.com"
            className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition"
          >
            ✉ Email Us
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;