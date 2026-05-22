const Cart = ({ cart, setCart }) => {

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace("$", "")) * item.quantity,
    0
  )

  return (
    <section className="bg-[#020617] text-white px-6 lg:px-10 py-14">

      <h2 className="text-3xl font-bold mb-8">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-[#081028] p-4 rounded-lg"
              >

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.author}</p>
                  <p className="text-orange-400">
                    {item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <h3 className="text-2xl font-bold mt-8">
            Total: ${total.toFixed(2)}
          </h3>
        </>
      )}

    </section>
  )
}

export default Cart