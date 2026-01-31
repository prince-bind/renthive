import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-teal-600 py-16 transition-all duration-500 ease-in-out">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl tracking-tight">
              Get in Touch
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-blue-100">
              Have questions? We&apos;re here to help you find the perfect accommodation or assist with your property
              listing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Quick answers to common questions about our platform
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mx-auto max-w-4xl md:grid-cols-2">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                How do I list my property?
              </h3>
              <p className="text-gray-600">
                Simply register as a property owner, complete your profile, and use our easy listing form to add your PG
                or flat details.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Is the platform free for students?
              </h3>
              <p className="text-gray-600">
                Yes! Students can search and contact property owners completely free. We only charge a small commission
                to property owners.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                How do I verify property details?
              </h3>
              <p className="text-gray-600">
                All properties go through our verification process. You can also read reviews from other students and
                contact owners directly.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                What if I face issues with a property?
              </h3>
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