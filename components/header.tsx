"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-brand-primary">RentHive</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/search" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Find PG/Flats
            </Link>
            <Link href="/list-property" className="text-sm font-medium hover:text-brand-primary transition-colors">
              List Your Property
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-brand-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/search"
                className="text-sm font-medium hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find PG/Flats
              </Link>
              <Link
                href="/list-property"
                className="text-sm font-medium hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Property
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
