"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return <div className="text-sm text-gray-400">Loading...</div>;
  }

  // 🔓 Not logged in
  if (!session?.user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-[#3E568C] hover:underline"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="text-sm font-medium text-[#3E568C] hover:underline"
        >
          Register
        </Link>
      </div>
    );
  }

  const { name, role, isVerified } = session.user;

  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <div ref={ref} className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 focus:outline-none"
      >
        {/* Avatar */}
        <div className="h-9 w-9 rounded-full bg-[#3E568C] text-white flex items-center justify-center text-sm font-semibold">
          {initials}
        </div>

        {/* Desktop name */}
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-800 leading-tight">
            {name}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            {role}
            {role === "OWNER" && (
              <span
                className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px]
                  ${
                    isVerified
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {isVerified ? "Verified" : "Pending"}
              </span>
            )}
          </p>
        </div>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-3 w-56
            bg-white border border-gray-200 rounded-xl shadow-lg
            z-50
          "
        >
          <div className="p-4 border-b">
            <p className="text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">
              {role}
              {role === "OWNER" && !isVerified && " • Pending"}
            </p>
          </div>

          <div className="flex flex-col py-2">
            {/* Student */}
            {role === "STUDENT" && (
              <Link
                href="/student/profile"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm hover:bg-gray-50"
              >
                Profile
              </Link>
            )}

            {/* Owner */}
            {role === "OWNER" && (
              <Link
                href="/owner/dashboard"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm hover:bg-gray-50"
              >
                Dashboard
              </Link>
            )}

            {/* Settings (shared) */}
            <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-sm hover:bg-gray-50"
            >
              Settings
            </Link>

            <div className="border-t mt-2 pt-2 px-4">
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
