export default function PropertyInfo({ property }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{property.title}</h1>
        <p className="text-gray-500 mt-1">
          {property.address}, {property.city}, {property.state} -{" "}
          {property.zipcode}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Near {property.college.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-sm">
        <span className="px-3 py-1 bg-gray-100 rounded">
          {property.type}
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded">
          {property.gender}
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded">
          {property.occupancy}
        </span>
        {property.isFurnished && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">
            Furnished
          </span>
        )}
      </div>

      {property.description && (
        <div>
          <h2 className="font-medium mb-1">Description</h2>
          <p className="text-gray-600 text-sm">
            {property.description}
          </p>
        </div>
      )}

      <div>
        <h2 className="font-medium mb-2">Amenities</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          {property.amenities.map((a: any) => (
            <li key={a.amenity.id}>• {a.amenity.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
