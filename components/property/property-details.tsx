"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  MapPin,
  Star,
  Wifi,
  Car,
  Utensils,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Users,
  Shield,
  Clock,
  Bed,
  Bath,
  Home,
} from "lucide-react"

interface PropertyDetailsProps {
  propertyId: string
}

export function PropertyDetails({ propertyId }: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock data - in real app, fetch based on propertyId
  const property = {
    id: propertyId,
    title: "Comfortable PG near IIT Delhi",
    location: "Lajpat Nagar, Delhi",
    price: 12000,
    rating: 4.5,
    reviews: 127,
    type: "PG",
    gender: "Boys",
    distance: "1.2 km from IIT Delhi",
    description:
      "A well-maintained PG accommodation perfect for students. Located in a safe neighborhood with easy access to public transport and nearby colleges. The property offers modern amenities and a comfortable living environment.",
    images: [
      "/placeholder-11iy5.png",
      "/placeholder-63jj3.png",
      "/placeholder-ja31x.png",
      "/placeholder-k94g6.png",
      "/placeholder-f0n56.png",
    ],
    amenities: [
      { name: "WiFi", icon: <Wifi className="h-5 w-5" />, available: true },
      { name: "Parking", icon: <Car className="h-5 w-5" />, available: true },
      { name: "Meals", icon: <Utensils className="h-5 w-5" />, available: true },
      { name: "Security", icon: <Shield className="h-5 w-5" />, available: true },
      { name: "24/7 Access", icon: <Clock className="h-5 w-5" />, available: false },
      { name: "Laundry", icon: <Home className="h-5 w-5" />, available: true },
    ],
    roomDetails: {
      occupancy: "Single/Double",
      bathrooms: "Shared",
      furnished: "Fully Furnished",
    },
    rules: [
      "No smoking inside the premises",
      "Visitors allowed till 9 PM",
      "Monthly rent to be paid by 5th of every month",
      "One month security deposit required",
    ],
    owner: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      verified: true,
      responseTime: "Usually responds within 2 hours",
    },
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/search"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Search</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-200">
                {/* <img
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Property image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                /> */}
                <Image
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  width={720}
                  height={720}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index ? "border-brand-primary" : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    {/* <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    /> */}
                    <Image
                  src={image || "/placeholder.svg"}
                  width={720}
                  height={720}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full">
                  {property.type}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  {property.gender}
                </span>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location}</span>
              </div>

              <p className="text-gray-500 mb-4">{property.distance}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{property.rating}</span>
                  <span className="text-gray-500">({property.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Room Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Room Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Occupancy</p>
                    <p className="text-gray-600 text-sm">{property.roomDetails.occupancy}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Bathroom</p>
                    <p className="text-gray-600 text-sm">{property.roomDetails.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bed className="h-5 w-5 text-brand-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Furnishing</p>
                    <p className="text-gray-600 text-sm">{property.roomDetails.furnished}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors duration-200 ${amenity.available
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-gray-200 bg-gray-50 text-gray-500"
                      }`}
                  >
                    {amenity.icon}
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h2>
              <ul className="space-y-2">
                {property.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Contact */}
            <div className="bg-white rounded-lg p-6 shadow-sm border sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">₹{property.price.toLocaleString()}</div>
                <div className="text-gray-500">per month</div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Owner
                </button>

                <button className="w-full border border-brand-primary text-brand-primary py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary/5 transition-colors duration-200 flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Send Message
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-brand-primary">{property.owner.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      {property.owner.name}
                      {property.owner.verified && <Shield className="h-4 w-4 text-green-500" />}
                    </p>
                    <p className="text-sm text-gray-500">{property.owner.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
