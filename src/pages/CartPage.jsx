import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div className="text-center text-2xl py-10">Your Cart is Empty 🛒</div>;
  }

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + (Number(item.price) * item.quantity || 0),
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-4 border-b"
          >
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-800 font-semibold">
                Subtotal: ${Number(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>
      </div>

      <div className="mt-6">
        <button
          onClick={clearCart}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
