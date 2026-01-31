"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  userType: string
  subject: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      console.log(data)
      setSubmitStatus("success")
      reset()
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              First Name *
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-3 py-2 rounded-md border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                         focus:border-[#3E568C]"
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Last Name *
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-3 py-2 rounded-md border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                         focus:border-[#3E568C]"
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="w-full px-3 py-2 rounded-md border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                       focus:border-[#3E568C]"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full px-3 py-2 rounded-md border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                       focus:border-[#3E568C]"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            I am a *
          </label>
          <select
            {...register("userType", { required: "Please select your role" })}
            className="w-full px-3 py-2 rounded-md border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                       focus:border-[#3E568C]"
          >
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="owner">Property Owner</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
          {errors.userType && (
            <p className="text-sm text-red-600 mt-1">
              {errors.userType.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Subject *
          </label>
          <select
            {...register("subject", { required: "Please select a subject" })}
            className="w-full px-3 py-2 rounded-md border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                       focus:border-[#3E568C]"
          >
            <option value="">What can we help you with?</option>
            <option value="general">General Inquiry</option>
            <option value="property">Property Related</option>
            <option value="booking">Booking Support</option>
            <option value="technical">Technical Issue</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.subject && (
            <p className="text-sm text-red-600 mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Message *
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows={5}
            className="w-full px-3 py-2 rounded-md border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-[#3E568C]/40
                       focus:border-[#3E568C]"
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Status */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
            <CheckCircle className="h-5 w-5" />
            Message sent successfully!
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-5 w-5" />
            Failed to send message.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#3E568C] hover:bg-[#354B7A]
                     disabled:bg-slate-400
                     text-white font-medium py-2.5 rounded-md
                     transition flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
