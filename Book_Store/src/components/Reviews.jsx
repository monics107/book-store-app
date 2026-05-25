import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"

const reviews = [
  {
    id: 1,
    review:
      'Erabook offers the absolute best reading experience. The selection of sci-fi novels is unmatched, and the high-end dark mode interface is so easy on the eyes during late-night browsing sessions.',

    name: "Michael Trent",

    role: "Avid Reader",

    image: user1,
  },

  {
    id: 2,
    review:
      "I love the fast checkout and the gorgeous design. It feels like I'm stepping into a luxury boutique every time I search for a new fantasy novel. Highly recommend their curated collections!",

    name: "Sarah Jenkins",

    role: "Fantasy Enthusiast",

    image: user2,
  },

  {
    id: 3,
    review:
      "The author spotlight section helped me discover so many hidden gems. The website is incredibly fast and finding exactly what I want is always a breeze. A truly premium experience.",

    name: "David Osei",

    role: "Book Club Host",

    image: user3,
  },
]

const Reviews = () => {
  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-16 text-white">

      {/* Heading */}

      <h2 className="text-5xl font-bold mb-12">
        Reader Reviews
      </h2>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {reviews.map((item) => (

          <div
            key={item.id}
            className="bg-[#050b2c] rounded-3xl p-8 border border-[#0d163d]"
          >

            {/* Stars */}

            <div className="flex gap-2 text-orange-400 text-2xl mb-8">

              ⭐ ⭐ ⭐ ⭐ ⭐

            </div>

            {/* Review */}

            <p className="text-gray-300 text-xl leading-10">

              "{item.review}"

            </p>

            {/* User */}

            <div className="flex items-center gap-4 mt-10 border-t border-[#10193f] pt-6">

              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-lg">
                  {item.role}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Reviews