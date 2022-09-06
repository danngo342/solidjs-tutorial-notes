import { Component, ErrorBoundary, JSX } from 'solid-js'

const Broken: Component = () => {
  throw new Error('Oh no')
}

export default function ControFlowError(): JSX.Element {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={err => (err as Error).toString()}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  )
}
