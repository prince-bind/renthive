import { Suspense } from "react";
import { headers } from "next/headers";
import Filters from "@/components/search/Filters";
import FiltersMobile from "@/components/search/FiltersMobile";
import FiltersSkeleton from "@/components/search/FiltersSkeleton";

async function fetchColleges() {
  const h = await headers(); // ✅ FIX IS HERE
  const host = h.get("host");

  if (!host) {
    return [];
  }

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/colleges`);

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colleges = await fetchColleges();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Desktop filters */}
        <aside className="hidden lg:block w-90 shrink-0">
          <div className="sticky top-6">
            <Suspense fallback={<FiltersSkeleton />}>
              <Filters colleges={colleges} />
            </Suspense>
          </div>
        </aside>

        {/* Mobile filters */}
        <div className="lg:hidden">
          <Suspense fallback={null}>
            <FiltersMobile colleges={colleges} />
          </Suspense>
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
