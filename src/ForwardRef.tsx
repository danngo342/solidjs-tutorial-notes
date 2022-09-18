import { onCleanup } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import './canvas.css'

// TODO: confirm if this ref fn is run only once, similar to an onMount call
const animateCanvas = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext('2d')
  let frame = requestAnimationFrame(loop)

  function loop(t: DOMHighResTimeStamp): void {
    if (!ctx) return // would this break things? I'm not sure how solidjs's state machine runs, internally

    frame = requestAnimationFrame(loop)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    for (let p = 0; p < imageData.data.length; p += 4) {
      const i = p / 4
      const x = i % canvas.width
      const y = (i / canvas.height) >>> 0

      const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000)
      const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000)
      const b = 128

      imageData.data[p + 0] = r
      imageData.data[p + 1] = g
      imageData.data[p + 2] = b
      imageData.data[p + 3] = 255
    }

    ctx.putImageData(imageData, 0, 0)
  }

  onCleanup(() => cancelAnimationFrame(frame))
}

function Canvas(p: { ref: (el: HTMLCanvasElement) => void }): JSX.Element {
  return <canvas ref={p.ref} width='256' height='256' />
}

export default function ForwardRef(): JSX.Element {
  return (
    <>
      <p>Forwarded ref</p>
      <Canvas ref={animateCanvas} />
    </>
  )
}
