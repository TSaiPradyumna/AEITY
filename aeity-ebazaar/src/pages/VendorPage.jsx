import { useParams } from 'react-router-dom';

export default function VendorPage() {
  const { name } = useParams();
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Vendor: {name}</h2>
      <p className="text-gray-600">Vendor profile and products coming soon.</p>
    </div>
  );
}
