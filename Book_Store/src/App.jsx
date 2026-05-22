import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import NewArrivals from "./components/NewArrivals"
import BestSellers from "./components/BestSellers"
import FlashSale from "./components/FlashSale"
import Genres from "./components/Genres"
import AuthorSpotlight from "./components/AuthorSpotlight"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import SearchResults from "./components/SearchResults"
import Cart from "./components/Cart"
import Contact from "./components/Contact"

// images
import book1 from "./assets/book1.png"
import book2 from "./assets/book2.png"
import book3 from "./assets/book3.png"
import book4 from "./assets/book4.png"

function App() {

  // 🔍 SEARCH
  const [searchTerm, setSearchTerm] = useState("")

  // 🛒 CART
  const [cart, setCart] = useState([])

  // 📄 CART PAGE
  const [showCart, setShowCart] = useState(false)

  // 🔔 TOAST
  const [toast, setToast] = useState({
    show: false,
    message: ""
  })

  // 📚 BOOK DATA
  const allBooks = [
    { id: 1, title: "Celestial Silence", author: "A.R Novak", price: "$24.99", image: book1 },
    { id: 2, title: "Crimson Promises", author: "Isolde Moreau", price: "$19.50", image: book2 },
    { id: 3, title: "The Silent Depths", author: "Eleanor Vance", price: "$22.00", image: book3 },
    { id: 4, title: "Realm of Embers", author: "Sarah Jenkins", price: "$28.99", image: book4 },
  ]

  // 🔥 TOAST FUNCTION
  const showToast = (message) => {
    setToast({ show: true, message })

    setTimeout(() => {
      setToast({ show: false, message: "" })
    }, 1500)
  }

  // ➕ ADD TO CART
  const addToCart = (book) => {
    console.log("Added:", book.title)

    setCart((prev) => {
      const exists = prev.find((item) => item.id === book.id)

      if (exists) {
        return prev.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...book, quantity: 1 }]
    })

    showToast("✅ Added to cart successfully")
  }

  // 🗑️ REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))

    showToast("🗑️ Removed from cart")
  }

  return (
    <div className="bg-[#020617] min-h-screen">

      {/* 🔔 TOAST */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-500 ease-in-out
          ${toast.show
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20"
          }
        `}
      >
        <div className="bg-black text-white px-4 py-2 rounded-lg shadow-lg border border-green-500">
          {toast.message}
        </div>
      </div>

      {/* NAVBAR */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cart={cart}
        setShowCart={setShowCart}
      />

      {/* CART PAGE */}
      {showCart ? (
        <Cart
          cart={cart}
          setCart={setCart}
          removeFromCart={removeFromCart}
        />
      ) : searchTerm ? (
        <SearchResults searchTerm={searchTerm} allBooks={allBooks} />
      ) : (
        <>
          {/* HOME */}
          <div id="home">
            <Hero />
          </div>

          {/* SHOP */}
          <div id="shop">
            <NewArrivals addToCart={addToCart} searchTerm={searchTerm} />
            <BestSellers addToCart={addToCart} />
            <FlashSale addToCart={addToCart} />
          </div>

          {/* GENRES */}
          <div id="genres">
            <Genres />
          </div>

          {/* AUTHORS */}
          <div id="authors">
            <AuthorSpotlight />
          </div>

          {/* CONTACT */}
          <div id="contact">
            <Contact />
          </div>

          {/* REVIEWS */}
          <Reviews />
        </>
      )}

      <Footer />

    </div>
  )
}

export default App