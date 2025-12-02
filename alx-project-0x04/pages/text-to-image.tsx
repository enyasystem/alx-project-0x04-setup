import { useState } from 'react'
import Button from "../components/common/Button";
import { useRouter } from "next/router";

export default function TextToImage() {
  const router = useRouter()
  const [prompt, setPrompt] = useState('')
  const [size, setSize] = useState('512')
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setImageUrl(null)
    // Simulate remote image generation
    await new Promise(r => setTimeout(r, 900))
    setImageUrl(`https://via.placeholder.com/${size}`)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start text-left p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-6">Text to Image</h1>
      <p className="text-gray-600 mb-6">
        Convert a text prompt into an image. This starter UI can be connected to a text-to-image API.
      </p>

      <form onSubmit={handleGenerate} className="w-full bg-gray-50 p-6 rounded-lg shadow-sm">
        <label className="block mb-2 font-medium" htmlFor="prompt">Prompt</label>
        <input id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full p-3 border rounded-md mb-4" placeholder="A scenic landscape at sunset..." />

        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="size" className="block mb-1">Size</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)} className="p-2 border rounded-md">
              <option value="256">256x256</option>
              <option value="512">512x512</option>
              <option value="1024">1024x1024</option>
            </select>
          </div>

          <div>
            <Button action={handleGenerate as any} buttonLabel={loading ? 'Generating...' : 'Generate Image'} buttonBackgroundColor="green" type="submit" />
          </div>
        </div>
      </form>

      <section className="w-full mt-6">
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div className="w-full bg-white border rounded-md p-4 min-h-[200px] flex items-center justify-center">
          {loading && <p className="text-gray-500">Generating image...</p>}
          {!loading && imageUrl && <img src={imageUrl} alt={prompt || 'Generated image'} className="max-w-full h-auto rounded-md shadow" />}
          {!loading && !imageUrl && <p className="text-gray-400">No image yet — generate one using the form above.</p>}
        </div>
      </section>

      <div className="w-full mt-6 flex justify-end">
        <Button action={() => router.push('/')} buttonLabel="Back Home" buttonBackgroundColor="blue" />
      </div>
    </div>
  )
}
