import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions? We're here to help you find the perfect accommodation or assist with your property
              listing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">How do I list my property?</h3>
              <p className="text-gray-600">
                Simply register as a property owner, complete your profile, and use our easy listing form to add your PG
                or flat details.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Is the platform free for students?</h3>
              <p className="text-gray-600">
                Yes! Students can search and contact property owners completely free. We only charge a small commission
                to property owners.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">How do I verify property details?</h3>
              <p className="text-gray-600">
                All properties go through our verification process. You can also read reviews from other students and
                contact owners directly.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">What if I face issues with a property?</h3>
              <p className="text-gray-600">
                Contact our support team immediately. We have a dedicated resolution process to help both students and
                property owners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
