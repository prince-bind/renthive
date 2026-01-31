"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
// import emailjs from "@emailjs/browser"
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
      // await emailjs.send(
      //   "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      //   "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      //   {
      //     from_name: `${data.firstName} ${data.lastName}`,
      //     from_email: data.email,
      //     phone: data.phone || "Not provided",
      //     user_type: data.userType,
      //     subject: data.subject,
      //     message: data.message,
      //   },
      //   "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      // )

      console.log(data)

      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name *
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name *
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
            I am a *
          </label>
          <select
            {...register("userType", { required: "Please select your role" })}
            id="userType"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select your role</option>
            <option value="student">Student looking for accommodation</option>
            <option value="owner">Property owner</option>
            <option value="parent">Parent of a student</option>
            <option value="other">Other</option>
          </select>
          {errors.userType && <p className="text-sm text-red-600">{errors.userType.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject *
          </label>
          <select
            {...register("subject", { required: "Please select a subject" })}
            id="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">What can we help you with?</option>
            <option value="general">General Inquiry</option>
            <option value="property">Property Related</option>
            <option value="booking">Booking Support</option>
            <option value="technical">Technical Issue</option>
            <option value="partnership">Partnership</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.subject && <p className="text-sm text-red-600">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            rows={5}
            placeholder="Please describe your inquiry in detail..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
          />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>

        {submitStatus === "success" && (
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
            <CheckCircle className="h-5 w-5" />
            <span>Message sent successfully! We&apos;ll get back to you within 24 hours.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-5 w-5" />
            <span>Failed to send message. Please try again or contact us directly.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Send className="h-4 w-4" />
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </div>
  )
}
export default ContactForm