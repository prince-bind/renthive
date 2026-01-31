export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
            Everything You Need to Manage Rentals
          </h2>
          <p className="mt-4 text-slate-600">
            RentHive simplifies renting for owners and tenants with smart tools
            built for modern property management.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#3E568C]">
            <div className="text-[#3E568C] text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
              Property Management
            </h3>
            <p className="text-slate-600">
              Add, track, and manage all your properties from a single dashboard.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#3E568C]">
            <div className="text-[#3E568C] text-3xl mb-4">💳</div>
            <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
              Rent & Payments
            </h3>
            <p className="text-slate-600">
              Collect rent, track payments, and send reminders automatically.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#3E568C]">
            <div className="text-[#3E568C] text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-[#1F2A44] mb-2">
              Owner & Tenant Portal
            </h3>
            <p className="text-slate-600">
              Dedicated portals for owners and tenants to communicate seamlessly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
