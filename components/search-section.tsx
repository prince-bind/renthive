"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Search, MapPin, SlidersHorizontal } from "lucide-react"

export function SearchSection() {
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [budget, setBudget] = useState("")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Search Your Ideal Accommodation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use our advanced search to find PGs and flats that match your preferences and budget
          </p>
        </div>

        <Card className="p-6 shadow-lg border-0 bg-gradient-to-r from-gray-50 to-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Location Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Enter city, college name..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Property Type</label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="pg">PG</SelectItem>
                  <SelectItem value="flat">Flat</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Budget</label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Budget</SelectItem>
                  <SelectItem value="0-5000">Under ₹5,000</SelectItem>
                  <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="10000-15000">₹10,000 - ₹15,000</SelectItem>
                  <SelectItem value="15000-20000">₹15,000 - ₹20,000</SelectItem>
                  <SelectItem value="20000+">Above ₹20,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex gap-2">
              <Button size="lg" className="flex-1 h-12 bg-brand-primary hover:bg-brand-primary/90">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-3 bg-transparent">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm font-medium text-gray-700 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "PG near IIT Delhi",
                "Girls PG in Delhi",
                "Flats near DTU",
                "Boys Hostel NSUT",
                "Affordable PG DTU",
                "AC Rooms Delhi",
              ].map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-brand-primary hover:text-white hover:border-brand-primary bg-transparent"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
