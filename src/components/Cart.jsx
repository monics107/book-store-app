const Cart = ({ cart, setCart }) => {

  // ❌ REMOVE ITEM
  const removeItem = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    )
  }

  // ➕ INCREASE QUANTITY
  const increaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )

    )
  }

  // ➖ DECREASE QUANTITY
  const decreaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1
            }
          : item
      )

    )
  }

  // 💰 TOTAL
  const total = cart.reduce(

    (sum, item) =>

      sum +
      Number(item.price.replace("$", "")) *
      item.quantity,

    0
  )

  return (

    <section className="bg-[#020617] text-white px-6 lg:px-10 py-14 min-h-screen">

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-10">

        Your Cart 🛒

      </h2>

      {/* EMPTY CART */}
      {cart.length === 0 ? (

        <div className="flex flex-col items-center justify-center py-20">

          <h3 className="text-3xl font-bold text-gray-300">

            Your cart is empty 😢

          </h3>

          <p className="text-gray-500 mt-3">

            Add some amazing books now

          </p>

        </div>

      ) : (

        <>
          {/* CART ITEMS */}
          <div className="space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#081028] p-5 rounded-2xl border border-slate-800 hover:border-orange-500 transition"
              >

                {/* LEFT */}
                <div className="flex items-center gap-5">

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-32 object-cover rounded-xl"
                  />

                  {/* DETAILS */}
                  <div>

                    <h3 className="text-2xl font-bold">

                      {item.title}

                    </h3>

                    <p className="text-gray-400 mt-1">

                      {item.author}

                    </p>

                    <p className="text-orange-400 text-xl font-semibold mt-3">

                      {item.price}

                    </p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5">

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-slate-700 hover:bg-slate-600 w-8 h-8 rounded-lg text-xl"
                    >

                      -

                    </button>

                    <span className="text-lg font-bold">

                      {item.quantity}

                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-orange-500 hover:bg-orange-600 w-8 h-8 rounded-lg text-xl"
                    >

                      +

                    </button>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition"
                  >

                    Remove

                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-[#081028] p-6 rounded-2xl border border-slate-800">

            <h3 className="text-3xl font-bold">

              Total:
              <span className="text-orange-400 ml-3">

                ${total.toFixed(2)}

              </span>

            </h3>

            {/* CHECKOUT */}
            <button className="mt-5 md:mt-0 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-bold transition">

              Proceed To Checkout

            </button>

          </div>

        </>
      )}

    </section>
  )
}

export default Cart