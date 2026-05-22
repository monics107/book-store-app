import book1 from "../assets/book1.png"
import book2 from "../assets/book2.png"
import book3 from "../assets/book3.png"
import book4 from "../assets/book4.png"

const books = [
  {
    id: 1,
    title: "Celestial Silence",
    author: "A.R Novak",
    price: "$24.99",
    image: book1,
  },
  {
    id: 2,
    title: "Crimson Promises",
    author: "Isolde Moreau",
    price: "$19.50",
    image: book2,
  },
  {
    id: 3,
    title: "The Silent Depths",
    author: "Eleanor Vance",
    price: "$22.00",
    image: book3,
  },
  {
    id: 4,
    title: "Realm of Embers",
    author: "Sarah Jenkins",
    price: "$28.99",
    image: book4,
  },
]

const NewArrivals = ({
  searchTerm = "",
  addToCart
}) => {

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-14 text-white">

      {/* Heading */}
      <div className="flex items-center justify-between mb-10">

        <h2 className="text-4xl font-bold">
          New Arrivals
        </h2>

        <button className="text-orange-400 hover:text-orange-500 transition text-sm font-medium">
          View All →
        </button>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (

            <div
              key={book.id}
              className="bg-[#081028] rounded-2xl overflow-hidden border border-slate-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30 transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-[380px] w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="text-gray-400 text-sm">
                  {book.author}
                </p>

                <h3 className="text-2xl font-bold mt-2 leading-snug">
                  {book.title}
                </h3>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-6">

                  <p className="text-orange-400 text-2xl font-bold">
                    {book.price}
                  </p>

                  <button
                    onClick={() => addToCart(book)}
                    className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl text-sm font-semibold transition"
                  >
                    Add Cart
                  </button>

                </div>

              </div>

            </div>

          ))
        ) : (
          <p className="text-gray-400">No books found 😢</p>
        )}

      </div>

    </section>
  )
}

export default NewArrivals