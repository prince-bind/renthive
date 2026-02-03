export default function SearchNotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <h2 className="text-xl font-semibold text-[#3E568C]">
                    No properties found
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                    We couldn't find any properties matching your search criteria.
                </p>

                <div className="mt-6 flex gap-3 justify-center">
                    {/* Clear filters */}
                    <a
                        href="/search"
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-[#3E568C] hover:bg-[#334873] transition"
                    >
                        Clear filters
                    </a>

                    {/* Home */}
                    <a
                        href="/"
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                    >
                        Go to home
                    </a>
                </div>
            </div>
        </div>
    );
}
