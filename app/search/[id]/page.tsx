"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import PropertyDetails from "@/components/search/PropertyDetails"
import { Property } from "@/types/property-type"

export default function PropertyPage() {
  const { id } = useParams()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchProperty = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/properties/${id}`)
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || "Failed to fetch property")
        setProperty(data)
        console.log(data)
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown server error";
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="h-10 w-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 bg-gray-50">
        {error}
      </div>
    )

  if (!property)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 bg-gray-50">
        Property not found.
      </div>
    )

  return <PropertyDetails property={property} />
}
