export default function OwnerTenant() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
            Built for Owners & Tenants
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you own properties or rent one, RentHive keeps everything simple.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Owner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#3E568C]">
            <h3 className="text-2xl font-semibold mb-4 text-[#3E568C]">
              For Property Owners
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>✔ Manage multiple properties easily</li>
              <li>✔ Automated rent reminders</li>
              <li>✔ Track payments & tenants</li>
              <li>✔ Secure documents & agreements</li>
            </ul>
            <button
              className="mt-6 bg-[#3E568C] hover:bg-[#354B7A] text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Start as Owner
            </button>
          </div>

          {/* Tenant */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#3E568C]">
            <h3 className="text-2xl font-semibold mb-4 text-[#3E568C]">
              For Tenants
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>✔ Easy rent payments</li>
              <li>✔ Payment history & receipts</li>
              <li>✔ Direct owner communication</li>
              <li>✔ Maintenance & issue tracking</li>
            </ul>
            <button
              className="mt-6 bg-[#3E568C] hover:bg-[#354B7A] text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Start as Tenant
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
