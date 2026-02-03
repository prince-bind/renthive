"use client";

import { useState } from "react";
import Filters from "./Filters";

export default function FiltersMobile({ colleges }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full border rounded-lg py-2 mb-4 text-sm font-medium"
      >
        Filters
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-sm underline"
              >
                Close
              </button>
            </div>

            {/* 🔥 PASS onApply */}
            <Filters
              colleges={colleges}
              onApply={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
