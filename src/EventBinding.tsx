import { createSignal, JSX } from 'solid-js'

const [pos, setPos] = createSignal({ x: 0, y: 0 })

function mouseMove(e: MouseEvent): void {
  setPos({ x: e.clientX, y: e.clientY })
}

export default function EventBinding(): JSX.Element {
  return (
    <div onMouseMove={mouseMove}>
      Mouse position: ({pos().x}, {pos().y})
    </div>
  )
}
