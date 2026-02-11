export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Unauthorized
        </h1>
        <p className="mt-2 text-gray-500">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
}
