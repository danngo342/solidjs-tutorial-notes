import { createSignal, JSX, onCleanup } from 'solid-js'

const [count, setCount] = createSignal(0)

export default function Cleanup(): JSX.Element {
  const timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))

  return <div>Count: {count()}</div>
}
