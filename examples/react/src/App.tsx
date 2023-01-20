import { useEffect, useState } from 'react'
import { romanize } from '@romanize/korean'

function App() {
  const [original, setOriginal] = useState('')
  const [romanized, setRomanized] = useState('')

  useEffect(() => {
    setRomanized(romanize(original))
  })

  return (
    <div className="h-screen w-screen bg-blue-100 flex flex-col items-center">
      <div className="w-2/3">
        <h1 className="font-bold">@romanize</h1>
      </div>
      <div className="w-2/3">
        <textarea title="Original" value={original} onChange={(e) => setOriginal(e.target.value)} className="resize-none w-full rounded-lg" />
      </div>
      <div className="w-2/3">
        <textarea title="Romanized" value={romanized} readOnly className="resize-none w-full rounded-lg" />
      </div>
    </div>
  )
}

export default App
