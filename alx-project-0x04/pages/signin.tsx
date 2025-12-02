import { useState } from 'react'
import Button from '../components/common/Button'
import { useRouter } from 'next/router'

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }
    setLoading(true)
    // simulate auth
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    // simple demo: accept any credentials
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border rounded-lg p-6 shadow">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <p className="text-sm text-gray-600 mb-4">Sign in to access your dashboard and features.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md" placeholder="••••••••" />
          </div>

          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input id="remember" type="checkbox" className="h-4 w-4" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>

            <a className="text-sm text-blue-600 hover:underline" href="#">Forgot?</a>
          </div>

          <div className="flex gap-3">
            <Button action={handleSubmit as any} buttonLabel={loading ? 'Signing in...' : 'Sign In'} buttonBackgroundColor="blue" type="submit" />
            <Button action={() => router.push('/signup')} buttonLabel="Create Account" buttonBackgroundColor="green" />
          </div>
        </form>
      </div>
    </div>
  )
}
