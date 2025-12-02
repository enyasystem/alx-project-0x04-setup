import Button from "../components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "../interfaces";

export default function Home() {
  const router = useRouter()

  const routeToNextPage  = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false})
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build AI features with a modern, composable starter
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Splash App provides a clean foundation for Next.js + TypeScript + Tailwind projects — shared layouts, responsive components, and scaffolding for AI integrations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Get Started — Generate Text" buttonBackgroundColor="blue" />
              <Button action={() => routeToNextPage({ pageRoute: '/text-to-image' })} buttonLabel="Try Text → Image" buttonBackgroundColor="green" />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">Shared Layouts</h3>
                <p className="text-sm text-gray-500">Header, Footer, and Layout components for reuse.</p>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">TypeScript Types</h3>
                <p className="text-sm text-gray-500">Centralized interfaces for consistent props and data shapes.</p>
              </div>
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">Responsive by Default</h3>
                <p className="text-sm text-gray-500">Mobile-first layout and accessible components.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <svg className="w-full h-auto" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="0" y="0" width="600" height="400" rx="24" fill="url(#g)" />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-6 p-4 text-white">
                <h4 className="text-lg font-bold">Example Output</h4>
                <p className="mt-2 text-sm opacity-90">Sample text or generated image previews appear here when you integrate your AI backends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why this starter?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Accessible by design</h3>
            <p className="text-sm text-gray-600">Semantic elements, keyboard navigation, and visible focus states ensure inclusive UX.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Composable components</h3>
            <p className="text-sm text-gray-600">Small, reusable components make it easy to scale features and keep code organized.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Ready for AI</h3>
            <p className="text-sm text-gray-600">Pages and form layouts to quickly connect AI APIs like text generation and image models.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Ready to ship your AI feature?</h3>
            <p className="mt-2 text-sm opacity-90">Use the starter components to build, test, and iterate quickly.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Start Building" buttonBackgroundColor="blue" />
          </div>
        </div>
      </section>
    </div>
  )
}
