"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">

        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/Logo.png"
            alt="RentHive"
            width={180}
            height={100}
            className="object-cover"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-slate-900 font-medium">
          <Link href="/search" className="hover:text-[#3E568C] transition">Find PG/Flats</Link>
          <Link href="/#how-it-works" className="hover:text-[#3E568C] transition">How It Works</Link>
          <Link href="/contact-us" className="hover:text-[#3E568C] transition">Contact Us</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center font-semibold gap-4">
          <Link href="/login" className="px-8 py-2 rounded-full border border-[#3E568C] text-[#3E568C] hover:bg-[#E8EDFA] transition">
            Login
          </Link>
          <Link href="/register" className="px-8 py-3 rounded-full bg-[#3E568C] hover:bg-[#354B7A] text-white transition">
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 text-slate-700">
          <Link href="/search" className="hover:text-[#3E568C] transition">Find PG/Flats</Link>
          <Link href="/#how-it-works" className="hover:text-[#3E568C] transition">How It Works</Link>
          <Link href="/contact-us" className="hover:text-[#3E568C] transition">Contact Us</Link>

          <Link href="/login" className="mt-2 px-6 py-2 rounded-full border border-[#3E568C] text-[#3E568C] hover:bg-[#E8EDFA] transition">
            Login
          </Link>
          <Link href="/register" className="px-6 py-2 rounded-full bg-[#3E568C] hover:bg-[#354B7A] text-white transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
