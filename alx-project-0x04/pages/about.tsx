import Button from "../components/common/Button";
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start text-left p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-6">About Splash App</h1>
      <p className="text-gray-700 mb-4">
        Splash App is a starter Next.js application demonstrating shared layouts,
        routing, responsive design, and TypeScript integration. Use this base to
        build AI-powered features and a clean interface.
      </p>

      <p className="text-gray-600 mb-6">This about page is a simple informational page for your project.</p>

      <div className="w-full flex justify-end">
        <Button action={() => router.push('/')} buttonLabel="Back Home" buttonBackgroundColor="blue" />
      </div>
    </div>
  )
}
