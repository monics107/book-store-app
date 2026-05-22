import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { FaUserCircle } from "react-icons/fa"

const Navbar = ({
  searchTerm,
  setSearchTerm,
  cart,
  setShowCart
}) => {

  // 🔥 REAL SCROLL NAVIGATION
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchTerm)
    }
  }

  const handleUserClick = () => {
    console.log("User profile clicked")
  }

  return (
    <nav className="bg-[#020617] text-white px-10 py-5 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50">

      {/* Logo */}
      <h1
        onClick={() => handleNavClick("home")}
        className="text-3xl font-bold text-orange-500 cursor-pointer"
      >
        LitMart
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">

        <li onClick={() => handleNavClick("home")} className="hover:text-orange-400 cursor-pointer">
          Home
        </li>

        <li onClick={() => handleNavClick("shop")} className="hover:text-orange-400 cursor-pointer">
          Shop
        </li>

       <li onClick={() => handleNavClick("genres")} className="hover:text-orange-400 cursor-pointer">
          Genres
       </li>

        <li onClick={() => handleNavClick("authors")} className="hover:text-orange-400 cursor-pointer">
          Authors
        </li>

      
        <li onClick={() => handleNavClick("contact")} className="hover:text-orange-400 cursor-pointer">
          Contact
        </li>

      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center bg-slate-900 px-4 py-2 rounded-full border border-slate-700">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search books, authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="bg-transparent outline-none px-3 text-sm text-white w-52"
          />

        </div>

        {/* Cart */}
        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >

          <FiShoppingCart className="text-2xl hover:text-orange-400 transition" />

          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs px-1 rounded-full">
            {cart.length}
          </span>

        </div>

        {/* User */}
        <FaUserCircle
          className="text-3xl cursor-pointer hover:text-orange-400 transition"
          onClick={handleUserClick}
        />

      </div>

    </nav>
  )
}

export default Navbar