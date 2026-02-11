import { headers } from "next/headers";
import PropertyCard from "@/components/search/PropertyCard";
import Pagination from "@/components/search/Pagination";
import Link from "next/link";

async function fetchSearchResults(params: Record<string, string>) {
  const q = new URLSearchParams(params).toString();

  const h = await headers();
  const host = h.get("host");

  if (!host) {
    throw new Error("No host header");
  }

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/search?${q}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const page = Number(params.page || 1);

  const baseQuery = new URLSearchParams(params);
  baseQuery.delete("page");

  let data;
  try {
    data = await fetchSearchResults(params);
  } catch {
    return (
      <div className="text-center py-20 text-gray-500">
        Service temporarily unavailable. Please try again.
      </div>
    );
  }

  const { properties, totalPages } = data;

  if (!properties.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-xl font-semibold">No properties found</h2>
        <Link
          href="/search"
          className="mt-4 px-6 py-2 bg-[#3E568C] text-white rounded-lg"
        >
          Clear filters
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {properties.map((property: any) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        baseQuery={baseQuery.toString()}
      />
    </div>
  );
}
