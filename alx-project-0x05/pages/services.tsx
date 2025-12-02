import Button from "../components/common/Button";
import { useRouter } from 'next/router'

export default function Services() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start text-left p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-6">Services</h1>
      <p className="text-gray-700 mb-4">Example features you might build on top of this foundation:</p>

      <ul className="list-disc ml-6 text-gray-600 mb-6">
        <li>Text generation and summarization</li>
        <li>Text-to-image generation and galleries</li>
        <li>Interactive AI assistants and tools</li>
      </ul>

      <div className="w-full flex justify-end">
        <Button action={() => router.push('/')} buttonLabel="Back Home" buttonBackgroundColor="orange" />
      </div>
    </div>
  )
}
