import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function StudentProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "STUDENT") {
    redirect("/login");
  }

  const { name, email } = session.user;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-[#1F2A44] mb-6">
        My Profile
      </h1>

      <div className="bg-white border rounded-xl p-6 space-y-4">
        <div>
          <label className="text-sm text-gray-500">Name</label>
          <p className="font-medium">{name}</p>
        </div>

        <div>
          <label className="text-sm text-gray-500">Email</label>
          <p className="font-medium">{email}</p>
        </div>

        <div>
          <label className="text-sm text-gray-500">Role</label>
          <p className="font-medium">Student</p>
        </div>
      </div>
    </div>
  );
}
