"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"OWNER" | "STUDENT" | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = (data: any) => {
    const newErrors: any = {};

    if (!role) newErrors.role = "Please select a role";
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.phone) newErrors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(data.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!data.password) newErrors.password = "Password is required";
    if (data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!data.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!role) {
      setErrors({ role: "Please select a role" });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // 1️⃣ Create user
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password,
          role,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrors({ form: result.error || "Something went wrong" });
        setLoading(false);
        return;
      }

      // 2️⃣ Auto login
      const loginRes = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (loginRes?.error) {
        setErrors({ form: "Login failed after signup" });
        setLoading(false);
        return;
      }

      // 3️⃣ Redirect
      if (role === "OWNER") {
        window.location.href = "/owner/dashboard";
      } else {
        window.location.href = "/search";
      }
    } catch (err) {
      setErrors({ form: "Server error. Try again later." });
      setLoading(false);
    }
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());

  //   const validationErrors = validate(data);
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   setErrors({});
  //   setLoading(true);

  //   const payload = {
  //     name: data.name,
  //     email: data.email,
  //     phone: data.phone,
  //     role,
  //     password: data.password,
  //   };

  //   console.log("Register payload:", payload);

  //   setTimeout(() => {
  //     setLoading(false);
  //     alert("Registered successfully!");
  //   }, 1500);
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 px-8 py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1F2A44]">
            Rent<span className="text-[#3E568C]">Hive</span>
          </h1>
          <p className="mt-2 text-slate-500 text-sm">
            Create your account
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              I am a
            </label>

            <div className="grid grid-cols-2 gap-3">
              {["OWNER", "STUDENT"].map((r) => (
                <button
                  key={r}
                  type="button"
                  disabled={loading}
                  onClick={() => setRole(r as any)}
                  className={`
                    p-4 rounded-xl border text-center transition-all duration-200
                    active:scale-95
                    ${role === r
                      ? "border-[#3E568C] bg-[#E8EDFA] shadow-md scale-[1.02]"
                      : "border-slate-300 hover:border-[#3E568C] hover:shadow-sm hover:scale-[1.02]"
                    }
                  `}
                >
                  <div className="text-lg font-semibold text-[#1F2A44]">
                    {r === "OWNER" ? "Owner" : "Student"}
                  </div>
                  <div className="text-xs text-slate-500">
                    {r === "OWNER" ? "Manage properties" : "Find a place"}
                  </div>
                </button>
              ))}
            </div>

            {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role}</p>
            )}
          </div>

          {/* Name */}
          <input
            name="name"
            placeholder="Full Name"
            disabled={loading}
            className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? "border-red-500" : "border-slate-300"
              } focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40`}
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            disabled={loading}
            className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? "border-red-500" : "border-slate-300"
              } focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40`}
          />

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            disabled={loading}
            className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? "border-red-500" : "border-slate-300"
              } focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40`}
          />

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              disabled={loading}
              className={`w-full px-4 py-2.5 pr-12 rounded-lg border ${errors.password ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-[#3E568C]"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              disabled={loading}
              className={`w-full px-4 py-2.5 pr-12 rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-[#3E568C]"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-sm text-red-500 -mt-3">
              {errors.confirmPassword}
            </p>
          )}

          {errors.form && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
              {errors.form}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${loading
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-[#3E568C] hover:bg-[#354B7A]"
              }`}
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#3E568C] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
