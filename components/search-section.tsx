"use client"

import { useState } from "react"
import { Search, MapPin, SlidersHorizontal, ChevronDown } from "lucide-react"

export function SearchSection() {
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [budget, setBudget] = useState("")
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false)
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)

  const propertyTypes = [
    { value: "all", label: "All Types" },
    { value: "pg", label: "PG" },
    { value: "flat", label: "Flat" },
    { value: "hostel", label: "Hostel" },
  ]

  const budgetRanges = [
    { value: "all", label: "Any Budget" },
    { value: "0-5000", label: "Under ₹5,000" },
    { value: "5000-10000", label: "₹5,000 - ₹10,000" },
    { value: "10000-15000", label: "₹10,000 - ₹15,000" },
    { value: "15000-20000", label: "₹15,000 - ₹20,000" },
    { value: "20000+", label: "Above ₹20,000" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Search Your Ideal Accommodation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use our advanced search to find PGs and flats that match your preferences and budget
          </p>
        </div>

        <div className="p-6 shadow-lg border-0 bg-gradient-to-r from-gray-50 to-white rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Location Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter city, college name..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Property Type</label>
              <div className="relative">
                <button
                  onClick={() => setIsPropertyTypeOpen(!isPropertyTypeOpen)}
                  className="w-full h-12 px-3 py-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 flex items-center justify-between"
                >
                  <span className={propertyType ? "text-gray-900" : "text-gray-500"}>
                    {propertyTypes.find((type) => type.value === propertyType)?.label || "Select type"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isPropertyTypeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isPropertyTypeOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {propertyTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => {
                          setPropertyType(type.value)
                          setIsPropertyTypeOpen(false)
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Budget</label>
              <div className="relative">
                <button
                  onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                  className="w-full h-12 px-3 py-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 flex items-center justify-between"
                >
                  <span className={budget ? "text-gray-900" : "text-gray-500"}>
                    {budgetRanges.find((range) => range.value === budget)?.label || "Select budget"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isBudgetOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isBudgetOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {budgetRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => {
                          setBudget(range.value)
                          setIsBudgetOpen(false)
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="flex gap-2">
              <button className="flex-1 h-12 px-4 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transform hover:scale-105 flex items-center justify-center">
                <Search className="mr-2 h-4 w-4" />
                Search
              </button>
              <button className="h-12 px-3 py-2 bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm font-medium text-gray-700 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "PG near IIT Delhi",
                "Girls PG in Bangalore",
                "Flats near DU",
                "Boys Hostel Mumbai",
                "Affordable PG Pune",
                "AC Rooms Chennai",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-xs bg-transparent border border-gray-300 hover:bg-brand-primary hover:text-white hover:border-brand-primary text-gray-700 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-1"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
