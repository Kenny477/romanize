import { useEffect, useState } from 'react'
import { romanize, RomanizationSystem } from '@romanize/korean'
import { animated, useSpring } from '@react-spring/web'

function App() {
  const [original, setOriginal] = useState('')
  const [romanized, setRomanized] = useState('')
  const [system, setSystem] = useState<RomanizationSystem>(RomanizationSystem.REVISED)

  useEffect(() => {
    setRomanized(romanize(original, { system }))
  }, [original, system])

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  function handleNextSystem() {
    if(system === RomanizationSystem.REVISED) {
      setSystem(RomanizationSystem.MCCUNE)
      api.start({
        from: { x: 0 },
        to: { x: 44 },
      })
    }
    else if(system === RomanizationSystem.MCCUNE) {
      setSystem(RomanizationSystem.YALE)
      api.start({
        from: { x: 44 },
        to: { x: 88 },
      })
    }
    else {
      setSystem(RomanizationSystem.REVISED)
      api.start({
        from: { x: 88 },
        to: { x: 0 },
      })
    }
  }

  return (
    <div className="h-screen w-screen bg-blue-100 flex flex-col items-center overflow-hidden">
      <div className="w-2/3 py-10 flex flex-row justify-between">
        <h1 className="font-bold">@romanize/korean</h1>
        <div className="flex flex-col w-max">
          <div className="flex flex-row justify-between">
            <label>RR</label>
            <label>MR</label>
            <label>YL</label>
          </div>
          <div className="rounded-full bg-white h-10 w-32 flex items-center p-1"
            onClick={handleNextSystem}>
            <animated.div className="rounded-full bg-blue-500 h-8 w-8" style={{
              ...springs,
            }}/>
          </div>
        </div>
      </div>
      <div className="w-2/3">
        <textarea title="Original" value={original} onChange={(e) => setOriginal(e.target.value)} className="resize-none w-full rounded-lg p-1" />
      </div>
      <div className="w-2/3">
        <textarea title="Romanized" value={romanized} readOnly className="resize-none w-full rounded-lg p-1" />
      </div>
    </div>
  )
}

export default App
