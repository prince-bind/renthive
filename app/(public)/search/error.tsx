"use client";

import { useEffect } from "react";

export default function SearchError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Search page error:", error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <h2 className="text-xl font-semibold text-[#3E568C]">
                    Something went wrong
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                    We couldn’t load the properties right now.
                    Please try again.
                </p>

                <div className="mt-6 flex gap-3 justify-center">
                    <button
                        onClick={reset}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white transition"
                        style={{ backgroundColor: "#3E568C" }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#334873")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "#3E568C")
                        }
                    >
                        Retry
                    </button>

                    <a
                        href="/search"
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                        Back to search
                    </a>
                </div>
            </div>
        </div>
    );
}
