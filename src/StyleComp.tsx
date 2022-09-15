import { createSignal, JSX, onCleanup } from 'solid-js'

const [num, setNum] = createSignal(0)

export default function StyleComp(): JSX.Element {
  const timer = setInterval(() => setNum((num() + 1) % 255), 30)

  onCleanup(() => clearTimeout(timer))

  return (
    <div
      style={{
        color: `rgb(${num()}, 180, ${num()})`,
        'font-weight': 800,
        'font-size': `${num()}px`,
      }}
    >
      Some Text
    </div>
  )
}
