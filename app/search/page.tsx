"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { SearchFilters } from "@/components/search/SearchFilters"
import { SearchResults } from "@/components/search/SearchResults"
import propertiesData from "@/components/search/properties.json"

interface SearchParams {
  location: string
  propertyType: string
  budget: string
  sortBy: string
}

export default function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData)

  const handleSearch = (params: SearchParams) => {
    let results = propertiesData

    // Location filter
    if (params.location && params.location.trim() !== "") {
      results = results.filter(
        (p) =>
          p.location.toLowerCase().includes(params.location.toLowerCase()) ||
          p.college.some((c: string) =>
            c.toLowerCase().includes(params.location.toLowerCase())
          )
      )
    }

    // Property type filter
    if (params.propertyType !== "all") {
      results = results.filter((p) => p.type.toLowerCase() === params.propertyType)
    }

    // Budget filter
    if (params.budget !== "all") {
      if (params.budget === "20000+") {
        results = results.filter((p) => p.price > 20000)
      } else {
        const [min, max] = params.budget.split("-").map(Number)
        results = results.filter((p) => p.price >= min && p.price <= max)
      }
    }

    // Sorting
    if (params.sortBy === "price-low") {
      results = [...results].sort((a, b) => a.price - b.price)
    } else if (params.sortBy === "price-high") {
      results = [...results].sort((a, b) => b.price - a.price)
    } else if (params.sortBy === "newest") {
      results = [...results].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    }

    setFilteredProperties(results)
  }

  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 mt-10 px-4">
        {/* Sidebar filters */}
        <div className="w-full lg:w-1/3">
          <SearchFilters onSearch={handleSearch} initialParams={{}} />
        </div>

        {/* Property results */}
        <div className="w-full lg:w-2/3 mb-10">
          <SearchResults properties={filteredProperties} />
        </div>
      </div>
    </>
  )
}
