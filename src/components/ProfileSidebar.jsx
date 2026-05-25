import {
  FiHome,
  FiStar,
  FiAward,
  FiGrid,
  FiBookOpen,
  FiMessageSquare,
  FiSettings,
  FiLogOut,
  FiEdit2,
  FiX
} from "react-icons/fi"

import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

const ProfileSidebar = ({
  setShowProfile,
  setShowCart,
  setIsLoggedIn,
  user
}) => {

  const navigate = useNavigate()

  const handleScroll = (sectionId) => {
    setShowCart(false)

    setTimeout(() => {
      const element =
        document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, 100)

    setShowProfile(false)
  }

  const handleLogout = async () => {
    try {

      await signOut(auth)

      setIsLoggedIn(false)

      setShowProfile(false)

    } catch (error) {
      alert(error.message)
    }
  }

  return (

    <div className="fixed top-0 right-0 w-[320px] h-screen bg-[#020617] text-white p-4 z-[999] shadow-2xl overflow-y-auto">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-2">

          <div className="bg-orange-500 p-2 rounded-md">
            <FiBookOpen className="text-white text-xl" />
          </div>

          <h1 className="text-2xl font-bold">
            <span className="text-white">
              Lit
            </span>

            <span className="text-orange-500">
              Mart
            </span>
          </h1>

        </div>

        <button
          onClick={() => setShowProfile(false)}
          className="text-3xl hover:text-red-400 transition"
        >
          <FiX />
        </button>

      </div>

      {/* PROFILE CARD */}
      <div className="bg-[#071a45] rounded-[30px] p-5 border border-slate-800 min-h-[88vh]">

        <div className="flex flex-col items-center relative">

          <button className="absolute top-0 right-0 bg-slate-700 hover:bg-slate-600 p-2 rounded-xl transition">
            <FiEdit2 />
          </button>

          <img
            src={
              user?.photoURL ||
              "https://i.pravatar.cc/150?img=32"
            }
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-slate-700"
          />

          <h2 className="text-2xl font-bold mt-4 text-center">
            {
              user?.displayName ||
              "LitMart User"
            }
          </h2>

          <p className="text-gray-400 text-sm mt-1 text-center break-all">
            {user?.email}
          </p>

          <div className="mt-4 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
            👑 Premium Member
          </div>

        </div>

        {/* MENU */}
        <div className="mt-8 flex flex-col gap-3">

          <button
            onClick={() => handleScroll("home")}
            className="w-full flex items-center gap-4 bg-blue-700 hover:bg-blue-600 px-5 py-4 rounded-2xl"
          >
            <FiHome className="text-2xl" />
            Dashboard
          </button>

          <button
            onClick={() => handleScroll("shop")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <FiStar className="text-2xl" />
            New Arrivals
          </button>

          <button
            onClick={() => handleScroll("authors")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <FiAward className="text-2xl" />
            Authors
          </button>

          <button
            onClick={() => handleScroll("genres")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <FiGrid className="text-2xl" />
            Categories
          </button>

          <button
            onClick={() => {
              setShowCart(true)
              setShowProfile(false)
            }}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <FiBookOpen className="text-2xl" />
            Add To Cart
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800"
          >
            <FiMessageSquare className="text-2xl" />
            Contact
          </button>

          <button
            onClick={() => {
              navigate("/admin")
              setShowProfile(false)
            }}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-orange-500/20 hover:text-orange-400"
          >
            <FiSettings className="text-2xl" />
            Admin Panel
          </button>

          <div className="border-t border-slate-700 my-2"></div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-red-500/20 hover:text-red-400"
          >
            <FiLogOut className="text-2xl" />
            Log Out
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProfileSidebar