"use client";
import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiOutlineDocumentText } from "react-icons/hi";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const requestBody = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone") || "Not provided",
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      console.log("Sending to Web3Forms:", requestBody);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);
      
      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        form.reset();
      } else {
        console.error("Web3Forms error:", result);
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <div className="relative">
          <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <div className="relative">
          <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number <span className="text-zinc-500">(optional)</span>
        </label>
        <div className="relative">
          <HiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject *
        </label>
        <div className="relative">
          <HiOutlineDocumentText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition-colors"
            placeholder="What's this about?"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition-colors resize-none"
          placeholder="Tell me more about your project, question, or collaboration opportunity..."
        />
      </div>

      {/* Submit Status */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
          isSubmitting
            ? "bg-zinc-300 dark:bg-zinc-700 cursor-not-allowed"
            : "bg-primary-color hover:bg-secondary-color text-white hover:shadow-lg transform hover:-translate-y-0.5"
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending...
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
} 