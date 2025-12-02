import Button from "../components/common/Button";
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Contact() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate send
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start text-left p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-6">Contact Us</h1>
      <p className="text-gray-600 mb-6">Have questions or feedback? Send us a message.</p>

      {!sent && (
        <form onSubmit={handleSubmit} className="w-full bg-gray-50 p-6 rounded-lg shadow-sm">
          <label className="block mb-1" htmlFor="name">Name</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md mb-3" />

          <label className="block mb-1" htmlFor="email">Email</label>
          <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md mb-3" />

          <label className="block mb-1" htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 border rounded-md mb-4" rows={5} />

          <div className="flex gap-3">
            <Button action={handleSubmit as any} buttonLabel="Send Message" buttonBackgroundColor="blue" type="submit" />
            <Button action={() => router.push('/')} buttonLabel="Back Home" buttonBackgroundColor="orange" />
          </div>
        </form>
      )}

      {sent && (
        <div className="w-full bg-green-50 border border-green-200 p-6 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Thanks — message sent!</h2>
          <p className="text-gray-700 mb-4">We'll get back to you shortly.</p>
          <div className="flex justify-end">
            <Button action={() => router.push('/')} buttonLabel="Back Home" buttonBackgroundColor="blue" />
          </div>
        </div>
      )}
    </div>
  )
}
