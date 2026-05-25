import heroImg from "../assets/hero.png"

const Hero = () => {

  // 🔥 SCROLL FUNCTION
  const handleScroll = (sectionId) => {

    const section = document.getElementById(sectionId)

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      })

    }
  }

  return (

    <section className="bg-[#020617] px-4 sm:px-6 lg:px-10 py-4 sm:py-6">

      <div className="relative min-h-[75vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center">

        {/* BACKGROUND */}
        <img
          src={heroImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-110 saturate-125 scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/60 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-2xl px-6 sm:px-10 lg:px-16 text-white py-16">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 text-orange-400 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">

            ✨ Trending Collection 2026

          </div>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">

            Discover Your <br />
            Next Favorite <br />
            Book

          </h1>

          {/* PARAGRAPH */}
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 mt-6 sm:mt-8 max-w-xl">

            Explore our curated collection of premium books,
            from thrilling mysteries to captivating romances.
            Elevate your reading experience with LitMart.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10">

            {/* EXPLORE BOOKS */}
            <button
              onClick={() => handleScroll("shop")}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg shadow-orange-500/30"
            >

              Explore Books

            </button>

            {/* BROWSE CATEGORIES */}
            <button
              onClick={() => handleScroll("genres")}
              className="w-full sm:w-auto border border-slate-400 hover:border-orange-500 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >

              Browse Categories

            </button>

          </div>

        </div>

        {/* GLOW EFFECT */}
        <div className="absolute top-10 right-6 sm:top-20 sm:right-20 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] bg-blue-400/20 blur-3xl rounded-full"></div>

      </div>

    </section>
  )
}

export default Hero