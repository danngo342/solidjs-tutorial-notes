import { JSX, lazy } from 'solid-js'

const Greeting = lazy(async () => {
  // simulate delay
  await new Promise(x => setTimeout(x, 1000))
  return import('./Greeting')
})

export default function LazyComp(): JSX.Element {
  return (
    <>
      <h1>Welcome</h1>
      <Greeting name='Jake' />
    </>
  )
}
