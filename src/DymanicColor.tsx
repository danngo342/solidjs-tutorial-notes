import { createSignal, JSX, For } from 'solid-js'
import { Dynamic } from 'solid-js/web'

const Red = (): JSX.Element => <strong style='color: red'>Red</strong>
const Green = (): JSX.Element => <strong style='color: green'>Green </strong>
const Blue = (): JSX.Element => <strong style='color: blue'>Red </strong>

const options = { red: Red, green: Green, blue: Blue } as const

const [color, setColor] = createSignal<keyof typeof options>('red')

export default function DynamicColor(): JSX.Element {
  return (
    <>
      <select
        value={color()}
        onInput={(e): void => {
          if (Object.keys(options).includes(e.currentTarget.value)) {
            setColor(e.currentTarget.value as keyof typeof options)
          }
        }}
      >
        <For each={Object.keys(options)}>
          {(x): JSX.Element => <option value={x}>{x}</option>}
        </For>
      </select>
      <Dynamic component={options[color()]} />
    </>
  )
}
