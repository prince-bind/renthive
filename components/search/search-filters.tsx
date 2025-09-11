// "use client"

// import { useState } from "react"
// import { Search, MapPin, ChevronDown, Wifi, Car, Utensils, Dumbbell, Waves, Shield } from "lucide-react"

// interface SearchFiltersProps {
//   onSearch: (params: any) => void
//   initialParams: any
// }

// export function SearchFilters({ onSearch, initialParams }: SearchFiltersProps) {
//   const [location, setLocation] = useState(initialParams.location || "")
//   const [propertyType, setPropertyType] = useState(initialParams.propertyType || "all")
//   const [budget, setBudget] = useState(initialParams.budget || "all")
//   const [amenities, setAmenities] = useState<string[]>(initialParams.amenities || [])
//   const [sortBy, setSortBy] = useState(initialParams.sortBy || "relevance")

//   const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false)
//   const [isBudgetOpen, setIsBudgetOpen] = useState(false)
//   const [isSortOpen, setIsSortOpen] = useState(false)

//   const propertyTypes = [
//     { value: "all", label: "All Types" },
//     { value: "pg", label: "PG" },
//     { value: "flat", label: "Flat" },
//     { value: "hostel", label: "Hostel" },
//   ]

//   const budgetRanges = [
//     { value: "all", label: "Any Budget" },
//     { value: "0-5000", label: "Under ₹5,000" },
//     { value: "5000-10000", label: "₹5,000 - ₹10,000" },
//     { value: "10000-15000", label: "₹10,000 - ₹15,000" },
//     { value: "15000-20000", label: "₹15,000 - ₹20,000" },
//     { value: "20000+", label: "Above ₹20,000" },
//   ]

//   const sortOptions = [
//     { value: "relevance", label: "Most Relevant" },
//     { value: "price-low", label: "Price: Low to High" },
//     { value: "price-high", label: "Price: High to Low" },
//     { value: "rating", label: "Highest Rated" },
//     { value: "newest", label: "Newest First" },
//   ]

//   const amenityOptions = [
//     { value: "wifi", label: "WiFi", icon: Wifi },
//     { value: "parking", label: "Parking", icon: Car },
//     { value: "meals", label: "Meals", icon: Utensils },
//     { value: "gym", label: "Gym", icon: Dumbbell },
//     { value: "swimming", label: "Swimming Pool", icon: Waves },
//     { value: "security", label: "24/7 Security", icon: Shield },
//   ]

//   const handleAmenityToggle = (amenity: string) => {
//     setAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
//   }

//   const handleSearch = () => {
//     onSearch({
//       location,
//       propertyType,
//       budget,
//       amenities,
//       sortBy,
//     })
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
//       <h2 className="font-semibold text-lg mb-6">Filter Results</h2>

//       {/* Location */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//         <div className="relative">
//           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Enter city, college name..."
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full pl-10 h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
//           />
//         </div>
//       </div>

//       {/* Property Type */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
//         <div className="relative">
//           <button
//             onClick={() => setIsPropertyTypeOpen(!isPropertyTypeOpen)}
//             className="w-full h-10 px-3 py-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 flex items-center justify-between"
//           >
//             <span className={propertyType ? "text-gray-900" : "text-gray-500"}>
//               {propertyTypes.find((type) => type.value === propertyType)?.label || "Select type"}
//             </span>
//             <ChevronDown
//               className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isPropertyTypeOpen ? "rotate-180" : ""}`}
//             />
//           </button>
//           {isPropertyTypeOpen && (
//             <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//               {propertyTypes.map((type) => (
//                 <button
//                   key={type.value}
//                   onClick={() => {
//                     setPropertyType(type.value)
//                     setIsPropertyTypeOpen(false)
//                   }}
//                   className="w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
//                 >
//                   {type.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Budget */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
//         <div className="relative">
//           <button
//             onClick={() => setIsBudgetOpen(!isBudgetOpen)}
//             className="w-full h-10 px-3 py-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 flex items-center justify-between"
//           >
//             <span className={budget ? "text-gray-900" : "text-gray-500"}>
//               {budgetRanges.find((range) => range.value === budget)?.label || "Select budget"}
//             </span>
//             <ChevronDown
//               className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isBudgetOpen ? "rotate-180" : ""}`}
//             />
//           </button>
//           {isBudgetOpen && (
//             <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//               {budgetRanges.map((range) => (
//                 <button
//                   key={range.value}
//                   onClick={() => {
//                     setBudget(range.value)
//                     setIsBudgetOpen(false)
//                   }}
//                   className="w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
//                 >
//                   {range.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Amenities */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
//         <div className="space-y-2">
//           {amenityOptions.map((amenity) => {
//             const Icon = amenity.icon
//             return (
//               <label key={amenity.value} className="flex items-center space-x-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={amenities.includes(amenity.value)}
//                   onChange={() => handleAmenityToggle(amenity.value)}
//                   className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded transition-colors duration-200"
//                 />
//                 <Icon className="h-4 w-4 text-gray-500" />
//                 <span className="text-sm text-gray-700">{amenity.label}</span>
//               </label>
//             )
//           })}
//         </div>
//       </div>

//       {/* Sort By */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
//         <div className="relative">
//           <button
//             onClick={() => setIsSortOpen(!isSortOpen)}
//             className="w-full h-10 px-3 py-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 flex items-center justify-between"
//           >
//             <span className="text-gray-900">{sortOptions.find((option) => option.value === sortBy)?.label}</span>
//             <ChevronDown
//               className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}
//             />
//           </button>
//           {isSortOpen && (
//             <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//               {sortOptions.map((option) => (
//                 <button
//                   key={option.value}
//                   onClick={() => {
//                     setSortBy(option.value)
//                     setIsSortOpen(false)
//                   }}
//                   className="w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
//                 >
//                   {option.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Search Button */}
//       <button
//         onClick={handleSearch}
//         className="w-full h-12 px-4 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transform hover:scale-105 flex items-center justify-center"
//       >
//         <Search className="mr-2 h-4 w-4" />
//         Apply Filters
//       </button>
//     </div>
//   )
// }
