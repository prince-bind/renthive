"use client";

import { useRouter } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
  baseQuery,
}: {
  currentPage: number;
  totalPages: number;
  baseQuery: string;
}) {
  const router = useRouter();

  const goToPage = (page: number) => {
    const q = new URLSearchParams(baseQuery);
    q.set("page", String(page));
    router.push(`/search?${q.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span className="px-3 py-1 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
