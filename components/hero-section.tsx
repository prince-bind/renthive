import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Shield, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect <span className="text-brand-primary">PG & Flats</span> Near College
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover comfortable, affordable, and verified accommodations near your college. Join thousands of
                students who found their ideal home through RentHive.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10">
                  <MapPin className="h-4 w-4 text-brand-primary" />
                </div>
                <span className="text-sm font-medium">500+ Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary/10">
                  <Shield className="h-4 w-4 text-brand-secondary" />
                </div>
                <span className="text-sm font-medium">Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent/10">
                  <Star className="h-4 w-4 text-brand-accent" />
                </div>
                <span className="text-sm font-medium">50k+ Happy Students</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                <Link href="/search">
                  Find PG/Flats
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent"
              >
                <Link href="/list-property">List Your Property</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-image.png"
                alt="Modern student accommodation"
                className="w-full  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">100% Verified</p>
                  <p className="text-xs text-muted-foreground">Properties</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">4.8/5 Rating</p>
                  <p className="text-xs text-muted-foreground">Student Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
