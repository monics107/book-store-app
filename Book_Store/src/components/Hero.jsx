import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-6">

      <div
        className="relative min-h-[85vh] rounded-3xl overflow-hidden flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(2,6,23,0.97) 35%,
            rgba(2,6,23,0.25)
          ), url(${heroImg})`,
        }}
      >

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-blue-950/20"></div>

        {/* Content */}

        <div className="relative z-10 max-w-2xl px-8 lg:px-16 text-white">

          {/* Tag */}

          <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-8">

            ✨ Trending Collection 2026

          </div>

          {/* Heading */}

          <h1 className="text-4xl lg:text-6xl font-black leading-tight uppercase">

            Discover Your <br />
            Next Favorite <br />
            Book

          </h1>

          {/* Paragraph */}

          <p className="text-gray-300 text-base lg:text-lg leading-8 mt-8 max-w-xl">

            Explore our curated collection of premium books,
            from thrilling mysteries to captivating romances.
            Elevate your reading experience with LitMart.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg shadow-orange-500/30">

              Explore Books

            </button>

            <button className="border border-slate-500 hover:border-orange-500 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition duration-300">

              Browse Categories

            </button>

          </div>

        </div>

        {/* Glow Effect */}

        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full"></div>

      </div>

    </section>
  )
}

export default Hero