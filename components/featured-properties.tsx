import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Wifi, Car, Utensils, Shield, Heart, Eye } from "lucide-react"

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

const amenityIcons = {
  WiFi: Wifi,
  AC: "❄️",
  Laundry: "👕",
  Security: Shield,
  Parking: Car,
  Kitchen: "🍳",
  Balcony: "🏠",
  Meals: Utensils,
  Gym: "💪",
}

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
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                {property.featured && (
                  <Badge className="absolute top-3 left-3 bg-brand-accent text-white">Featured</Badge>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {property.type}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {property.gender}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{property.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({property.reviews} reviews)</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.slice(0, 4).map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  {/* Price & Availability */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-brand-primary">₹{property.rent.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{property.available} rooms available</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
