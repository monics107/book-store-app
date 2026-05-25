import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import { useBooks } from "./context/BookContext"

import AdminPanel from "./components/AdminPanel"
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
import Login from "./components/Login"
import ProfileSidebar from "./components/ProfileSidebar"

import book1 from "./assets/Book1.png";
import book2 from "./assets/Book2.png";
import book3 from "./assets/Book3.png";
import book4 from "./assets/Book4.png";

function App() {

  const { books } = useBooks()

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLogin =
      localStorage.getItem("isLoggedIn")

    return savedLogin === "true"
  })

  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("user")

    return savedUser
      ? JSON.parse(savedUser)
      : null
  })

  const [searchTerm, setSearchTerm] =
    useState("")

  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("cart")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

  const [showCart, setShowCart] =
    useState(false)

  const [showProfile, setShowProfile] =
    useState(false)

  const [toast, setToast] = useState({
    show: false,
    message: ""
  })

  useEffect(() => {
    localStorage.setItem(
      "isLoggedIn",
      isLoggedIn
    )
  }, [isLoggedIn])

  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    )
  }, [user])

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
  }, [cart])

  const allBooks = [
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
    },
    {
      id: 3,
      title: "The Silent Depths",
      author: "Eleanor Vance",
      price: "$22.00",
      image: book3
    },
    {
      id: 4,
      title: "Realm of Embers",
      author: "Sarah Jenkins",
      price: "$28.99",
      image: book4
    }
  ]

  const mergedBooks = [
    ...allBooks,
    ...books
  ]

  const showToast = (message) => {
    setToast({
      show: true,
      message
    })

    setTimeout(() => {
      setToast({
        show: false,
        message: ""
      })
    }, 1500)
  }

  const addToCart = (book) => {
    setCart((prev) => {
      const exists = prev.find(
        (item) => item.id === book.id
      )

      if (exists) {
        return prev.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      }

      return [
        ...prev,
        {
          ...book,
          quantity: 1
        }
      ]
    })

    showToast("✅ Added To Cart")
  }

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    )

    showToast("🗑️ Removed From Cart")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)

    setUser(null)

    localStorage.removeItem(
      "isLoggedIn"
    )

    localStorage.removeItem("user")

    showToast("👋 Logged Out")
  }

  if (!isLoggedIn) {
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
    )
  }

  return (
    <>
      {toast.show && (
        <div className="fixed top-6 right-6 z-[9999] animate-bounce">
          <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl font-semibold text-sm">
            {toast.message}
          </div>
        </div>
      )}

      <Routes>

        <Route
          path="/"
          element={
            <div className="bg-[#020617] min-h-screen text-white">

              {showProfile && (
                <ProfileSidebar
                  setShowProfile={setShowProfile}
                  setShowCart={setShowCart}
                  setIsLoggedIn={setIsLoggedIn}
                  handleLogout={handleLogout}
                  user={user}
                />
              )}

              <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                cart={cart}
                setShowCart={setShowCart}
                setShowProfile={setShowProfile}
              />

              {showCart ? (
                <Cart
                  cart={cart}
                  setCart={setCart}
                  removeFromCart={removeFromCart}
                />
              ) : searchTerm ? (
                <SearchResults
                  searchTerm={searchTerm}
                  allBooks={mergedBooks}
                />
              ) : (
                <>
                  <div id="home">
                    <Hero />
                  </div>

                  <div id="shop">
                    <NewArrivals
                      addToCart={addToCart}
                      searchTerm={searchTerm}
                    />

                    <BestSellers
                      addToCart={addToCart}
                      searchTerm={searchTerm}
                    />

                    <FlashSale />
                  </div>

                  <div id="genres">
                    <Genres />
                  </div>

                  <div id="authors">
                    <AuthorSpotlight />
                  </div>

                  <div id="contact">
                    <Contact />
                  </div>

                  <Reviews />

                  <Footer />
                </>
              )}
            </div>
          }
        />

        <Route
          path="/admin"
          element={
            <>
              {showProfile && (
                <ProfileSidebar
                  setShowProfile={setShowProfile}
                  setShowCart={setShowCart}
                  setIsLoggedIn={setIsLoggedIn}
                  handleLogout={handleLogout}
                  user={user}
                />
              )}

              <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                cart={cart}
                setShowCart={setShowCart}
                setShowProfile={setShowProfile}
              />

              <AdminPanel />
            </>
          }
        />

      </Routes>
    </>
  )
}

export default App