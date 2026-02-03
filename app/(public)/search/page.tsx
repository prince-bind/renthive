export const revalidate = 60;

import { notFound } from "next/navigation";
import PropertyCard from "@/components/search/PropertyCard";
import Pagination from "@/components/search/Pagination";
import { searchProperties } from "@/lib/searchProperties";

import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}): Promise<Metadata> {
  const params = await searchParams;

  const parts: string[] = [];

  if (params.type) {
    parts.push(params.type === "PG" ? "PGs" : "Flats");
  } else {
    parts.push("PGs & Flats");
  }

  if (params.city) {
    parts.push(`in ${params.city}`);
  }

  if (params.gender) {
    parts.push(`for ${params.gender.toLowerCase()}`);
  }

  if (params.occupancy) {
    parts.push(`(${params.occupancy.toLowerCase()} occupancy)`);
  }

  const page = params.page ? Number(params.page) : 1;

  const titleBase = parts.join(" ");
  const title =
    page > 1
      ? `${titleBase} – Page ${page} | RentHive`
      : `${titleBase} | RentHive`;

  const description =
    "Find verified PGs and flats near colleges. Filter by city, rent, gender, occupancy, and more on RentHive.";

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
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
    type: params.type as any,
    gender: params.gender as any,
    occupancy: params.occupancy as any,
    rentMin: params.rentMin ? Number(params.rentMin) : undefined,
    rentMax: params.rentMax ? Number(params.rentMax) : undefined,
    page,
    pageSize: 6,
  });

  if (!properties.length) {
    notFound();
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
