import { useState } from 'react'
import Button from '../components/common/Button'
import { useRouter } from 'next/router'

export default function SignUp() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!name || !email || !password) {
      setError('Please fill out all fields.')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    // simulate account creation — redirect to sign in
    router.push('/signin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border rounded-lg p-6 shadow">
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>
        <p className="text-sm text-gray-600 mb-4">Create a new account to get started.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md" placeholder="At least 8 characters" />
          </div>

          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <Button action={handleSubmit as any} buttonLabel={loading ? 'Creating...' : 'Sign Up'} buttonBackgroundColor="green" type="submit" />
            <Button action={() => router.push('/signin')} buttonLabel="Have an account? Sign In" buttonBackgroundColor="blue" />
          </div>
        </form>
      </div>
    </div>
  )
}
