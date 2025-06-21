import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.name} className="flex items-center justify-between border-b pb-2">
              <div className="text-lg">{item.emoji} {item.name}</div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.name, parseInt(e.target.value))}
                  className="w-16 border px-2"
                />
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-lg font-semibold">Total: ₹{total}</div>
        </div>
      )}
    </div>
  );
}
