import { createSignal } from 'solid-js'
import 'virtual:uno.css'

function App() {
  const [ready, setReady] = createSignal(false)
  const [count, setCount] = createSignal(0)
	setInterval(()=> ready() && setCount(count()+1), 1000)

  return (
    <main class="h-[75vh]">
      <h1>Levels Plumbing State</h1>
      <div class="p-[2em]">
        <button onClick={() => setReady((x) => !x)}>
          ready is {ready()?'True':'False'}
        </button>
        <p>
          count is {count()}
        </p>
      </div>
    </main>
  )
}

export default App
