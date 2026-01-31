import { Users, Shield, Award, Heart, Target, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-teal-600 py-16 transition-all duration-500 ease-in-out">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center transition-all duration-700 ease-out transform">
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-4">
              About RentHive
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto transition-opacity duration-500 delay-300">
              Connecting students with perfect accommodations near their colleges. We&apos;re making student housing search
              simple, safe, and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Mission */}
              <div className="transition-all duration-500 hover:translate-x-2">
                <h2 className="font-bold text-3xl text-gray-900 mb-6">Our Mission</h2>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="transition-transform duration-300 hover:scale-110">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-300 hover:text-gray-800">
                    To revolutionize student accommodation by creating a trusted platform that connects students with
                    verified, affordable, and comfortable living spaces near their colleges.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="transition-all duration-500 hover:translate-x-2">
                <h2 className="font-bold text-3xl text-gray-900 mb-6">Our Vision</h2>
                <div className="flex items-start space-x-4">
                  <div className="transition-transform duration-300 hover:scale-110">
                    <Eye className="h-8 w-8 text-teal-600" />
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-300 hover:text-gray-800">
                    To become India&apos;s most trusted student accommodation platform, where every student finds their
                    perfect home away from home with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/modern-student-study.png"
                width={800}
                height={500}
                alt="Student studying"
                className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-900 mb-4 transition-colors duration-300">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust & Safety */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-blue-200 hover:scale-110">
                  <Shield className="h-8 w-8 text-blue-600 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
                  Trust & Safety
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  Every property is verified and every user is authenticated for maximum safety.
                </p>
              </div>
            </div>

            {/* Student-First */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="pt-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-teal-200 hover:scale-110">
                  <Users className="h-8 w-8 text-teal-600 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 transition-colors duration-300 hover:text-teal-600">
                  Student-First
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  We prioritize student needs and make accommodation search hassle-free.
                </p>
              </div>
            </div>

            {/* Quality */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-orange-200 hover:scale-110">
                  <Award className="h-8 w-8 text-orange-600 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 transition-colors duration-300 hover:text-orange-600">
                  Quality
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  We maintain high standards for all listings and user experiences.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-red-200 hover:scale-110">
                  <Heart className="h-8 w-8 text-red-500 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 transition-colors duration-300 hover:text-red-500">
                  Community
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  Building a supportive community of students and property owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that showcase our growing community</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-colors duration-300 hover:text-blue-700">
                10,000+
              </div>
              <div className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                Happy Students
              </div>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-bold text-teal-600 mb-2 transition-colors duration-300 hover:text-teal-700">
                5,000+
              </div>
              <div className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                Verified Properties
              </div>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-bold text-orange-600 mb-2 transition-colors duration-300 hover:text-orange-700">
                200+
              </div>
              <div className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                Partner Colleges
              </div>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-bold text-green-600 mb-2 transition-colors duration-300 hover:text-green-700">
                50+
              </div>
              <div className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                Cities Covered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-blue-600 to-teal-600 py-16 transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl text-white mb-4 transition-all duration-300">
            Ready to Find Your Perfect Accommodation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto transition-opacity duration-500">
            Join thousands of students who have found their ideal living spaces through RentHive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-white/10 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}