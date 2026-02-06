export const revalidate = 60;

import PropertyCard from "@/components/search/PropertyCard";
import Pagination from "@/components/search/Pagination";
import { searchProperties } from "@/actions/searchProperties";
import { PropertyType, GenderType, OccupancyType } from "@prisma/client";
import Link from "next/link";
import type { Metadata } from "next";

// Helper for type-safe Enum casting
function safeEnum<T>(val: string | undefined, enumObj: object): T | undefined {
  return Object.values(enumObj).includes(val) ? (val as T) : undefined;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const parts: string[] = [];

  if (params.type) parts.push(params.type === "PG" ? "PGs" : "Flats");
  else parts.push("PGs & Flats");

  if (params.city) parts.push(`in ${params.city}`);
  if (params.gender) parts.push(`for ${params.gender.toLowerCase()}`);
  
  const page = params.page ? Number(params.page) : 1;
  const titleBase = parts.join(" ");
  
  return {
    title: page > 1 ? `${titleBase} – Page ${page} | RentHive` : `${titleBase} | RentHive`,
    description: "Find verified PGs and flats near colleges. Filter by city, rent, gender, occupancy, and more on RentHive.",
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const page = params.page ? Number(params.page) : 1;

  const { properties, totalPages } = await searchProperties({
    city: params.city,
    collegeId: params.collegeId,
    type: safeEnum<PropertyType>(params.type, PropertyType),
    gender: safeEnum<GenderType>(params.gender, GenderType),
    occupancy: safeEnum<OccupancyType>(params.occupancy, OccupancyType),
    rentMin: params.rentMin ? Number(params.rentMin) : undefined,
    rentMax: params.rentMax ? Number(params.rentMax) : undefined,
    page,
    pageSize: 6,
  });

  // ✅ NEW: Handle Empty State elegantly instead of 404
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
        <div className="bg-gray-50 p-4 rounded-full mb-4">
           <span className="text-4xl">🔍</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">No properties found</h2>
        <p className="text-gray-500 mt-2 max-w-md">
          We couldn't find any matches for your filters. Try removing some filters or searching for a different city.
        </p>
        <Link 
          href="/search" 
          className="mt-6 px-6 py-2.5 bg-[#3E568C] text-white rounded-lg hover:bg-[#334873] transition font-medium"
        >
          Clear All Filters
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}