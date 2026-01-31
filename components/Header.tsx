"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

// import { useSession, signOut } from 'next-auth/react';
// import { User } from 'next-auth';

export function Header() {

//   const { data: session } = useSession();
//   const user: User = session?.user as User;

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm shadow-sm">
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
            <Link href='/search' className="text-slate-600 active:text-slate-950 text-md font-medium hover:text-brand-primary transition-colors">
              Find PG/Flats
            </Link>
            {/* {user && user.role === 'owner' &&
              <Link href='/list-property' className="text-slate-600 active:text-slate-950 text-md font-medium hover:text-brand-primary transition-colors">
                List Your Property
              </Link>
            } */}
            <Link href='/about' className="text-slate-600 active:text-slate-950 text-md font-medium hover:text-brand-primary transition-colors">
              About
            </Link>
            <Link href='/contact' className="text-slate-600 active:text-slate-950 text-md font-medium hover:text-brand-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <Link href={'/profile'} className="gap-4 flex items-center">
                <span className='font-semibold'>Hey, {user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="inline-flex items-center justify-center px-4 py-2 text-md font-medium text-white bg-brand-primary hover:bg-brand-primary/90 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <div className="gap-4 flex items-center">
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
            )}
          </div> */}

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
              {/* {user && user.role === 'owner' &&
                <Link
                  href="/list-property"
                  className="text-sm font-medium hover:text-brand-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  List Your Property
                </Link>
              } */}
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
              {/* <div className="flex flex-col space-y-2 pt-4 border-t">
                {session ? (
                  <div className="flex flex-col space-y-2">
                    <span className='font-semibold'>Hey, {user.name}</span>
                    <button
                      onClick={() => signOut()}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90 rounded-lg transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/login"
                      className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90 rounded-lg transition-all duration-200"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
