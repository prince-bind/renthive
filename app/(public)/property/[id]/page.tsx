import { getPropertyById } from "@/lib/getPropertyById";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyInfo from "@/components/property/PropertyInfo";
import BackToSearch from "@/components/property/BackToSearch";
import { notFound } from "next/navigation";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ unwrap params FIRST
  const { id } = await params;

  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <BackToSearch />

      {/* Images */}
      <PropertyGallery images={property.images} />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left */}
        <div className="lg:col-span-2">
          <PropertyInfo property={property} />
        </div>

        {/* Right */}
        <div className="border rounded-xl p-6 h-fit shadow-sm">
          <p className="text-lg font-semibold text-blue-600">
            ₹{property.rent}
            <span className="text-sm text-gray-500">
              {" "}
              / {property.rentType === "PER_BED" ? "bed" : "room"}
            </span>
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Owner: {property.owner.name}
            {property.owner.isVerified && (
              <span className="ml-2 text-green-600 text-xs font-medium">
                ✔ Verified
              </span>
            )}
          </p>

          <a
            href={`tel:${property.owner.phone}`}
            className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg text-sm font-medium"
          >
            Call Owner
          </a>
        </div>
      </div>
    </div>
  );
}
