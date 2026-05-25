const SearchResults = ({ searchTerm, allBooks }) => {

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-14 text-white">

      <h2 className="text-3xl font-bold mb-8">
        Search Results for "{searchTerm}"
      </h2>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-[#081028] rounded-2xl overflow-hidden border border-slate-800"
            >

              <img
                src={book.image}
                alt={book.title}
                className="h-[320px] w-full object-cover"
              />

              <div className="p-5">
                <p className="text-gray-400 text-sm">{book.author}</p>
                <h3 className="text-xl font-bold mt-2">{book.title}</h3>
                <p className="text-orange-400 font-bold mt-4">
                  {book.price}
                </p>
              </div>

            </div>
          ))}

        </div>
      ) : (
        <p className="text-gray-400">No books found 😢</p>
      )}

    </section>
  )
}

export default SearchResults