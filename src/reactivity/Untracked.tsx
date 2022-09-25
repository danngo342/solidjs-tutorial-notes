import { createEffect, createSignal, untrack } from 'solid-js'

export default function Untracked() {
  const [a, setA] = createSignal(1)
  const [b, setB] = createSignal(1)

  createEffect(() => {
    console.log(a(), untrack(b))
  })

  return (
    <>
      <button onClick={() => setA(x => x + 1)}>Increment A</button>
      <button onClick={() => setB(x => x + 1)}>Increment B</button>
    </>
  )
}
