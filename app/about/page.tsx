import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Award, Heart, Target, Eye } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">About RentHive</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connecting students with perfect accommodations near their colleges. We're making student housing search
              simple, safe, and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <Target className="h-8 w-8 text-brand-primary" />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize student accommodation by creating a trusted platform that connects students with
                  verified, affordable, and comfortable living spaces near their colleges.
                </p>
              </div>

              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Eye className="h-8 w-8 text-brand-secondary" />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become India's most trusted student accommodation platform, where every student finds their perfect
                  home away from home with complete peace of mind.
                </p>
              </div>
            </div>

            <div className="relative">
              <img src="/modern-student-study.png" alt="Students in accommodation" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Trust & Safety</h3>
                <p className="text-gray-600">
                  Every property is verified and every user is authenticated for maximum safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Student-First</h3>
                <p className="text-gray-600">We prioritize student needs and make accommodation search hassle-free.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-brand-accent" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">We maintain high standards for all listings and user experiences.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Building a supportive community of students and property owners.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that showcase our growing community</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">10,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-secondary mb-2">5,000+</div>
              <div className="text-gray-600">Verified Properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-accent mb-2">200+</div>
              <div className="text-gray-600">Partner Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working to make student accommodation search better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src="/prince.jpg"
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">Prince Bind</h3>
              <p className="text-brand-primary font-medium">Founder & CEO</p>
              <p className="text-gray-600 text-sm mt-2">Ex-student who experienced accommodation struggles firsthand</p>
            </div>
            <div className="text-center">
              <img
                src="/ankit.jpg"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">Ankit Kumar</h3>
              <p className="text-brand-primary font-medium">Co-founder & CTO</p>
              <p className="text-gray-600 text-sm mt-2">Tech expert passionate about solving real-world problems</p>
            </div>
            <div className="text-center">
              <img
                src="/aman.jpg"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">Aman Kumar</h3>
              <p className="text-brand-primary font-medium">Head of Operations</p>
              <p className="text-gray-600 text-sm mt-2">Ensuring smooth operations and customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Accommodation?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their ideal living spaces through PGFinder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-brand-primary"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
