import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200 pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-center">

        {/* Left Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Find Your Perfect <br />
            Accomodation with <br />
            <span className="text-[#3E568C]">Zero Stress</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            RentHive helps students and professionals discover verified PGs and
            rental homes, connect with owners, and move in confidently.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-full bg-[#3E568C] text-white font-semibold hover:bg-[#354B7A] hover:scale-105 transition">
              Find PG/Flats
            </button>
            <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 hover:scale-105 transition">
              List Your Property
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end items-center overflow-visible">
          <div
            className="
              relative
              w-full
              max-w-md
              sm:max-w-lg
              lg:max-w-none 
              lg:w-[120%]
              lg:translate-x-16
              animate-float
            "
          >
            <Image
              src="/hero-image.png"
              alt="Hero Illustration"
              width={1000}
              height={1000}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
