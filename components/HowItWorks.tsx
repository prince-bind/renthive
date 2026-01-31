export default function HowItWorks() {
  return (
    <section className="bg-slate-100 py-24 " id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
            How It Works
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Finding your perfect accommodation is just 4 simple steps away
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            { step: "01", icon: "🔍", title: "Search & Filter", desc: "Use our smart search to find PGs and flats near your college with your preferred amenities and budget." },
            { step: "02", icon: "👁️", title: "Browse & Compare", desc: "View detailed photos, amenities, reviews, and compare multiple properties to find your perfect match." },
            { step: "03", icon: "💬", title: "Connect & Visit", desc: "Contact property owners directly, schedule visits, and get all your questions answered." },
            { step: "04", icon: "🔑", title: "Book & Move In", desc: "Complete the booking process securely and move into your new home with confidence." }
          ].map((item) => (
            <div
              key={item.step}
              className="group relative bg-white rounded-2xl p-8 text-center
                         shadow-md border border-slate-200
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:shadow-xl hover:border-[#3E568C]"
            >
              {/* Step Number */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2
                               bg-[#3E568C] text-white text-sm font-semibold
                               px-3 py-1 rounded-full">
                {item.step}
              </span>

              {/* Icon */}
              <div
                className="mx-auto w-16 h-16 flex items-center justify-center rounded-full
                           bg-[#E8EDFA] text-[#3E568C] text-2xl mb-6
                           transition-transform duration-300 group-hover:scale-110"
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#1F2A44] mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
