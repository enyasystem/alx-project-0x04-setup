import { useState } from 'react'
import Button from "../components/common/Button";

export default function CounterApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-gray-600 mb-6">A simple client-side counter to demonstrate interactivity.</p>

      <div className="flex items-center gap-4">
        <Button action={() => setCount(c => c - 1)} buttonLabel="-" buttonBackgroundColor="orange" buttonSize="" />
        <div className="text-2xl font-mono px-6">{count}</div>
        <Button action={() => setCount(c => c + 1)} buttonLabel="+" buttonBackgroundColor="green" buttonSize="" />
      </div>
    </div>
  )
}
