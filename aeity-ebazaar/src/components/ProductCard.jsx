import { useCart } from '../context/CartContext';

export default function ProductCard({ name, emoji, currentPrice, originalPrice, reviews }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <div className="text-5xl text-center">{emoji}</div>
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-600">
        ₹{currentPrice} <span className="line-through text-gray-400">₹{originalPrice}</span>
      </p>
      <div className="text-yellow-500">★★★★★ ({reviews} reviews)</div>
      <button
        onClick={() => addToCart({ name, emoji, currentPrice })}
        className="w-full mt-2 bg-purple-700 text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function ProductCard({ name, emoji, currentPrice, originalPrice, reviews }) {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg p-4">
        <div className="text-5xl text-center">{emoji}</div>
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <p className="text-sm text-gray-600">
          ₹{currentPrice} <span className="line-through ml-2 text-gray-400">₹{originalPrice}</span>
        </p>
        <div className="text-yellow-400 text-sm">★★★★★ ({reviews} reviews)</div>
        <button className="mt-2 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Add to Cartt</button>
      </div>
    );
  }
  