import CounterProvider, { useCounter } from './CounterProvider'

function Consumer() {
  const [count, { increment, decrement }] = useCounter()

  return (
    <>
      <h1>Welcome to the counter</h1>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default function ContextClient() {
  return (
    <CounterProvider count={0}>
      <Consumer />
    </CounterProvider>
  )
}
