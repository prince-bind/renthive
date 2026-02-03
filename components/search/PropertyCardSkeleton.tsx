export default function PropertyCardSkeleton() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-pulse">
            <div className="flex flex-col sm:flex-row">
                {/* Image skeleton */}
                <div className="sm:w-56 h-44 sm:h-auto bg-gray-200" />

                {/* Content skeleton */}
                <div className="flex-1 p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />

                    <div className="flex gap-2 mt-3">
                        <div className="h-6 w-14 bg-gray-200 rounded" />
                        <div className="h-6 w-14 bg-gray-200 rounded" />
                        <div className="h-6 w-14 bg-gray-200 rounded" />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="h-4 bg-gray-200 rounded w-20" />
                        <div className="h-4 bg-gray-200 rounded w-24" />
                    </div>
                </div>
            </div>
        </div>
    );
}
