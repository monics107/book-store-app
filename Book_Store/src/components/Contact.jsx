const Contact = () => {
  return (
    <section className="bg-[#020617] text-white px-6 lg:px-10 py-20">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-orange-400">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-10">
          Have questions about books, orders, or support?  
          We’re here to help you anytime.
        </p>

        {/* Form */}
        <div className="grid gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none"
          ></textarea>

          <button className="bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition">
            Send Message
          </button>

        </div>

      </div>

    </section>
  )
}

export default Contact