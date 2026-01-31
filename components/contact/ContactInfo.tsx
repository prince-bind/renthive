import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600 mb-2">Get in touch via email</p>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">General:</span> renthive@gmail.com
                </p>
                {/* <p className="text-sm">
                  <span className="font-medium">Property Owners:</span> owners@pgfinder.com
                </p>
                <p className="text-sm">
                  <span className="font-medium">Partnerships:</span> partnerships@pgfinder.com
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600 mb-2">Speak directly with our team</p>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Support:</span> +91 9876543210
                </p>
                <p className="text-sm">
                  <span className="font-medium">Emergency:</span> +91 9876543211
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 mb-2">Our headquarters</p>
              <p className="text-sm">
                RentHive Technologies Pvt. Ltd.
                <br />
                DTU, Shahbad daulatpur
                <br />
                Delhi - 110042
                <br />
                India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Business Hours</h3>
              <p className="text-gray-600 mb-2">When we&apos;re available</p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium">Monday - Friday:</span> 9:00 AM - 7:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 10:00 AM - 5:00 PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> Closed
                </p>
                <p className="text-blue-600 font-medium mt-2">24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Live Chat</h3>
              <p className="text-gray-600 mb-2">Get instant help</p>
              <p className="text-sm">Available on our website during business hours for immediate assistance.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">Social Media</h3>
              <p className="text-gray-600 mb-2">Connect with us online</p>
              <div className="space-y-1 text-sm">
                <p>Follow us for updates and tips</p>
                <div className="flex space-x-4 mt-2">
                  <span className="text-blue-600">@RentHive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
