import Link from "next/link";
import { Property, PropertyImage, PropertyCollege, College, User } from "@prisma/client";

// Define the exact shape of data this component receives
type PropertyWithRelations = Property & {
  images: PropertyImage[];
  colleges: (PropertyCollege & { college: College })[]; // Array of colleges
  owner: Pick<User, "isVerified">;
};

export default function PropertyCard({ property }: { property: PropertyWithRelations }) {
  // ✅ NEW: Grab the first college to display (or handle multiple if you wish)
  const primaryCollege = property.colleges[0];

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
      <div className="flex flex-col sm:flex-row">
        {/* Image Section */}
        <div className="relative sm:w-56 h-44 sm:h-auto bg-gray-100 shrink-0">
          <img
            src={property.images?.[0]?.url || "/placeholder.jpg"} // Fallback image
            alt={property.title}
            className="h-full w-full object-cover"
          />

          {/* Verified Badge */}
          {property.owner?.isVerified && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm z-10">
              ✔ Verified
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold line-clamp-1 group-hover:text-[#3E568C] transition-colors">
              {property.title}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-1">
              {property.address}, {property.city}
            </p>

            {/* ✅ NEW: Display College Name safely */}
            {primaryCollege ? (
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <span>🎓</span>
                Near {primaryCollege.college.name}
                {primaryCollege.distanceKm ? ` (${primaryCollege.distanceKm} km)` : ""}
              </p>
            ) : (
              <p className="text-xs text-gray-400 mt-1">College distance not specified</p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3 text-xs font-medium text-gray-600">
              <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200">
                {property.type}
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200">
                {property.gender}
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200">
                {property.occupancy}
              </span>
              {property.isFurnished && (
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded border border-green-100">
                  Furnished
                </span>
              )}
            </div>
          </div>

          {/* Bottom Price & Action */}
          <div className="flex items-center justify-between mt-4 border-t pt-3">
            <p className="text-[#3E568C] font-bold text-lg">
              ₹{property.rent.toLocaleString()}
              <span className="text-xs font-normal text-gray-500 ml-1">
                / {property.rentType === "PER_BED" ? "bed" : "room"}
              </span>
            </p>

            <Link
              href={`/property/${property.id}?from=search`}
              className="text-sm font-medium text-white bg-[#3E568C] px-4 py-2 rounded-lg hover:bg-[#334873] transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}