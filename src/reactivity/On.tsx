import { createEffect, createSignal, on } from 'solid-js'

export default function On() {
  const [a, setA] = createSignal(1)
  const [b, setB] = createSignal(1)

  createEffect(
    on(
      a, // the signal to be tracked
      a => {
        console.log(a, b()) // only `a` is tracked
      },
      { defer: true },
    ),
  )

  return (
    <>
      <button onClick={() => setA(x => x + 1)}>Increment A</button>
      <button onClick={() => setB(x => x + 1)}>Increment B</button>
    </>
  )
}
