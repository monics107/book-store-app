import genre1 from "../assets/genre1.png"
import genre2 from "../assets/genre2.png"
import genre3 from "../assets/genre3.png"
import genre4 from "../assets/genre4.png"
import genre5 from "../assets/genre5.png"
import genre6 from "../assets/genre6.png"

const genres = [
  {
    id: 1,
    title: "Science Fiction",
    image: genre1,
  },

  {
    id: 2,
    title: "Romance",
    image: genre2,
  },

  {
    id: 3,
    title: "Fantasy",
    image: genre3,
  },

  {
    id: 4,
    title: "Thriller",
    image: genre4,
  },

  {
    id: 5,
    title: "Biography",
    image: genre5,
  },

  {
    id: 6,
    title: "Self Development",
    image: genre6,
  },
]

const Genres = () => {
  return (
    <section className="bg-[#020617] px-6 lg:px-10 py-14 text-white">

      {/* Heading */}

      <h2 className="text-4xl font-bold mb-10">
        Popular Genres
      </h2>

      {/* Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {genres.map((genre) => (

          <div
            key={genre.id}
            className="relative overflow-hidden rounded-3xl group cursor-pointer"
          >

            {/* Image */}

            <img
              src={genre.image}
              alt={genre.title}
              className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/35"></div>

            {/* Title */}

            <h3 className="absolute bottom-6 left-6 text-4xl font-bold">

              {genre.title}

            </h3>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Genres