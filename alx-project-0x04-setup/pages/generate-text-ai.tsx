import { useState } from 'react'
import Button from "../components/common/Button";
import { useRouter } from "next/router";

export default function GenerateTextAI() {
  const router = useRouter()
  const [prompt, setPrompt] = useState('')
  const [model, setModel] = useState('gpt-3.5')
  const [temperature, setTemperature] = useState(0.7)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    // Simulate API call
    await new Promise(r => setTimeout(r, 700))
    setResult(
      `Model: ${model}\nTemperature: ${temperature}\n\nGenerated text for prompt:\n${prompt || 'No prompt provided.'}\n\n(Example output — replace with real API integration)`
    )
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start text-left p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-6">Generate Text AI</h1>
      <p className="text-gray-600 mb-6">
        Use this form to craft prompts and generate text. This is a starter layout — wire it to your AI backend.
      </p>

      <form onSubmit={handleSubmit} className="w-full bg-gray-50 p-6 rounded-lg shadow-sm">
        <label className="block mb-2 font-medium" htmlFor="prompt">Prompt</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 border rounded-md mb-4 resize-vertical"
          rows={6}
          placeholder="Write a prompt for the model..."
        />

        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="model" className="block mb-1">Model</label>
            <select id="model" value={model} onChange={(e) => setModel(e.target.value)} className="w-full p-2 border rounded-md">
              <option value="gpt-3.5">gpt-3.5</option>
              <option value="gpt-4">gpt-4</option>
            </select>
          </div>

          <div className="mt-4 md:mt-0 md:w-48">
            <label htmlFor="temperature" className="block mb-1">Temperature ({temperature})</label>
            <input id="temperature" type="range" min={0} max={1} step={0.1} value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} className="w-full" />
          </div>
        </div>

        <div className="flex gap-3">
          <Button action={handleSubmit as any} buttonLabel={loading ? 'Generating...' : 'Generate'} buttonBackgroundColor="blue" type="submit" />
          <Button action={() => router.push('/')} buttonLabel="Back Home" buttonBackgroundColor="orange" />
        </div>
      </form>

      <section className="w-full mt-6">
        <h2 className="text-xl font-semibold mb-2">Result</h2>
        <div className="w-full bg-white border rounded-md p-4 min-h-[120px]">
          {loading && <p className="text-gray-500">Generating...</p>}
          {!loading && result && <pre className="whitespace-pre-wrap text-sm">{result}</pre>}
          {!loading && !result && <p className="text-gray-400">No output yet — submit the form to generate.</p>}
        </div>
      </section>
    </div>
  )
}
