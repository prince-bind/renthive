import { MapPin, Star, Heart, Eye } from "lucide-react"
import Image from "next/image"

const featuredProperties = [
  {
    id: 1,
    title: "Cozy PG near IIT Delhi",
    type: "PG",
    location: "Rohini, Delhi",
    rent: 12000,
    rating: 4.5,
    reviews: 23,
    image: "/modern-pg-room.png",
    amenities: ["WiFi", "AC", "Laundry", "Security"],
    gender: "Any",
    available: 3,
    featured: true,
  },
  {
    id: 2,
    title: "Premium Student Flat",
    type: "Flat",
    location: "Lajpat Nagar, Delhi",
    rent: 8000,
    rating: 4.3,
    reviews: 18,
    image: "/modern-student-flat-living-room.png",
    amenities: ["WiFi", "Parking", "Kitchen", "Balcony"],
    gender: "Any",
    available: 2,
    featured: true,
  },
  {
    id: 3,
    title: "Girls Only PG",
    type: "PG",
    location: "Karol Bagh, Delhi",
    rent: 10000,
    rating: 4.7,
    reviews: 31,
    image: "/clean-pink-study-room.png",
    amenities: ["WiFi", "Meals", "Security", "Gym"],
    gender: "Female",
    available: 1,
    featured: true,
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked accommodations that offer the best value and comfort for students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-lg transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  width={720}
                  height={720}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                {property.featured && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-brand-accent text-white text-xs font-medium rounded">
                    Featured
                  </span>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="h-8 w-8 p-0 bg-white/90 hover:bg-white rounded-md transition-colors duration-200 flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="h-8 w-8 p-0 bg-white/90 hover:bg-white rounded-md transition-colors duration-200 flex items-center justify-center">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 border border-gray-300 text-gray-700 text-xs font-medium rounded">
                        {property.type}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {property.gender}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{property.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({property.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {property.amenities.slice(0, 4).map((amenity) => (
                      <span key={amenity} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-brand-primary">₹{property.rent.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{property.available} rooms available</p>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
