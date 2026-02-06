import { MapPin, GraduationCap, Home, Users, CheckCircle2 } from "lucide-react"; 

export default function PropertyInfo({ property }: any) {
  // ✅ FIX: Access the first college safely
  const nearestCollege = property.colleges?.[0];

  // Helper to get badge colors based on values
  const getGenderColor = (gender: string) => {
    switch (gender) {
      case "BOYS": return "bg-blue-50 text-blue-700 border-blue-200";
      case "GIRLS": return "bg-pink-50 text-pink-700 border-pink-200";
      case "UNISEX": return "bg-purple-50 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-8 bg-white">
      {/* 1. HEADER SECTION */}
      <div className="border-b pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 mt-2 text-gray-500">
              <MapPin className="w-4 h-4 shrink-0" />
              <p className="text-sm sm:text-base">
                {property.address}, {property.city}
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Pills */}
        <div className="flex flex-wrap gap-3 mt-5">
          {/* Type Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
            <Home className="w-3.5 h-3.5" />
            {property.type === "PG" ? "PG / Hostel" : "Flat / Apartment"}
          </span>

          {/* Gender Badge */}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${getGenderColor(property.gender)}`}>
            <Users className="w-3.5 h-3.5" />
            {property.gender}
          </span>

          {/* Occupancy Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-orange-50 text-orange-700 border border-orange-200">
            <Users className="w-3.5 h-3.5" />
            {property.occupancy} Occupancy
          </span>

          {/* Furnished Badge */}
          {property.isFurnished && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Fully Furnished
            </span>
          )}
        </div>
      </div>

      {/* 2. COLLEGE HIGHLIGHT BOX */}
      {nearestCollege && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-start gap-4">
          <div className="bg-indigo-100 p-2 rounded-lg shrink-0 text-indigo-600">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-indigo-900">Student Friendly Location</h3>
            <p className="text-sm text-indigo-700 mt-0.5">
              Located just <strong>{nearestCollege.distanceKm} km</strong> from{" "}
              <span className="font-medium">{nearestCollege.college.name}</span>.
              Perfect for students looking to save commute time.
            </p>
          </div>
        </div>
      )}

      {/* 3. DESCRIPTION */}
      {property.description && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About this property</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {property.description}
          </p>
        </div>
      )}

      {/* 4. AMENITIES GRID */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Amenities & Facilities</h2>
        {property.amenities && property.amenities.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
            {property.amenities.map((a: any) => (
              <li key={a.amenity.id} className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="shrink-0 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                {a.amenity.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic text-sm">No amenities listed.</p>
        )}
      </div>

       {/* Optional: Add timestamp at bottom */}
       <div className="pt-6 border-t">
          <p className="text-xs text-gray-400">
            Listed on {new Date(property.createdAt || Date.now()).toLocaleDateString()}
          </p>
       </div>
    </div>
  );
}