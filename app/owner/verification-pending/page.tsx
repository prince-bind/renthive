export default function VerificationPendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md text-center bg-white p-6 rounded-xl shadow">
        <h1 className="text-xl font-semibold text-[#3E568C]">
          Verification Pending
        </h1>
        <p className="mt-3 text-gray-600 text-sm">
          Your account is under verification.  
          You'll be able to add properties once approved by admin.
        </p>
      </div>
    </div>
  );
}
