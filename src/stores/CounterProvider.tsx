import {
  children,
  createContext,
  createSignal,
  JSX,
  useContext,
} from 'solid-js'

const [count, setCount] = createSignal(0)
const counter = [
  count,
  {
    increment() {
      setCount(x => x + 1)
    },
    decrement() {
      setCount(x => x - 1)
    },
  },
] as const

const CounterContext = createContext(counter)

export function useCounter() {
  return useContext(CounterContext)
}

export default function CounterProvider(p: {
  count: number
  children: JSX.Element
}): JSX.Element {
  const c = children(() => p.children)
  setCount(p.count)

  return (
    <CounterContext.Provider value={counter}>{c()}</CounterContext.Provider>
  )
}
