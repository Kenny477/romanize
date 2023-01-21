import { useEffect, useState } from 'react'
import { romanize, RomanizationSystem } from '@romanize/korean'
import { animated, useSpring } from '@react-spring/web'

function App() {
  const [original, setOriginal] = useState('')
  const [romanized, setRomanized] = useState('')
  const [system, setSystem] = useState<RomanizationSystem>(RomanizationSystem.REVISED)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    setRomanized(romanize(original, { system }))
  }, [original, system])

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  function handleNextSystem() {
    if (system === RomanizationSystem.REVISED) {
      setSystem(RomanizationSystem.MCCUNE)
      api.start({
        from: { x: 0 },
        to: { x: 44 },
      })
    }
    else if (system === RomanizationSystem.MCCUNE) {
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
    <div className="h-screen w-screen bg-blue-100 flex flex-col items-center overflow-hidden space-y-2 py-10">
      <div className="w-2/3 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="font-semibold">@romanize/korean</h1>
          <a href="https://github.com/Kenny477/romanize" target="_blank" rel="noopener">
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              <figcaption className="sr-only">GitHub</figcaption>
            </figure>
          </a>
          <a href="https://www.npmjs.com/package/@romanize/korean" target="_blank" rel="noopener">
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              <figcaption className="sr-only">npm</figcaption>
            </figure>
          </a>
        </div>
        <div className="relative flex flex-col w-max">
          {tooltip && <div className="absolute invisible md:visible md:-translate-x-full md:-left-2 w-max bg-white rounded-lg p-2 shadow-lg">
            <p className="text-sm font-normal">Choose between different romanization systems <br />(Revised Romanization, McCune-Reischauer, Yale) </p>
          </div>}
          <div className="flex flex-row justify-between text-blue-500 font-semibold"
            onMouseOver={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
          >
            <label>RR</label>
            <label>MR</label>
            <label>YL</label>
          </div>
          <div className="rounded-full bg-white h-10 w-32 flex items-center p-1"
            onClick={handleNextSystem}>
            <animated.div className="rounded-full bg-blue-500 h-8 w-8" style={{
              ...springs,
            }} />
          </div>
        </div>
      </div>
      <div className="w-2/3 flex flex-col space-y-2 grow">
        <label className="font-semibold" htmlFor="original">Original</label>
        <textarea id="original" value={original} onChange={(e) => setOriginal(e.target.value)} className="resize-none w-full min-h-max rounded-lg p-1 grow" />
      </div>
      <div className="w-2/3 flex flex-col space-y-2 grow">
        <label className="relative font-semibold flex items-center space-x-2" htmlFor="romanized">Romanized</label>
        <textarea id="romanized" value={romanized} readOnly className="resize-none w-full rounded-lg p-1 grow" />
      </div>
    </div >
  )
}

export default App
