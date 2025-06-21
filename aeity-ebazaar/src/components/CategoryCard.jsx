export default function CategoryCard({ icon, title, desc, cta }) {
    return (
      <div className="text-center border p-4 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 hover:rotate-1 bg-white">
        <div className="text-4xl mb-2">{icon}</div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
        <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full transition-colors duration-200">
          {cta}
        </button>
      </div>
    );
  }
  