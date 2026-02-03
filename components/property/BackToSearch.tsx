"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function BackToSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const from = params.get("from");

  return (
    <button
      onClick={() => {
        if (from === "search") {
          router.back();
        } else {
          router.push("/search");
        }
      }}
      className="text-sm text-blue-600 hover:underline mb-4"
    >
      ← Back to search
    </button>
  );
}
