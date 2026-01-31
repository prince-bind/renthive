import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    // Applied Dark Charcoal background (#1A1A1A) matching the logo's dark grey
    <footer className="bg-[#1A1A1A] text-[#F2F0EB] border-t border-[#C0A06A]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* Uncomment this section when you are ready to use the logo image */}
              {/* <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                <Image
                  src="/renthive-logo.jpg"
                  width={40}
                  height={40}
                  alt="RentHive Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div> */}
              <span className="font-heading text-2xl font-bold text-white">RentHive</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in finding the ideal PG and Flats.
            </p>
            
            {/* Social Icons - Updated hover color to Gold (#C0A06A) */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#F2F0EB]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  Find PG/Flats
                </Link>
              </li>
              <li>
                <Link href="/list-property" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  List Property
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#F2F0EB]">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/safety-tips" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/student-guide" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  Student Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-[#C0A06A] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Icons updated to Gold (#C0A06A) */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#F2F0EB]">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#C0A06A]" />
                <span className="text-gray-400 text-sm">support@renthive.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#C0A06A]" />
                <span className="text-gray-400 text-sm">+91-9876543210</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#C0A06A] mt-0.5" />
                <span className="text-gray-400 text-sm">
                  DTU, Shahbad Daulatpur,
                  <br />
                  Delhi - 110042
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 RentHive. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-[#C0A06A] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#C0A06A] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-[#C0A06A] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}