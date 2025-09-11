// "use client"

// import { useState } from "react"
// import { MapPin, Star, Wifi, Car, Utensils, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
// import Link from "next/link"

// interface SearchResultsProps {
//   isLoading: boolean
//   searchParams: any
//   currentPage: number
//   onPageChange: (page: number) => void
//   totalResults: number
// }

// export function SearchResults({
//   isLoading,
//   searchParams,
//   currentPage,
//   onPageChange,
//   totalResults,
// }: SearchResultsProps) {
//   const [favorites, setFavorites] = useState<number[]>([])

//   const resultsPerPage = 12
//   const totalPages = Math.ceil(totalResults / resultsPerPage)

//   // Mock data for demonstration
//   const mockProperties = Array.from({ length: resultsPerPage }, (_, i) => ({
//     id: (currentPage - 1) * resultsPerPage + i + 1,
//     title: `Comfortable ${["PG", "Flat", "Hostel"][Math.floor(Math.random() * 3)]} near ${["IIT Delhi", "DU", "JNU", "AIIMS", "DTU"][Math.floor(Math.random() * 5)]}`,
//     location: `${["Lajpat Nagar", "Karol Bagh", "Rajouri Garden", "Mukherjee Nagar", "GTB Nagar"][Math.floor(Math.random() * 5)]}, Delhi`,
//     price: Math.floor(Math.random() * 15000) + 5000,
//     rating: (Math.random() * 2 + 3).toFixed(1),
//     reviews: Math.floor(Math.random() * 200) + 10,
//     image: `/placeholder.svg?height=200&width=300&query=modern student accommodation ${i + 1}`,
//     amenities: ["wifi", "parking", "meals"].slice(0, Math.floor(Math.random() * 3) + 1),
//     type: ["PG", "Flat", "Hostel"][Math.floor(Math.random() * 3)],
//     gender: ["Boys", "Girls", "Co-ed"][Math.floor(Math.random() * 3)],
//     distance: `${(Math.random() * 5 + 0.5).toFixed(1)} km from college`,
//   }))

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
//   }

//   const getAmenityIcon = (amenity: string) => {
//     switch (amenity) {
//       case "wifi":
//         return <Wifi className="h-4 w-4" />
//       case "parking":
//         return <Car className="h-4 w-4" />
//       case "meals":
//         return <Utensils className="h-4 w-4" />
//       default:
//         return null
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="space-y-6">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="bg-white rounded-lg shadow-sm border p-6 animate-pulse">
//             <div className="flex gap-6">
//               <div className="w-48 h-32 bg-gray-200 rounded-lg"></div>
//               <div className="flex-1 space-y-3">
//                 <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                 <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                 <div className="h-4 bg-gray-200 rounded w-1/4"></div>
//                 <div className="flex gap-2">
//                   <div className="h-6 bg-gray-200 rounded w-16"></div>
//                   <div className="h-6 bg-gray-200 rounded w-16"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div>
//       {/* Results Grid */}
//       <div className="space-y-6">
//         {mockProperties.map((property) => (
//           <Link
//             key={property.id}
//             href={`/search/${property.id}`}
//             className="block bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden"
//           >
//             <div className="flex flex-col md:flex-row">
//               {/* Image */}
//               <div className="md:w-80 h-48 md:h-auto relative">
//                 <img
//                   src={property.image || "/placeholder.svg"}
//                   alt={property.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={() => toggleFavorite(property.id)}
//                   className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200"
//                 >
//                   <Heart
//                     className={`h-4 w-4 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
//                   />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="flex-1 p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-900 mb-1">{property.title}</h3>
//                     <div className="flex items-center text-gray-600 text-sm mb-2">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       {property.location}
//                     </div>
//                     <p className="text-sm text-gray-500">{property.distance}</p>
//                   </div>
//                   <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                     <Share2 className="h-4 w-4 text-gray-600" />
//                   </button>
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded">
//                     {property.type}
//                   </span>
//                   <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
//                     {property.gender}
//                   </span>
//                 </div>

//                 {/* Amenities */}
//                 <div className="flex items-center gap-4 mb-4">
//                   {property.amenities.map((amenity) => (
//                     <div key={amenity} className="flex items-center gap-1 text-gray-600">
//                       {getAmenityIcon(amenity)}
//                       <span className="text-xs capitalize">{amenity}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bottom Row */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       <span className="font-medium text-sm">{property.rating}</span>
//                       <span className="text-gray-500 text-sm">({property.reviews} reviews)</span>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <div className="font-bold text-xl text-gray-900">₹{property.price.toLocaleString()}</div>
//                     <div className="text-sm text-gray-500">per month</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-12">
//           <button
//             onClick={() => onPageChange(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </button>

//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//             const page = i + Math.max(1, currentPage - 2)
//             if (page > totalPages) return null

//             return (
//               <button
//                 key={page}
//                 onClick={() => onPageChange(page)}
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//                   currentPage === page ? "bg-brand-primary text-white" : "border border-gray-300 hover:bg-gray-50"
//                 }`}
//               >
//                 {page}
//               </button>
//             )
//           })}

//           <button
//             onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//           >
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
