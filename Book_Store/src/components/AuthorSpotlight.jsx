import author from "../assets/author.png"

import book1 from "../assets/spot1.png"
import book2 from "../assets/spot2.png"
import book3 from "../assets/spot3.png"

const books = [
  {
    id: 1,
    title: "Crimson Night",
    price: "$22.00",
    image: book1,
  },

  {
    id: 2,
    title: "Midnight Whisper",
    price: "$19.50",
    image: book2,
  },

  {
    id: 3,
    title: "Violet Dawn",
    price: "$24.00",
    image: book3,
  },
]

const AuthorSpotlight = () => {
  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-16 text-white">

      <div className="bg-[#050b2c] rounded-3xl p-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}

        <div>

          {/* Author Image */}

          <img
            src={author}
            alt=""
            className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover mb-6"
          />

          <p className="text-orange-400 uppercase tracking-[4px] text-sm font-semibold mb-4">

            Author Spotlight

          </p>

          <h2 className="text-5xl font-bold mb-6">
            Elena Rostova
          </h2>

          <p className="text-gray-300 text-lg leading-9 max-w-xl">

            Bestselling author of the "Midnight Chronicles"
            series. Elena weaves intricate tales of dark
            fantasy, magic, and gripping suspense that
            keep readers awake all night long.

          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">

            View Full Profile

          </button>

        </div>

        {/* Right Side */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {books.map((book) => (

            <div
              key={book.id}
              className="bg-[#151c46] rounded-2xl p-4 hover:-translate-y-2 transition duration-300"
            >

              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[280px] object-cover rounded-xl"
              />

              <h3 className="text-2xl font-bold mt-5">
                {book.title}
              </h3>

              <p className="text-gray-300 text-xl mt-3">
                {book.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default AuthorSpotlight