import { Card, CardContent } from "@/components/ui/card"
import { Search, Eye, MessageCircle, Key } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search & Filter",
    description:
      "Use our smart search to find PGs and flats near your college with your preferred amenities and budget.",
    step: "01",
  },
  {
    icon: Eye,
    title: "Browse & Compare",
    description:
      "View detailed photos, amenities, reviews, and compare multiple properties to find your perfect match.",
    step: "02",
  },
  {
    icon: MessageCircle,
    title: "Connect & Visit",
    description: "Contact property owners directly, schedule visits, and get all your questions answered.",
    step: "03",
  },
  {
    icon: Key,
    title: "Book & Move In",
    description: "Complete the booking process securely and move into your new home with confidence.",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect accommodation is just 4 simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brand-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
