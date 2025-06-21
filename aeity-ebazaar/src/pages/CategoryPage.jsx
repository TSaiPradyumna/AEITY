import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { name } = useParams();
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Category: {name}</h2>
      <p className="text-gray-600">Products will be listed here soon.</p>
    </div>
  );
}
