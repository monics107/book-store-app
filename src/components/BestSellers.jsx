import { useState } from "react"
import { useBooks } from "../context/BookContext"

import book1 from "../assets/Bestseller1.png"
import book2 from "../assets/Bestseller2.png"
import book3 from "../assets/Bestseller3.png"
import book4 from "../assets/Bestseller4.png"

const defaultBooks = [
  {
    id: 1,
    title: "ASHES OF ASCENSION",
    subtitle: "A LOVE THAT DEFIES THE NIGHT",
    author: "Eleanor Vance",
    price: "$20.99",
    image: book1,
  },
  {
    id: 2,
    title: "WHISPERS IN THE GLOOM",
    subtitle: "SHADOWS ALLEY",
    author: "Isolde Blackwood",
    price: "$18.50",
    image: book2,
  },
  {
    id: 3,
    title: "NIGHTFALL'S ECHO",
    subtitle: "ECHOES",
    author: "Sophia Bennett",
    price: "$21.00",
    image: book3,
  },
  {
    id: 4,
    title: "A LIFE WELL LIVED",
    subtitle: "THE LIFE AND LEGACY OF ELEANOR VANCE",
    author: "Oliver James",
    price: "$32.00",
    image: book4,
  },
]

const BestSellers = ({
  addToCart,
  searchTerm = "",
}) => {

  const { books } = useBooks()

  const [showAll, setShowAll] =
    useState(false)

  const allBooks = [
    ...defaultBooks,
    ...books
  ]

  const filteredBooks = allBooks.filter(
    (book) =>
      book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      book.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (book.subtitle || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  )

  const displayedBooks = showAll
    ? filteredBooks
    : filteredBooks.slice(0, 4)

  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-14 text-white">

      <div className="flex items-center justify-between mb-10">

        <h2 className="text-4xl font-bold">
          Best Sellers
        </h2>

        <button
          onClick={() =>
            setShowAll(!showAll)
          }
          className="text-orange-400 hover:text-orange-500 transition text-sm font-medium"
        >
          {showAll
            ? "Show Less ←"
            : "View All →"}
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {displayedBooks.length > 0 ? (

          displayedBooks.map((book) => (

            <div
              key={book.id}
              className="bg-[#081028] rounded-2xl overflow-hidden border border-slate-800 hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-[360px] w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">

                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  {book.subtitle}
                </p>

                <h3 className="text-2xl font-bold mt-2 leading-snug min-h-[70px]">
                  {book.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3">
                  {book.author}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6">

                  <p className="text-orange-400 text-2xl font-bold">
                    {book.price}
                  </p>

                  <button
                    onClick={() => addToCart(book)}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl text-sm font-semibold transition"
                  >
                    Add Cart
                  </button>

                </div>

              </div>

            </div>
          ))

        ) : (

          <div className="col-span-full text-center py-10">
            <p className="text-gray-400 text-xl">
              No books found 😢
            </p>
          </div>

        )}

      </div>

    </section>
  )
}

export default BestSellers