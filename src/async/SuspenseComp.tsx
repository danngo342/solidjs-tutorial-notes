import { lazy, Suspense } from 'solid-js'

const Greeting = lazy(async () => {
  // simulate delay
  await new Promise(x => setTimeout(x, 1000))
  return import('./Greeting')
})

export default function SuspenseComp() {
  return (
    <>
      <h1>Welcome</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Greeting name='Jake' />
      </Suspense>
    </>
  )
}
