import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { FaUserCircle } from "react-icons/fa"

import {
  useNavigate,
  useLocation
} from "react-router-dom"

const Navbar = ({
  searchTerm = "",
  setSearchTerm = () => {},
  cart = [],
  setShowCart = () => {},
  setShowProfile = () => {}
}) => {

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (sectionId) => {
    setShowCart(false)
    setShowProfile(false)

    if (location.pathname !== "/") {
      navigate("/")

      setTimeout(() => {
        const element =
          document.getElementById(sectionId)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          })
        }
      }, 400)

    } else {
      const element =
        document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        })
      }
    }
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching:", searchTerm)
    }
  }

  return (
    <nav className="bg-[#020617] text-white px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50">

      {/* LOGO */}
      <h1
        onClick={() => handleNavClick("home")}
        className="text-2xl sm:text-3xl font-bold cursor-pointer shrink-0"
      >
        <span className="text-white">Lit</span>
        <span className="text-orange-500">Mart</span>
      </h1>

      {/* MENU */}
      <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium">

        <li
          onClick={() => handleNavClick("home")}
          className="hover:text-orange-400 cursor-pointer transition"
        >
          Home
        </li>

        <li
          onClick={() => handleNavClick("shop")}
          className="hover:text-orange-400 cursor-pointer transition"
        >
          Shop
        </li>

        <li
          onClick={() => handleNavClick("genres")}
          className="hover:text-orange-400 cursor-pointer transition"
        >
          Genres
        </li>

        <li
          onClick={() => handleNavClick("authors")}
          className="hover:text-orange-400 cursor-pointer transition"
        >
          Authors
        </li>

        <li
          onClick={() => handleNavClick("contact")}
          className="hover:text-orange-400 cursor-pointer transition"
        >
          Contact
        </li>

      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-slate-900 px-4 py-2 rounded-full border border-slate-700">
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            onKeyDown={handleSearch}
            className="bg-transparent outline-none px-3 text-sm text-white w-40 lg:w-52"
          />
        </div>

        {/* MOBILE SEARCH */}
        <button className="md:hidden">
          <FiSearch className="text-xl hover:text-orange-400 transition" />
        </button>

        {/* CART */}
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setShowCart(true)
            setShowProfile(false)
          }}
        >
          <FiShoppingCart className="text-xl sm:text-2xl hover:text-orange-400 transition" />

          <span className="absolute -top-2 -right-2 bg-orange-500 text-[10px] sm:text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>

        {/* PROFILE */}
        <FaUserCircle
          className="text-2xl sm:text-3xl cursor-pointer hover:text-orange-400 transition"
          onClick={() => setShowProfile(true)}
        />

      </div>

    </nav>
  )
}

export default Navbar