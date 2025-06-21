import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="bg-gradient-to-r from-orange-500 to-purple-700 text-white text-sm text-center py-2">
        🎉 Festival Offer: Free Shipping above ₹999!
      </div>
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-orange-600">AEITY eBazaar</Link>

        <nav className="space-x-4 hidden md:flex">
          <Link to="/category/rituals" className="hover:text-orange-600">Categories</Link>
          <Link to="/vendor/sample" className="hover:text-orange-600">Vendors</Link>
          <Link to="/about" className="hover:text-orange-600">About Us</Link>
          <Link to="/support" className="hover:text-orange-600">Support</Link>
        </nav>

        <div className="flex gap-3 items-center">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm">Login</button>
        </div>
      </div>
    </header>
  );
}
