import { MapPin } from "lucide-react"

interface SearchHeaderProps {
  totalResults: number
  searchParams: {
    location: string
    propertyType: string
    budget: string
  }
  isLoading: boolean
}

export function SearchHeader({ totalResults, searchParams, isLoading }: SearchHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            {searchParams.location ? `PGs & Flats in ${searchParams.location}` : "Search Results"}
          </h1>
          <p className="text-gray-600 mt-1">{isLoading ? "Searching..." : `${totalResults} properties found`}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>Showing verified properties only</span>
        </div>
      </div>

      {/* Active Filters */}
      {(searchParams.location || searchParams.propertyType !== "all" || searchParams.budget !== "all") && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchParams.location && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-primary/10 text-brand-primary">
              📍 {searchParams.location}
            </span>
          )}
          {searchParams.propertyType !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-secondary/10 text-brand-secondary">
              🏠 {searchParams.propertyType.toUpperCase()}
            </span>
          )}
          {searchParams.budget !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-accent/10 text-brand-accent">
              💰 {searchParams.budget}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
