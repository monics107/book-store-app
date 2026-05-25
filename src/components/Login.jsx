import React, { useState } from "react"
import { Mail, Lock, Eye, ArrowRight } from "lucide-react"

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword
} from "firebase/auth"

import {
  auth,
  googleProvider
} from "../firebase"

const Login = ({
  setIsLoggedIn,
  setUser
}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignup, setIsSignup] = useState(false)

  const handleAuth = async () => {
    try {

      let userCredential

      if (isSignup) {

        userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )

      } else {

        userCredential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          )
      }

      setUser(userCredential.user)
      setIsLoggedIn(true)

    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {

      const result =
        await signInWithPopup(
          auth,
          googleProvider
        )

      setUser(result.user)
      setIsLoggedIn(true)

    } catch (error) {
      alert(error.message)
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#071126] via-[#0b1836] to-[#10204a] flex items-center justify-center px-4 relative overflow-hidden">

      {/* glow */}
      <div className="absolute w-[380px] h-[380px] bg-blue-600/20 blur-[140px] rounded-full"></div>

      {/* card */}
      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-[#11285c]/95 to-[#0b1836]/95 backdrop-blur-3xl shadow-2xl p-6 sm:p-8 md:p-10">

        {/* logo */}
        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">

            Lit
            <span className="text-orange-500">
              Mart
            </span>

          </h1>

          <p className="text-blue-200 mt-3 text-sm">
            ✨ Your Next Favorite Book Awaits ✨
          </p>

        </div>

        {/* title */}
        <div className="text-center mt-8">

          <h2 className="text-white text-3xl font-bold">

            {
              isSignup
                ? "Create Account"
                : "Welcome Back!"
            }

          </h2>

          <p className="text-blue-300 mt-2">

            {
              isSignup
                ? "Create your LitMart account"
                : "Please login to your account"
            }

          </p>

        </div>

        {/* email */}
        <div className="mt-6 rounded-2xl px-4 py-3 flex items-center gap-3 bg-[#132c63] border border-blue-500/20">

          <Mail
            className="text-blue-200"
            size={20}
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="bg-transparent outline-none text-white w-full placeholder:text-blue-300"
          />

        </div>

        {/* password */}
        <div className="mt-4 rounded-2xl px-4 py-3 flex items-center gap-3 bg-[#132c63] border border-blue-500/20">

          <Lock
            className="text-blue-200"
            size={20}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="bg-transparent outline-none text-white w-full placeholder:text-blue-300"
          />

          <Eye
            className="text-blue-300"
            size={18}
          />

        </div>

        {/* auth button */}
        <button
          onClick={handleAuth}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold"
        >

          {
            isSignup
              ? "Sign Up"
              : "Login"
          }

          <ArrowRight size={18} />

        </button>

        {/* divider */}
        <div className="flex items-center gap-3 my-5">

          <div className="flex-1 h-[1px] bg-blue-800/60"></div>

          <p className="text-blue-300 text-xs">
            or continue with
          </p>

          <div className="flex-1 h-[1px] bg-blue-800/60"></div>

        </div>

        {/* google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-[#132c63] hover:bg-[#183777] border border-blue-500/20 transition py-3 rounded-2xl text-white flex items-center justify-center gap-3"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google"
            className="w-5 h-5"
          />

          Continue with Google

        </button>

        {/* switch */}
        <p className="text-center text-blue-300 text-sm mt-6">

          {
            isSignup
              ? "Already have an account? "
              : "Don’t have an account? "
          }

          <span
            onClick={() =>
              setIsSignup(!isSignup)
            }
            className="text-orange-400 font-semibold cursor-pointer hover:text-orange-300"
          >

            {
              isSignup
                ? "Login"
                : "Sign Up"
            }

          </span>

        </p>

      </div>

    </div>
  )
}

export default Login