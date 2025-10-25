"use client"

import { Camera, Mail, Phone } from "lucide-react"

import { useSession } from 'next-auth/react';
import { User } from 'next-auth';

export function UserProfile() {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  if (!user) return null

  const initials =
    user.name
      ?.split(" ")
      .map((n: string) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U"

  return (
    <div className="space-y-6">
      {/* Profile Header (Card) */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-md">
        <div className="p-6">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-2xl font-semibold text-gray-700">
                {initials}
              </div>
              <button
                type="button"
                className="absolute -bottom-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white shadow-md transition hover:bg-brand-primary/90"
                aria-label="Change avatar"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* Identity */}
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{user.phone}</span>
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              className={`mt-4 inline-block rounded-md bg-gray-100 px-4 py-2 text-sm ${user.role === "student" ? "text-green-800 bg-green-100" : "text-blue-800 bg-blue-100"} font-medium text-gray-700 transition hover:bg-gray-200`}
            >
              {user.role === "student" ? "Student" : "Owner"}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
