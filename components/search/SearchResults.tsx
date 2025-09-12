"use client"

import { Share2, MapPin, Star, Wifi, Car, Utensils } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Property {
  id: string
  type: string
  title: string
  description: string
  college: string[]
  address?: string
  city?: string
  state?: string
  zipCode: string
  location: string
  price: number
  amenities: string[]
  images: string[]
  occupancy: string
  furnished: boolean
  occupied: boolean
  createdAt: string
  ratings: number[]
}

interface PropertyListProps {
  properties: Property[]
}

export function SearchResults({ properties }: PropertyListProps) {

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "parking":
        return <Car className="h-4 w-4" />
      case "meals":
        return <Utensils className="h-4 w-4" />
      default:
        return null
    }
  }

  if (properties.length === 0) {
    return <p className="text-gray-500 text-center">No properties found.</p>
  }

  return (
    <div>
      {/* Results Grid */}
      <div className="space-y-6">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/search/${property.id}`}
            className="block bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-80 h-48 md:h-auto relative">
                <Image
                  src={property.images[0] || "/placeholder.svg"}
                  width={720}
                  height={720}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{property.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.address}, {property.city}
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded">
                    {property.type}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    {property.college.join(", ")}
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-4 mb-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1 text-gray-600">
                      {getAmenityIcon(amenity)}
                      <span className="text-xs capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{property.ratings[0]}</span>
                      {/* <span className="text-gray-500 text-sm">({property.reviews[0]} reviews)</span> */}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-xl text-gray-900">₹{property.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
