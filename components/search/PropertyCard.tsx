import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative sm:w-56 h-44 sm:h-auto bg-gray-100 shrink-0">
          <img
            src={property.images?.[0]?.url}
            alt={property.title}
            className="h-full w-full object-cover"
          />

          {/* ✅ VERIFIED BADGE */}
          {property.owner?.isVerified && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              ✔ Verified
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold line-clamp-1">
              {property.title}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-1">
              {property.address}, {property.city}
            </p>

            <p className="text-sm text-gray-500">
              Near {property.college?.name}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              <span className="px-2 py-1 bg-gray-100 rounded">
                {property.type}
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded">
                {property.gender}
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded">
                {property.occupancy}
              </span>
              {property.isFurnished && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                  Furnished
                </span>
              )}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-[#3E568C] font-semibold">
              ₹{property.rent}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                / {property.rentType === "PER_BED" ? "bed" : "room"}
              </span>
            </p>

            <Link
              href={`/property/${property.id}?from=search`}
              className="text-sm font-medium text-[#3E568C] hover:underline"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
