import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {/* Email */}
      <InfoCard
        icon={<Mail className="h-5 w-5 text-[#3E568C]" />}
        title="Email Us"
        subtitle="Get in touch via email"
      >
        <p className="text-sm">
          <span className="font-medium">General:</span> renthive@gmail.com
        </p>
      </InfoCard>

      {/* Phone */}
      <InfoCard
        icon={<Phone className="h-5 w-5 text-[#3E568C]" />}
        title="Call Us"
        subtitle="Speak directly with our team"
      >
        <p className="text-sm">
          <span className="font-medium">Support:</span> +91 9876543210
        </p>
        <p className="text-sm">
          <span className="font-medium">Emergency:</span> +91 9876543211
        </p>
      </InfoCard>

      {/* Address */}
      <InfoCard
        icon={<MapPin className="h-5 w-5 text-[#3E568C]" />}
        title="Visit Us"
        subtitle="Our headquarters"
      >
        <p className="text-sm leading-relaxed">
          RentHive Technologies Pvt. Ltd.
          <br />
          DTU, Shahbad Daulatpur
          <br />
          Delhi – 110042
          <br />
          India
        </p>
      </InfoCard>

      {/* Hours */}
      <InfoCard
        icon={<Clock className="h-5 w-5 text-[#3E568C]" />}
        title="Business Hours"
        subtitle="When we&apos;re available"
      >
        <p className="text-sm">
          <span className="font-medium">Mon – Fri:</span> 9:00 AM – 7:00 PM
        </p>
        <p className="text-sm">
          <span className="font-medium">Saturday:</span> 10:00 AM – 5:00 PM
        </p>
        <p className="text-sm">
          <span className="font-medium">Sunday:</span> Closed
        </p>
        <p className="mt-2 text-sm font-medium text-[#3E568C]">
          24/7 Emergency Support Available
        </p>
      </InfoCard>

      {/* Live Chat */}
      <InfoCard
        icon={<MessageCircle className="h-5 w-5 text-[#3E568C]" />}
        title="Live Chat"
        subtitle="Get instant help"
      >
        <p className="text-sm">
          Available on our website during business hours for immediate assistance.
        </p>
      </InfoCard>

      {/* Social */}
      <InfoCard
        icon={<Globe className="h-5 w-5 text-[#3E568C]" />}
        title="Social Media"
        subtitle="Connect with us online"
      >
        <p className="text-sm">Follow us for updates and tips</p>
        <p className="mt-2 text-sm font-medium text-[#3E568C]">@RentHive</p>
      </InfoCard>
    </div>
  )
}

/* Reusable Card */
function InfoCard({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm
                    hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="p-6 flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-[#3E568C]/10
                        flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-lg text-slate-900">
            {title}
          </h3>
          <p className="text-slate-600 mb-2">
            {subtitle}
          </p>
          <div className="text-slate-600 space-y-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
