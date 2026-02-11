import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function OwnerDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "OWNER") {
    redirect("/login");
  }

  const { name, isVerified } = session.user;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-semibold text-[#1F2A44]">
        Welcome, {name}
      </h1>

      {/* Verification Status */}
      <div
        className={`p-4 rounded-xl border ${
          isVerified
            ? "bg-green-50 border-green-200"
            : "bg-yellow-50 border-yellow-200"
        }`}
      >
        <p
          className={`font-medium ${
            isVerified ? "text-green-700" : "text-yellow-700"
          }`}
        >
          {isVerified
            ? "Your account is verified."
            : "Your account is pending verification."}
        </p>

        {!isVerified && (
          <p className="text-sm text-yellow-700 mt-1">
            You can add properties once admin approves your account.
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-2">My Properties</h2>
          <p className="text-sm text-gray-500 mb-3">
            View and manage your listed PGs and flats.
          </p>
          <Link
            href="/owner/properties"
            className="text-sm font-medium text-[#3E568C] hover:underline"
          >
            Go to properties →
          </Link>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-2">Add New Property</h2>
          <p className="text-sm text-gray-500 mb-3">
            List a new PG or flat near a college.
          </p>

          {isVerified ? (
            <Link
              href="/owner/properties/new"
              className="text-sm font-medium text-[#3E568C] hover:underline"
            >
              Add property →
            </Link>
          ) : (
            <p className="text-sm text-gray-400">
              Available after verification
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
