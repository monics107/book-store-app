import book1 from "../assets/book1.png"
import book2 from "../assets/book2.png"

const wishlistBooks = [
  {
    id: 1,
    title: "Celestial Silence",
    author: "A.R Novak",
    price: "$24.99",
    image: book1
  },
  {
    id: 2,
    title: "Crimson Promises",
    author: "Isolde Moreau",
    price: "$19.50",
    image: book2
  }
]

const Wishlist = () => {
  return (

    <div className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-4xl font-bold text-orange-400 mb-10">
        Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {wishlistBooks.map((book) => (

          <div
            key={book.id}
            className="bg-[#081028] rounded-2xl overflow-hidden border border-slate-800"
          >

            <img
              src={book.image}
              alt={book.title}
              className="h-[350px] w-full object-cover"
            />

            <div className="p-5">

              <p className="text-gray-400">
                {book.author}
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {book.title}
              </h2>

              <div className="flex items-center justify-between mt-6">

                <p className="text-orange-400 text-2xl font-bold">
                  {book.price}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl transition">

                  Add Cart

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Wishlist