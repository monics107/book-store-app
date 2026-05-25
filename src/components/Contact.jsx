import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // submit logic here
    console.log(formData)

    setSuccess(true)

    // clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    })

    // hide success after 3 sec
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <section className="bg-[#020617] text-white px-6 lg:px-10 py-20">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-6 text-orange-400">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-10">
          Have questions about books, orders, or support?
          We’re here to help you anytime.
        </p>

        {success && (
          <div className="mb-6 bg-green-600/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-5">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact