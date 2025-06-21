export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">AEITY eBazaar</h4>
            <p>Empowering sacred digital commerce globally.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/support" className="hover:text-orange-500">Support</a></li>
              <li><a href="/vendor/sample" className="hover:text-orange-500">Become a Vendor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f hover:text-blue-400"></i></a>
              <a href="#" aria-label="X"><i className="fab fa-x-twitter hover:text-blue-300"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram hover:text-pink-400"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in hover:text-blue-500"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Subscribe</h4>
            <input type="email" placeholder="Enter email" className="p-2 rounded w-full text-black" />
            <button className="bg-orange-500 hover:bg-orange-600 mt-2 w-full p-2 rounded">Subscribe</button>
          </div>
        </div>
        <div className="text-center text-xs mt-8 text-gray-400">
          © 2025 AEITY eBazaar. All rights reserved.
        </div>
      </footer>
    );
  }
  