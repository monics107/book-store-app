import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react"

const BookContext = createContext()

export const BookProvider = ({ children }) => {

  const [books, setBooks] = useState(() => {

    const savedBooks =
      localStorage.getItem("books")

    return savedBooks
      ? JSON.parse(savedBooks)
      : []
  })

  useEffect(() => {

    localStorage.setItem(
      "books",
      JSON.stringify(books)
    )

  }, [books])

  // ADD
  const addBook = (book) => {

    const newBook = {
      ...book,
      id: Date.now()
    }

    setBooks((prev) => [
      ...prev,
      newBook
    ])
  }

  // DELETE
  const deleteBook = (id) => {

    setBooks((prev) =>
      prev.filter(
        (book) => book.id !== id
      )
    )
  }

  // UPDATE
  const updateBook = (
    id,
    updatedBook
  ) => {

    setBooks((prev) =>

      prev.map((book) =>

        book.id === id
          ? {
              ...updatedBook,
              id
            }
          : book
      )
    )
  }

  return (

    <BookContext.Provider
      value={{
        books,
        addBook,
        deleteBook,
        updateBook
      }}
    >

      {children}

    </BookContext.Provider>
  )
}

export const useBooks = () => {

  return useContext(BookContext)
}