import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import Image from "next/image"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg">
              <Image
                src="/renthive-logo.jpg"
                width={40}
                height={40}
                alt="hero-image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="font-heading text-2xl font-bold text-black">RentHive</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-brand-primary hover:text-brand-primary/80">
              Sign in
            </Link>
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}
