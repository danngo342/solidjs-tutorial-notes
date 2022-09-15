import { createSignal, JSX } from 'solid-js'
import css from './ClassListBinding.module.css'

const [current, setCurrent] = createSignal<'foo' | 'bar' | 'baz'>('foo')

const Button = (p: { value: ReturnType<typeof current> }): JSX.Element => (
  <button
    classList={{ [css['selected'] || '']: current() === p.value }}
    onClick={() => setCurrent(p.value)}
  >
    {p.value}
  </button>
)

export default function ClassListBinding(): JSX.Element {
  return (
    <>
      <Button value='foo' />
      <Button value='bar' />
      <Button value='baz' />
    </>
  )
}
