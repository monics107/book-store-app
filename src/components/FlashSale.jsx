import { useEffect, useState } from "react"

import saleBook from "../assets/flashsale.png"

const FlashSale = ({
  addToCart
}) => {

  // ⏳ TIMER STATE
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  })

  // 📚 FLASH SALE BOOK
  const saleBookData = {
    id: 999,
    title: "Flash Sale Special",
    author: "Premium Collection",
    price: "$9.99",
    image: saleBook
  }

  // ⏰ COUNTDOWN
  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let { hours, minutes, seconds } = prev

        if (seconds > 0) {

          seconds--

        } else {

          if (minutes > 0) {

            minutes--
            seconds = 59

          } else {

            if (hours > 0) {

              hours--
              minutes = 59
              seconds = 59

            }
          }
        }

        return {
          hours,
          minutes,
          seconds
        }
      })

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (

    <section className="bg-[#020617] px-6 lg:px-10 py-16">

      <div className="bg-gradient-to-r from-[#2456b3] to-[#1a3f91] rounded-[30px] overflow-hidden px-8 lg:px-16 py-14 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-2xl">

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            Flash Sale!
            <br />
            Up to 50% Off

          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">

            Expand your library without emptying your wallet.
            Grab your favorite premium titles before the countdown ends.

          </p>

          {/* TIMER */}
          <div className="flex gap-5 mt-10 flex-wrap">

            {/* HOURS */}
            <div className="bg-[#081028] w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-lg">

              <h2 className="text-orange-400 text-5xl font-bold">

                {String(timeLeft.hours).padStart(2, "0")}

              </h2>

              <p className="text-gray-400 text-sm tracking-[3px] mt-2">

                HOURS

              </p>

            </div>

            {/* MINUTES */}
            <div className="bg-[#081028] w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-lg">

              <h2 className="text-orange-400 text-5xl font-bold">

                {String(timeLeft.minutes).padStart(2, "0")}

              </h2>

              <p className="text-gray-400 text-sm tracking-[3px] mt-2">

                MINS

              </p>

            </div>

            {/* SECONDS */}
            <div className="bg-[#081028] w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-lg">

              <h2 className="text-orange-400 text-5xl font-bold">

                {String(timeLeft.seconds).padStart(2, "0")}

              </h2>

              <p className="text-gray-400 text-sm tracking-[3px] mt-2">

                SECS

              </p>

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => addToCart(saleBookData)}
            className="mt-10 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
          >

            Add To Cart

          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-14 lg:mt-0">

          <img
            src={saleBook}
            alt="Flash Sale Book"
            className="w-[420px] lg:w-[520px] object-contain hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  )
}

export default FlashSale