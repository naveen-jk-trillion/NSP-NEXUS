"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [submitStatus, setSubmitStatus] = React.useState<string>("") // Correctly inside component

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // Example: send form data to API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit">Send Message</Button>

      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            Message sent successfully! Your message has been sent successfully! We’ll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">
            Oops! Something went wrong. Please try again later.
          </p>
        </div>
      )}
    </form>
  )
}
