import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

  const handleFormSuccess = (data) => {
    alert(`Thank you, ${data.fullName}! Your order will be shipped soon.`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-2">Checkout</h2>

      <div className="bg-gray-50 p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
        <ul className="list-disc list-inside text-gray-700">
          {cart.map(item => (
            <li key={item.name}>
              {item.name} x {item.quantity} = ₹{item.quantity * item.currentPrice}
            </li>
          ))}
        </ul>
        <div className="text-right font-bold mt-2">Total: ₹{total}</div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Shipping Details</h3>
        <CheckoutForm onSuccess={handleFormSuccess} />
      </div>
    </div>
  );
}
