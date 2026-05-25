import { useState } from "react"

import { useBooks } from "../context/BookContext"

const AdminPanel = () => {

  const {
    books,
    addBook,
    deleteBook,
    updateBook
  } = useBooks()

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const [editId, setEditId] = useState(null)

  // ADD
  const handleAdd = () => {

    if (
      !title ||
      !author ||
      !price ||
      !image
    ) {
      alert("Fill all fields")
      return
    }

    addBook({
      title,
      author,
      price,
      image
    })

    setTitle("")
    setAuthor("")
    setPrice("")
    setImage("")
  }

  // DELETE
  const handleDelete = (id) => {

    deleteBook(id)
  }

  // EDIT
  const handleEdit = (book) => {

    setEditId(book.id)

    setTitle(book.title)
    setAuthor(book.author)
    setPrice(book.price)
    setImage(book.image)
  }

  // UPDATE
  const handleUpdate = () => {

    updateBook(editId, {
      title,
      author,
      price,
      image
    })

    setEditId(null)

    setTitle("")
    setAuthor("")
    setPrice("")
    setImage("")
  }

  return (

    <section className="bg-[#020617] min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold mb-10 text-orange-500">

        👑 Admin Panel

      </h1>

      {/* FORM */}
      <div className="bg-[#081028] p-6 rounded-2xl mb-10 space-y-4 border border-slate-800">

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full bg-slate-900 p-4 rounded-xl outline-none"
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
          className="w-full bg-slate-900 p-4 rounded-xl outline-none"
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="w-full bg-slate-900 p-4 rounded-xl outline-none"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          className="w-full bg-slate-900 p-4 rounded-xl outline-none"
        />

        {
          editId ? (

            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold"
            >
              Update Book
            </button>

          ) : (

            <button
              onClick={handleAdd}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
            >
              Add Book
            </button>

          )
        }

      </div>

      {/* BOOK LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {
          books.map((book) => (

            <div
              key={book.id}
              className="bg-[#081028] p-5 rounded-2xl border border-slate-800"
            >

              {/* IMAGE */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-[300px] object-cover rounded-xl"
              />

              {/* DETAILS */}
              <h2 className="text-2xl font-bold mt-4">
                {book.title}
              </h2>

              <p className="text-gray-400 mt-2">
                {book.author}
              </p>

              <p className="text-orange-400 text-xl mt-2">
                {book.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-5">

                <button
                  onClick={() =>
                    handleEdit(book)
                  }
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(book.id)
                  }
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        }

      </div>

    </section>
  )
}

export default AdminPanel