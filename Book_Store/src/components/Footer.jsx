const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white px-6 lg:px-10 pt-16 pb-8">

      {/* Newsletter Section */}

      <div className="bg-gradient-to-r from-[#081028] via-[#0d1b52] to-[#081028] rounded-[30px] py-20 px-6 text-center">

        <h2 className="text-4xl lg:text-6xl font-bold">

          Join Our Reading Club

        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

          Subscribe to our newsletter to get updates on new releases,
          special offers, and exclusive author interviews straight to your inbox.

        </p>

        {/* Input */}

        <div className="mt-10 max-w-3xl mx-auto bg-[#0b1640] border border-[#22306b] rounded-2xl p-2 flex flex-col sm:flex-row gap-3">

          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 bg-transparent outline-none px-5 text-white placeholder-gray-500 text-lg"
          />

          <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-orange-500/20">

            Subscribe Now

          </button>

        </div>

      </div>

      {/* Footer Links */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">

        {/* Logo */}

        <div>

          <h1 className="text-4xl font-bold">

            Lit<span className="text-orange-500">Mart</span>

          </h1>

          <p className="text-gray-400 mt-8 leading-9 text-lg">

            Your premium destination for discovering,
            exploring, and enjoying the world's finest
            literature in a cinematic experience.

          </p>

        </div>

        {/* Shop */}

        <div>

          <h3 className="text-2xl font-semibold mb-8">
            Shop
          </h3>

          <ul className="space-y-5 text-gray-400 text-lg">

            <li className="hover:text-orange-400 cursor-pointer transition">
              New Arrivals
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Best Sellers
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Categories
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Deals & Offers
            </li>

          </ul>

        </div>

        {/* Support */}

        <div>

          <h3 className="text-2xl font-semibold mb-8">
            Support
          </h3>

          <ul className="space-y-5 text-gray-400 text-lg">

            <li className="hover:text-orange-400 cursor-pointer transition">
              Help Center
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Shipping & Returns
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Order Tracking
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Contact Us
            </li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="text-2xl font-semibold mb-8">
            Company
          </h3>

          <ul className="space-y-5 text-gray-400 text-lg">

            <li className="hover:text-orange-400 cursor-pointer transition">
              About Us
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 mt-16 pt-8 text-gray-400 text-lg">

        2026 LitMart , All Copy Rights Reserved

      </div>

    </footer>
  )
}

export default Footer