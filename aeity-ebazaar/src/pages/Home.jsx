import { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ebazaar');

  const categories = [
    { icon: '📿', title: 'Malas', desc: 'Spiritual beads for meditation.', cta: 'Shop Now' },
    { icon: '🪔', title: 'Lamps', desc: 'Traditional diyas for rituals.', cta: 'Explore' },
    { icon: '🧿', title: 'Puja Samagri', desc: 'Essentials for all spiritual needs.', cta: 'Browse' },
  ];

  const products = [
    { name: 'Tulsi Mala', emoji: '📿', currentPrice: '399', originalPrice: '499', reviews: '82' },
    { name: 'Brass Diya', emoji: '🪔', currentPrice: '699', originalPrice: '899', reviews: '124' },
    { name: 'Incense Sticks', emoji: '🕯️', currentPrice: '199', originalPrice: '249', reviews: '43' },
    { name: 'Puja Thali', emoji: '🪙', currentPrice: '899', originalPrice: '1099', reviews: '60' },
    { name: 'Holy Water Pot', emoji: '🚿', currentPrice: '499', originalPrice: '599', reviews: '39' },
    { name: 'Temple Bell', emoji: '🔔', currentPrice: '799', originalPrice: '999', reviews: '74' },
  ];

  return (
    <main className="p-6 space-y-12 max-w-7xl mx-auto">
      {/* Category Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Explore by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => <CategoryCard key={index} {...cat} />)}
        </div>
      </section>

      {/* Product Section with Toggle */}
      <section>
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('ebazaar')}
            className={`px-4 py-2 rounded-full ${activeTab === 'ebazaar' ? 'bg-orange-500 text-white' : 'border border-orange-500 text-orange-500'}`}
          >
            AEITY eBazaar
          </button>
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`px-4 py-2 rounded-full ${activeTab === 'marketplace' ? 'bg-orange-500 text-white' : 'border border-orange-500 text-orange-500'}`}
          >
            AEITY Marketplace
          </button>
        </div>

        {activeTab === 'ebazaar' && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((prod, index) => <ProductCard key={index} {...prod} />)}
            </div>
          </>
        )}

        {activeTab === 'marketplace' && (
          <div className="text-center text-gray-500">
            🚧 AEITY Marketplace content coming soon!
          </div>
        )}
      </section>
    </main>
  );
}
