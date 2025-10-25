"use client"

import { Wifi, Car, Utensils, WashingMachine, AirVent, House, Share2, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Property } from "@/types/property-type"

interface PropertyListProps {
  properties: Property[]
}

export function SearchResults({ properties }: PropertyListProps) {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLocaleLowerCase()) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "mess":
        return <Utensils className="h-4 w-4" />
      case "parking":
        return <Car className="h-4 w-4" />
      case "laundry":
        return <WashingMachine className="h-4 w-4" />
      case "ac":
        return <AirVent className="h-4 w-4" />
      case "daily housekeeping":
        return <House className="h-4 w-4" />
      default:
        return null
    }
  }

  if (properties.length === 0)
    return <p className="text-center text-gray-500">No properties found.</p>

  return (
    <div className="space-y-6">
      {properties.map((property) => (
        <div
          key={property._id}
          className="flex flex-col md:flex-row bg-white border rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden"
        >
          {/* Image */}
          <div className="w-1/3 relative">
            <Image
              src={"/clean-pink-study-room.png"}
              alt={"property.title"}
              width={500}
              height={400}
              className="object-cover h-full w-full"
            />
            <span className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium rounded shadow-sm">
              {property.type.toUpperCase()}
            </span>
          </div>

          {/* Right: Content */}
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              {/* Title & location */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {property.title}
                  </h3>
                  <div className="text-sm text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.city}, {property.state || ""}
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Tags / Amenities */}
              <div className="flex items-center flex-wrap gap-4 mt-3 text-sm text-gray-600">
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  {property.gender.toUpperCase()}
                </span>
                {property.amenities.slice(0, 4).map((amenity) => (
                  <div key={amenity} className="flex items-center gap-1 capitalize">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
                {property.amenities.length > 4 && (
                  <span className="text-gray-500 text-sm">
                    +{property.amenities.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between mt-6">
              <div>
                <div className="text-xl font-bold text-gray-900">
                  ₹{property.price.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm line-through">
                  ₹{(property.price * 3).toLocaleString()}
                </div>
                <div className="text-orange-500 text-sm font-semibold">
                  68% off
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  + ₹99 taxes & fees
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/search/${property._id}`}
                  className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100 transition"
                >
                  View Details
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
