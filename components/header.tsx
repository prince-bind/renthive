"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const currentPath = usePathname();
  const links = [
    { label: "Find PG/Flats", href: '/search' },
    { label: "List Your Property", href: '/list-property' },
    { label: "About", href: '/about' },
    { label: "Contact", href: '/contact' }
  ]


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <Image
                src="/renthive-logo.jpg"
                width={40}
                height={40}
                alt="hero-image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="font-heading text-xl font-bold text-black">RentHive</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map(link => (
                <Link key={link.href} href={link.href} className={`${link.href === currentPath ? 'text-slate-950' : 'text-slate-600'} text-md font-medium hover:text-brand-primary transition-colors`}>
                  {link.label}
                </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-md font-medium text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-4 py-2 text-md font-medium text-white bg-brand-primary hover:bg-brand-primary/90 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Sign Up
            </Link>
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
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
