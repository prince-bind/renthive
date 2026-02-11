import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyInfo from "@/components/property/PropertyInfo";
import BackToSearch from "@/components/property/BackToSearch";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

async function fetchProperty(id: string) {
  const h = await headers();
  const host = h.get("host");

  if (!host) {
    return null;
  }

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/property/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await fetchProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <BackToSearch />

      {/* Images */}
      <PropertyGallery images={property.images} />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Info */}
        <div className="lg:col-span-2">
          <PropertyInfo property={property} />
        </div>

        {/* Right: Owner Card */}
        <div className="border rounded-xl p-6 h-fit shadow-sm sticky top-6">
          <p className="text-lg font-semibold text-[#3E568C]">
            ₹{property.rent.toLocaleString()}
            <span className="text-sm text-gray-500 font-normal">
              {" "}
              / {property.rentType === "PER_BED" ? "bed" : "room"}
            </span>
          </p>

          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">Owner details</p>
            <p className="font-medium mt-1 flex items-center gap-2">
              {property.owner.name}
              {property.owner.isVerified && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  ✔ Verified
                </span>
              )}
            </p>
          </div>

          <a
            href={`tel:${property.owner.phone}`}
            className="mt-6 block w-full bg-[#3E568C] hover:bg-[#334873] text-white text-center py-3 rounded-lg text-sm font-medium transition"
          >
            Call Owner
          </a>
        </div>
      </div>
    </div>
  );
}
